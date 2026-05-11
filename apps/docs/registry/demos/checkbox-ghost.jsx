import { Checkbox, Label } from "@repo/components";

export default function CheckboxGhost() {
    return (
        <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
                <Checkbox variant="ghost" id="gh-un" />
                <Label htmlFor="gh-un">Unchecked</Label>
            </div>
            <div className="flex items-center gap-2">
                <Checkbox variant="ghost" id="gh-ch" defaultChecked />
                <Label htmlFor="gh-ch">Checked</Label>
            </div>
            <div className="flex items-center gap-2">
                <Checkbox variant="ghost" id="gh-dis" disabled />
                <Label htmlFor="gh-dis">Disabled</Label>
            </div>
        </div>
    );
}
