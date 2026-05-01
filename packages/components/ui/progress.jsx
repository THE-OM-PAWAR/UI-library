"use client";
import * as ProgressPrimitive from "@radix-ui/react-progress";
import { cn } from "@repo/utils";

function Progress({
    className,
    color = "primary",
    height = 10,
    value,
    speed = 700,
    ...props
}) {
    return (
        <ProgressPrimitive.Root
            className={cn(
                "relative flex w-full items-center overflow-x-hidden rounded-full bg-muted",
                className
            )}
            style={{ height }}
            data-slot="progress"
            {...props}
        >
            <ProgressPrimitive.Indicator
                className={cn("flex-1 transition-all size-full bg-primary")}
                style={{
                    transform: `translateX(-${100 - (value || 0)}%)`,
                    backgroundColor: color,
                    transitionDuration: `${speed}ms`,
                }}
                data-slot="progress-indicator"
            />
        </ProgressPrimitive.Root>
    );
}

export { Progress };
