"use client";
import { cn } from "@repo/utils";
import { cva } from "class-variance-authority";
import * as React from "react";

// ─── CVA Variants ────────────────────────────────────────────────────────────

const alertVariants = cva(
    "relative w-full rounded-lg border px-3 py-2.5 text-sm has-data-[slot=alert-action]:pr-18",
    {
        variants: {
            variant: {
                default:
                    "bg-card text-card-foreground",
                info:
                    "bg-blue-50 text-blue-800 border-blue-200 [&>svg]:text-blue-600 dark:bg-blue-950 dark:text-blue-200 dark:border-blue-800 dark:[&>svg]:text-blue-400",
                success:
                    "bg-emerald-50 text-emerald-800 border-emerald-200 [&>svg]:text-emerald-600 dark:bg-emerald-950 dark:text-emerald-200 dark:border-emerald-800 dark:[&>svg]:text-emerald-400",
                warning:
                    "bg-amber-50 text-amber-800 border-amber-200 [&>svg]:text-amber-600 dark:bg-amber-950 dark:text-amber-200 dark:border-amber-800 dark:[&>svg]:text-amber-400",
                error:
                    "bg-red-50 text-red-800 border-red-200 [&>svg]:text-red-600 dark:bg-red-950 dark:text-red-200 dark:border-red-800 dark:[&>svg]:text-red-400",
                destructive:
                    "bg-card text-destructive border-destructive/30 [&>svg]:text-destructive",
            },
        },
        defaultVariants: {
            variant: "default",
        },
    }
);

// ─── Components ──────────────────────────────────────────────────────────────

const Alert = React.forwardRef(({ className, variant = "default", children, ...props }, ref) => {
    // Split children into svg icon vs the rest
    const childArray = React.Children.toArray(children);
    const icon = childArray.find(
        (child) => React.isValidElement(child) && child.type?.displayName !== "AlertTitle" && child.type?.displayName !== "AlertDescription" && child.type?.displayName !== "AlertAction"
    );
    const rest = childArray.filter((child) => child !== icon);

    return (
        <div
            ref={ref}
            data-slot="alert"
            role="alert"
            className={cn(alertVariants({ variant }), className)}
            {...props}
        >
            {icon ? (
                // 2-col grid: icon | (title + description stacked)
                <div className="grid grid-cols-[1.25rem_1fr] gap-x-2.5 gap-y-0.5">
                    <span className="row-span-2 flex items-start pt-0.5">
                        {React.cloneElement(icon, {
                            className: cn("size-4 shrink-0", icon.props.className),
                        })}
                    </span>
                    {rest}
                </div>
            ) : (
                // No icon — single column, plain stack
                <div className="flex flex-col gap-y-0.5">{rest}</div>
            )}
        </div>
    );
});
Alert.displayName = "Alert";

const AlertTitle = React.forwardRef(({ className, ...props }, ref) => (
    <div
        ref={ref}
        data-slot="alert-title"
        className={cn(
            "font-medium leading-snug [&_a]:underline [&_a]:underline-offset-3 [&_a]:hover:text-foreground",
            className
        )}
        {...props}
    />
));
AlertTitle.displayName = "AlertTitle";

const AlertDescription = React.forwardRef(({ className, ...props }, ref) => (
    <div
        ref={ref}
        data-slot="alert-description"
        className={cn(
            "text-sm opacity-90 leading-relaxed [&_a]:underline [&_a]:underline-offset-3 [&_a]:hover:text-foreground [&_p:not(:last-child)]:mb-4",
            className
        )}
        {...props}
    />
));
AlertDescription.displayName = "AlertDescription";

const AlertAction = React.forwardRef(({ className, ...props }, ref) => (
    <div
        ref={ref}
        data-slot="alert-action"
        className={cn("absolute top-2 right-2", className)}
        {...props}
    />
));
AlertAction.displayName = "AlertAction";

// ─── Exports ─────────────────────────────────────────────────────────────────

export { Alert, AlertAction, AlertDescription, AlertTitle, alertVariants };
