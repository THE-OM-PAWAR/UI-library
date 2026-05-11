import {
    Button,
    ButtonGroup,
    Dropdown,
    DropdownContent,
    DropdownItem,
    DropdownTrigger,
} from "@repo/components";

export default function ButtonGroupWithDropdown() {
    return (
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
    );
}
