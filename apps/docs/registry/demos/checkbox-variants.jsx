import { Checkbox, Label } from "@repo/components";

const variants = [
    { variant: "default", label: "Default" },
    { variant: "secondary", label: "Secondary" },
    { variant: "destructive", label: "Destructive" },
    { variant: "outline", label: "Outline" },
    { variant: "ghost", label: "Ghost" },
];

export default function CheckboxVariants() {
    return (
        <div className="grid grid-cols-3 gap-6">
            {variants.map(({ variant, label }) => (
                <div key={variant} className="flex flex-col gap-2">
                    <p className="text-sm font-medium">{label}</p>
                    <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-2">
                            <Checkbox
                                variant={variant}
                                id={`${variant}-unchecked`}
                            />
                            <Label
                                htmlFor={`${variant}-unchecked`}
                                className="text-sm"
                            >
                                Unchecked
                            </Label>
                        </div>
                        <div className="flex items-center gap-2">
                            <Checkbox
                                variant={variant}
                                id={`${variant}-checked`}
                                defaultChecked
                            />
                            <Label
                                htmlFor={`${variant}-checked`}
                                className="text-sm"
                            >
                                Checked
                            </Label>
                        </div>
                        <div className="flex items-center gap-2">
                            <Checkbox
                                variant={variant}
                                id={`${variant}-disabled`}
                                disabled
                            />
                            <Label
                                htmlFor={`${variant}-disabled`}
                                className="text-sm text-muted-foreground"
                            >
                                Disabled
                            </Label>
                        </div>
                        <div className="flex items-center gap-2">
                            <Checkbox
                                variant={variant}
                                id={`${variant}-disabled-checked`}
                                disabled
                                defaultChecked
                            />
                            <Label
                                htmlFor={`${variant}-disabled-checked`}
                                className="text-sm text-muted-foreground"
                            >
                                Disabled checked
                            </Label>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
