"use client";
import { Button, Toaster } from "@repo/components";
import { toast } from "sonner";

export default function SonnerCloseButton() {
    return (
        <div className="flex flex-col items-center gap-3">
            <Toaster id="sonner-close-button" closeButton />
            <Button
                variant="outline"
                onClick={() =>
                    toast("Event has been created.", {
                        toasterId: "sonner-close-button",
                    })
                }
            >
                Show Toast
            </Button>
        </div>
    );
}
