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
            <div className="flex items-center justify-between px-4 py-3 border rounded-lg shadow-sm bg-card text-card-foreground">
                <h4 className="text-sm font-semibold">Order #4189</h4>
                <CollapsibleTrigger asChild>
                    <button className="flex items-center justify-center w-8 h-8 transition-colors rounded-md bg-secondary text-secondary-foreground hover:bg-secondary/80">
                        <ChevronsUpDown className="w-4 h-4" />
                        <span className="sr-only">Toggle</span>
                    </button>
                </CollapsibleTrigger>
            </div>

            <CollapsibleContent className="space-y-2">
                <div className="flex items-center justify-between px-4 py-3 text-sm border rounded-lg shadow-sm bg-card text-card-foreground">
                    <span className="font-medium text-muted-foreground">
                        Status
                    </span>
                    <span className="font-semibold">Shipped</span>
                </div>

                <div className="px-4 py-3 text-sm border rounded-lg shadow-sm bg-card text-card-foreground">
                    <span className="block mb-1 font-medium text-muted-foreground">
                        Shipping address
                    </span>
                    <span className="text-foreground">
                        100 Market St, San Francisco
                    </span>
                </div>

                <div className="px-4 py-3 text-sm border rounded-lg shadow-sm bg-card text-card-foreground">
                    <span className="block mb-1 font-medium text-muted-foreground">
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
