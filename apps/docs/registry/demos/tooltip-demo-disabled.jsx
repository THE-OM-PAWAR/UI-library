import {
    Button,
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@repo/components";

export default function TooltipDemoDisabled() {
    return (
        <TooltipProvider delayDuration={200}>
            <Tooltip>
                <TooltipTrigger asChild>
                    {/* The span wrapper is required to catch hover events on disabled elements */}
                    <span className="inline-block" tabIndex={0}>
                        <Button variant="outline" disabled>
                            Disabled Action
                        </Button>
                    </span>
                </TooltipTrigger>
                <TooltipContent>
                    <p>This feature is currently unavailable.</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );
}
