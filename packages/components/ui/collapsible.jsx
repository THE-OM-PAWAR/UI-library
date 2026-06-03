"use client";

import * as CollapsiblePrimitive from "@radix-ui/react-collapsible";
import { cn } from "@repo/utils";
import React, { useState } from "react";

const Collapsible = CollapsiblePrimitive.Root;
const CollapsibleTrigger = CollapsiblePrimitive.Trigger;

const CollapsibleContent = React.forwardRef(({ className, ...props }, ref) => {
    return (
        <CollapsiblePrimitive.Content
            ref={ref}
            className={`overflow-hidden ${className}`}
            className={cn(
                "overflow-hidden data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down",
                className
            )}
            {...props}
        />
    );
});

CollapsibleContent.displayName = "CollapsibleContent";

const CollapsibleWithLogic = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen((prev) => !prev);
    return children({
        isOpen,
        setIsOpen,
        toggle,
    });
};

export {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
    CollapsibleWithLogic,
};
