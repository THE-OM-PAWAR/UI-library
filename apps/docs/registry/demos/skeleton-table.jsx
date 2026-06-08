import { Skeleton } from "@repo/components";

export default function SkeletonTable() {
    return (
        <div className="w-full max-w-lg space-y-3">
            {/* Header */}
            <div className="flex gap-4 pb-3 border-b">
                <Skeleton className="h-4 w-1/4 bg-muted" />
                <Skeleton className="h-4 w-1/4 bg-muted" />
                <Skeleton className="h-4 w-1/4 bg-muted" />
                <Skeleton className="h-4 w-1/4 bg-muted" />
            </div>
            {/* Rows */}
            {[1, 2, 3, 4].map((i) => (
                <div key={i} className="flex gap-4 items-center">
                    <Skeleton className="h-4 w-1/4 bg-muted" />
                    <Skeleton className="h-4 w-1/4 bg-muted" />
                    <Skeleton className="h-4 w-1/4 bg-muted" />
                    <Skeleton className="h-4 w-1/4 bg-muted" />
                </div>
            ))}
        </div>
    );
}
