import { Button, Toaster } from "@repo/components";
import { toast } from "sonner";

export default function SonnerDescription() {
    return (
        <div className="flex flex-col items-center gap-3">
            <Toaster id="sonner-description" />
            <Button
                variant="outline"
                onClick={() =>
                    toast("Event has been created", {
                        description: "Monday, January 3rd at 6:00pm",
                        toasterId: "sonner-description",
                    })
                }
            >
                Show Toast
            </Button>
        </div>
    );
}
