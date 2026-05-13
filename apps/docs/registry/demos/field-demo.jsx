import {
    Field,
    FieldDescription,
    FieldGroup,
    FieldLabel,
    Input,
} from "@shery-ui/components";

export default function FieldDemo() {
    return (
        <FieldGroup className="w-full max-w-sm">
            <Field>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input
                    id="email"
                    type="email"
                    placeholder="olivia@example.com"
                />
                <FieldDescription>
                    Used for product and billing updates.
                </FieldDescription>
            </Field>
        </FieldGroup>
    );
}
