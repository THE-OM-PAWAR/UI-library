import { PlusIcon } from "lucide-react";

export function renderButtonGroup({
    ButtonGroup,
    Button,
    Dropdown,
    DropdownTrigger,
    DropdownContent,
    DropdownItem,
}) {
    return (
        <div className="p-10 flex flex-col gap-10">
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
                    <PlusIcon />
                </Button>
            </ButtonGroup>
            <ButtonGroup>
                <Button variant="outline">Default</Button>
                <Button variant="outline">Button</Button>
                <Button variant="outline">Group</Button>
                <Button variant="outline" size="icon">
                    <PlusIcon />
                </Button>
            </ButtonGroup>
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
                    <PlusIcon />
                </Button>
            </ButtonGroup>
            {/*secondGroup button wit drop down menu */}
            <ButtonGroup>
                <Button className="rounded-l-md border-r-0">Save</Button>
                <Button className="border-r-0">Cancel</Button>

                <Dropdown>
                    <DropdownTrigger className="rounded-r-md">
                        More ▾
                    </DropdownTrigger>

                    <DropdownContent>
                        <DropdownItem>Edit</DropdownItem>

                        <DropdownItem>Delete</DropdownItem>
                        <DropdownItem>Share</DropdownItem>
                    </DropdownContent>
                </Dropdown>
            </ButtonGroup>
        </div>
    );
}
