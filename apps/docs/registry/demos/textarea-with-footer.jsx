import { Button, Textarea } from "@shery-ui/components";

export default function TextareaWithFooter() {
    return (
        <div className="flex flex-col gap-2 w-full max-w-sm">
            <Textarea id="message" placeholder="Write your message…" rows={4} />
            <div className="flex items-center justify-between">
                <p className="text-xs text-muted-foreground">
                    Max 500 characters
                </p>
                <Button size="sm">Submit</Button>
            </div>
        </div>
    );
}
