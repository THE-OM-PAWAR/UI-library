import { Skeleton } from "@shery-ui/components";

export default function SkeletonDemo() {
    return (
        <div className="flex w-full max-w-sm items-center gap-4">
            <Skeleton className="h-12 w-12 rounded-full bg-muted" />
            <div className="space-y-2">
                <Skeleton className="h-4 w-48 bg-muted" />
                <Skeleton className="h-4 w-32 bg-muted" />
            </div>
        </div>
    );
}
