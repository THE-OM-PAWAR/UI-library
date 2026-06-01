"use client";

import { Badge } from "@repo/components";
import { cn } from "@repo/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { docsConfig } from "../../config/docs.js";

export function DocsSidebar() {
    const pathname = usePathname();

    return (
        <aside className="fixed top-16 z-30 hidden h-[calc(100vh-4rem)] w-64 shrink-0 overflow-y-auto border-r bg-background md:block">
            <div className="px-4 py-6 lg:px-6">
                {docsConfig.sidebarNav.map((section, i) => (
                    <div key={i} className="pb-6">
                        <h4 className="px-2 py-1 mb-2 text-sm font-semibold text-foreground">
                            {section.title}
                        </h4>
                        <div className="grid grid-flow-row gap-1 text-sm auto-rows-max">
                            {section.items.map((item, index) => (
                                <Link
                                    key={index}
                                    href={item.href}
                                    className={cn(
                                        "group flex w-auto items-center justify-between rounded-md px-2 py-1.5 text-sm transition-colors hover:text-foreground hover:bg-muted/50",
                                        pathname === item.href
                                            ? "font-medium text-foreground bg-muted/30"
                                            : "text-muted-foreground"
                                    )}
                                >
                                    {item.title}
                                    {item.label && (
                                        <Badge
                                            variant="outline"
                                            className={cn(
                                                item.label === "New"
                                                    ? "text-green-500 border-green-500"
                                                    : "text-muted-foreground border-border"
                                            )}
                                        >
                                            {item.label}
                                        </Badge>
                                    )}
                                </Link>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </aside>
    );
}
