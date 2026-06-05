import { Label, RadioGroup, RadioGroupItem } from "@repo/components";

export default function RadioDemoSm() {
    return (
        <RadioGroup defaultValue="comfortable" className="w-full max-w-sm">
            <div className="flex items-center gap-2 justify-center">
                <RadioGroupItem value="default" id="default" size="sm" />
                <Label htmlFor="default" className="text-sm">
                    Small
                </Label>
            </div>
        </RadioGroup>
    );
}
