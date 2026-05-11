import {
    Button,
    Popover,
    PopoverContent,
    PopoverDescription,
    PopoverHeader,
    PopoverTitle,
    PopoverTrigger,
} from "@repo/components";

export default function PopoverAlignments() {
    return (
        <div className="flex gap-2">
            {["start", "center", "end"].map((align) => (
                <Popover key={align}>
                    <PopoverTrigger asChild>
                        <Button
                            variant="outline"
                            size="sm"
                            className="capitalize"
                        >
                            {align}
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent align={align}>
                        <PopoverHeader>
                            <PopoverTitle>Align: {align}</PopoverTitle>
                            <PopoverDescription>
                                This popover is aligned to the {align}.
                            </PopoverDescription>
                        </PopoverHeader>
                    </PopoverContent>
                </Popover>
            ))}
        </div>
    );
}
