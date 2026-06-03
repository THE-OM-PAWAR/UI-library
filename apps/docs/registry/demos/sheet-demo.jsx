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

export default function SheetDemo() {
    return (
        <div className="grid grid-cols-2 gap-3">
            <Sheet>
                <SheetTrigger asChild>
                    <Button variant="outline" className="w-full">Right sheet</Button>
                </SheetTrigger>
                <SheetContent side="right">
                    <SheetHeader>
                        <SheetTitle>Edit profile</SheetTitle>
                        <SheetDescription>Right side default panel.</SheetDescription>
                    </SheetHeader>
                    <SheetFooter>
                        <Button variant="outline">Cancel</Button>
                        <Button>Save</Button>
                    </SheetFooter>
                </SheetContent>
            </Sheet>
        </div>
    );
}
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="outline">Open sheet</Button>
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>Edit profile</SheetTitle>
                    <SheetDescription>
                        Make quick updates without leaving the page.
                    </SheetDescription>
                </SheetHeader>
            </SheetContent>
        </Sheet>
    );
}
