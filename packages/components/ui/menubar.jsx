"use client";

import * as MenubarPrimitive from "@radix-ui/react-menubar";
import { cn } from "@repo/utils";
import * as React from "react";

const Menubar = React.forwardRef(({ className, ...props }, ref) => {
    return (
        <MenubarPrimitive.Root
            ref={ref}
            className={cn(
                "flex h-10 items-center space-x-1 rounded-md border bg-background p-1",
                className
            )}
            {...props}
        />
    );
});

const MenubarTrigger = React.forwardRef(({ className, ...props }, ref) => {
    return (
        <MenubarPrimitive.Trigger
            ref={ref}
            className={cn(
                "flex cursor-default select-none items-center rounded-sm px-3 py-1.5 text-sm font-medium outline-none",
                "focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent",
                className
            )}
            {...props}
        />
    );
});

const MenubarContent = React.forwardRef(({ className, ...props }, ref) => {
    return (
        <MenubarPrimitive.Portal>
            <MenubarPrimitive.Content
                ref={ref}
                className={cn(
                    "z-50 min-w-[12rem] overflow-hidden rounded-md border bg-popover p-1 shadow-md",
                    className
                )}
                {...props}
            />
        </MenubarPrimitive.Portal>
    );
});

const MenubarItem = React.forwardRef(({ className, inset, ...props }, ref) => {
    return (
        <MenubarPrimitive.Item
            ref={ref}
            className={cn(
                "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none",
                "focus:bg-accent focus:text-accent-foreground",
                inset && "pl-8",
                className
            )}
            {...props}
        />
    );
});
const MenubarMenu = MenubarPrimitive.Menu;

export { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarTrigger };
