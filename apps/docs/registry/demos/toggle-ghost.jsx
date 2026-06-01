import { Toggle } from "@repo/components";
import { Underline } from "lucide-react";

export default function ToggleGhost() {
    return (
        <div className="flex items-center gap-4">
            <Toggle variant="ghost" aria-label="Ghost off">
                <Underline />
            </Toggle>
            <Toggle variant="ghost" defaultPressed aria-label="Ghost on">
                <Underline />
            </Toggle>
        </div>
    );
}
