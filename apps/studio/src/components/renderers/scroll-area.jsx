// 1. Sabse pehle ye import add karein
import { cn } from "@repo/utils";
import * as React from "react";

export function renderScrollArea({ ScrollArea, ScrollBar }, customClassName) {
    const tags = Array.from({ length: 50 }).map(
        (_, i, a) => `Tag number ${a.length - i}`
    );

    return (
        <div className="flex items-center justify-center p-6">
            <ScrollArea
                // 2. Ab yahan 'cn' ko uska definition mil jayega
                className={cn(
                    "h-72 w-48 rounded-md border border-border bg-popover",
                    customClassName
                )}
            >
                <div className="p-4">
                    <h4 className="mb-4 text-sm font-medium leading-none text-foreground">
                        Tags List
                    </h4>
                    {tags.map((tag) => (
                        <React.Fragment key={tag}>
                            <div className="text-sm text-muted-foreground py-2 border-b border-border/50 last:border-0">
                                {tag}
                            </div>
                        </React.Fragment>
                    ))}
                </div>
                <ScrollBar orientation="vertical" />
            </ScrollArea>
        </div>
    );
}
