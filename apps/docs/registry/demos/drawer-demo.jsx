import {
    Button,
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@repo/components";

export default function DrawerDemo() {
    return (
        <Drawer>
            <DrawerTrigger asChild>
                <Button variant="outline">Open Drawer</Button>
            </DrawerTrigger>
            <DrawerContent>
                <DrawerHeader>
                    <DrawerTitle>Drawer Title</DrawerTitle>
                    <DrawerDescription>
                        This is a drawer component that slides in from the
                        bottom.
                    </DrawerDescription>
                </DrawerHeader>
                <div className="p-4">
                    <p className="text-sm text-muted-foreground">
                        Drawer content goes here. You can add any content you
                        want.
                    </p>
                </div>
                <DrawerFooter>
                    <DrawerClose asChild>
                        <Button variant="outline">Close</Button>
                    </DrawerClose>
                    <Button>Submit</Button>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    );
}
