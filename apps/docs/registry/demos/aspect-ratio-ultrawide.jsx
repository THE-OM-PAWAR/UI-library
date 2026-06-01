import { AspectRatio } from "@repo/components";

export default function AspectRatioUltrawide() {
    return (
        <div className="w-full max-w-xl overflow-hidden rounded-lg border bg-muted shadow-sm">
            <AspectRatio ratio={21 / 9}>
                <img
                    src="https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?q=80&w=1400&auto=format&fit=crop"
                    alt="Forest landscape with mist"
                    className="h-full w-full object-cover"
                />
            </AspectRatio>
        </div>
    );
}
