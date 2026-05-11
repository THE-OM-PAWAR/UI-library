import { Toggle } from "@repo/components";
import { Bold, Italic, Underline } from "lucide-react";

export default function ToggleDemo() {
    return (
        <div className="flex gap-2">
            <Toggle aria-label="Toggle bold">
                <Bold />
            </Toggle>
            <Toggle aria-label="Toggle italic">
                <Italic />
            </Toggle>
            <Toggle aria-label="Toggle underline">
                <Underline />
            </Toggle>
        </div>
    );
}
