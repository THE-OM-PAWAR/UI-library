import { Toggle } from "@shery-ui/components";
import { Bold } from "lucide-react";

export default function ToggleLink() {
    return (
        <div className="flex items-center gap-4">
            <Toggle variant="link" aria-label="Link off">
                <Bold /> Bold
            </Toggle>
            <Toggle variant="link" defaultPressed aria-label="Link on">
                <Bold /> Bold
            </Toggle>
        </div>
    );
}
