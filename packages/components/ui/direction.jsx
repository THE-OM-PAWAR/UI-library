"use client";

import * as DirectionPrimitive from "@radix-ui/react-direction";
import { cn } from "@shery-ui/utils";
import * as React from "react";

const DirectionProvider = ({ className, dir = "ltr", ...props }) => {
    return (
        <DirectionPrimitive.Provider dir={dir}>
            <div
                data-slot="direction-wrapper"
                dir={dir}
                className={cn("contents", className)}
                {...props}
            />
        </DirectionPrimitive.Provider>
    );
};

DirectionProvider.displayName = "DirectionProvider";

export { DirectionProvider };
