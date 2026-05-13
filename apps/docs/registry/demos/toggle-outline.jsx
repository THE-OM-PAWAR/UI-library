import { Toggle } from "@shery-ui/components";
import { Italic } from "lucide-react";

export default function ToggleOutline() {
    return (
        <div className="flex items-center gap-4">
            <Toggle variant="outline" aria-label="Outline off">
                <Italic />
            </Toggle>
            <Toggle variant="outline" defaultPressed aria-label="Outline on">
                <Italic />
            </Toggle>
        </div>
    );
}
