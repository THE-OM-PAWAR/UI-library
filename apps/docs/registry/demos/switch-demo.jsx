import { Label, Switch } from "@shery-ui/components";

export default function SwitchDemo() {
    return (
        <div className="flex items-center gap-3">
            <Switch id="airplane-mode" />
            <Label htmlFor="airplane-mode">Airplane mode</Label>
        </div>
    );
}
