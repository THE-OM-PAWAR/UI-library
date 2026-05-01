import { toast } from "sonner";

export function renderSonner({ Button }) {
    return (
        <Button
            onClick={() =>
                toast("Event has been created", {
                    description: "Monday, January 3rd at 6:00pm",
                })
            }
        >
            Show Toast
        </Button>
    );
}
