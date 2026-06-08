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
            className="w-full max-w-sm border rounded-lg shadow-sm bg-card text-card-foreground"
        >
            <CollapsibleTrigger asChild>
                <button className="flex w-full items-center justify-between px-4 py-4 font-semibold text-sm hover:bg-accent hover:text-accent-foreground transition-colors rounded-t-lg data-[state=closed]:rounded-b-lg">
                    Product details
                    {open ? (
                        <ChevronUp className="w-4 h-4" />
                    ) : (
                        <ChevronDown className="w-4 h-4" />
                    )}
                </button>
            </CollapsibleTrigger>
            <CollapsibleContent>
                <div className="px-4 pt-2 pb-4 text-sm border-t text-muted-foreground">
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
