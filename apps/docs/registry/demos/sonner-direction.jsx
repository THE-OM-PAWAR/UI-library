"use client";
import { Button, Toaster } from "@repo/components";
import { useState } from "react";
import { toast } from "sonner";

const directions = ["ltr", "rtl", "auto"];
const ID = "sonner-direction";

export default function SonnerDirection() {
    const [dir, setDir] = useState("auto");

    return (
        <div className="flex flex-col items-center gap-3">
            <Toaster id={ID} dir={dir} />
            <div className="flex flex-wrap justify-center gap-2">
                {directions.map((d) => (
                    <Button
                        key={d}
                        variant={dir === d ? "default" : "outline"}
                        onClick={() => {
                            setDir(d);
                            toast(`Direction: ${d}`, { toasterId: ID });
                        }}
                    >
                        {d.toUpperCase()}
                    </Button>
                ))}
            </div>
        </div>
    );
}
