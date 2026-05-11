import { Toggle } from "@repo/components";
import { AlignCenter } from "lucide-react";

export default function ToggleSecondary() {
    return (
        <div className="flex items-center gap-4">
            <Toggle variant="secondary" aria-label="Secondary off">
                <AlignCenter />
            </Toggle>
            <Toggle
                variant="secondary"
                defaultPressed
                aria-label="Secondary on"
            >
                <AlignCenter />
            </Toggle>
        </div>
    );
}
