import { Toggle } from "@shery-ui/components";
import { Mic } from "lucide-react";

export default function ToggleWithText() {
    return (
        <Toggle variant="outline" aria-label="Toggle microphone">
            <Mic />
            Microphone
        </Toggle>
    );
}
