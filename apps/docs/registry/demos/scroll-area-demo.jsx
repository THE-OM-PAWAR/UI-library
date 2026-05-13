import { ScrollArea } from "@shery-ui/components";

const tags = Array.from({ length: 24 }, (_, index) => "Tag " + (index + 1));

export default function ScrollAreaDemo() {
    return (
        <ScrollArea className="h-48 w-72 rounded-lg border p-4">
            <div className="space-y-2">
                {tags.map((tag) => (
                    <div
                        key={tag}
                        className="rounded-md bg-muted px-3 py-2 text-sm"
                    >
                        {tag}
                    </div>
                ))}
            </div>
        </ScrollArea>
    );
}
