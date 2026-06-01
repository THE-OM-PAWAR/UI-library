import { AspectRatio } from "@repo/components";

export default function AspectRatioWidescreen() {
    return (
        <div className="w-full max-w-lg overflow-hidden rounded-lg border bg-muted shadow-sm">
            <AspectRatio ratio={16 / 9}>
                <img
                    src="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=1200&auto=format&fit=crop"
                    alt="Mountain valley under a cloudy sky"
                    className="h-full w-full object-cover"
                />
            </AspectRatio>
        </div>
    );
}
