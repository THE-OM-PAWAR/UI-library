import { AspectRatio } from "@repo/components";

const items = [
    {
        ratio: 16 / 9,
        src: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=1000&auto=format&fit=crop",
        alt: "Lake and mountains",
        label: "16:9",
    },
    {
        ratio: 1,
        src: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?q=80&w=1000&auto=format&fit=crop",
        alt: "Sunlight through forest trees",
        label: "1:1",
    },
    {
        ratio: 4 / 5,
        src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1000&auto=format&fit=crop",
        alt: "House surrounded by trees at sunset",
        label: "4:5",
    },
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
                        <img
                            src={item.src}
                            alt={item.alt}
                            className="h-full w-full object-cover"
                        />
                    </AspectRatio>
                    <div className="border-t bg-background px-3 py-2 text-sm font-medium">
                        {item.label}
                    </div>
                </div>
            ))}
        </div>
    );
}
