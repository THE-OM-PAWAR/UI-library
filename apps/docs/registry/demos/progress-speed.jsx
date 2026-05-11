"use client";

import { useEffect, useState } from "react";
import { Progress } from "@repo/components";

export default function ProgressSpeed() {
    const [value, setValue] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => setValue(65), 500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="w-full max-w-md">
            <Progress value={value} speed={1500} />
        </div>
    );
}
