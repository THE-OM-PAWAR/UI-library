import { AspectRatio } from "@repo/components";

export default function AspectRatioSquare() {
    return (
        <div className="w-full max-w-xs overflow-hidden rounded-lg border bg-muted shadow-sm">
            <AspectRatio ratio={1}>
                <div className="h-full w-full bg-gray-200 dark:bg-gray-800" />
            </AspectRatio>
        </div>
    );
}
