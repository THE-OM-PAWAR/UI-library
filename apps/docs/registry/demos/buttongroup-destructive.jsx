import { Button, ButtonGroup } from "@repo/components";
import { Plus } from "lucide-react";

export default function ButtonGroupDestructive() {
    return (
        <ButtonGroup>
            <Button variant="destructive">Delete</Button>
            <Button variant="destructive">Remove</Button>
            <Button variant="destructive" size="icon">
                <Plus />
            </Button>
        </ButtonGroup>
    );
}
