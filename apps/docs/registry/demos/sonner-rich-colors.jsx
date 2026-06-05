"use client";
import { Button, Toaster } from "@repo/components";
import { toast } from "sonner";

const ID = "sonner-rich-colors";

export default function SonnerRichColors() {
    return (
        <div className="flex flex-wrap justify-center gap-2">
            <Toaster id={ID} richColors />
            <Button
                variant="outline"
                onClick={() =>
                    toast.success("Operation successful!", { toasterId: ID })
                }
            >
                Success
            </Button>
            <Button
                variant="outline"
                onClick={() =>
                    toast.error("Something went wrong.", { toasterId: ID })
                }
            >
                Error
            </Button>
            <Button
                variant="outline"
                onClick={() =>
                    toast.warning("This is a warning.", { toasterId: ID })
                }
            >
                Warning
            </Button>
            <Button
                variant="outline"
                onClick={() =>
                    toast.info("For your information.", { toasterId: ID })
                }
            >
                Info
            </Button>
        </div>
    );
}
