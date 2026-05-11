import { Button, ButtonGroup } from "@repo/components";
import { Plus } from "lucide-react";

export default function ButtonGroupOutline() {
    return (
        <ButtonGroup>
            <Button variant="outline">Save</Button>
            <Button variant="outline">Cancel</Button>
            <Button variant="outline" size="icon">
                <Plus />
            </Button>
        </ButtonGroup>
    );
}
