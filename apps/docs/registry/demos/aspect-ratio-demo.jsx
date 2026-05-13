import { AspectRatio } from "@shery-ui/components";

export default function AspectRatioDemo() {
    return (
        <div className="w-full max-w-sm overflow-hidden rounded-lg border bg-muted">
            <AspectRatio ratio={16 / 9}>
                <img
                    src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1200&auto=format&fit=crop"
                    alt="Workspace"
                    className="h-full w-full object-cover"
                />
            </AspectRatio>
        </div>
    );
}
