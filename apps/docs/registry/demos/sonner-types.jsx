import { Button, Toaster } from "@repo/components";
import { toast } from "sonner";

const ID = "sonner-types";

export default function SonnerTypes() {
    return (
        <div className="flex flex-wrap justify-center gap-2">
            <Toaster id={ID} />
            <Button
                variant="outline"
                onClick={() =>
                    toast("Default toast message", { toasterId: ID })
                }
            >
                Default
            </Button>
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
            <Button
                variant="outline"
                onClick={() =>
                    toast.loading("Uploading file...", { toasterId: ID })
                }
            >
                Loading
            </Button>
        </div>
    );
}
