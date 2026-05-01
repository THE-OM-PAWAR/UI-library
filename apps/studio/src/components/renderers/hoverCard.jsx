export function renderHoverCard({
    HoverCard,
    HoverCardTrigger,
    HoverCardContent,
    Button,
}) {
    return (
        <div className="flex gap-4">
            <HoverCard>
                <HoverCardTrigger asChild>
                    <Button variant="outline">Hover me</Button>
                </HoverCardTrigger>
                <HoverCardContent>
                    <div className="space-y-2">
                        <h4 className="text-sm font-semibold">Hover Card</h4>
                        <p className="text-sm text-muted-foreground">
                            This is a hover card component. Hover over the
                            trigger to see this content.
                        </p>
                    </div>
                </HoverCardContent>
            </HoverCard>

            <HoverCard>
                <HoverCardTrigger asChild>
                    <span className="text-sm underline cursor-pointer">
                        @username
                    </span>
                </HoverCardTrigger>
                <HoverCardContent className="w-80">
                    <div className="flex gap-4">
                        <div className="h-12 w-12 rounded-full bg-muted" />
                        <div className="space-y-1">
                            <h4 className="text-sm font-semibold">@username</h4>
                            <p className="text-sm text-muted-foreground">
                                Software developer and open source contributor.
                            </p>
                            <div className="flex gap-2 pt-2 text-xs text-muted-foreground">
                                <span>Joined March 2024</span>
                            </div>
                        </div>
                    </div>
                </HoverCardContent>
            </HoverCard>
        </div>
    );
}
