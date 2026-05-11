import { Toggle } from "@repo/components";
import { Bold } from "lucide-react";

export default function ToggleSizes() {
    return (
        <div className="flex items-end gap-4">
            {[
                { size: "sm", label: "sm" },
                { size: "default", label: "default" },
                { size: "lg", label: "lg" },
            ].map(({ size, label }) => (
                <div key={size} className="flex flex-col items-center gap-2">
                    <Toggle size={size} aria-label={`Size ${label}`}>
                        <Bold />
                    </Toggle>
                    <span className="text-xs text-muted-foreground">
                        {label}
                    </span>
                </div>
            ))}
        </div>
    );
}
