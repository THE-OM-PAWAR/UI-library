import {
    Button,
    Popover,
    PopoverContent,
    PopoverDescription,
    PopoverHeader,
    PopoverTitle,
    PopoverTrigger,
} from "@repo/components";

export default function PopoverWithHeader() {
    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button variant="outline">Info</Button>
            </PopoverTrigger>
            <PopoverContent>
                <PopoverHeader>
                    <PopoverTitle>What is a Popover?</PopoverTitle>
                    <PopoverDescription>
                        A popover displays rich content in a portal, triggered
                        by a button.
                    </PopoverDescription>
                </PopoverHeader>
                <p className="text-sm text-muted-foreground">
                    Use it to show extra details without cluttering the main UI.
                </p>
            </PopoverContent>
        </Popover>
    );
}
