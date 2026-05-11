"use client";
import {
    ContextMenu,
    ContextMenuTrigger,
    ContextMenuContent,
    ContextMenuCheckboxItem,
    ContextMenuLabel,
    ContextMenuSeparator,
} from "@repo/components";

import { useState } from "react";

export default function ContextMenuCheckbox() {
    const [bookmarks, setBookmarks] = useState(true);
    const [urls, setUrls] = useState(false);

    return (
        <ContextMenu>
            <ContextMenuTrigger className="p-10 items-center justify-center rounded-lg border border-dashed text-sm text-muted-foreground">
                Right click here
            </ContextMenuTrigger>

            <ContextMenuContent>
                <ContextMenuLabel>
                    Preferences
                </ContextMenuLabel>

                <ContextMenuSeparator />

                <ContextMenuCheckboxItem
                    checked={bookmarks}
                    onCheckedChange={setBookmarks}
                >
                    Show Bookmarks Bar
                </ContextMenuCheckboxItem>

                <ContextMenuCheckboxItem
                    checked={urls}
                    onCheckedChange={setUrls}
                >
                    Show Full URLs
                </ContextMenuCheckboxItem>
            </ContextMenuContent>
        </ContextMenu>
    );
}