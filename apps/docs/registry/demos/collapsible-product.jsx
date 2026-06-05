"use client";

import {
    Button,
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@repo/components";
import { ChevronDown, ChevronUp } from "lucide-react";
import React, { useState } from "react";

export default function CollapsibleProduct() {
    const [open, setOpen] = useState(false);

    return (
        <Collapsible
            open={open}
            onOpenChange={setOpen}
            className="w-full max-w-sm rounded-lg border bg-card text-card-foreground shadow-sm"
        >
            <CollapsibleTrigger asChild>
                <button className="flex w-full items-center justify-between px-4 py-4 font-semibold text-sm hover:bg-accent hover:text-accent-foreground transition-colors rounded-t-lg data-[state=closed]:rounded-b-lg">
                    Product details
                    {open ? (
                        <ChevronUp className="h-4 w-4" />
                    ) : (
                        <ChevronDown className="h-4 w-4" />
                    )}
                </button>
            </CollapsibleTrigger>
            <CollapsibleContent>
                <div className="px-4 pb-4 pt-2 text-sm text-muted-foreground border-t">
                    This panel can be expanded or collapsed to reveal additional
                    content.
                    <div className="mt-4">
                        <Button variant="secondary" size="sm">
                            Learn More
                        </Button>
                    </div>
                </div>
            </CollapsibleContent>
        </Collapsible>
    );
}
