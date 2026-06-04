"use client";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { cn } from "@repo/utils";
import { ChevronDown, ChevronUp } from "lucide-react";
import * as React from "react";

function Accordion({ className, ...props }) {
    return (
        <AccordionPrimitive.Root
            data-slot="accordion"
            className={cn("flex w-full flex-col", className)}
            {...props}
        />
    );
}

const AccordionItem = React.forwardRef(({ className, ...props }, ref) => (
    <AccordionPrimitive.Item
        ref={ref}
        data-slot="accordion-item"
        className={cn("border-b border-border last:border-b-0", className)}
        {...props}
    />
));
AccordionItem.displayName = AccordionPrimitive.Item.displayName;

const AccordionTrigger = React.forwardRef(
    ({ className, children, ...props }, ref) => (
        <AccordionPrimitive.Header className="flex">
            <AccordionPrimitive.Trigger
                ref={ref}
                data-slot="accordion-trigger"
                className={cn(
                    "group/accordion-trigger relative flex flex-1 items-start justify-between rounded-lg border border-transparent py-2.5 text-left text-sm font-medium transition-all outline-none",
                    "hover:underline focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50",
                    "disabled:pointer-events-none disabled:opacity-50",
                    className
                )}
                {...props}
            >
                {children}
                <ChevronDown
                    data-slot="accordion-trigger-icon"
                    className="pointer-events-none ml-2 size-4 shrink-0 text-muted-foreground group-data-[state=open]/accordion-trigger:hidden"
                />
                <ChevronUp
                    data-slot="accordion-trigger-icon"
                    className="pointer-events-none ml-2 hidden size-4 shrink-0 text-muted-foreground group-data-[state=open]/accordion-trigger:block"
                />
            </AccordionPrimitive.Trigger>
        </AccordionPrimitive.Header>
    )
);
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef(
    ({ className, children, ...props }, ref) => (
        <AccordionPrimitive.Content
            ref={ref}
            data-slot="accordion-content"
            className={cn(
                "overflow-hidden text-sm data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up",
                className
            )}
            {...props}
        >
            <div className="pb-2.5 pt-0 text-muted-foreground [&_a]:underline [&_a]:underline-offset-3 [&_a]:hover:text-foreground [&_p:not(:last-child)]:mb-4">
                {children}
            </div>
        </AccordionPrimitive.Content>
    )
);
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger };
