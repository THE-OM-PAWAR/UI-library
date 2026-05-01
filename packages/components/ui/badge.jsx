"use client";
import { cn } from "@repo/utils";
import { cva } from "class-variance-authority";
import * as React from "react";

const badgeVariants = cva(
    "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors",
    {
        variants: {
            variant: {
                default: "bg-primary text-primary-foreground",
                secondary: "bg-secondary text-secondary-foreground",
                destructive: "bg-destructive text-destructive-foreground",
                outline: "border border-input text-foreground",
            },
        },
        defaultVariants: {
            variant: "default",
        },
    }
);

const Badge = React.forwardRef(
    ({ className, variant, children, ...props }, ref) => {
        return (
            <span
                ref={ref}
                className={cn(badgeVariants({ variant }), className)}
                {...props}
            >
                {children}
            </span>
        );
    }
);

Badge.displayName = "Badge";

export { Badge, badgeVariants };
