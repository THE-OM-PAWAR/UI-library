import {
    Button,
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
    SheetFooter
} from "@repo/components";

export default function sheetTop() {
    return (
        <div className="grid grid-cols-2 gap-3">
            <Sheet>
                <SheetTrigger asChild>
                    <Button variant="secondary" className="w-full">Top sheet</Button>
                </SheetTrigger>
                <SheetContent side="top">
                    <SheetHeader>
                        <SheetTitle>Announcements</SheetTitle>
                        <SheetDescription>Top slide-in variant.</SheetDescription>
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