"use client";
import {
    ContextMenu,
    ContextMenuTrigger,
    ContextMenuContent,
    ContextMenuRadioGroup,
    ContextMenuRadioItem,
    ContextMenuLabel,
    ContextMenuSeparator,
} from "@repo/components";

import { useState } from "react";

export default function ContextMenuRadio() {
    const [position, setPosition] = useState("right");

    return (
        <div>
            <ContextMenu>
                <ContextMenuTrigger className="p-10 items-center justify-center rounded-lg border border-dashed text-sm text-muted-foreground">
                    Right click here
                </ContextMenuTrigger>

                <ContextMenuContent>
                    <ContextMenuLabel>
                        Panel Position
                    </ContextMenuLabel>

                    <ContextMenuSeparator />

                    <ContextMenuRadioGroup
                        value={position}
                        onValueChange={setPosition}
                    >
                        <ContextMenuRadioItem value="left">
                            Left
                        </ContextMenuRadioItem>

                        <ContextMenuRadioItem value="right">
                            Right
                        </ContextMenuRadioItem>

                        <ContextMenuRadioItem value="bottom">
                            Bottom
                        </ContextMenuRadioItem>
                    </ContextMenuRadioGroup>
                </ContextMenuContent>
            </ContextMenu>
        </div>
    );
}