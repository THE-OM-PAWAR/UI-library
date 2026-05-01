"use client";

import {
    AlertOctagonIcon,
    AlertTriangleIcon,
    CheckCircle2,
    Info,
    Loader2Icon,
} from "lucide-react";
import { Toaster as Sonner } from "sonner";

const Toaster = ({ ...props }) => {
    return (
        <Sonner
            className="toaster group"
            icons={{
                success: <CheckCircle2 className="size-4" />,
                info: <Info className="size-4" />,
                warning: <AlertTriangleIcon className="size-4" />,
                error: <AlertOctagonIcon className="size-4" />,
                loading: <Loader2Icon className="size-4 animate-spin" />,
            }}
            style={{
                "--normal-bg": "var(--popover)",
                "--normal-text": "var(--popover-foreground)",
                "--normal-border": "var(--border)",
                "--border-radius": "var(--radius-md)",
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
