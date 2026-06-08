"use client";
import { cn } from "@repo/utils";
import { cva } from "class-variance-authority";
import * as React from "react";

const aspectRatioVariants = cva("relative w-full", {
    variants: {
        variant: {
            landscape: "",
            square: "",
            protrait: "",
        },
    },
    defaultVariants: {
        variant: "landscape",
    },
});

const AspectRatio = React.forwardRef(
    ({ ratio = 1, variant, className, children, ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={cn(aspectRatioVariants({ variant }), className)}
                {...props}
            >
                <div
                    className="absolute inset-0"
                    style={{ aspectRatio: ratio }}
                />
                <div className="absolute inset-0">{children}</div>
            </div>
        );
    }
);

AspectRatio.displayName = "AspectRatio";

export { AspectRatio, aspectRatioVariants };
