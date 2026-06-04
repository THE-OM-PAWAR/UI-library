import { Skeleton } from "@repo/components";

export default function SkeletonList() {
    return (
        <div className="w-full max-w-sm space-y-4">
            {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="flex items-center gap-3">
                    <Skeleton className="h-10 w-10 rounded-md bg-muted shrink-0" />
                    <div className="flex-1 space-y-2">
                        <Skeleton className="h-4 w-3/4 bg-muted" />
                        <Skeleton className="h-3 w-1/2 bg-muted" />
                    </div>
                    <Skeleton className="h-8 w-8 rounded-full bg-muted shrink-0" />
                </div>
            ))}
        </div>
    );
}
