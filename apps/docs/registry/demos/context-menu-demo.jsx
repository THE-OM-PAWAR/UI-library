import {
    ContextMenu,
    ContextMenuTrigger,
    ContextMenuContent,
    ContextMenuItem,
    ContextMenuLabel,
    ContextMenuSeparator,
} from "@repo/components";

export default function ContextMenuDemo() {
    return (
        <ContextMenu>
            <ContextMenuTrigger className="p-10 items-center justify-center rounded-lg border border-dashed text-sm text-muted-foreground">
                Right click here
            </ContextMenuTrigger>

            <ContextMenuContent>
                <ContextMenuLabel>Actions</ContextMenuLabel>

                <ContextMenuSeparator />

                <ContextMenuItem>New File</ContextMenuItem>
                <ContextMenuItem>Duplicate</ContextMenuItem>

                <ContextMenuItem variant="destructive">
                    Delete
                </ContextMenuItem>
            </ContextMenuContent>
        </ContextMenu>
    );
}