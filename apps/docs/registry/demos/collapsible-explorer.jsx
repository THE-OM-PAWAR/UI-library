"use client";

import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@repo/components";
import { ChevronRight, FileCode2, FileJson, FileText, Folder } from "lucide-react";
import React, { useState } from "react";

function FolderItem({ name, children }) {
  const [open, setOpen] = useState(false);
  
  return (
    <Collapsible open={open} onOpenChange={setOpen} className="w-full">
      <CollapsibleTrigger asChild>
        <button className="flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-sm font-medium hover:bg-accent hover:text-accent-foreground text-muted-foreground transition-colors">
          <ChevronRight className={`h-4 w-4 transition-transform duration-200 ${open ? "rotate-90" : ""}`} />
          <Folder className="h-4 w-4" />
          {name}
        </button>
      </CollapsibleTrigger>
      <CollapsibleContent>
        <div className="pl-6 pr-2 py-1 space-y-1">
          {children || <div className="text-xs text-muted-foreground/60 px-2 italic">Empty</div>}
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}

function FileItem({ name, icon: Icon = FileCode2 }) {
  return (
    <div className="flex w-full items-center gap-2 rounded-md px-2 py-1.5 pl-8 text-sm font-medium hover:bg-accent hover:text-accent-foreground text-muted-foreground transition-colors cursor-pointer">
      <Icon className="h-4 w-4" />
      {name}
    </div>
  );
}

export default function CollapsibleExplorer() {
  return (
    <div className="w-full max-w-sm rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden">
      <div className="flex items-center gap-1 border-b p-2 bg-muted/40">
        <button className="flex-1 rounded-md bg-background px-3 py-1.5 text-sm font-medium shadow-sm">
          Explorer
        </button>
        <button className="flex-1 rounded-md px-3 py-1.5 text-sm font-medium text-muted-foreground hover:bg-muted">
          Outline
        </button>
      </div>
      <div className="p-2 space-y-1">
        <FolderItem name="components">
          <FileItem name="button.tsx" />
          <FileItem name="collapsible.tsx" />
        </FolderItem>
        <FolderItem name="lib" />
        <FolderItem name="hooks" />
        <FolderItem name="types" />
        <FolderItem name="public" />
        
        <FileItem name="app.tsx" />
        <FileItem name="layout.tsx" />
        <FileItem name="globals.css" icon={FileText} />
        <FileItem name="package.json" icon={FileJson} />
        <FileItem name="tsconfig.json" icon={FileJson} />
        <FileItem name="README.md" icon={FileText} />
        <FileItem name=".gitignore" icon={FileText} />
      </div>
    </div>
  );
}
