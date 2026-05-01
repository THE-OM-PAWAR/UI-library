"use client";
import { cn } from "@repo/utils";
import * as React from "react";

const Item = React.forwardRef(
    (
        { className, inset, disabled, leftIcon, rightIcon, children, ...props },
        ref
    ) => {
        return (
            <div
                ref={ref}
                className={cn(
                    "relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors",
                    "focus:bg-accent focus:text-accent-foreground",
                    "data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
                    inset && "pl-8",
                    className
                )}
                data-disabled={disabled}
                {...props}
            >
                {leftIcon && <span className="size-4">{leftIcon}</span>}
                <span className="flex-1">{children}</span>
                {rightIcon && <span className="size-4">{rightIcon}</span>}
            </div>
        );
    }
);

Item.displayName = "Item";

export { Item };
