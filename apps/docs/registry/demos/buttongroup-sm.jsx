import { Button, ButtonGroup } from "@shery-ui/components";
import { Plus } from "lucide-react";

export default function ButtonGroupSm() {
    return (
        <ButtonGroup>
            <Button variant="outline" size="sm">
                Save
            </Button>
            <Button variant="outline" size="sm">
                Cancel
            </Button>
            <Button variant="outline" size="sm">
                <Plus className="size-3" />
            </Button>
        </ButtonGroup>
    );
}
