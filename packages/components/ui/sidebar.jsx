"use client";

import { cn } from "@repo/utils";
import * as React from "react";

const Sidebar = React.forwardRef(
    ({ className, side = "left", ...props }, ref) => (
        <aside
            ref={ref}
            data-slot="sidebar"
            data-side={side}
            className={cn(
                "flex h-full w-64 flex-col bg-popover text-popover-foreground",
                "border-border text-sm shadow-sm",
                "data-[side=left]:border-r data-[side=right]:border-l",
                className
            )}
            {...props}
        />
    )
);
Sidebar.displayName = "Sidebar";

function SidebarHeader({ className, ...props }) {
    return (
        <div
            data-slot="sidebar-header"
            className={cn("flex flex-col gap-2 border-b border-border p-4", className)}
            {...props}
        />
    );
}

function SidebarContent({ className, ...props }) {
    return (
        <div
            data-slot="sidebar-content"
            className={cn("flex-1 overflow-y-auto p-2", className)}
            {...props}
        />
    );
}

function SidebarFooter({ className, ...props }) {
    return (
        <div
            data-slot="sidebar-footer"
            className={cn("mt-auto border-t border-border p-4", className)}
            {...props}
        />
    );
}

function SidebarGroup({ className, ...props }) {
    return (
        <div
            data-slot="sidebar-group"
            className={cn("flex flex-col gap-1 py-2", className)}
            {...props}
        />
    );
}

function SidebarGroupLabel({ className, ...props }) {
    return (
        <div
            data-slot="sidebar-group-label"
            className={cn(
                "px-2 py-1.5 text-xs font-medium uppercase tracking-wide text-muted-foreground",
                className
            )}
            {...props}
        />
    );
}

function SidebarGroupContent({ className, ...props }) {
    return (
        <div
            data-slot="sidebar-group-content"
            className={cn("flex flex-col gap-1", className)}
            {...props}
        />
    );
}

function SidebarMenu({ className, ...props }) {
    return (
        <ul
            data-slot="sidebar-menu"
            className={cn("flex flex-col gap-1", className)}
            {...props}
        />
    );
}

function SidebarMenuItem({ className, ...props }) {
    return (
        <li
            data-slot="sidebar-menu-item"
            className={cn("list-none", className)}
            {...props}
        />
    );
}

const SidebarMenuButton = React.forwardRef(
    (
        {
            className,
            isActive = false,
            size = "default",
            type = "button",
            ...props
        },
        ref
    ) => (
        <button
            ref={ref}
            type={type}
            data-slot="sidebar-menu-button"
            data-active={isActive}
            className={cn(
                "flex w-full items-center gap-2 rounded-md px-2 py-2 text-left text-sm font-medium",
                "text-foreground transition-colors outline-none",
                "hover:bg-accent hover:text-accent-foreground",
                "focus-visible:ring-2 focus-visible:ring-ring",
                "disabled:pointer-events-none disabled:opacity-50",
                "data-[active=true]:bg-accent data-[active=true]:text-accent-foreground",
                size === "sm" && "h-8 text-xs",
                size === "default" && "h-9",
                size === "lg" && "h-11 text-sm",
                className
            )}
            {...props}
        />
    )
);
SidebarMenuButton.displayName = "SidebarMenuButton";

function SidebarMenuBadge({ className, ...props }) {
    return (
        <span
            data-slot="sidebar-menu-badge"
            className={cn(
                "ml-auto rounded-md px-1.5 py-0.5 text-xs text-muted-foreground",
                className
            )}
            {...props}
        />
    );
}

function SidebarSeparator({ className, ...props }) {
    return (
        <div
            data-slot="sidebar-separator"
            className={cn("my-2 h-px bg-border", className)}
            {...props}
        />
    );
}

export {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuBadge,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarSeparator,
};