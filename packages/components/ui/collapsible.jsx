"use client";

import * as CollapsiblePrimitive from "@radix-ui/react-collapsible";
import React, { useState } from "react";

const Collapsible = CollapsiblePrimitive.Root;
// const CollapsibleTrigger = CollapsiblePrimitive.Trigger;
const CollapsibleTrigger = React.forwardRef(({ className, children, ...props }, ref) => (
    <CollapsiblePrimitive.Trigger
        ref={ref}
        className={`focus:outline-none select-none &[data-state=open]>svg:rotate-180 &[data-state=open]>.arrow:rotate-180 ${className || ""}`}
        {...props}
    >
        {children}
    </CollapsiblePrimitive.Trigger>
));
CollapsibleTrigger.displayName = "CollapsibleTrigger";

const CollapsibleContent = React.forwardRef(({ className, ...props }, ref) => {
    return (
        <CollapsiblePrimitive.Content
            ref={ref}
            className={`overflow-hidden transition-all data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down ${className || ""}`}
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
