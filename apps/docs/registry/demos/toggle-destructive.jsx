import { Toggle } from "@repo/components";
import { Mic } from "lucide-react";

export default function ToggleDestructive() {
    return (
        <div className="flex items-center gap-4">
            <Toggle variant="destructive" aria-label="Destructive off">
                <Mic />
            </Toggle>
            <Toggle
                variant="destructive"
                defaultPressed
                aria-label="Destructive on"
            >
                <Mic />
            </Toggle>
        </div>
    );
}
