"use client";

import React, { useState } from "react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@repo/components";
import { ChevronsUpDown } from "lucide-react"; 

export default function OrderCollapsibleDemo() {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full max-w-sm mx-auto p-4">
    
      <div className="w-full rounded-lg border border-border bg-card text-card-foreground shadow-sm overflow-hidden">
        <Collapsible open={open} onOpenChange={setOpen} className="w-full">
          
        
          <CollapsibleTrigger className="flex h-12 w-full items-center justify-between px-4 bg-card hover:bg-muted/20 transition-colors focus:outline-none select-none text-left">
            <span className="text-sm font-semibold tracking-tight text-foreground">Order #4189</span>
            {/* Arrow icon jo pure clean tarike se rotate hoga */}
            <ChevronsUpDown className="h-4 w-4 text-muted-foreground arrow transition-transform duration-200" />
          </CollapsibleTrigger>
          
        
          <CollapsibleContent className="w-full">
            <div className="border-t border-border/80 bg-background/50 px-4 py-3 space-y-3">
              
              {/* Status Row */}
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Status</span>
                <span className="font-medium text-foreground">Shipped</span>
              </div>
              
              
              <div className="pt-2 border-t border-border/40 text-xs text-muted-foreground space-y-1">
                <p className="font-medium text-foreground">Shipping Address</p>
                <p>100 Market St, San Francisco</p>
              </div>

         
              <div className="pt-2 border-t border-border/40 text-xs text-muted-foreground space-y-1">
                <p className="font-medium text-foreground">Items</p>
                <p>2x Studio Headphones</p>
              </div>

            </div>
          </CollapsibleContent>

        </Collapsible>
      </div>
    </div>
  );
}