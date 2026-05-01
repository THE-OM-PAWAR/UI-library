import { Loader, Loader2 } from "lucide-react";

const icons = [
    { icon: Loader, label: "Loader" },
    { icon: Loader2, label: "Loader2" },
];

const sizes = [
    { className: "size-3", label: "xs" },
    { className: "size-4", label: "sm" },
    { className: "size-6", label: "md" },
    { className: "size-8", label: "lg" },
    { className: "size-10", label: "xl" },
];

export function renderSpinner({
    Spinner,
    Heading,
    Separator,
    Button,
    Card,
    CardContent,
    Badge,
}) {
    return (
        <div className="flex flex-col w-full gap-8">
            <div className="flex flex-col gap-3">
                <Heading size="h5">Icons</Heading>
                <Heading size="p" className="text-sm text-muted-foreground">
                    Pass any Lucide icon via the{" "}
                    <Heading size="code">icon</Heading> prop.
                </Heading>
                <div className="flex items-end gap-8 mt-1">
                    {icons.map(({ icon, label }) => (
                        <div
                            key={label}
                            className="flex flex-col items-center gap-2"
                        >
                            <Spinner icon={icon} className="size-6" />
                            <span className="text-xs text-muted-foreground">
                                {label}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            <Separator />

            <div className="flex flex-col gap-3">
                <Heading size="h5">Sizes</Heading>
                <div className="flex items-end gap-8">
                    {sizes.map(({ className, label }) => (
                        <div
                            key={label}
                            className="flex flex-col items-center gap-2"
                        >
                            <Spinner className={className} />
                            <span className="text-xs text-muted-foreground">
                                {label}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            <Separator />

            <div className="flex flex-col gap-3">
                <Heading size="h5">Colors</Heading>
                <div className="flex items-center gap-6">
                    {[
                        { cls: "text-foreground", label: "Foreground" },
                        { cls: "text-primary", label: "Primary" },
                        { cls: "text-destructive", label: "Destructive" },
                        { cls: "text-muted-foreground", label: "Muted" },
                    ].map(({ cls, label }) => (
                        <div
                            key={cls}
                            className="flex flex-col items-center gap-2"
                        >
                            <Spinner className={`size-6 ${cls}`} />
                            <span className="text-xs text-muted-foreground">
                                {label}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            <Separator />

            <div className="flex flex-col gap-3">
                <Heading size="h5">In Button</Heading>
                <div className="flex flex-wrap items-center gap-3">
                    <Button disabled>
                        <Spinner className="size-4" />
                        Loading…
                    </Button>
                    <Button variant="outline" disabled>
                        <Spinner className="size-4" />
                        Saving…
                    </Button>
                    <Button variant="secondary" disabled>
                        <Spinner className="size-4" />
                        Please wait
                    </Button>
                </div>
            </div>

            <Separator />

            <div className="flex flex-col gap-3">
                <Heading size="h5">In Card</Heading>
                <Card>
                    <CardContent className="flex flex-col items-center justify-center gap-3 py-10">
                        <Spinner className="size-8 text-primary" />
                        <p className="text-sm text-muted-foreground">
                            Fetching data…
                        </p>
                    </CardContent>
                </Card>
            </div>

            <Separator />

            <div className="flex flex-col gap-3">
                <Heading size="h5">In Badge</Heading>
                <div className="flex flex-wrap items-center gap-3">
                    <Badge variant="outline" className="gap-2">
                        <Spinner className="size-3" />
                        Processing
                    </Badge>
                    <Badge className="gap-2">
                        <Spinner className="size-3" />
                        Syncing
                    </Badge>
                </div>
            </div>
        </div>
    );
}
