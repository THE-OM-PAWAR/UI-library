import { Toggle } from "@repo/components";
import { Bold } from "lucide-react";

export default function ToggleSm() {
    return (
        <Toggle size="sm" aria-label="Small toggle">
            <Bold />
        </Toggle>
    );
}
