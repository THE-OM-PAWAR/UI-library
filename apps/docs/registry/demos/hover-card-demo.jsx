import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@shery-ui/components";

export default function HoverCardDemo() {
    return (
        <HoverCard>
            <HoverCardTrigger asChild>
                <button className="rounded-md border px-3 py-2 text-sm font-medium">
                    @uilib
                </button>
            </HoverCardTrigger>
            <HoverCardContent className="w-72">
                <div className="space-y-1">
                    <h4 className="text-sm font-semibold">UI Library</h4>
                    <p className="text-sm text-muted-foreground">
                        Composable components for polished application
                        interfaces.
                    </p>
                </div>
            </HoverCardContent>
        </HoverCard>
    );
}
