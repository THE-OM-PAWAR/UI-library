"use client";

import { Progress } from "@repo/components";
import { useEffect, useState } from "react";

export default function ProgressHeight() {
    const [value, setValue] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => setValue(65), 500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="w-full max-w-md">
            <Progress value={value} height={20} />
        </div>
    );
}
