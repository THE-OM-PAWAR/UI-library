import { Checkbox, Label } from "@repo/components";

export default function CheckboxSm() {
    return (
        <div className="flex items-center gap-2">
            <Checkbox size="sm" id="sm-check" defaultChecked />
            <Label htmlFor="sm-check" className="text-sm">
                Small (sm)
            </Label>
        </div>
    );
}
