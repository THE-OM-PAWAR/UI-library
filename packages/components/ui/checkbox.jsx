"use client";

import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { cn } from "@repo/utils";
import { cva } from "class-variance-authority";
import { CheckIcon } from "lucide-react";
import * as React from "react";

const checkboxVariants = cva(
    "peer relative flex shrink-0 items-center justify-center border rounded transition-colors outline-none group-has-disabled/field:opacity-50 after:absolute after:-inset-x-4 after:-inset-y-4 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40",
    {
        variants: {
            variant: {
                default:
                    "border-input dark:bg-input/30 data-[state=checked]:border-primary data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:data-[state=checked]:bg-primary",
                secondary:
                    "border-input dark:bg-input/30 data-[state=checked]:border-secondary data-[state=checked]:bg-secondary data-[state=checked]:text-secondary-foreground",
                destructive:
                    "border-input dark:bg-input/30 data-[state=checked]:border-destructive data-[state=checked]:bg-destructive data-[state=checked]:text-destructive-foreground",
                outline:
                    "border-2 border-primary bg-transparent data-[state=checked]:border-primary data-[state=checked]:bg-transparent data-[state=checked]:text-primary",
                ghost: "border-transparent bg-muted data-[state=checked]:bg-muted data-[state=checked]:text-foreground",
            },
            size: {
                xs: "size-3.5 [&>span>svg]:size-3",
                sm: "size-4 [&>span>svg]:size-3",
                default: "size-5 [&>span>svg]:size-4",
                lg: "size-6 [&>span>svg]:size-5",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
);

function Checkbox({ className, variant, size, ...props }) {
    return (
        <CheckboxPrimitive.Root
            data-slot="checkbox"
            className={cn(checkboxVariants({ variant, size }), className)}
            {...props}
        >
            <CheckboxPrimitive.Indicator
                data-slot="checkbox-indicator"
                className="grid text-current transition-none place-content-center"
            >
                <CheckIcon />
            </CheckboxPrimitive.Indicator>
        </CheckboxPrimitive.Root>
    );
}

export { Checkbox, checkboxVariants };
