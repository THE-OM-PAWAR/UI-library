import { Checkbox, Label } from "@shery-ui/components";

export default function CheckboxSecondary() {
    return (
        <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
                <Checkbox variant="secondary" id="sec-un" />
                <Label htmlFor="sec-un">Unchecked</Label>
            </div>
            <div className="flex items-center gap-2">
                <Checkbox variant="secondary" id="sec-ch" defaultChecked />
                <Label htmlFor="sec-ch">Checked</Label>
            </div>
            <div className="flex items-center gap-2">
                <Checkbox variant="secondary" id="sec-dis" disabled />
                <Label htmlFor="sec-dis">Disabled</Label>
            </div>
        </div>
    );
}
