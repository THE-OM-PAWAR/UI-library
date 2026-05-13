import { Toggle } from "@shery-ui/components";
import { Bold, Italic } from "lucide-react";

export default function ToggleDisabled() {
    return (
        <div className="flex gap-2">
            <Toggle disabled aria-label="Toggle bold disabled">
                <Bold />
            </Toggle>
            <Toggle disabled defaultPressed aria-label="Toggle italic disabled">
                <Italic />
            </Toggle>
        </div>
    );
}
