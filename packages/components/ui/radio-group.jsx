"use client";

import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { cn } from "@repo/utils";
import * as React from "react";

const RadioGroup = React.forwardRef(({ className, ...props }, ref) => {
    return (
        <RadioGroupPrimitive.Root
            ref={ref}
            data-slot="radio-group"
            className={cn("grid w-full gap-2", className)}
            {...props}
        />
    );
});
RadioGroup.displayName = "RadioGroup";

const RadioGroupItem = React.forwardRef(
    ({ className, variant = "radio", size = "md", ...props }, ref) => {
        return (
            <RadioGroupPrimitive.Item
                ref={ref}
                data-slot="radio-group-item"
                className={cn(
                    "group/radio-group-item peer relative shrink-0 border border-input bg-background outline-none after:absolute after:-inset-x-3 after:-inset-y-2 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:border-primary aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:bg-input/30",

                    variant === "radio" ? "rounded-full" : "rounded-sm",

                    size === "sm" && "size-3",
                    size === "md" && "size-4",
                    size === "lg" && "size-5",
                    size === "xl" && "size-6",

                    className
                )}
                {...props}
            >
                <RadioGroupPrimitive.Indicator
                    data-slot="radio-group-indicator"
                    className="flex h-full w-full items-center justify-center"
                >
                    {variant === "radio" ? (
                        <span
                            className={cn(
                                "rounded-full bg-primary",
                                size === "sm" && "size-1.5",
                                size === "md" && "size-2",
                                size === "lg" && "size-2.5",
                                size === "xl" && "size-3"
                            )}
                        />
                    ) : (
                        <span
                            className={cn(
                                "font-bold text-primary leading-none",
                                size === "sm" && "text-[8px]",
                                size === "md" && "text-[10px]",
                                size === "lg" && "text-xs",
                                size === "xl" && "text-sm"
                            )}
                        >
                            ✓
                        </span>
                    )}
                </RadioGroupPrimitive.Indicator>
            </RadioGroupPrimitive.Item>
        );
    }
);
RadioGroupItem.displayName = "RadioGroupItem";

export { RadioGroup, RadioGroupItem };
