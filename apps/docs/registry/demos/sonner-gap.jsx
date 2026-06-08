"use client";
import { Button, Toaster } from "@repo/components";
import { useState } from "react";
import { toast } from "sonner";

const gaps = [4, 8, 14, 24];
const ID = "sonner-gap";

export default function SonnerGap() {
    const [gap, setGap] = useState(14);

    return (
        <div className="flex flex-col items-center gap-3">
            <Toaster id={ID} gap={gap} />
            <p className="text-sm text-muted-foreground">
                Gap:{" "}
                <span className="font-medium text-foreground">{gap}px</span>
            </p>
            <div className="flex flex-wrap justify-center gap-2">
                {gaps.map((g) => (
                    <Button
                        key={g}
                        variant={gap === g ? "default" : "outline"}
                        onClick={() => setGap(g)}
                    >
                        {g}px
                    </Button>
                ))}
            </div>
            <Button
                variant="outline"
                onClick={() =>
                    toast(`Toast — gap is ${gap}px`, { toasterId: ID })
                }
            >
                Add Toast
            </Button>
        </div>
    );
}
