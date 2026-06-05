import { Button, Toaster } from "@repo/components";
import { toast } from "sonner";

export default function SonnerDemo() {
    return (
        <div className="flex flex-col items-center gap-3">
            <Toaster id="sonner-demo" />
            <Button
                variant="outline"
                onClick={() =>
                    toast("Event has been created.", {
                        toasterId: "sonner-demo",
                    })
                }
            >
                Show Toast
            </Button>
        </div>
    );
}
