import { Label, RadioGroup, RadioGroupItem } from "@repo/components";

export default function RadioDemoLarge() {
    return (
        <RadioGroup defaultValue="comfortable" className="w-full max-w-sm">
            <div className="flex items-center gap-2 justify-center">
                <RadioGroupItem value="default" id="default" size="lg" />
                <Label htmlFor="default" className="text-lg">
                    Large
                </Label>
            </div>
        </RadioGroup>
    );
}
