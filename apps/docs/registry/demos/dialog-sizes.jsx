"use client";

import {
    Button,
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@repo/components";
import { useState } from "react";

const sizes = ["sm", "md", "lg", "xl"];

export default function DialogSizes() {
    const [openSize, setOpenSize] = useState(null);

    return (
        <div className="flex flex-wrap items-center gap-3">
            {sizes.map((size) => (
                <Dialog
                    key={size}
                    open={openSize === size}
                    onOpenChange={(v) => setOpenSize(v ? size : null)}
                >
                    <DialogTrigger asChild>
                        <Button variant="outline" className="uppercase">
                            {size}
                        </Button>
                    </DialogTrigger>
                    <DialogContent size={size}>
                        <DialogHeader>
                            <DialogTitle className="capitalize">
                                {size} Dialog
                            </DialogTitle>
                            <DialogDescription>
                                This dialog uses the{" "}
                                <code className="font-mono text-xs">
                                    size="{size}"
                                </code>{" "}
                                prop.
                            </DialogDescription>
                        </DialogHeader>
                        <p className="text-sm text-muted-foreground">
                            The content area adjusts to match the selected size
                            variant.
                        </p>
                        <DialogFooter>
                            <DialogClose asChild>
                                <Button variant="outline">Close</Button>
                            </DialogClose>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
            ))}
        </div>
    );
}
