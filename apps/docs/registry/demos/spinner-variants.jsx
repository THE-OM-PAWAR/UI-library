import {
    Badge,
    Button,
    Card,
    CardContent,
    Separator,
    Spinner,
} from "@repo/components";
import { Loader, Loader2 } from "lucide-react";

export default function SpinnerVariants() {
    return (
        <div className="flex flex-col gap-8 w-full">
            <div className="flex flex-col gap-3">
                <p className="text-sm font-medium">Icons</p>
                <div className="flex items-end gap-8">
                    {[
                        { icon: Loader, label: "Loader" },
                        { icon: Loader2, label: "Loader2" },
                    ].map(({ icon, label }) => (
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
                <p className="text-sm font-medium">Sizes</p>
                <div className="flex items-end gap-8">
                    {[
                        { className: "size-3", label: "xs" },
                        { className: "size-4", label: "sm" },
                        { className: "size-6", label: "md" },
                        { className: "size-8", label: "lg" },
                        { className: "size-10", label: "xl" },
                    ].map(({ className, label }) => (
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
                <p className="text-sm font-medium">Colors</p>
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
                <p className="text-sm font-medium">In Button</p>
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
                <p className="text-sm font-medium">In Badge</p>
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

            <Separator />

            <div className="flex flex-col gap-3">
                <p className="text-sm font-medium">In Card</p>
                <Card>
                    <CardContent className="flex flex-col items-center justify-center gap-3 py-10">
                        <Spinner className="size-8 text-primary" />
                        <p className="text-sm text-muted-foreground">
                            Fetching data…
                        </p>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
