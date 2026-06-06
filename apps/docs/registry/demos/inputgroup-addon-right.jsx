import { InputGroup, InputGroupAddon, InputGroupInput } from "@repo/components";

export default function InputGroupAddonRight() {
  return (
    <InputGroup className="w-full max-w-sm">
      <InputGroupInput placeholder="Enter amount" type="number" />
      <InputGroupAddon position="right">USD</InputGroupAddon>
    </InputGroup>
  );
}