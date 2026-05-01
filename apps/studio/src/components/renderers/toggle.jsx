import {
    AlignCenter,
    AlignLeft,
    AlignRight,
    Bold,
    Italic,
    Mic,
    Underline,
} from "lucide-react";

export function renderToggle({ Toggle, Heading, Separator }) {
    return (
        <div className="flex flex-col w-full gap-8">
            <div className="flex flex-col gap-3">
                <Heading size="h5">Default</Heading>
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
            </div>

            <Separator />

            <div className="flex flex-col gap-4">
                <Heading size="h5">Variants</Heading>
                <div className="grid grid-cols-3 gap-6">
                    {[
                        {
                            variant: "default",
                            label: "Default",
                            icon: <Bold />,
                            text: "Bold",
                        },
                        {
                            variant: "outline",
                            label: "Outline",
                            icon: <Italic />,
                            text: "Italic",
                        },
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
                        {
                            variant: "link",
                            label: "Link",
                            icon: <Bold />,
                            text: "Bold",
                        },
                    ].map(({ variant, label, icon, text }) => (
                        <div key={variant} className="flex flex-col gap-3">
                            <Heading size="h6">{label}</Heading>
                            <div className="flex flex-col gap-2">
                                <div className="flex items-center gap-2">
                                    <Toggle
                                        variant={variant}
                                        aria-label={`${label} off`}
                                    >
                                        {icon}
                                    </Toggle>
                                    <Heading size="span">Off</Heading>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Toggle
                                        variant={variant}
                                        defaultPressed
                                        aria-label={`${label} on`}
                                    >
                                        {icon}
                                    </Toggle>
                                    <Heading size="span">On</Heading>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Toggle
                                        variant={variant}
                                        aria-label={`${label} with text`}
                                    >
                                        {icon} {text}
                                    </Toggle>
                                    <Heading size="span">With text</Heading>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <Separator />

            <div className="flex flex-col gap-3">
                <Heading size="h5">Sizes</Heading>
                <div className="flex items-end gap-3">
                    {[
                        { size: "sm", label: "sm" },
                        { size: "default", label: "default" },
                        { size: "lg", label: "lg" },
                    ].map(({ size, label }) => (
                        <div
                            key={size}
                            className="flex flex-col items-center gap-2"
                        >
                            <Toggle size={size} aria-label={`Size ${label}`}>
                                <Bold />
                            </Toggle>
                            <Heading size="span">{label}</Heading>
                        </div>
                    ))}
                </div>
            </div>

            <Separator />

            <div className="flex flex-col gap-3">
                <Heading size="h5">With Text</Heading>
                <div className="flex gap-2">
                    <Toggle variant="outline" aria-label="Toggle microphone">
                        <Mic />
                        Microphone
                    </Toggle>
                </div>
            </div>

            <Separator />

            <div className="flex flex-col gap-3">
                <Heading size="h5">Toolbar Group</Heading>
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
            </div>

            <Separator />

            <div className="flex flex-col gap-3">
                <Heading size="h5">Disabled</Heading>
                <div className="flex gap-2">
                    <Toggle disabled aria-label="Toggle bold disabled">
                        <Bold />
                    </Toggle>
                    <Toggle
                        disabled
                        defaultPressed
                        aria-label="Toggle italic disabled"
                    >
                        <Italic />
                    </Toggle>
                </div>
            </div>
        </div>
    );
}
