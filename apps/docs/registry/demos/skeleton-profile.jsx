import { Skeleton } from "@repo/components";

export default function SkeletonProfile() {
    return (
        <div className="w-full max-w-sm rounded-lg border bg-card p-6 space-y-4">
            <div className="flex items-center gap-4">
                <Skeleton className="h-16 w-16 rounded-full bg-muted" />
                <div className="space-y-2">
                    <Skeleton className="h-5 w-32 bg-muted" />
                    <Skeleton className="h-4 w-48 bg-muted" />
                </div>
            </div>
            <div className="space-y-2 pt-2">
                <Skeleton className="h-4 w-full bg-muted" />
                <Skeleton className="h-4 w-full bg-muted" />
                <Skeleton className="h-4 w-2/3 bg-muted" />
            </div>
            <div className="flex gap-4 pt-2">
                <Skeleton className="h-10 w-24 rounded-md bg-muted" />
                <Skeleton className="h-10 w-24 rounded-md bg-muted" />
            </div>
        </div>
    );
}
