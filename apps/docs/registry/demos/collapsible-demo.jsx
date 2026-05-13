"use client";

import {
    Button,
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@shery-ui/components";
import { useState } from "react";

export default function CollapsibleDemo() {
    const [open, setOpen] = useState(false);

    return (
        <Collapsible
            open={open}
            onOpenChange={setOpen}
            className="w-full max-w-sm space-y-2"
        >
            <div className="flex items-center justify-between rounded-lg border px-4 py-3">
                <span className="text-sm font-medium">Project files</span>
                <CollapsibleTrigger asChild>
                    <Button variant="outline" size="sm">
                        {open ? "Hide" : "Show"}
                    </Button>
                </CollapsibleTrigger>
            </div>
            <CollapsibleContent className="space-y-2">
                <div className="rounded-md border px-4 py-2 text-sm">
                    components.json
                </div>
                <div className="rounded-md border px-4 py-2 text-sm">
                    tailwind.config.js
                </div>
            </CollapsibleContent>
        </Collapsible>
    );
}
