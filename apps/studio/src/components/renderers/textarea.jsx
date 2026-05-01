export function renderTextarea({
    Textarea,
    Heading,
    Separator,
    Label,
    Button,
}) {
    return (
        <div className="flex flex-col w-full gap-8">
            <div className="flex flex-col gap-3">
                <Heading size="h5">Default</Heading>
                <Textarea placeholder="Type something…" />
            </div>

            <Separator />

            <div className="flex flex-col gap-3">
                <Heading size="h5">With Border Radius</Heading>
                <Textarea placeholder="Type something…" radius="16" />
            </div>

            <Separator />

            <div className="flex flex-col gap-3">
                <Heading size="h5">With Custom Rows</Heading>
                <Textarea placeholder="Type something…" rows="10" />
            </div>

            <Separator />

            <div className="flex flex-col gap-3">
                <Heading size="h5">With Label</Heading>
                <div className="flex flex-col gap-1.5">
                    <Label htmlFor="bio">Bio</Label>
                    <Textarea id="bio" placeholder="Tell us about yourself…" />
                </div>
            </div>

            <Separator />

            <div className="flex flex-col gap-3">
                <Heading size="h5">Disabled</Heading>
                <Textarea placeholder="This field is disabled" disabled />
            </div>

            <Separator />

            <div className="flex flex-col gap-3">
                <Heading size="h5">Invalid</Heading>
                <div className="flex flex-col gap-1.5">
                    <Textarea
                        aria-invalid="true"
                        defaultValue="Bad input value"
                    />
                    <Heading size="p" className="text-destructive">
                        This field has an error.
                    </Heading>
                </div>
            </div>

            <Separator />

            <div className="flex flex-col gap-3">
                <Heading size="h5">With Footer</Heading>
                <div className="flex flex-col gap-2">
                    <Textarea
                        id="message"
                        placeholder="Write your message…"
                        rows={4}
                    />
                    <div className="flex items-center justify-between">
                        <Heading
                            size="p"
                            className="text-xs text-muted-foreground"
                        >
                            Max 500 characters
                        </Heading>
                        <Button size="sm">Submit</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
