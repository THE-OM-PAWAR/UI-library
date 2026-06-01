import {
    Button,
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@repo/components";

export default function PopoverDemo() {
    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button variant="outline">Open Popover</Button>
            </PopoverTrigger>
            <PopoverContent>
                <p className="text-sm">
                    This is a simple popover with some content inside.
                </p>
            </PopoverContent>
        </Popover>
    );
}
