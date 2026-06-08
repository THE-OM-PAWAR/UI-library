import { AspectRatio } from "@repo/components";

export default function AspectRatioUltrawide() {
    return (
        <div className="w-full max-w-xl overflow-hidden rounded-lg border bg-muted shadow-sm">
            <AspectRatio ratio={21 / 9}>
                <div className="h-full w-full bg-gray-200 dark:bg-gray-800" />
            </AspectRatio>
        </div>
    );
}
