import {
    Button,
    Sheet,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@repo/components";

export default function sheetLeft() {
    return (
        <div className="grid grid-cols-2 gap-3">
            <Sheet>
                <SheetTrigger asChild>
                    <Button variant="ghost" className="w-full">
                        Left sheet
                    </Button>
                </SheetTrigger>
                <SheetContent side="left">
                    <SheetHeader>
                        <SheetTitle>Filters</SheetTitle>
                        <SheetDescription>Left side variant.</SheetDescription>
                    </SheetHeader>
                    <SheetFooter>
                        <Button variant="outline">Dismiss</Button>
                        <Button>Continue</Button>
                    </SheetFooter>
                </SheetContent>
            </Sheet>
        </div>
    );
}
