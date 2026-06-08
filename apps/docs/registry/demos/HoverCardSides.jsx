import {
    Button,
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@repo/components";

const HOVER_CARD_SIDES = ["left", "top", "bottom", "right"];

export default function HoverCardSides() {
    return (
        <div className="flex flex-wrap justify-center gap-2">
            {HOVER_CARD_SIDES.map((side) => (
                <HoverCard key={side} openDelay={100} closeDelay={100}>
                    <HoverCardTrigger asChild>
                        <Button variant="outline" className="capitalize">
                            {side}
                        </Button>
                    </HoverCardTrigger>
                    <HoverCardContent side={side}>
                        <div className="flex flex-col gap-1">
                            <h4 className="font-medium">Hover Card</h4>
                            <p className="text-sm text-muted-foreground">
                                This hover card appears on the {side} side of
                                the trigger.
                            </p>
                        </div>
                    </HoverCardContent>
                </HoverCard>
            ))}
        </div>
    );
}
