import { Skeleton } from "@repo/components";

export default function SkeletonForm() {
    return (
        <div className="w-full max-w-sm space-y-5">
            <div className="space-y-2">
                <Skeleton className="h-4 w-24 bg-muted" />
                <Skeleton className="h-10 w-full rounded-md bg-muted" />
            </div>
            <div className="space-y-2">
                <Skeleton className="h-4 w-20 bg-muted" />
                <Skeleton className="h-10 w-full rounded-md bg-muted" />
            </div>
            <div className="space-y-2">
                <Skeleton className="h-4 w-28 bg-muted" />
                <Skeleton className="h-24 w-full rounded-md bg-muted" />
            </div>
            <div className="flex gap-3 pt-2">
                <Skeleton className="h-10 w-28 rounded-md bg-muted" />
                <Skeleton className="h-10 w-20 rounded-md bg-muted" />
            </div>
        </div>
    );
}
