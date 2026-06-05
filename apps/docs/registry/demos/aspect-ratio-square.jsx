import { AspectRatio } from "@repo/components";

export default function AspectRatioSquare() {
    return (
        <div className="w-full max-w-xs overflow-hidden rounded-lg border bg-muted shadow-sm">
            <AspectRatio ratio={1}>
                <img
                    src="https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=1200&auto=format&fit=crop"
                    alt="Geometric building facade"
                    className="h-full w-full object-cover"
                />
            </AspectRatio>
        </div>
    );
}
