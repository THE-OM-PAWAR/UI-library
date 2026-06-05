"use client";

import * as PopoverPrimitive from "@radix-ui/react-popover";
import { cn } from "@repo/utils";
import { CheckIcon, ChevronDownIcon, XIcon } from "lucide-react";
import * as React from "react";
import {
    InputGroup,
    InputGroupAddon,
    InputGroupButton,
    InputGroupInput,
} from "./inputgroup.jsx";

const ComboboxContext = React.createContext(null);

function useCombobox() {
    const ctx = React.useContext(ComboboxContext);
    if (!ctx) {
        throw new Error(
            "Combobox compound components must be used inside <Combobox>."
        );
    }
    return ctx;
}

function getTextContent(node) {
    if (node == null || typeof node === "boolean") return "";
    if (typeof node === "string" || typeof node === "number")
        return String(node);
    if (Array.isArray(node)) return node.map(getTextContent).join(" ");
    if (React.isValidElement(node)) return getTextContent(node.props.children);
    return "";
}

function matchesQuery(value, label, query) {
    const normalizedQuery = query.trim().toLowerCase();
    if (!normalizedQuery) return true;
    const haystack = `${value ?? ""} ${label ?? ""}`.toLowerCase();
    return haystack.includes(normalizedQuery);
}

function filterComboboxNodes(children, query) {
    let visibleCount = 0;

    const nodes = React.Children.toArray(children).flatMap((child) => {
        if (!React.isValidElement(child)) return [child];

        if (child.type === ComboboxEmpty) return [];

        if (child.type === ComboboxSeparator) {
            return query ? [] : [child];
        }

        if (child.type === ComboboxItem) {
            const label = getTextContent(child.props.children);
            const isVisible = matchesQuery(child.props.value, label, query);
            if (isVisible) visibleCount += 1;
            return isVisible ? [child] : [];
        }

        if (child.type === ComboboxGroup || child.type === ComboboxCollection) {
            const result = filterComboboxNodes(child.props.children, query);
            visibleCount += result.visibleCount;
            if (result.visibleCount === 0) return [];
            return [React.cloneElement(child, undefined, result.nodes)];
        }

        return [child];
    });

    return { nodes, visibleCount };
}

const Combobox = React.forwardRef(
    (
        {
            value,
            defaultValue = "",
            onValueChange,
            open: openProp,
            defaultOpen = false,
            onOpenChange,
            disabled = false,
            children,
            ...props
        },
        ref
    ) => {
        const isValueControlled = value !== undefined;
        const isOpenControlled = openProp !== undefined;
        const [internalValue, setInternalValue] = React.useState(defaultValue);
        const [selectedLabel, setSelectedLabel] = React.useState("");
        const [inputValue, setInputValue] = React.useState("");
        const [internalOpen, setInternalOpen] = React.useState(defaultOpen);
        const inputRef = React.useRef(null);

        const selectedValue = isValueControlled ? value : internalValue;
        const open = isOpenControlled ? openProp : internalOpen;

        const setOpen = React.useCallback(
            (next) => {
                if (disabled) return;
                const resolved = typeof next === "function" ? next(open) : next;
                if (!isOpenControlled) {
                    setInternalOpen(resolved);
                }
                onOpenChange?.(resolved);
            },
            [disabled, isOpenControlled, onOpenChange, open]
        );

        const handleSelect = React.useCallback(
            (nextValue, nextLabel) => {
                if (!isValueControlled) {
                    setInternalValue(nextValue);
                }
                onValueChange?.(nextValue);
                setSelectedLabel(nextLabel ?? nextValue);
                setInputValue(nextLabel ?? nextValue);
                setOpen(false);
            },
            [isValueControlled, onValueChange, setOpen]
        );

        const handleClear = React.useCallback(() => {
            if (!isValueControlled) {
                setInternalValue("");
            }
            onValueChange?.("");
            setSelectedLabel("");
            setInputValue("");
            inputRef.current?.focus();
        }, [isValueControlled, onValueChange]);

        const setSearch = React.useCallback(
            (next) => {
                setInputValue(next);
                setOpen(true);
            },
            [setOpen]
        );

        const anchorRef = React.useRef(null);

        const ctx = React.useMemo(
            () => ({
                open,
                setOpen,
                disabled,
                inputValue,
                setSearch,
                selectedValue,
                selectedLabel,
                handleSelect,
                handleClear,
                anchorRef,
                inputRef,
            }),
            [
                open,
                setOpen,
                disabled,
                inputValue,
                setSearch,
                selectedValue,
                selectedLabel,
                handleSelect,
                handleClear,
            ]
        );

        return (
            <ComboboxContext.Provider value={ctx}>
                <PopoverPrimitive.Root open={open} onOpenChange={setOpen}>
                    <div
                        ref={ref}
                        data-slot="combobox"
                        className="relative w-full"
                        {...props}
                    >
                        {children}
                    </div>
                </PopoverPrimitive.Root>
            </ComboboxContext.Provider>
        );
    }
);

Combobox.displayName = "Combobox";

function ComboboxValue({ className, placeholder = "", children, ...props }) {
    const { selectedLabel, selectedValue } = useCombobox();
    const content =
        typeof children === "function"
            ? children(selectedValue)
            : (children ?? selectedLabel ?? placeholder);

    return (
        <span
            data-slot="combobox-value"
            className={cn("truncate", className)}
            {...props}
        >
            {content}
        </span>
    );
}

function ComboboxTrigger({ className, children, ...props }) {
    const { open } = useCombobox();

    return (
        <button
            type="button"
            data-slot="combobox-trigger"
            aria-expanded={open}
            className={cn("[&_svg:not([class*='size-'])]:size-4", className)}
            {...props}
        >
            {children}
            <ChevronDownIcon className="pointer-events-none size-4 text-muted-foreground" />
        </button>
    );
}

function ComboboxClear({ className, onClick, onMouseDown, ...props }) {
    const { handleClear } = useCombobox();

    return (
        <button
            type="button"
            data-slot="combobox-clear"
            className={cn(className)}
            onMouseDown={(event) => {
                event.preventDefault();
                onMouseDown?.(event);
            }}
            onClick={(event) => {
                handleClear();
                onClick?.(event);
            }}
            {...props}
        >
            <XIcon className="pointer-events-none" />
        </button>
    );
}

function ComboboxInput({
    className,
    children,
    disabled = false,
    showTrigger = true,
    showClear = false,
    ...props
}) {
    const { inputValue, setSearch, setOpen, anchorRef, inputRef } =
        useCombobox();
    const { onChange, onFocus, onClick, ...restProps } = props;

    return (
        <PopoverPrimitive.Anchor asChild>
            <InputGroup ref={anchorRef} className={cn("w-full", className)}>
                <InputGroupInput
                    ref={inputRef}
                    value={inputValue}
                    disabled={disabled}
                    autoComplete="off"
                    spellCheck={false}
                    onFocus={(event) => {
                        setOpen(true);
                        onFocus?.(event);
                    }}
                    onClick={(event) => {
                        setOpen(true);
                        onClick?.(event);
                    }}
                    onChange={(event) => {
                        setSearch(event.target.value);
                        onChange?.(event);
                    }}
                    {...restProps}
                />
                <InputGroupAddon align="inline-end">
                    {showTrigger && (
                        <InputGroupButton
                            size="icon-xs"
                            variant="ghost"
                            render={<ComboboxTrigger />}
                            data-slot="input-group-button"
                            className="data-pressed:bg-transparent"
                            disabled={disabled}
                            onMouseDown={(event) => {
                                event.preventDefault();
                            }}
                            onClick={(event) => {
                                setOpen((current) => !current);
                                inputRef.current?.focus();
                                props.onClick?.(event);
                            }}
                        />
                    )}
                    {showClear && <ComboboxClear disabled={disabled} />}
                </InputGroupAddon>
                {children}
            </InputGroup>
        </PopoverPrimitive.Anchor>
    );
}

function ComboboxContent({
    className,
    side = "bottom",
    sideOffset = 6,
    align = "start",
    alignOffset = 0,
    onOpenAutoFocus,
    ...props
}) {
    return (
        <PopoverPrimitive.Portal>
            <PopoverPrimitive.Content
                data-slot="combobox-content"
                side={side}
                sideOffset={sideOffset}
                align={align}
                alignOffset={alignOffset}
                onOpenAutoFocus={(event) => {
                    event.preventDefault();
                    onOpenAutoFocus?.(event);
                }}
                className={cn(
                    "z-50 w-[var(--radix-popover-trigger-width)] overflow-hidden rounded-lg border border-border bg-popover text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=top]:slide-in-from-bottom-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2",
                    className
                )}
                {...props}
            />
        </PopoverPrimitive.Portal>
    );
}

function ComboboxList({ className, children, ...props }) {
    const { inputValue } = useCombobox();
    const { nodes, visibleCount } = filterComboboxNodes(children, inputValue);
    const emptyChild = React.Children.toArray(children).find(
        (child) => React.isValidElement(child) && child.type === ComboboxEmpty
    );

    return (
        <div
            data-slot="combobox-list"
            className={cn(
                "no-scrollbar max-h-[min(calc(--spacing(72)---spacing(9)),calc(var(--radix-popover-content-available-height)---spacing(9)))] scroll-py-1 overflow-y-auto overscroll-contain p-1",
                className
            )}
            {...props}
        >
            {visibleCount === 0 ? (emptyChild ?? <ComboboxEmpty />) : nodes}
        </div>
    );
}

function ComboboxItem({ className, children, value, ...props }) {
    const { inputValue, handleSelect, selectedValue } = useCombobox();
    const label = getTextContent(children);
    const isVisible = matchesQuery(value, label, inputValue);
    const isSelected = selectedValue === value;

    if (!isVisible) return null;

    return (
        <button
            type="button"
            data-slot="combobox-item"
            data-selected={isSelected || undefined}
            className={cn(
                "relative flex w-full cursor-default items-center gap-2 rounded-md py-1 pr-8 pl-1.5 text-sm outline-hidden select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
                isSelected && "bg-accent/50 font-medium text-foreground",
                className
            )}
            onClick={() => handleSelect(value, label)}
            onMouseDown={(event) => event.preventDefault()}
            {...props}
        >
            {children}
            {isSelected && (
                <span className="pointer-events-none absolute right-2 flex size-4 items-center justify-center">
                    <CheckIcon className="pointer-events-none" />
                </span>
            )}
        </button>
    );
}

function ComboboxGroup({ className, ...props }) {
    return (
        <div
            data-slot="combobox-group"
            className={cn("p-1", className)}
            {...props}
        />
    );
}

function ComboboxLabel({ className, ...props }) {
    return (
        <div
            data-slot="combobox-label"
            className={cn(
                "px-2 py-1.5 text-xs text-muted-foreground",
                className
            )}
            {...props}
        />
    );
}

function ComboboxCollection({ ...props }) {
    return <div data-slot="combobox-collection" {...props} />;
}

function ComboboxEmpty({ className, children = "Nothing found", ...props }) {
    return (
        <div
            data-slot="combobox-empty"
            className={cn(
                "w-full justify-center py-2 text-center text-sm text-muted-foreground",
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
}

function ComboboxSeparator({ className, ...props }) {
    return (
        <div
            data-slot="combobox-separator"
            className={cn("-mx-1 my-1 h-px bg-border", className)}
            {...props}
        />
    );
}

function ComboboxChips({ className, ...props }) {
    return (
        <div
            data-slot="combobox-chips"
            className={cn(
                "flex min-h-8 flex-wrap items-center gap-1 rounded-lg border border-input bg-transparent bg-clip-padding px-2.5 py-1 text-sm transition-colors focus-within:border-ring focus-within:ring-3 focus-within:ring-ring/50 has-aria-invalid:border-destructive has-aria-invalid:ring-3 has-aria-invalid:ring-destructive/20 has-data-[slot=combobox-chip]:px-1 dark:bg-input/30 dark:has-aria-invalid:border-destructive/50 dark:has-aria-invalid:ring-destructive/40",
                className
            )}
            {...props}
        />
    );
}

function ComboboxChip({ className, children, showRemove = true, ...props }) {
    return (
        <div
            data-slot="combobox-chip"
            className={cn(
                "flex h-[calc(--spacing(5.25))] w-fit items-center justify-center gap-1 rounded-sm bg-muted px-1.5 text-xs font-medium whitespace-nowrap text-foreground has-disabled:pointer-events-none has-disabled:cursor-not-allowed has-disabled:opacity-50 has-data-[slot=combobox-chip-remove]:pr-0",
                className
            )}
            {...props}
        >
            {children}
            {showRemove && (
                <button
                    type="button"
                    data-slot="combobox-chip-remove"
                    className="-ml-1 opacity-50 hover:opacity-100"
                >
                    <XIcon className="pointer-events-none" />
                </button>
            )}
        </div>
    );
}

function ComboboxChipsInput({ className, ...props }) {
    return (
        <input
            data-slot="combobox-chip-input"
            className={cn("min-w-16 flex-1 outline-none", className)}
            {...props}
        />
    );
}

function useComboboxAnchor() {
    return React.useRef(null);
}

export {
    Combobox,
    ComboboxChip,
    ComboboxChips,
    ComboboxChipsInput,
    ComboboxCollection,
    ComboboxContent,
    ComboboxEmpty,
    ComboboxGroup,
    ComboboxInput,
    ComboboxItem,
    ComboboxLabel,
    ComboboxList,
    ComboboxSeparator,
    ComboboxTrigger,
    ComboboxValue,
    useComboboxAnchor,
};
