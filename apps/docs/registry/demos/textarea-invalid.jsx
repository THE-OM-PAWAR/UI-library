import { Textarea } from "@repo/components";

export default function TextareaInvalid() {
    return (
        <div className="flex flex-col gap-1.5 w-full max-w-sm">
            <Textarea aria-invalid="true" defaultValue="Bad input value" />
            <p className="text-sm text-destructive">This field has an error.</p>
        </div>
    );
}
