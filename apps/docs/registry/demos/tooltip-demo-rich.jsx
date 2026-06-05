import {
    Button,
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@repo/components";
import { Info } from "lucide-react";

export default function TooltipDemoRich() {
    return (
        <TooltipProvider delayDuration={200}>
            <Tooltip>
                <TooltipTrigger asChild>
                    <Button variant="ghost" size="icon">
                        <Info className="h-5 w-5" />
                        <span className="sr-only">Info</span>
                    </Button>
                </TooltipTrigger>
                <TooltipContent className="flex items-center gap-3">
                    <span>View documentation</span>
                    <kbd className="rounded border bg-muted px-1.5 py-0.5 text-[10px] font-mono font-medium text-muted-foreground">
                        ⌘+D
                    </kbd>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );
}
