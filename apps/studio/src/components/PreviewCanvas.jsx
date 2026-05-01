import * as Separator from "@radix-ui/react-separator";
import { cn } from "@repo/utils";
import { Grid3x3 } from "lucide-react";
import { useState } from "react";

export function PreviewCanvas({ children, componentName }) {
    const [background, setBackground] = useState("grid");

    const backgrounds = {
        default: "bg-background",
        grid: "bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]",
    };

    return (
        <div className="flex flex-col flex-1">
            {/* Toolbar */}
            <div className="flex items-center justify-between h-12 px-4 border-b border-border shrink-0">
                <div className="flex items-center gap-2">
                    <h1 className="text-sm font-semibold">{componentName}</h1>
                </div>

                <div className="flex items-center gap-2">
                    <button
                        onClick={() =>
                            setBackground(
                                background === "grid" ? "default" : "grid"
                            )
                        }
                        className={cn(
                            "h-8 w-8 rounded-md flex items-center justify-center transition-colors",
                            background === "grid"
                                ? "bg-accent text-accent-foreground"
                                : "hover:bg-accent/50"
                        )}
                        title="Toggle grid background"
                    >
                        <Grid3x3 className="w-4 h-4" />
                    </button>
                </div>
            </div>

            {/* Canvas */}
            <div
                className={cn(
                    "flex-1 overflow-auto p-8",
                    backgrounds[background]
                )}
            >
                <div className="flex items-center justify-center min-h-full mx-auto max-w-7xl">
                    {children}
                </div>
            </div>
        </div>
    );
}
