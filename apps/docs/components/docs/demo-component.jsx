"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";

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
