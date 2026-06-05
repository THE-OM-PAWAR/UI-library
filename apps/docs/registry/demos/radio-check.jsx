import { Label, RadioGroup, RadioGroupItem } from "@repo/components";

export default function RadioGroupCheckStyle() {
    return (
        <RadioGroup
            defaultValue="comfortable"
            className="space-y-3 flex justify-center items-center "
        >
            <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3 ">
                    <RadioGroupItem
                        value="default"
                        variant="checkbox"
                        id="r1"
                        className="rounded-sm"
                    />
                    <Label htmlFor="r1">Default</Label>
                </div>

                <div className="flex items-center gap-3 ">
                    <RadioGroupItem
                        value="comfortable"
                        variant="checkbox"
                        id="r2"
                        className="rounded-sm"
                    />
                    <Label htmlFor="r2">Comfortable</Label>
                </div>

                <div className="flex items-center gap-3 ">
                    <RadioGroupItem
                        value="compact"
                        variant="checkbox"
                        id="r3"
                        className="rounded-sm"
                    />
                    <Label htmlFor="r3"> Compact</Label>
                </div>
            </div>
        </RadioGroup>
    );
}
