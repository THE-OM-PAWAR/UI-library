"use client";
import * as PopoverPrimitive from "@radix-ui/react-popover";
import { cn } from "@repo/utils";
import * as React from "react";

// ─── Inline SVG icons
function ChevronDownIcon({ className }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            className={className}
        >
            <path d="m6 9 6 6 6-6" />
        </svg>
    );
}

function CheckIcon({ className }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            className={className}
        >
            <path d="M20 6 9 17l-5-5" />
        </svg>
    );
}

function SearchIcon({ className }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            className={className}
        >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
        </svg>
    );
}

function XIcon({ className }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            className={className}
        >
            <path d="M18 6 6 18M6 6l12 12" />
        </svg>
    );
}

// ─── ComboboxContext
const ComboboxContext = React.createContext(null);

function useCombobox() {
    const ctx = React.useContext(ComboboxContext);
    if (!ctx)
        throw new Error(
            "Combobox compound components must be used inside <Combobox>"
        );
    return ctx;
}

// ─── Combobox (root)

function Combobox({
    value,
    onValueChange,
    defaultValue = "",
    disabled = false,
    children,
}) {
    const isControlled = value !== undefined;
    const [internalValue, setInternalValue] = React.useState(defaultValue);
    const [open, setOpen] = React.useState(false);
    const [search, setSearch] = React.useState("");
    const searchRef = React.useRef(null);

    const selectedValue = isControlled ? value : internalValue;

    const handleSelect = React.useCallback(
        (val) => {
            const next = val === selectedValue ? "" : val;
            if (!isControlled) setInternalValue(next);
            onValueChange?.(next);
            setOpen(false);
            setSearch("");
        },
        [isControlled, onValueChange, selectedValue]
    );

    const handleOpenChange = React.useCallback(
        (next) => {
            if (disabled) return;
            setOpen(next);
            if (!next) setSearch("");
        },
        [disabled]
    );

    // Focus search input when popover opens
    React.useEffect(() => {
        if (open) {
            const id = setTimeout(() => searchRef.current?.focus(), 0);
            return () => clearTimeout(id);
        }
    }, [open]);

    const ctx = React.useMemo(
        () => ({
            open,
            setOpen: handleOpenChange,
            selectedValue,
            handleSelect,
            search,
            setSearch,
            disabled,
            searchRef,
        }),
        [open, handleOpenChange, selectedValue, handleSelect, search, disabled]
    );

    return (
        <ComboboxContext.Provider value={ctx}>
            <PopoverPrimitive.Root open={open} onOpenChange={handleOpenChange}>
                <div data-slot="combobox" className="relative w-full">
                    {children}
                </div>
            </PopoverPrimitive.Root>
        </ComboboxContext.Provider>
    );
}

Combobox.displayName = "Combobox";

// ─── ComboboxTrigger

const ComboboxTrigger = React.forwardRef(
    (
        { className, children, placeholder = "Select option…", ...props },
        ref
    ) => {
        const { open, selectedValue, disabled } = useCombobox();

        return (
            <PopoverPrimitive.Trigger asChild>
                <button
                    ref={ref}
                    type="button"
                    role="combobox"
                    aria-expanded={open}
                    aria-haspopup="listbox"
                    disabled={disabled}
                    data-slot="combobox-trigger"
                    data-state={open ? "open" : "closed"}
                    className={cn(
                        "inline-flex h-9 w-full items-center justify-between gap-2 rounded-lg border border-input bg-transparent px-3 py-2 text-sm transition-colors outline-none",
                        "hover:bg-accent hover:text-accent-foreground",
                        "focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50",
                        "disabled:pointer-events-none disabled:opacity-50",
                        "data-[state=open]:border-ring data-[state=open]:ring-3 data-[state=open]:ring-ring/50",
                        className
                    )}
                    {...props}
                >
                    <span
                        className={cn(
                            "truncate",
                            !selectedValue && "text-muted-foreground"
                        )}
                    >
                        {children ?? (selectedValue || placeholder)}
                    </span>
                    <ChevronDownIcon
                        className={cn(
                            "size-4 shrink-0 text-muted-foreground transition-transform duration-200",
                            open && "rotate-180"
                        )}
                    />
                </button>
            </PopoverPrimitive.Trigger>
        );
    }
);

ComboboxTrigger.displayName = "ComboboxTrigger";

// ─── ComboboxContent

const ComboboxContent = React.forwardRef(
    (
        { className, align = "start", sideOffset = 4, children, ...props },
        ref
    ) => (
        <PopoverPrimitive.Portal>
            <PopoverPrimitive.Content
                ref={ref}
                align={align}
                sideOffset={sideOffset}
                data-slot="combobox-content"
                className={cn(
                    "z-50 w-[var(--radix-popover-trigger-width)] min-w-[8rem] overflow-hidden rounded-lg border border-border bg-popover text-popover-foreground shadow-md outline-none",
                    "data-[state=open]:animate-in data-[state=closed]:animate-out",
                    "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
                    "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
                    "data-[side=bottom]:slide-in-from-top-2 data-[side=top]:slide-in-from-bottom-2",
                    "data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2",
                    className
                )}
                {...props}
            >
                {children}
            </PopoverPrimitive.Content>
        </PopoverPrimitive.Portal>
    )
);

ComboboxContent.displayName = "ComboboxContent";

// ─── ComboboxSearch
const ComboboxSearch = React.forwardRef(
    ({ className, placeholder = "Search…", ...props }, ref) => {
        const { search, setSearch, searchRef } = useCombobox();

        const combined = ref
            ? (node) => {
                  searchRef.current = node;
                  if (typeof ref === "function") ref(node);
                  else ref.current = node;
              }
            : searchRef;

        return (
            <div className="flex items-center gap-2 border-b border-border px-3 py-2">
                <SearchIcon className="size-4 shrink-0 text-muted-foreground" />
                <input
                    ref={combined}
                    type="text"
                    role="searchbox"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder={placeholder}
                    data-slot="combobox-search"
                    className={cn(
                        "flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground",
                        className
                    )}
                    {...props}
                />
                {search && (
                    <button
                        type="button"
                        onClick={() => setSearch("")}
                        className="rounded text-muted-foreground transition-colors hover:text-foreground"
                        aria-label="Clear search"
                    >
                        <XIcon />
                    </button>
                )}
            </div>
        );
    }
);

ComboboxSearch.displayName = "ComboboxSearch";

// ─── ComboboxList
const ComboboxList = React.forwardRef(
    ({ className, children, ...props }, ref) => (
        <ul
            ref={ref}
            role="listbox"
            data-slot="combobox-list"
            className={cn("max-h-60 overflow-y-auto p-1", className)}
            {...props}
        >
            {children}
        </ul>
    )
);

ComboboxList.displayName = "ComboboxList";

// ─── ComboboxItem
const ComboboxItem = React.forwardRef(
    ({ className, value, children, disabled = false, ...props }, ref) => {
        const { selectedValue, handleSelect, search } = useCombobox();
        const isSelected = selectedValue === value;

        // Filter by search
        const label = typeof children === "string" ? children : value;
        if (search && !label.toLowerCase().includes(search.toLowerCase()))
            return null;

        return (
            <li
                ref={ref}
                role="option"
                aria-selected={isSelected}
                aria-disabled={disabled}
                data-slot="combobox-item"
                data-selected={isSelected || undefined}
                data-disabled={disabled || undefined}
                onClick={() => !disabled && handleSelect(value)}
                onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        !disabled && handleSelect(value);
                    }
                }}
                tabIndex={disabled ? -1 : 0}
                className={cn(
                    "relative flex cursor-pointer select-none items-center justify-between rounded-md px-2 py-1.5 text-sm outline-none transition-colors",
                    "hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                    isSelected && "bg-accent/50 font-medium text-foreground",
                    disabled && "pointer-events-none opacity-50",
                    className
                )}
                {...props}
            >
                <span className="truncate">{children ?? value}</span>
                {isSelected && (
                    <CheckIcon className="size-4 shrink-0 text-primary" />
                )}
            </li>
        );
    }
);

ComboboxItem.displayName = "ComboboxItem";

function ComboboxEmpty({ children = "No results found." }) {
    return (
        <div
            data-slot="combobox-empty"
            className="py-6 text-center text-sm text-muted-foreground"
        >
            {children}
        </div>
    );
}

ComboboxEmpty.displayName = "ComboboxEmpty";

const ComboboxGroup = React.forwardRef(
    ({ className, children, ...props }, ref) => (
        <div
            ref={ref}
            role="group"
            data-slot="combobox-group"
            className={cn("p-1", className)}
            {...props}
        >
            {children}
        </div>
    )
);

ComboboxGroup.displayName = "ComboboxGroup";

const ComboboxLabel = React.forwardRef(
    ({ className, children, ...props }, ref) => (
        <div
            ref={ref}
            data-slot="combobox-label"
            className={cn(
                "px-2 py-1.5 text-xs font-medium text-muted-foreground",
                className
            )}
            {...props}
        >
            {children}
        </div>
    )
);

ComboboxLabel.displayName = "ComboboxLabel";

const ComboboxSeparator = React.forwardRef(({ className, ...props }, ref) => (
    <div
        ref={ref}
        data-slot="combobox-separator"
        className={cn("-mx-1 my-1 h-px bg-border", className)}
        {...props}
    />
));

ComboboxSeparator.displayName = "ComboboxSeparator";

export {
    Combobox,
    ComboboxContent,
    ComboboxEmpty,
    ComboboxGroup,
    ComboboxItem,
    ComboboxLabel,
    ComboboxList,
    ComboboxSearch,
    ComboboxSeparator,
    ComboboxTrigger,
};
