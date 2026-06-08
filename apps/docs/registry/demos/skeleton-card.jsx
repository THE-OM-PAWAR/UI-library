import { Skeleton } from "@repo/components";

export default function SkeletonCard() {
    return (
        <div className="w-full max-w-sm rounded-lg border bg-card p-6 space-y-4">
            <Skeleton className="h-48 w-full rounded-md bg-muted" />
            <Skeleton className="h-6 w-3/4 bg-muted" />
            <Skeleton className="h-4 w-full bg-muted" />
            <Skeleton className="h-4 w-5/6 bg-muted" />
            <div className="flex gap-2 pt-2">
                <Skeleton className="h-8 w-20 rounded-md bg-muted" />
                <Skeleton className="h-8 w-20 rounded-md bg-muted" />
            </div>
        </div>
    );
}
