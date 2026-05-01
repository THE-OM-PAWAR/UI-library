import { Button } from "@repo/components";

export default function ButtonSizes() {
    return (
        <div className="flex flex-wrap items-center gap-4">
            <Button size="xs">Extra Small</Button>
            <Button size="sm">Small</Button>
            <Button size="default">Default</Button>
            <Button size="lg">Large</Button>
        </div>
    );
}
