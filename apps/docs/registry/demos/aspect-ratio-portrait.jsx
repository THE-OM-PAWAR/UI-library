import { AspectRatio } from "@repo/components";

export default function AspectRatioPortrait() {
    return (
        <div className="w-full max-w-64 overflow-hidden rounded-lg border bg-muted shadow-sm">
            <AspectRatio ratio={3 / 4}>
                <img
                    src="https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?q=80&w=1200&auto=format&fit=crop"
                    alt="Canal between colorful buildings"
                    className="h-full w-full object-cover"
                />
            </AspectRatio>
        </div>
    );
}
