"use client";

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
} from "@shery-ui/components";
import { useState } from "react";

const directions = ["bottom", "top", "left", "right"];

export default function DrawerDirections() {
    const [openDir, setOpenDir] = useState(null);

    return (
        <div className="flex flex-wrap items-center gap-3">
            {directions.map((dir) => (
                <Drawer
                    key={dir}
                    direction={dir}
                    open={openDir === dir}
                    onOpenChange={(v) => setOpenDir(v ? dir : null)}
                >
                    <DrawerTrigger asChild>
                        <Button variant="outline" className="capitalize">
                            {dir}
                        </Button>
                    </DrawerTrigger>
                    <DrawerContent>
                        <DrawerHeader>
                            <DrawerTitle className="capitalize">
                                {dir} Drawer
                            </DrawerTitle>
                            <DrawerDescription>
                                This drawer slides in from the {dir}.
                            </DrawerDescription>
                        </DrawerHeader>
                        <div className="p-4">
                            <p className="text-sm text-muted-foreground">
                                Content for the {dir} direction drawer.
                            </p>
                        </div>
                        <DrawerFooter>
                            <DrawerClose asChild>
                                <Button variant="outline">Close</Button>
                            </DrawerClose>
                        </DrawerFooter>
                    </DrawerContent>
                </Drawer>
            ))}
        </div>
    );
}
