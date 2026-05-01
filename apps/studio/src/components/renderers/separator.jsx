export function renderSeparator({ Separator }) {
    return (
        <div className="space-y-8 w-full max-w-md">
            {/* Horizontal Separator */}
            <div className="space-y-4">
                <div className="text-sm font-medium">Horizontal</div>
                <div className="space-y-2">
                    <div className="text-sm text-muted-foreground">
                        Above separator
                    </div>
                    <Separator />
                    <div className="text-sm text-muted-foreground">
                        Below separator
                    </div>
                </div>
            </div>

            {/* Vertical Separator */}
            <div className="space-y-4">
                <div className="text-sm font-medium">Vertical</div>
                <div className="flex items-center gap-4 h-12">
                    <div className="text-sm text-muted-foreground">Left</div>
                    <Separator orientation="vertical" />
                    <div className="text-sm text-muted-foreground">Middle</div>
                    <Separator orientation="vertical" />
                    <div className="text-sm text-muted-foreground">Right</div>
                </div>
            </div>

            {/* In Content */}
            <div className="space-y-4">
                <div className="text-sm font-medium">In Content</div>
                <div className="space-y-1">
                    <h4 className="text-sm font-medium">Radix Primitives</h4>
                    <p className="text-sm text-muted-foreground">
                        An open-source UI component library.
                    </p>
                </div>
                <Separator className="my-4" />
                <div className="flex h-5 items-center space-x-4 text-sm">
                    <div>Blog</div>
                    <Separator orientation="vertical" />
                    <div>Docs</div>
                    <Separator orientation="vertical" />
                    <div>Source</div>
                </div>
            </div>
        </div>
    );
}
