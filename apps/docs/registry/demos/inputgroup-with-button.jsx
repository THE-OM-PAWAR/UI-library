import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupButton,
} from "@repo/components";
import { Search } from "lucide-react";

export default function InputGroupWithButton() {
  return (
    <InputGroup className="w-full max-w-sm">
      <InputGroupAddon>
        <Search className="h-4 w-4" />
      </InputGroupAddon>
      <InputGroupInput placeholder="Search..." />
      <InputGroupButton variant="secondary">Go</InputGroupButton>
    </InputGroup>
  );
}