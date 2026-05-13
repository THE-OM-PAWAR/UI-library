import {
    InputGroup,
    InputGroupAddon,
    InputGroupInput,
} from "@shery-ui/components";
import { Search } from "lucide-react";

export default function InputGroupDemo() {
    return (
        <InputGroup className="w-full max-w-sm">
            <InputGroupAddon>
                <Search className="h-4 w-4" />
            </InputGroupAddon>
            <InputGroupInput placeholder="Search components" />
            <InputGroupAddon position="right">Ctrl K</InputGroupAddon>
        </InputGroup>
    );
}
