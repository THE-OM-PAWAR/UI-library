"use client";

import { Suspense } from "react";
import dynamic from "next/dynamic";

export function DemoComponent({ name }) {
  // Dynamically import the demo component
  const Demo = dynamic(() => import(`../../registry/demos/${name}`), {
    loading: () => (
      <div className="flex items-center justify-center p-10 text-muted-foreground">
        Loading...
      </div>
    ),
    ssr: false,
  });

  return <Demo />;
}
