import { Label, RadioGroup, RadioGroupItem } from "@shery-ui/components";

export default function RadioDemo() {
    return (
        <RadioGroup defaultValue="comfortable" className="w-full max-w-sm">
            <div className="flex items-center gap-2">
                <RadioGroupItem value="default" id="default" />
                <Label htmlFor="default">Default</Label>
            </div>
            <div className="flex items-center gap-2">
                <RadioGroupItem value="comfortable" id="comfortable" />
                <Label htmlFor="comfortable">Comfortable</Label>
            </div>
            <div className="flex items-center gap-2">
                <RadioGroupItem value="compact" id="compact" />
                <Label htmlFor="compact">Compact</Label>
            </div>
        </RadioGroup>
    );
}
