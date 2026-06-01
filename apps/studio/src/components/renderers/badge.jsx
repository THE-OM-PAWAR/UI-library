export function renderBadge({ Badge }, customClassName) {
    return (
        <div className="flex flex-wrap gap-4">
            <Badge variant="default" className={customClassName}>Default</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="destructive">Destructive</Badge>
            <Badge variant="outline">Outline</Badge>
        </div>
    );
}
