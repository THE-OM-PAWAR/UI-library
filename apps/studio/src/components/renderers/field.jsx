export function renderField(
    {
        Field,
        FieldContent,
        FieldDescription,
        FieldGroup,
        FieldLabel,
        FieldLegend,
        FieldSeparator,
        FieldSet,
        FieldTitle,
    },
    customClassName
) {
    return (
        <div className="w-full max-w-xl">
            <FieldSet>
                <FieldLegend>Profile Details</FieldLegend>
                <FieldGroup>
                    <Field className={customClassName}>
                        <FieldLabel>
                            <FieldTitle>Email Address</FieldTitle>
                        </FieldLabel>
                        <FieldContent>
                            <div className="rounded-md border border-dashed border-input bg-muted/30 px-3 py-2 text-sm text-muted-foreground">
                                Attach your form control here
                            </div>
                            <FieldDescription>
                                We will only use this for product updates.
                            </FieldDescription>
                        </FieldContent>
                    </Field>
                    <FieldSeparator>Optional</FieldSeparator>
                </FieldGroup>
            </FieldSet>
        </div>
    );
}
