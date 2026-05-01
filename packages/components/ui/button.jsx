"use client";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@repo/utils";
import { cva } from "class-variance-authority";
import * as React from "react";

const buttonVariants = cva(
    "group/button inline-flex shrink-0 items-center justify-center rounded-lg border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
    {
        variants: {
            variant: {
                default:
                    "bg-primary text-primary-foreground hover:bg-primary/90 active:bg-primary/80 shadow-sm hover:shadow",
                outline:
                    "border-border bg-background hover:bg-accent hover:text-accent-foreground active:bg-accent/80 aria-expanded:bg-muted aria-expanded:text-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50",
                secondary:
                    "bg-secondary text-secondary-foreground hover:bg-secondary/80 active:bg-secondary/70 aria-expanded:bg-secondary aria-expanded:text-secondary-foreground shadow-sm",
                ghost: "hover:bg-accent hover:text-accent-foreground active:bg-accent/80 aria-expanded:bg-muted aria-expanded:text-foreground dark:hover:bg-muted/50",
                destructive:
                    "bg-destructive text-destructive-foreground hover:bg-destructive/90 active:bg-destructive/80 shadow-sm hover:shadow",
                link: "text-primary underline-offset-4 hover:underline active:text-primary/80",
            },
            size: {
                default:
                    "h-9 gap-1.5 px-4 has-data-[icon=inline-end]:pr-3 has-data-[icon=inline-start]:pl-3",
                xs: "h-6 gap-1 rounded-md px-2 text-xs has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3",
                sm: "h-8 gap-1 rounded-md px-3 text-sm has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 [&_svg:not([class*='size-'])]:size-3.5",
                lg: "h-10 gap-2 px-5 has-data-[icon=inline-end]:pr-4 has-data-[icon=inline-start]:pl-4",
                icon: "size-9",
                "icon-xs":
                    "size-6 rounded-md [&_svg:not([class*='size-'])]:size-3",
                "icon-sm":
                    "size-8 rounded-md [&_svg:not([class*='size-'])]:size-3.5",
                "icon-lg": "size-10",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
);

const Button = React.forwardRef(
    (
        {
            className,
            variant,
            size,
            fullWidth,
            asChild = false,
            type = "button",
            disabled = false,
            isLoading = false,
            leftIcon,
            rightIcon,
            children,
            ...props
        },
        ref
    ) => {
        const Comp = asChild ? Slot : "button";

        return (
            <Comp
                ref={ref}
                className={cn(
                    buttonVariants({ variant, size, fullWidth }),
                    className
                )}
                {...(!asChild && {
                    type,
                    disabled: disabled || isLoading,
                })}
                aria-disabled={disabled || isLoading}
                {...props}
            >
                {isLoading ? (
                    "Loading..."
                ) : (
                    <>
                        {leftIcon && <span className="mr-2">{leftIcon}</span>}
                        {children}
                        {rightIcon && <span className="ml-2">{rightIcon}</span>}
                    </>
                )}
            </Comp>
        );
    }
);

Button.displayName = "Button";

export { Button, buttonVariants };
