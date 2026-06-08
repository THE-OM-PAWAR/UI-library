"use client";

import {
    AlertOctagonIcon,
    AlertTriangleIcon,
    CheckCircle2,
    Info,
    Loader2Icon,
} from "lucide-react";
import { Toaster as Sonner } from "sonner";

const Toaster = ({
    position = "bottom-right",
    closeButton = false,
    richColors = false,
    dir = "auto",
    gap = 14,
    visibleToasts = 3,
    swipeDirections = ["right"],
    ...props
}) => {
    return (
        <Sonner
            position={position}
            closeButton={closeButton}
            richColors={richColors}
            dir={dir}
            gap={gap}
            visibleToasts={visibleToasts}
            swipeDirections={swipeDirections}
            className="toaster group"
            icons={{
                success: <CheckCircle2 className="size-4" />,
                info: <Info className="size-4" />,
                warning: <AlertTriangleIcon className="size-4" />,
                error: <AlertOctagonIcon className="size-4" />,
                loading: <Loader2Icon className="size-4 animate-spin" />,
            }}
            toastOptions={{
                classNames: {
                    toast: "cn-toast",
                },
            }}
            {...props}
        />
    );
};

export { Toaster };
