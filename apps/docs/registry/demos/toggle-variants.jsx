import { Toggle } from "@repo/components";
import { AlignCenter, Bold, Italic, Mic, Underline } from "lucide-react";

const variants = [
    { variant: "default", label: "Default", icon: <Bold />, text: "Bold" },
    { variant: "outline", label: "Outline", icon: <Italic />, text: "Italic" },
    {
        variant: "ghost",
        label: "Ghost",
        icon: <Underline />,
        text: "Underline",
    },
    {
        variant: "secondary",
        label: "Secondary",
        icon: <AlignCenter />,
        text: "Center",
    },
    {
        variant: "destructive",
        label: "Destructive",
        icon: <Mic />,
        text: "Mute",
    },
];

export default function ToggleVariants() {
    return (
        <div className="grid grid-cols-3 gap-6">
            {variants.map(({ variant, label, icon, text }) => (
                <div key={variant} className="flex flex-col gap-2">
                    <p className="text-sm font-medium">{label}</p>
                    <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-2">
                            <Toggle
                                variant={variant}
                                aria-label={`${label} off`}
                            >
                                {icon}
                            </Toggle>
                            <span className="text-sm text-muted-foreground">
                                Off
                            </span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Toggle
                                variant={variant}
                                defaultPressed
                                aria-label={`${label} on`}
                            >
                                {icon}
                            </Toggle>
                            <span className="text-sm text-muted-foreground">
                                On
                            </span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Toggle
                                variant={variant}
                                aria-label={`${label} with text`}
                            >
                                {icon} {text}
                            </Toggle>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
