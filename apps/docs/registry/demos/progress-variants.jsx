"use client";

import { Progress, Separator } from "@shery-ui/components";
import { useEffect, useState } from "react";

export default function ProgressVariants() {
    const [value, setValue] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => setValue(65), 500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="flex flex-col gap-6 w-full max-w-md">
            <div className="flex flex-col gap-2">
                <p className="text-sm font-medium">Default</p>
                <Progress value={value} />
            </div>

            <Separator />

            <div className="flex flex-col gap-2">
                <p className="text-sm font-medium">Custom Color</p>
                <Progress value={value} color="#F1A839" speed={300} />
            </div>

            <Separator />

            <div className="flex flex-col gap-2">
                <p className="text-sm font-medium">Custom Height</p>
                <Progress value={value} height={20} />
            </div>

            <Separator />

            <div className="flex flex-col gap-2">
                <p className="text-sm font-medium">Slow Transition</p>
                <Progress value={value} speed={1500} />
            </div>
        </div>
    );
}
