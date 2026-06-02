import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "@repo/components";

export default function ResizableVertical() {
    return (
        <ResizablePanelGroup
            direction="vertical"
            style={{ minHeight: "300px" }}
            className="max-w-md rounded-lg border"
        >
            <ResizablePanel
                defaultSize={25}
                className="flex items-center justify-center p-6 text-sm"
            >
                Header
            </ResizablePanel>
            <ResizableHandle withHandle />
            <ResizablePanel
                defaultSize={75}
                className="flex items-center justify-center p-4 text-sm"
            >
                Content
            </ResizablePanel>
        </ResizablePanelGroup>
    );
}
