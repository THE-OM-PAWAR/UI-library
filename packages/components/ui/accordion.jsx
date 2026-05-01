"use client";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { cn } from "@repo/utils";
import { ChevronDown, ChevronUp } from "lucide-react";
import * as React from "react";

const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef(({ className, ...props }, ref) => (
    <AccordionPrimitive.Item
        ref={ref}
        className={cn("border-b border-border", className)}
        {...props}
    />
));
AccordionItem.displayName = AccordionPrimitive.Item.displayName;

const AccordionTrigger = React.forwardRef(
    ({ className, children, ...props }, ref) => (
        <AccordionPrimitive.Header className="flex">
            <AccordionPrimitive.Trigger
                ref={ref}
                className={cn(
                    "group flex flex-1 items-start justify-between rounded-md py-3 text-left text-sm font-medium transition-all",
                    "hover:text-foreground/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                    "disabled:pointer-events-none disabled:opacity-50",
                    className
                )}
                {...props}
            >
                {children}
                <ChevronDown className="ml-2 size-4 shrink-0 text-muted-foreground group-data-[state=open]:hidden" />
                <ChevronUp className="ml-2 hidden size-4 shrink-0 text-muted-foreground group-data-[state=open]:block" />
            </AccordionPrimitive.Trigger>
        </AccordionPrimitive.Header>
    )
);
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef(
    ({ className, children, ...props }, ref) => (
        <AccordionPrimitive.Content
            ref={ref}
            className={cn(
                "overflow-hidden text-sm text-muted-foreground",
                "data-[state=open]:animate-[accordion-down_200ms_ease-out] data-[state=closed]:animate-[accordion-up_200ms_ease-out]",
                className
            )}
            {...props}
        >
            <div className="pb-3 pt-0 [&_a]:underline [&_a]:underline-offset-4 [&_a:hover]:text-foreground [&_p:not(:last-child)]:mb-3">
                {children}
            </div>
        </AccordionPrimitive.Content>
    )
);
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger };
