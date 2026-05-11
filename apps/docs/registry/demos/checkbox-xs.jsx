import { Checkbox, Label } from "@repo/components";

export default function CheckboxXS() {
    return (
        <div className="flex items-center gap-2">
            <Checkbox size="xs" id="xs-check" defaultChecked />
            <Label htmlFor="xs-check" className="text-xs">
                Extra Small (xs)
            </Label>
        </div>
    );
}
