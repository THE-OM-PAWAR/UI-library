import { Skeleton } from "@repo/components";

export default function SkeletonBlog() {
    return (
        <div className="w-full max-w-md rounded-lg border bg-card overflow-hidden">
            <Skeleton className="h-48 w-full bg-muted rounded-none" />
            <div className="p-6 space-y-3">
                <div className="flex gap-2">
                    <Skeleton className="h-5 w-16 rounded-full bg-muted" />
                    <Skeleton className="h-5 w-20 rounded-full bg-muted" />
                </div>
                <Skeleton className="h-6 w-3/4 bg-muted" />
                <Skeleton className="h-4 w-full bg-muted" />
                <Skeleton className="h-4 w-full bg-muted" />
                <Skeleton className="h-4 w-2/3 bg-muted" />
                <div className="flex items-center gap-3 pt-3 border-t">
                    <Skeleton className="h-8 w-8 rounded-full bg-muted" />
                    <Skeleton className="h-4 w-24 bg-muted" />
                </div>
            </div>
        </div>
    );
}
