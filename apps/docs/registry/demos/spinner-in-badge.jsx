import { Badge, Spinner } from "@repo/components";

export default function SpinnerInBadge() {
    return (
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
    );
}
