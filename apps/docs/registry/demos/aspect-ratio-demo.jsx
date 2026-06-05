import { AspectRatio } from "@repo/components";

export default function AspectRatioDemo() {
    return (
        <div className="w-full max-w-xs overflow-hidden rounded-lg border bg-muted shadow-sm">
            <AspectRatio ratio={4 / 5}>
                <img
                    src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop"
                    alt="House surrounded by trees at sunset"
                    className="h-full w-full object-cover"
                />
            </AspectRatio>
        </div>
    );
}
