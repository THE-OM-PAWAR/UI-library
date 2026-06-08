"use client";
import { Button, Toaster } from "@repo/components";
import { useState } from "react";
import { toast } from "sonner";

const positions = [
    "top-left",
    "top-center",
    "top-right",
    "bottom-left",
    "bottom-center",
    "bottom-right",
];
const ID = "sonner-position";

export default function SonnerPosition() {
    const [position, setPosition] = useState("bottom-right");

    return (
        <div className="flex flex-col items-center gap-3">
            <Toaster id={ID} position={position} />
            <div className="flex flex-wrap justify-center gap-2">
                {positions.map((pos) => (
                    <Button
                        key={pos}
                        variant={position === pos ? "default" : "outline"}
                        onClick={() => {
                            setPosition(pos);
                            toast(`Position: ${pos}`, { toasterId: ID });
                        }}
                    >
                        {pos}
                    </Button>
                ))}
            </div>
        </div>
    );
}
