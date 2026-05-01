"use client";
import { cn } from "@repo/utils";

function Skeleton({ className, ...props }) {
    return (
        <div
            className={cn(
                // We lower the base background slightly to increase contrast
                "relative overflow-hidden rounded-md bg-white/5 animate-pulse",
                // The Shimmer:
                // 1. We change 'via-white/10' to 'via-white/25' for a much stronger "white part"
                // 2. We change 'animate-[shimmer_2s_infinite]' to '1.5s' for a snappier look
                "before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1.5s_infinite] before:bg-gradient-to-r before:from-transparent via-white/60 before:to-transparent before:blur-sm",
                className
            )}
            {...props}
        />
    );
}

export { Skeleton };
