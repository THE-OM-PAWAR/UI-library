import * as React from 'react';

function SkeletonDemo({ Skeleton }) {
  if (!Skeleton) {
    return <div>Skeleton component not found in library</div>;
  }
  return (
<div className="flex flex-row flex-wrap gap-8 w-full p-8 items-start">
      
      {/* 1. Avatar Pattern */}
   <div className="space-y-3 w-[350px]">
        <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Avatar Layout</span>
        <div className="flex items-center space-x-4 p-4 border border-border rounded-xl bg-[#0a0a0a]">
          <Skeleton className="h-12 w-12 rounded-full shrink-0" />
          <div className="space-y-2 w-full">
            <Skeleton className="h-4 w-[80%]" />
            <Skeleton className="h-3 w-[50%]" />
          </div>
        </div>
      </div>

      {/* 2. Card Pattern */}
   <div className="space-y-3 w-[350px]">
        <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Card Layout</span>
        <div className="p-4 border border-border rounded-xl bg-[#0a0a0a] space-y-4">
          <Skeleton className="h-32 w-full rounded-lg" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-[90%]" />
            <Skeleton className="h-4 w-[70%]" />
          </div>
        </div>
      </div>

      {/* 3. Form Pattern */}
     <div className="space-y-3 w-[350px]">
        <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Form Layout</span>
        <div className="p-4 border border-border rounded-xl bg-[#0a0a0a] space-y-4">
          <div className="space-y-2">
            <Skeleton className="h-3 w-16" />
            <Skeleton className="h-9 w-full" />
          </div>
          <div className="space-y-2">
            <Skeleton className="h-3 w-20" />
            <Skeleton className="h-9 w-full" />
          </div>
        </div>
      </div>

      {/* 4. Table Pattern */}
    <div className="space-y-3 w-[400px]">
        <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Table Layout</span>
        <div className="p-4 border border-border rounded-xl bg-[#0a0a0a] space-y-4">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex items-center justify-between gap-4">
              <Skeleton className="h-3 w-20" />
              <Skeleton className="h-3 w-24" />
              <Skeleton className="h-3 w-12" />
            </div>
          ))}
        </div>
      </div>
      <Skeleton className="h-12 w-12 rounded-full" />
    </div>
  );
}

export function renderSkeleton(components) {
  return <SkeletonDemo {...components} />;
}