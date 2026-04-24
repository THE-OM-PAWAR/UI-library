export function renderResizable({ ResizablePanelGroup, ResizablePanel, ResizableHandle }) {
  return (
    <div className="grid h-[560px] w-full max-w-4xl shrink-0 gap-4 rounded-lg border border-border bg-card p-4">
      <ResizablePanelGroup direction="horizontal" className="w-full min-w-0 rounded-md border border-border bg-background">
        <ResizablePanel defaultSize={30} minSize={15}>
          <div className="flex h-full items-center justify-center p-4 text-sm text-muted-foreground">Sidebar</div>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={70} minSize={15}>
          <div className="flex h-full items-center justify-center p-4 text-sm text-foreground">Content</div>
        </ResizablePanel>
      </ResizablePanelGroup>

      <ResizablePanelGroup direction="vertical" className="w-full min-w-0 rounded-md border border-border bg-background">
        <ResizablePanel defaultSize={50} minSize={20}>
          <div className="flex h-full items-center justify-center p-4 text-sm text-foreground">Top panel</div>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize={50} minSize={20}>
          <div className="flex h-full items-center justify-center p-4 text-sm text-muted-foreground">Bottom panel</div>
        </ResizablePanel>
      </ResizablePanelGroup>

      <ResizablePanelGroup direction="horizontal" className="w-full min-w-0 rounded-md border border-border bg-background">
        <ResizablePanel defaultSize={20} minSize={10}>
          <div className="flex h-full items-center justify-center p-4 text-sm">Nav</div>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={55} minSize={20}>
          <div className="flex h-full items-center justify-center p-4 text-sm">Editor</div>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={25} minSize={10}>
          <div className="flex h-full items-center justify-center p-4 text-sm text-muted-foreground">Preview</div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}
