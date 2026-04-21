import { useState } from "react";

function ContextMenuDemo({
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuCheckboxItem,
  ContextMenuRadioItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuRadioGroup,
}) {
  const [bookmarksBar, setBookmarksBar] = useState(true);
  const [showFullUrls, setShowFullUrls] = useState(false);
  const [panel, setPanel] = useState("right");

  return (
    <div className="grid w-full max-w-4xl gap-4 md:grid-cols-3">
      <ContextMenu>
        <ContextMenuTrigger className="flex h-36 w-full items-center justify-center rounded-lg border border-dashed border-border bg-card px-4 text-sm text-muted-foreground">
          Right click: Basic menu
        </ContextMenuTrigger>
        <ContextMenuContent>
          <ContextMenuLabel>Actions</ContextMenuLabel>
          <ContextMenuSeparator />
          <ContextMenuItem>
            New File
            <ContextMenuShortcut>Ctrl+N</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuItem>
            Duplicate
            <ContextMenuShortcut>Ctrl+D</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuItem variant="destructive">Delete</ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>

      <ContextMenu>
        <ContextMenuTrigger className="flex h-36 w-full items-center justify-center rounded-lg border border-dashed border-border bg-card px-4 text-sm text-muted-foreground">
          Right click: Nested menu
        </ContextMenuTrigger>
        <ContextMenuContent>
          <ContextMenuLabel>Workspace</ContextMenuLabel>
          <ContextMenuSeparator />
          <ContextMenuSub>
            <ContextMenuSubTrigger inset>Share</ContextMenuSubTrigger>
            <ContextMenuSubContent>
              <ContextMenuItem>Email Link</ContextMenuItem>
              <ContextMenuItem>Copy Invite</ContextMenuItem>
              <ContextMenuItem>Export PDF</ContextMenuItem>
            </ContextMenuSubContent>
          </ContextMenuSub>
          <ContextMenuSub>
            <ContextMenuSubTrigger inset>View</ContextMenuSubTrigger>
            <ContextMenuSubContent>
              <ContextMenuItem>Zoom In</ContextMenuItem>
              <ContextMenuItem>Zoom Out</ContextMenuItem>
              <ContextMenuItem>Reset Zoom</ContextMenuItem>
            </ContextMenuSubContent>
          </ContextMenuSub>
        </ContextMenuContent>
      </ContextMenu>

      <ContextMenu>
        <ContextMenuTrigger className="flex h-36 w-full items-center justify-center rounded-lg border border-dashed border-border bg-card px-4 text-sm text-muted-foreground">
          Right click: Check + radio
        </ContextMenuTrigger>
        <ContextMenuContent>
          <ContextMenuLabel>Preferences</ContextMenuLabel>
          <ContextMenuSeparator />
          <ContextMenuCheckboxItem checked={bookmarksBar} onCheckedChange={setBookmarksBar}>
            Show Bookmarks Bar
          </ContextMenuCheckboxItem>
          <ContextMenuCheckboxItem checked={showFullUrls} onCheckedChange={setShowFullUrls}>
            Show Full URLs
          </ContextMenuCheckboxItem>
          <ContextMenuSeparator />
          <ContextMenuLabel inset>Panel Position</ContextMenuLabel>
          <ContextMenuRadioGroup value={panel} onValueChange={setPanel}>
            <ContextMenuRadioItem value="left">Left</ContextMenuRadioItem>
            <ContextMenuRadioItem value="right">Right</ContextMenuRadioItem>
            <ContextMenuRadioItem value="bottom">Bottom</ContextMenuRadioItem>
          </ContextMenuRadioGroup>
        </ContextMenuContent>
      </ContextMenu>
    </div>
  );
}

export function renderContextMenu(components) {
  return <ContextMenuDemo {...components} />;
}
