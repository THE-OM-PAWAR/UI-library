"use client";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { cn } from "@repo/utils";
import * as React from "react";

const Avatar = React.forwardRef(
    ({ className, size = "default", ...props }, ref) => (
        <AvatarPrimitive.Root
            ref={ref}
            data-slot="avatar"
            data-size={size}
            className={cn(
                "group/avatar relative flex size-8 shrink-0 select-none overflow-hidden rounded-full",
                "data-[size=sm]:size-6 data-[size=default]:size-8 data-[size=lg]:size-10",
                className
            )}
            {...props}
        />
    )
);
Avatar.displayName = AvatarPrimitive.Root.displayName;

const AvatarImage = React.forwardRef(({ className, ...props }, ref) => (
    <AvatarPrimitive.Image
        ref={ref}
        data-slot="avatar-image"
        className={cn("aspect-square size-full", className)}
        {...props}
    />
));
AvatarImage.displayName = AvatarPrimitive.Image.displayName;

const AvatarFallback = React.forwardRef(({ className, ...props }, ref) => (
    <AvatarPrimitive.Fallback
        ref={ref}
        data-slot="avatar-fallback"
        className={cn(
            "flex size-full items-center justify-center rounded-full bg-muted text-sm text-muted-foreground",
            "group-data-[size=sm]/avatar:text-xs",
            className
        )}
        {...props}
    />
));
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;

function AvatarBadge({ className, ...props }) {
    return (
        <span
            data-slot="avatar-badge"
            className={cn(
                "absolute bottom-0 right-0 z-10 inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground ring-2 ring-background select-none",
                "group-data-[size=sm]/avatar:size-2 group-data-[size=sm]/avatar:[&>svg]:hidden",
                "group-data-[size=default]/avatar:size-2.5 group-data-[size=default]/avatar:[&>svg]:size-2",
                "group-data-[size=lg]/avatar:size-3 group-data-[size=lg]/avatar:[&>svg]:size-2",
                className
            )}
            {...props}
        />
    );
}

function AvatarGroup({ className, ...props }) {
    return (
        <div
            data-slot="avatar-group"
            className={cn(
                "group/avatar-group flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:ring-background",
                className
            )}
            {...props}
        />
    );
}

function AvatarGroupCount({ className, ...props }) {
    return (
        <div
            data-slot="avatar-group-count"
            className={cn(
                "relative flex size-8 shrink-0 items-center justify-center rounded-full bg-muted text-sm text-muted-foreground ring-2 ring-background",
                "group-has-data-[size=lg]/avatar-group:size-10 group-has-data-[size=sm]/avatar-group:size-6",
                className
            )}
            {...props}
        />
    );
}

export {
    Avatar,
    AvatarBadge,
    AvatarFallback,
    AvatarGroup,
    AvatarGroupCount,
    AvatarImage,
};
