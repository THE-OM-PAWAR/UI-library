import { Textarea } from "@repo/components";

export default function TextareaRadius() {
    return (
        <div className="flex flex-col gap-4 w-full max-w-sm">
            <div className="flex flex-col gap-1.5">
                <p className="text-sm font-medium">radius="4"</p>
                <Textarea placeholder="Subtle radius…" radius="4" />
            </div>
            <div className="flex flex-col gap-1.5">
                <p className="text-sm font-medium">radius="10" (default)</p>
                <Textarea placeholder="Default radius…" radius="10" />
            </div>
            <div className="flex flex-col gap-1.5">
                <p className="text-sm font-medium">radius="20"</p>
                <Textarea placeholder="Rounder radius…" radius="20" />
            </div>
        </div>
    );
}
