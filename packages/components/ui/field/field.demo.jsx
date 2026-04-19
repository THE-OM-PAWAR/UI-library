import React from 'react';
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
  FieldTitle,
} from './field.jsx';

export function FieldDemo() {
  return (
    <div className="w-full max-w-xl space-y-6">
      <FieldGroup>
        <Field orientation="vertical">
          <FieldLabel>
            <FieldTitle>Email</FieldTitle>
          </FieldLabel>
          <FieldContent>
            <div
              data-slot="field-control"
              className="rounded-md border border-dashed border-input bg-muted/30 px-3 py-2 text-sm text-muted-foreground"
            >
              Attach your form control here
            </div>
            <FieldDescription>We only use this for account notifications.</FieldDescription>
          </FieldContent>
        </Field>

        <FieldSeparator>Billing</FieldSeparator>

        <FieldSet>
          <FieldLegend>Address</FieldLegend>
          <Field orientation="responsive">
            <FieldLabel>
              <FieldTitle>City</FieldTitle>
            </FieldLabel>
            <FieldContent>
              <div
                data-slot="field-control"
                className="rounded-md border border-dashed border-input bg-muted/30 px-3 py-2 text-sm text-muted-foreground"
              >
                Add a city control here
              </div>
              <FieldError errors={[{ message: 'City is required' }]} />
            </FieldContent>
          </Field>
        </FieldSet>
      </FieldGroup>
    </div>
  );
}
