import * as ScrollArea from "@radix-ui/react-scroll-area";
import * as Separator from "@radix-ui/react-separator";
import { cn } from "@repo/utils";
import { Sparkles } from "lucide-react";

export function Navigation({ components, activeComponent, onSelect }) {
    return (
        <nav className="w-56 border-r border-border bg-background flex flex-col">
            {/* Logo */}
            <div className="h-12 border-b border-border flex items-center gap-2 px-4 shrink-0">
                <div className="flex h-7 w-7 items-center justify-center rounded-md bg-primary text-primary-foreground">
                    <Sparkles className="h-3.5 w-3.5" />
                </div>
                <span className="text-sm font-semibold">Studio</span>
            </div>

            {/* Component List with ScrollArea */}
            <ScrollArea.Root className="flex-1 overflow-hidden">
                <ScrollArea.Viewport className="h-full w-full">
                    <div className="p-3">
                        <div className="space-y-0.5">
                            {components.map((component) => (
                                <button
                                    key={component.id}
                                    onClick={() => onSelect(component.id)}
                                    className={cn(
                                        "w-full text-left px-3 py-2 rounded-md text-sm transition-colors",
                                        activeComponent === component.id
                                            ? "bg-accent text-accent-foreground font-medium"
                                            : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                                    )}
                                >
                                    {component.name}
                                </button>
                            ))}
                        </div>
                    </div>
                </ScrollArea.Viewport>
                <ScrollArea.Scrollbar
                    className="flex touch-none select-none p-0.5 bg-transparent transition-colors hover:bg-accent/50"
                    orientation="vertical"
                >
                    <ScrollArea.Thumb className="flex-1 bg-border rounded-full" />
                </ScrollArea.Scrollbar>
            </ScrollArea.Root>

            <Separator.Root className="h-px bg-border" />

            {/* Footer */}
            <div className="p-3 shrink-0">
                <p className="text-xs text-muted-foreground text-center">
                    Component Studio
                </p>
            </div>
        </nav>
    );
}
