export function renderSwitch({ Switch }) {
    return (
        <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
                <Switch size="default" defaultChecked />
                <span className="text-sm">Default size</span>
            </div>
            <div className="flex items-center gap-3">
                <Switch size="sm" defaultChecked />
                <span className="text-sm">Small size</span>
            </div>
            <div className="flex items-center gap-3">
                <Switch disabled />
                <span className="text-sm text-muted-foreground">Disabled</span>
            </div>
        </div>
    );
}
