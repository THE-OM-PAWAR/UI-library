"use client";
import { cn } from "@repo/utils";
import * as React from "react";
import { Button } from "./button.jsx";

const InputGroup = React.forwardRef(({ className, ...props }, ref) => {
    return (
        <div
            ref={ref}
            data-slot="input-group"
            className={cn(
                "group/input-group flex w-full items-stretch overflow-hidden rounded-md border bg-background",
                className
            )}
            {...props}
        />
    );
});

const InputGroupAddon = React.forwardRef(
    ({ className, position = "left", align, children, ...props }, ref) => {
        const resolvedAlign =
            align ?? (position === "right" ? "inline-end" : "inline-start");

        return (
            <div
                ref={ref}
                data-slot="input-group-addon"
                data-align={resolvedAlign}
                className={cn(
                    "flex items-center px-3 text-sm text-muted-foreground bg-muted",
                    resolvedAlign === "inline-start" && "border-r",
                    resolvedAlign === "inline-end" && "border-l",
                    className
                )}
                {...props}
            >
                {children}
            </div>
        );
    }
);

const InputGroupInput = React.forwardRef(({ className, ...props }, ref) => {
    return (
        <input
            ref={ref}
            data-slot="input-group-input"
            className={cn(
                "min-w-0 flex-1 bg-transparent px-3 py-2 text-sm outline-none",
                className
            )}
            {...props}
        />
    );
});

const InputGroupButton = React.forwardRef(
    ({ className, render, children, ...props }, ref) => {
        const content = render ?? children;

        return (
            <Button
                ref={ref}
                data-slot="input-group-button"
                className={className}
                asChild={!!render}
                {...props}
            >
                {content}
            </Button>
        );
    }
);

InputGroup.displayName = "InputGroup";
InputGroupAddon.displayName = "InputGroupAddon";
InputGroupInput.displayName = "InputGroupInput";
InputGroupButton.displayName = "InputGroupButton";

export { InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput };