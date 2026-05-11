import { Button, ButtonGroup } from "@repo/components";
import { Plus } from "lucide-react";

export default function ButtonGroupSizes() {
    return (
        <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
                <p className="text-sm font-medium text-muted-foreground">
                    Small
                </p>
                <ButtonGroup>
                    <Button variant="outline" size="sm">
                        Small
                    </Button>
                    <Button variant="outline" size="sm">
                        Button
                    </Button>
                    <Button variant="outline" size="sm">
                        Group
                    </Button>
                    <Button variant="outline" size="icon-sm">
                        <Plus />
                    </Button>
                </ButtonGroup>
            </div>

            <div className="flex flex-col gap-2">
                <p className="text-sm font-medium text-muted-foreground">
                    Default
                </p>
                <ButtonGroup>
                    <Button variant="outline">Default</Button>
                    <Button variant="outline">Button</Button>
                    <Button variant="outline">Group</Button>
                    <Button variant="outline" size="icon">
                        <Plus />
                    </Button>
                </ButtonGroup>
            </div>

            <div className="flex flex-col gap-2">
                <p className="text-sm font-medium text-muted-foreground">
                    Large
                </p>
                <ButtonGroup>
                    <Button variant="outline" size="lg">
                        Large
                    </Button>
                    <Button variant="outline" size="lg">
                        Button
                    </Button>
                    <Button variant="outline" size="lg">
                        Group
                    </Button>
                    <Button variant="outline" size="icon-lg">
                        <Plus />
                    </Button>
                </ButtonGroup>
            </div>
        </div>
    );
}
