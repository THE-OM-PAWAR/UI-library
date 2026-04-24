import * as ResizablePrimitive from "react-resizable-panels";
import { cn } from "@repo/utils";

function ResizablePanelGroup({ className, ...props }) {
  return (
    <ResizablePrimitive.PanelGroup
      data-slot="resizable-panel-group"
      className={cn("flex h-full w-full min-w-0 min-h-0 data-[panel-group-direction=vertical]:flex-col", className)}
      {...props}
    />
  );
}

function ResizablePanel({ className, ...props }) {
  return <ResizablePrimitive.Panel data-slot="resizable-panel" className={cn("min-w-0 min-h-0", className)} {...props} />;
}

function ResizableHandle({ withHandle, className, ...props }) {
  return (
    <ResizablePrimitive.PanelResizeHandle
      data-slot="resizable-handle"
      className={cn(
        "relative flex w-px items-center justify-center bg-border ring-offset-background after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
        "data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:translate-x-0",
        className
      )}
      {...props}
    >
      {withHandle ? <div className="z-10 flex h-6 w-1 shrink-0 rounded-lg bg-border" /> : null}
    </ResizablePrimitive.PanelResizeHandle>
  );
}

export { ResizableHandle, ResizablePanel, ResizablePanelGroup };
