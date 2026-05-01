import { useState } from "react";

function PopoverFormDemo({
    Button,
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverTitle,
    PopoverDescription,
    Input,
    Label,
}) {
    const [open, setOpen] = useState(false);

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button variant="outline">Edit Profile</Button>
            </PopoverTrigger>
            <PopoverContent>
                <PopoverHeader>
                    <PopoverTitle>Edit Profile</PopoverTitle>
                    <PopoverDescription>
                        Make changes to your profile here.
                    </PopoverDescription>
                </PopoverHeader>
                <div className="grid gap-2">
                    <div className="grid gap-1">
                        <Label htmlFor="name">Name</Label>
                        <Input id="name" defaultValue="John Doe" />
                    </div>
                    <div className="grid gap-1">
                        <Label htmlFor="username">Username</Label>
                        <Input id="username" defaultValue="@johndoe" />
                    </div>
                </div>
                <div className="flex justify-end">
                    <Button size="sm" onClick={() => setOpen(false)}>
                        Save changes
                    </Button>
                </div>
            </PopoverContent>
        </Popover>
    );
}

export function renderPopover(components) {
    const {
        Button,
        Popover,
        PopoverTrigger,
        PopoverContent,
        PopoverHeader,
        PopoverTitle,
        PopoverDescription,
        Input,
        Label,
    } = components;

    return (
        <div className="flex flex-col items-start gap-8">
            {/* Basic Popover */}
            <div className="flex flex-col gap-2">
                <p className="text-xs font-medium tracking-wide uppercase text-muted-foreground">
                    Basic
                </p>
                <Popover>
                    <PopoverTrigger asChild>
                        <Button variant="outline">Open Popover</Button>
                    </PopoverTrigger>
                    <PopoverContent>
                        <p className="text-sm">
                            This is a simple popover with some content inside.
                        </p>
                    </PopoverContent>
                </Popover>
            </div>

            {/* Popover with Header */}
            <div className="flex flex-col gap-2">
                <p className="text-xs font-medium tracking-wide uppercase text-muted-foreground">
                    With Header
                </p>
                <Popover>
                    <PopoverTrigger asChild>
                        <Button variant="outline">Info</Button>
                    </PopoverTrigger>
                    <PopoverContent>
                        <PopoverHeader>
                            <PopoverTitle>What is a Popover?</PopoverTitle>
                            <PopoverDescription>
                                A popover displays rich content in a portal,
                                triggered by a button.
                            </PopoverDescription>
                        </PopoverHeader>
                        <p className="text-sm text-muted-foreground">
                            Use it to show extra details without cluttering the
                            main UI.
                        </p>
                    </PopoverContent>
                </Popover>
            </div>

            {/* Popover with Form */}
            <div className="flex flex-col gap-2">
                <p className="text-xs font-medium tracking-wide uppercase text-muted-foreground">
                    With Form
                </p>
                <PopoverFormDemo
                    Button={Button}
                    Popover={Popover}
                    PopoverTrigger={PopoverTrigger}
                    PopoverContent={PopoverContent}
                    PopoverHeader={PopoverHeader}
                    PopoverTitle={PopoverTitle}
                    PopoverDescription={PopoverDescription}
                    Input={Input}
                    Label={Label}
                />
            </div>

            {/* Alignments */}
            <div className="flex flex-col gap-2">
                <p className="text-xs font-medium tracking-wide uppercase text-muted-foreground">
                    Alignments
                </p>
                <div className="flex gap-2">
                    {["start", "center", "end"].map((align) => (
                        <Popover key={align}>
                            <PopoverTrigger asChild>
                                <Button
                                    variant="outline"
                                    size="sm"
                                    className="capitalize"
                                >
                                    {align}
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent align={align}>
                                <PopoverHeader>
                                    <PopoverTitle>Align: {align}</PopoverTitle>
                                    <PopoverDescription>
                                        This popover is aligned to the {align}.
                                    </PopoverDescription>
                                </PopoverHeader>
                            </PopoverContent>
                        </Popover>
                    ))}
                </div>
            </div>
        </div>
    );
}
