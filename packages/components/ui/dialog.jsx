"use client";

import * as DialogPrimitive from "@radix-ui/react-dialog";
import { cn } from "@repo/utils";
import * as React from "react";

// Root
export const Dialog = DialogPrimitive.Root;

// Trigger
export const DialogTrigger = DialogPrimitive.Trigger;

// Close
export const DialogClose = DialogPrimitive.Close;

// Portal
export const DialogPortal = DialogPrimitive.Portal;

// Overlay
export const DialogOverlay = React.forwardRef(
    ({ className, ...props }, ref) => (
        <DialogPrimitive.Overlay
            ref={ref}
            className={cn(
                "fixed inset-0 z-50 bg-black/50 backdrop-blur-sm",
                "data-[state=open]:animate-in data-[state=closed]:animate-out",
                "data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0",
                className
            )}
            {...props}
        />
    )
);
DialogOverlay.displayName = "DialogOverlay";

// Content
export const DialogContent = React.forwardRef(
    ({ className, size = "md", children, ...props }, ref) => {
        const sizeStyles = {
            sm: "max-w-sm",
            md: "max-w-lg",
            lg: "max-w-2xl",
            xl: "max-w-4xl",
            full: "w-full h-full max-w-none rounded-none",
        };

        return (
            <DialogPortal>
                <DialogOverlay />
                <DialogPrimitive.Content
                    ref={ref}
                    className={cn(
                        "fixed left-1/2 top-1/2 z-50 w-full translate-x-[-50%] translate-y-[-50%]",
                        "bg-background border border-border p-6 shadow-lg rounded-lg",
                        "duration-200",
                        "data-[state=open]:animate-in data-[state=closed]:animate-out",
                        "data-[state=open]:zoom-in-95 data-[state=closed]:zoom-out-95",
                        sizeStyles[size],
                        className
                    )}
                    {...props}
                >
                    {children}
                </DialogPrimitive.Content>
            </DialogPortal>
        );
    }
);
DialogContent.displayName = "DialogContent";

// Header
export const DialogHeader = ({ className, ...props }) => (
    <div className={cn("flex flex-col space-y-2", className)} {...props} />
);

// Footer
export const DialogFooter = ({ className, ...props }) => (
    <div className={cn("flex justify-end gap-2 mt-4", className)} {...props} />
);

// Title
export const DialogTitle = React.forwardRef(({ className, ...props }, ref) => (
    <DialogPrimitive.Title
        ref={ref}
        className={cn("text-lg font-semibold", className)}
        {...props}
    />
));
DialogTitle.displayName = "DialogTitle";

// Description
export const DialogDescription = React.forwardRef(
    ({ className, ...props }, ref) => (
        <DialogPrimitive.Description
            ref={ref}
            className={cn("text-sm text-muted-foreground", className)}
            {...props}
        />
    )
);
DialogDescription.displayName = "DialogDescription";
