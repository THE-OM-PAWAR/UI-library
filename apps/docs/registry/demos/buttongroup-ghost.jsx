import { Button, ButtonGroup } from "@shery-ui/components";
import { Plus } from "lucide-react";

export default function ButtonGroupGhost() {
    return (
        <ButtonGroup>
            <Button variant="ghost">Save</Button>
            <Button variant="ghost">Cancel</Button>
            <Button variant="ghost" size="icon">
                <Plus />
            </Button>
        </ButtonGroup>
    );
}
