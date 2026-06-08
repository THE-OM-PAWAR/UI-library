import {
    Button,
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@repo/components";

export default function TooltipDemoPlacements() {
    const sides = ["top", "bottom", "left", "right"];

    return (
        <TooltipProvider delayDuration={200}>
            <div className="flex gap-4">
                {sides.map((side) => (
                    <Tooltip key={side}>
                        <TooltipTrigger asChild>
                            <Button variant="secondary" className="capitalize">
                                {side}
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent side={side}>
                            <p>I am on the {side}</p>
                        </TooltipContent>
                    </Tooltip>
                ))}
            </div>
        </TooltipProvider>
    );
}
