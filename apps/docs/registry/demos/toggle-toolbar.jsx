import { Toggle } from "@shery-ui/components";
import { AlignCenter, AlignLeft, AlignRight } from "lucide-react";

export default function ToggleToolbar() {
    return (
        <div className="flex gap-1 p-1 border rounded-lg w-fit">
            <Toggle size="sm" aria-label="Align left">
                <AlignLeft />
            </Toggle>
            <Toggle size="sm" aria-label="Align center">
                <AlignCenter />
            </Toggle>
            <Toggle size="sm" aria-label="Align right">
                <AlignRight />
            </Toggle>
        </div>
    );
}
