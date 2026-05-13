import { Button, ButtonGroup } from "@shery-ui/components";
import { Plus } from "lucide-react";

export default function ButtonGroupDemo() {
    return (
        <ButtonGroup>
            <Button variant="outline">Default</Button>
            <Button variant="outline">Button</Button>
            <Button variant="outline">Group</Button>
            <Button variant="outline" size="icon">
                <Plus />
            </Button>
        </ButtonGroup>
    );
}
