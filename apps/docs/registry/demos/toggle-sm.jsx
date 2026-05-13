import { Toggle } from "@shery-ui/components";
import { Bold } from "lucide-react";

export default function ToggleSm() {
    return (
        <Toggle size="sm" aria-label="Small toggle">
            <Bold />
        </Toggle>
    );
}
