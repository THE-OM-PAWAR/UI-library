"use client";
import { cn } from "@repo/utils";
import * as React from "react";

const Kbd = React.forwardRef(({ className, children, ...props }, ref) => {
    return (
        <kbd
            ref={ref}
            className={cn(
                "inline-flex items-center rounded-md border bg-muted px-1.5 py-0.5 font-mono text-xs font-medium text-muted-foreground shadow-sm",
                className
            )}
            {...props}
        >
            {children}
        </kbd>
    );
});

Kbd.displayName = "Kbd";

export { Kbd };
