export function renderKbd({ Kbd }, customClassName) {
    return (
        <div className={`flex gap-2 ${customClassName || ""}`}>
            <Kbd>⌘</Kbd>
            <Kbd>K</Kbd>
            <Kbd>Ctrl</Kbd>
            <Kbd>C</Kbd>
        </div>
    );
}
