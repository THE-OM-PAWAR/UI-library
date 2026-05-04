export function renderInputGroup(components, customClassName) {
  const { InputGroup, InputGroupAddon, InputGroupInput } = components;

  return (
    <div className={`flex flex-col gap-4 ${customClassName || ""}`}>
      <InputGroup>
        <InputGroupAddon>₹</InputGroupAddon>
        <InputGroupInput placeholder="Enter amount" type="number" />
      </InputGroup>

      <InputGroup>
        <InputGroupInput placeholder="Search..." type="text" />
        <InputGroupAddon position="right">🔍</InputGroupAddon>
      </InputGroup>
    </div>
  );
}
