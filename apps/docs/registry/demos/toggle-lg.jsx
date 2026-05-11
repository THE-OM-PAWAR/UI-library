import { Toggle } from "@repo/components";
import { Bold } from "lucide-react";

export default function ToggleLg() {
    return (
        <Toggle size="lg" aria-label="Large toggle">
            <Bold />
        </Toggle>
    );
}
