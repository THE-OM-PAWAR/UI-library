import { Button, ButtonGroup } from "@shery-ui/components";
import { Plus } from "lucide-react";

export default function ButtonGroupSecondary() {
    return (
        <ButtonGroup>
            <Button variant="secondary">Save</Button>
            <Button variant="secondary">Cancel</Button>
            <Button variant="secondary" size="icon">
                <Plus />
            </Button>
        </ButtonGroup>
    );
}
