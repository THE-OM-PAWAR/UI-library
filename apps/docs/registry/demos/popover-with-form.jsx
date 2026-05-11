"use client";

import {
    Button,
    Input,
    Label,
    Popover,
    PopoverContent,
    PopoverDescription,
    PopoverHeader,
    PopoverTitle,
    PopoverTrigger,
} from "@repo/components";
import { useState } from "react";

export default function PopoverWithForm() {
    const [open, setOpen] = useState(false);

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button variant="outline">Edit Profile</Button>
            </PopoverTrigger>
            <PopoverContent>
                <PopoverHeader>
                    <PopoverTitle>Edit Profile</PopoverTitle>
                    <PopoverDescription>
                        Make changes to your profile here.
                    </PopoverDescription>
                </PopoverHeader>
                <div className="grid gap-2">
                    <div className="grid gap-1">
                        <Label htmlFor="name">Name</Label>
                        <Input id="name" defaultValue="John Doe" />
                    </div>
                    <div className="grid gap-1">
                        <Label htmlFor="username">Username</Label>
                        <Input id="username" defaultValue="@johndoe" />
                    </div>
                </div>
                <div className="flex justify-end">
                    <Button size="sm" onClick={() => setOpen(false)}>
                        Save changes
                    </Button>
                </div>
            </PopoverContent>
        </Popover>
    );
}
