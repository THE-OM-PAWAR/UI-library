import { Checkbox, Label } from "@shery-ui/components";

export default function CheckboxOutline() {
    return (
        <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
                <Checkbox variant="outline" id="out-un" />
                <Label htmlFor="out-un">Unchecked</Label>
            </div>
            <div className="flex items-center gap-2">
                <Checkbox variant="outline" id="out-ch" defaultChecked />
                <Label htmlFor="out-ch">Checked</Label>
            </div>
            <div className="flex items-center gap-2">
                <Checkbox variant="outline" id="out-dis" disabled />
                <Label htmlFor="out-dis">Disabled</Label>
            </div>
        </div>
    );
}
