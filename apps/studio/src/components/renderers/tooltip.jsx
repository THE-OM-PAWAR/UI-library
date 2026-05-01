export function renderTooltip(
    { Button, Tooltip, TooltipTrigger, TooltipContent },
    customClassName
) {
    return (
        <Tooltip>
            <TooltipTrigger asChild>
                <Button variant="outline" className={customClassName}>
                    Hover me
                </Button>
            </TooltipTrigger>
            <TooltipContent>
                <p>Tooltip content</p>
            </TooltipContent>
        </Tooltip>
    );
}
