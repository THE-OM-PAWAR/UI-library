"use client";

import { Progress } from "@shery-ui/components";
import { useEffect, useState } from "react";

export default function ProgressColor() {
    const [value, setValue] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => setValue(65), 500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="w-full max-w-md">
            <Progress value={value} color="#F1A839" speed={300} />
        </div>
    );
}
