import {
    ContextMenu,
    ContextMenuContent,
    ContextMenuItem,
    ContextMenuSub,
    ContextMenuSubContent,
    ContextMenuSubTrigger,
    ContextMenuTrigger,
} from "@shery-ui/components";

export default function ContextMenuSubDemo() {
    return (
        <ContextMenu>
            <ContextMenuTrigger className="p-10 items-center justify-center rounded-lg border border-dashed text-sm text-muted-foreground">
                Right click here
            </ContextMenuTrigger>

            <ContextMenuContent>
                <ContextMenuItem>Dashboard</ContextMenuItem>

                <ContextMenuSub>
                    <ContextMenuSubTrigger>Share</ContextMenuSubTrigger>

                    <ContextMenuSubContent>
                        <ContextMenuItem>Email</ContextMenuItem>
                        <ContextMenuItem>Copy Link</ContextMenuItem>
                        <ContextMenuItem>Export PDF</ContextMenuItem>
                    </ContextMenuSubContent>
                </ContextMenuSub>
            </ContextMenuContent>
        </ContextMenu>
    );
}
