"use client";

import { cn } from "@repo/utils";
import * as React from "react";
import * as DirectionPrimitive from "@radix-ui/react-direction";

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