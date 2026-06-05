"use client";

import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { cn } from "@repo/utils";
import { cva } from "class-variance-authority";
import React from "react";

const TooltipProvider = TooltipPrimitive.Provider;
const Tooltip = TooltipPrimitive.Root;
const TooltipTrigger = TooltipPrimitive.Trigger;

const tooltipVariants = cva(
    "z-50 overflow-hidden rounded-md border shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
    {
        variants: {
            variant: {
                default: "border-border bg-popover text-popover-foreground",
                inverted: "border-foreground bg-foreground text-background",
                destructive:
                    "border-destructive bg-destructive text-destructive-foreground",
            },
            size: {
                sm: "px-2 py-1 text-xs",
                default: "px-3 py-1.5 text-sm",
                lg: "px-4 py-2 text-base",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
);

const TooltipContent = React.forwardRef(
    (
        { className, variant, size, sideOffset = 4, alignOffset = 0, ...props },
        ref
    ) => (
        <TooltipPrimitive.Portal>
            <TooltipPrimitive.Content
                ref={ref}
                sideOffset={sideOffset}
                alignOffset={alignOffset}
                className={cn(tooltipVariants({ variant, size }), className)}
                {...props}
            />
        </TooltipPrimitive.Portal>
    )
);
TooltipContent.displayName = TooltipPrimitive.Content.displayName;

export {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
    tooltipVariants,
};
