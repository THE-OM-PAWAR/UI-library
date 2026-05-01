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
        <div className="flex-1 flex flex-col">
            {/* Toolbar */}
            <div className="h-12 border-b border-border flex items-center justify-between px-4 shrink-0">
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
                        <Grid3x3 className="h-4 w-4" />
                    </button>
                </div>
            </div>

            {/* Canvas */}
            <div
                className={cn(
                    "flex-1 flex items-center justify-center p-8 overflow-auto",
                    backgrounds[background]
                )}
            >
                <div className="flex items-center justify-center">
                    {children}
                </div>
            </div>
        </div>
    );
}
