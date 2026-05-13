import { Button, ButtonGroup } from "@shery-ui/components";
import { Plus } from "lucide-react";

export default function ButtonGroupLg() {
    return (
        <ButtonGroup>
            <Button variant="outline" size="lg">
                Save
            </Button>
            <Button variant="outline" size="lg">
                Cancel
            </Button>
            <Button variant="outline" size="lg">
                <Plus />
            </Button>
        </ButtonGroup>
    );
}
