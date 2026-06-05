import { Label, RadioGroup, RadioGroupItem } from "@repo/components";

export default function RadioDemoMdm() {
    return (
        <RadioGroup defaultValue="comfortable" className="w-full max-w-sm">
            <div className="flex items-center gap-2 justify-center">
                <RadioGroupItem value="default" id="default" size="md" />
                <Label htmlFor="default" className="text-md">
                    Medium
                </Label>
            </div>
        </RadioGroup>
    );
}
