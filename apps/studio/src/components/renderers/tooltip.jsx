export function renderTooltip(
    { Button, Tooltip, TooltipTrigger, TooltipContent, renderTooltip },
    customClassName,
    options = {}
) {
    const {
        variant = "default",
        size = "default",
        sideOffset = 4,
        alignOffset = 0,
        side = "top",
        content = "Tooltip content",
    } = options;

    return (
        <Tooltip>
            <TooltipTrigger asChild>
                <Button variant="outline" className={customClassName}>
                    Hover me
                </Button>
            </TooltipTrigger>
            <TooltipContent
                variant={variant}
                size={size}
                sideOffset={sideOffset}
                alignOffset={alignOffset}
                side={side}
            >
                <p>{content}</p>
            </TooltipContent>
        </Tooltip>
    );
}
