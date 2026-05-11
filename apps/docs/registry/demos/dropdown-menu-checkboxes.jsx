"use client";

import {
    Button,
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@repo/components";
import { useState } from "react";

export default function DropdownMenuCheckboxes() {
    const [showStatus, setShowStatus] = useState(true);
    const [showPanel, setShowPanel] = useState(false);
    const [showActivity, setShowActivity] = useState(false);

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline">View Options</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-52">
                <DropdownMenuLabel>Toggle Panels</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuCheckboxItem
                    checked={showStatus}
                    onCheckedChange={setShowStatus}
                >
                    Status Bar
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem
                    checked={showPanel}
                    onCheckedChange={setShowPanel}
                >
                    Activity Panel
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem
                    checked={showActivity}
                    onCheckedChange={setShowActivity}
                >
                    Recent Activity
                </DropdownMenuCheckboxItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
