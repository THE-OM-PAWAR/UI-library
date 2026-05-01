"use client";
import * as PopoverPrimitive from "@radix-ui/react-popover";
import { cn } from "@repo/utils";
import { Heading } from "./headings";

function Popover({ ...props }) {
    return <PopoverPrimitive.Root data-slot="popover" {...props} />;
}

function PopoverTrigger({ ...props }) {
    return <PopoverPrimitive.Trigger data-slot="popover-trigger" {...props} />;
}

function PopoverContent({
    className,
    align = "center",
    sideOffset = 4,
    ...props
}) {
    return (
        <PopoverPrimitive.Portal>
            <PopoverPrimitive.Content
                data-slot="popover-content"
                align={align}
                sideOffset={sideOffset}
                className={cn(
                    "z-50 flex w-96 origin-(--radix-popover-content-transform-origin) flex-col gap-4 rounded-xl bg-popover p-4 text-popover-foreground shadow-xl ring-1 ring-foreground/10 outline-hidden duration-300 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95",
                    className
                )}
                {...props}
            />
        </PopoverPrimitive.Portal>
    );
}

function PopoverAnchor({ ...props }) {
    return <PopoverPrimitive.Anchor data-slot="popover-anchor" {...props} />;
}

function PopoverHeader({ className, ...props }) {
    return (
        <div
            data-slot="popover-header"
            className={cn("flex flex-col", className)}
            {...props}
        />
    );
}

function PopoverTitle({ className, ...props }) {
    return (
        <Heading
            size="h6"
            data-slot="popover-title"
            className={cn("font-medium", className)}
            {...props}
        />
    );
}

function PopoverDescription({ className, ...props }) {
    return (
        <Heading
            size="p"
            data-slot="popover-description"
            className={cn(className)}
            {...props}
        />
    );
}

export {
    Popover,
    PopoverAnchor,
    PopoverContent,
    PopoverDescription,
    PopoverHeader,
    PopoverTitle,
    PopoverTrigger,
};
