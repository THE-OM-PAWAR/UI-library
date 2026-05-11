import { Checkbox, Label } from "@repo/components";

export default function CheckboxSizes() {
    return (
        <div className="flex items-center gap-6">
            {[
                { size: "xs", label: "Extra Small" },
                { size: "sm", label: "Small" },
                { size: "default", label: "Default" },
                { size: "lg", label: "Large" },
            ].map(({ size, label }) => (
                <div key={size} className="flex items-center gap-2">
                    <Checkbox size={size} id={`size-${size}`} defaultChecked />
                    <Label htmlFor={`size-${size}`} className="text-sm">
                        {label}
                    </Label>
                </div>
            ))}
        </div>
    );
}
