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

export default function sheetBottom() {
    return (
        <div className="grid grid-cols-2 gap-3">
            <Sheet>
                <SheetTrigger asChild>
                    <Button className="w-full">Bottom sheet</Button>
                </SheetTrigger>
                <SheetContent side="bottom">
                    <SheetHeader>
                        <SheetTitle>Quick actions</SheetTitle>
                        <SheetDescription>Bottom sheet variant.</SheetDescription>
                    </SheetHeader>
                    <SheetFooter>
                        <Button variant="outline">Dismiss</Button>
                        <Button>Continue</Button>
                    </SheetFooter>
                </SheetContent>
            </Sheet>
        </div>
    )
}