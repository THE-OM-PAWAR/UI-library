"use client";

import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@repo/components";
import { ChevronsUpDown } from "lucide-react";
import React, { useState } from "react";

export default function CollapsibleOrder() {
    const [open, setOpen] = useState(false);

    return (
        <Collapsible
            open={open}
            onOpenChange={setOpen}
            className="w-full max-w-sm space-y-2"
        >
            <div className="flex items-center justify-between rounded-lg px-4 py-3 bg-card text-card-foreground shadow-sm border">
                <h4 className="text-sm font-semibold">Order #4189</h4>
                <CollapsibleTrigger asChild>
                    <button className="flex items-center justify-center h-8 w-8 rounded-md bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors">
                        <ChevronsUpDown className="h-4 w-4" />
                        <span className="sr-only">Toggle</span>
                    </button>
                </CollapsibleTrigger>
            </div>

            <CollapsibleContent className="space-y-2">
                <div className="rounded-lg border bg-card text-card-foreground shadow-sm px-4 py-3 flex justify-between items-center text-sm">
                    <span className="text-muted-foreground font-medium">
                        Status
                    </span>
                    <span className="font-semibold">Shipped</span>
                </div>

                <div className="rounded-lg border bg-card text-card-foreground shadow-sm px-4 py-3 text-sm">
                    <span className="text-muted-foreground font-medium block mb-1">
                        Shipping address
                    </span>
                    <span className="text-foreground">
                        100 Market St, San Francisco
                    </span>
                </div>

                <div className="rounded-lg border bg-card text-card-foreground shadow-sm px-4 py-3 text-sm">
                    <span className="text-muted-foreground font-medium block mb-1">
                        Items
                    </span>
                    <span className="text-foreground">
                        2x Studio Headphones
                    </span>
                </div>
            </CollapsibleContent>
        </Collapsible>
    );
}
