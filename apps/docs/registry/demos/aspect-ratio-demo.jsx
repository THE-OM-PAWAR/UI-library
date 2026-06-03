import { AspectRatio } from "@repo/components";

export default function AspectRatioDemo() {
    return (
        <div className="w-full max-w-sm overflow-hidden rounded-lg border bg-muted">
            <AspectRatio ratio={16 / 9}>
                <div className="h-full w-full bg-gray-200 dark:bg-gray-800" />
            </AspectRatio>
        </div>
    );
}
