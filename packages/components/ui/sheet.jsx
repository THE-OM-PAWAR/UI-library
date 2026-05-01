"use client";
import * as SheetPrimitive from "@radix-ui/react-dialog";
import { cn } from "@repo/utils";
import { X } from "lucide-react";
import * as React from "react";
import { Button } from "./button.jsx";

function Sheet(props) {
    return <SheetPrimitive.Root data-slot="sheet" {...props} />;
}

function SheetTrigger(props) {
    return <SheetPrimitive.Trigger data-slot="sheet-trigger" {...props} />;
}

function SheetClose(props) {
    return <SheetPrimitive.Close data-slot="sheet-close" {...props} />;
}

function SheetPortal(props) {
    return <SheetPrimitive.Portal data-slot="sheet-portal" {...props} />;
}

const SheetOverlay = React.forwardRef(({ className, ...props }, ref) => (
    <SheetPrimitive.Overlay
        ref={ref}
        data-slot="sheet-overlay"
        className={cn(
            "fixed inset-0 z-50 bg-black/10 supports-backdrop-filter:backdrop-blur-xs",
            "data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=closed]:animate-out data-[state=closed]:fade-out-0",
            className
        )}
        {...props}
    />
));
SheetOverlay.displayName = "SheetOverlay";

const SheetContent = React.forwardRef(
    (
        {
            className,
            children,
            side = "right",
            showCloseButton = true,
            ...props
        },
        ref
    ) => (
        <SheetPortal>
            <SheetOverlay />
            <SheetPrimitive.Content
                ref={ref}
                data-slot="sheet-content"
                data-side={side}
                className={cn(
                    "fixed z-50 flex flex-col gap-4 bg-popover text-sm text-popover-foreground shadow-lg transition duration-200 ease-in-out",
                    "data-[side=bottom]:inset-x-0 data-[side=bottom]:bottom-0 data-[side=bottom]:h-auto data-[side=bottom]:border-t data-[side=bottom]:border-border",
                    "data-[side=left]:inset-y-0 data-[side=left]:left-0 data-[side=left]:h-full data-[side=left]:w-3/4 data-[side=left]:border-r data-[side=left]:border-border",
                    "data-[side=right]:inset-y-0 data-[side=right]:right-0 data-[side=right]:h-full data-[side=right]:w-3/4 data-[side=right]:border-l data-[side=right]:border-border",
                    "data-[side=top]:inset-x-0 data-[side=top]:top-0 data-[side=top]:h-auto data-[side=top]:border-b data-[side=top]:border-border",
                    "data-[side=left]:sm:max-w-sm data-[side=right]:sm:max-w-sm",
                    "data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[side=bottom]:data-[state=open]:slide-in-from-bottom-10 data-[side=left]:data-[state=open]:slide-in-from-left-10 data-[side=right]:data-[state=open]:slide-in-from-right-10 data-[side=top]:data-[state=open]:slide-in-from-top-10",
                    "data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[side=bottom]:data-[state=closed]:slide-out-to-bottom-10 data-[side=left]:data-[state=closed]:slide-out-to-left-10 data-[side=right]:data-[state=closed]:slide-out-to-right-10 data-[side=top]:data-[state=closed]:slide-out-to-top-10",
                    className
                )}
                {...props}
            >
                {children}
                {showCloseButton ? (
                    <SheetPrimitive.Close data-slot="sheet-close" asChild>
                        <Button
                            variant="ghost"
                            size="icon-sm"
                            className="absolute top-3 right-3"
                        >
                            <X />
                            <span className="sr-only">Close</span>
                        </Button>
                    </SheetPrimitive.Close>
                ) : null}
            </SheetPrimitive.Content>
        </SheetPortal>
    )
);
SheetContent.displayName = "SheetContent";

function SheetHeader({ className, ...props }) {
    return (
        <div
            data-slot="sheet-header"
            className={cn("flex flex-col gap-0.5 p-4", className)}
            {...props}
        />
    );
}

function SheetFooter({ className, ...props }) {
    return (
        <div
            data-slot="sheet-footer"
            className={cn("mt-auto flex flex-col gap-2 p-4", className)}
            {...props}
        />
    );
}

const SheetTitle = React.forwardRef(({ className, ...props }, ref) => (
    <SheetPrimitive.Title
        ref={ref}
        data-slot="sheet-title"
        className={cn("text-base font-medium text-foreground", className)}
        {...props}
    />
));
SheetTitle.displayName = "SheetTitle";

const SheetDescription = React.forwardRef(({ className, ...props }, ref) => (
    <SheetPrimitive.Description
        ref={ref}
        data-slot="sheet-description"
        className={cn("text-sm text-muted-foreground", className)}
        {...props}
    />
));
SheetDescription.displayName = "SheetDescription";

export {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetOverlay,
    SheetPortal,
    SheetTitle,
    SheetTrigger,
};
