import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "@shery-ui/components";

export default function ResizableDemo() {
    return (
        <ResizablePanelGroup
            direction="horizontal"
            className="h-48 max-w-md rounded-lg border"
        >
            <ResizablePanel
                defaultSize={50}
                className="flex items-center justify-center p-4 text-sm"
            >
                Sidebar
            </ResizablePanel>
            <ResizableHandle withHandle />
            <ResizablePanel
                defaultSize={50}
                className="flex items-center justify-center p-4 text-sm"
            >
                Content
            </ResizablePanel>
        </ResizablePanelGroup>
    );
}
