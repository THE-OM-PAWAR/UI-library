import { Label, RadioGroup, RadioGroupItem } from "@repo/components";

export default function RadioDemoXlarge() {
    return (
        <RadioGroup defaultValue="comfortable" className="w-full max-w-sm">
            <div className="flex items-center gap-2 justify-center">
                <RadioGroupItem value="default" id="default" size="xl" />
                <Label htmlFor="default" className="text-xl">
                    Extra Large
                </Label>
            </div>
        </RadioGroup>
    );
}
