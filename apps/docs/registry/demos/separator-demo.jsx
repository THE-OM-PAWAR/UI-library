import { Separator } from "@shery-ui/components";

export default function SeparatorDemo() {
    return (
        <div className="w-full max-w-sm">
            <div className="space-y-1">
                <h4 className="text-sm font-medium">UI Library</h4>
                <p className="text-sm text-muted-foreground">
                    Reusable components and patterns.
                </p>
            </div>
            <Separator className="my-4" />
            <div className="flex h-5 items-center gap-4 text-sm">
                <span>Docs</span>
                <Separator orientation="vertical" />
                <span>Components</span>
                <Separator orientation="vertical" />
                <span>Blocks</span>
            </div>
        </div>
    );
}
