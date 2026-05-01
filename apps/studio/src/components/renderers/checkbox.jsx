export function renderCheckbox({ Checkbox, Heading, Separator, Label }) {
    const variants = [
        { variant: "default", label: "Default" },
        { variant: "secondary", label: "Secondary" },
        { variant: "destructive", label: "Destructive" },
        { variant: "outline", label: "Outline" },
        { variant: "ghost", label: "Ghost" },
    ];

    return (
        <div className="flex flex-col w-full gap-8">
            <div className="flex flex-col gap-3">
                <Heading size="h5">Variants</Heading>
                <div className="grid grid-cols-3 gap-6">
                    {variants.map(({ variant, label }) => (
                        <div key={variant} className="flex flex-col gap-3">
                            <Heading size="h6">{label}</Heading>
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
            </div>

            <Separator />

            <div className="flex flex-col gap-3">
                <Heading size="h5">Sizes</Heading>
                <div className="flex items-center gap-6">
                    {[
                        { size: "xs", label: "Extra Small" },
                        { size: "sm", label: "Small" },
                        { size: "default", label: "Default" },
                        { size: "lg", label: "Large" },
                    ].map(({ size, label }) => (
                        <div key={size} className="flex items-center gap-2">
                            <Checkbox
                                size={size}
                                id={`size-${size}`}
                                defaultChecked
                            />
                            <Label htmlFor={`size-${size}`} className="text-sm">
                                {label}
                            </Label>
                        </div>
                    ))}
                </div>
            </div>

            <Separator />

            <div className="flex flex-col gap-3">
                <Heading size="h5">With Label</Heading>
                <div className="flex flex-col gap-3">
                    <div className="flex items-start gap-2">
                        <Checkbox id="terms" className="mt-0.5" />
                        <div className="flex flex-col gap-0.5">
                            <Label
                                htmlFor="terms"
                                className="text-sm font-medium"
                            >
                                Accept terms and conditions
                            </Label>
                            <p className="text-xs text-muted-foreground">
                                You agree to our Terms of Service and Privacy
                                Policy.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <Checkbox id="marketing" defaultChecked />
                        <Label htmlFor="marketing" className="text-sm">
                            Receive marketing emails
                        </Label>
                    </div>
                    <div className="flex items-center gap-2">
                        <Checkbox id="newsletter" />
                        <Label htmlFor="newsletter" className="text-sm">
                            Subscribe to newsletter
                        </Label>
                    </div>
                </div>
            </div>
        </div>
    );
}
