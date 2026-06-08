import { AspectRatio } from "@repo/components";

export default function AspectRatioPortrait() {
    return (
        <div className="w-full max-w-64 overflow-hidden rounded-lg border bg-muted shadow-sm">
            <AspectRatio ratio={3 / 4}>
                <div className="h-full w-full bg-gray-200 dark:bg-gray-800" />
            </AspectRatio>
        </div>
    );
}
