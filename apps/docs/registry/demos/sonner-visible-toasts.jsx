"use client";
import { Button, Toaster } from "@repo/components";
import { useState } from "react";
import { toast } from "sonner";

const counts = [1, 3, 5, 9];
const ID = "sonner-visible-toasts";

export default function SonnerVisibleToasts() {
    const [visibleToasts, setVisibleToasts] = useState(3);

    return (
        <div className="flex flex-col items-center gap-3">
            <Toaster id={ID} visibleToasts={visibleToasts} />
            <p className="text-sm text-muted-foreground">
                Max visible:{" "}
                <span className="font-medium text-foreground">
                    {visibleToasts}
                </span>
            </p>
            <div className="flex flex-wrap justify-center gap-2">
                {counts.map((n) => (
                    <Button
                        key={n}
                        variant={visibleToasts === n ? "default" : "outline"}
                        onClick={() => setVisibleToasts(n)}
                    >
                        {n}
                    </Button>
                ))}
            </div>
            <Button
                variant="outline"
                onClick={() =>
                    toast(`Toast at ${new Date().toLocaleTimeString()}`, {
                        toasterId: ID,
                    })
                }
            >
                Add Toast
            </Button>
        </div>
    );
}
