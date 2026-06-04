import { AspectRatio } from "@repo/components";

const items = [
    { ratio: 16 / 9, label: "16:9" },
    { ratio: 1, label: "1:1" },
    { ratio: 4 / 5, label: "4:5" },
];

export default function AspectRatioGallery() {
    return (
        <div className="grid w-full max-w-3xl gap-4 sm:grid-cols-3">
            {items.map((item) => (
                <div
                    key={item.label}
                    className="overflow-hidden rounded-lg border bg-muted shadow-sm"
                >
                    <AspectRatio ratio={item.ratio}>
                        <div className="h-full w-full bg-gray-200 dark:bg-gray-800" />
                    </AspectRatio>
                    <div className="border-t bg-background px-3 py-2 text-sm font-medium">
                        {item.label}
                    </div>
                </div>
            ))}
        </div>
    );
}
