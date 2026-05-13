import { Checkbox, Label } from "@shery-ui/components";

export default function CheckboxLg() {
    return (
        <div className="flex items-center gap-2">
            <Checkbox size="lg" id="lg-check" defaultChecked />
            <Label htmlFor="lg-check">Large (lg)</Label>
        </div>
    );
}
