import {
    Field,
    FieldContent,
    FieldDescription,
    FieldLabel,
    FieldTitle,
    RadioGroup,
    RadioGroupItem,
} from "@repo/components";

export default function RadioGroupChoiceCard() {
    return (
        <RadioGroup defaultValue="plus" className="max-w-sm">
            <FieldLabel htmlFor="plus-plan">
                <Field orientation="horizontal" className="p-4">
                    <FieldContent>
                        <FieldTitle>Plus</FieldTitle>
                        <FieldDescription>
                            For individuals and small teams.
                        </FieldDescription>
                    </FieldContent>
                    <RadioGroupItem value="plus" id="plus-plan" />
                </Field>
            </FieldLabel>
            <FieldLabel htmlFor="pro-plan">
                <Field orientation="horizontal" className="p-4">
                    <FieldContent>
                        <FieldTitle>Pro</FieldTitle>
                        <FieldDescription>
                            For growing businesses.
                        </FieldDescription>
                    </FieldContent>
                    <RadioGroupItem value="pro" id="pro-plan" />
                </Field>
            </FieldLabel>
            <FieldLabel htmlFor="enterprise-plan">
                <Field orientation="horizontal" className="p-4">
                    <FieldContent>
                        <FieldTitle>Enterprise</FieldTitle>
                        <FieldDescription>
                            For large teams and enterprises.
                        </FieldDescription>
                    </FieldContent>
                    <RadioGroupItem value="enterprise" id="enterprise-plan" />
                </Field>
            </FieldLabel>
        </RadioGroup>
    );
}
