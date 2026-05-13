import { Checkbox, Label } from "@shery-ui/components";

export default function CheckboxDestructive() {
    return (
        <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
                <Checkbox variant="destructive" id="des-un" />
                <Label htmlFor="des-un">Unchecked</Label>
            </div>
            <div className="flex items-center gap-2">
                <Checkbox variant="destructive" id="des-ch" defaultChecked />
                <Label htmlFor="des-ch">Checked</Label>
            </div>
            <div className="flex items-center gap-2">
                <Checkbox variant="destructive" id="des-dis" disabled />
                <Label htmlFor="des-dis">Disabled</Label>
            </div>
        </div>
    );
}
