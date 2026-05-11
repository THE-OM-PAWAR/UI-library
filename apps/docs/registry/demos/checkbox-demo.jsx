import { Checkbox, Label } from "@repo/components";

export default function CheckboxDemo() {
    return (
        <div className="flex items-center gap-2">
            <Checkbox id="checkbox-demo" />
            <Label htmlFor="checkbox-demo">Accept terms and conditions</Label>
        </div>
    );
}
