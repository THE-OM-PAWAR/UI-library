export function renderItem({ Item }, customClassName) {
    return (
        <div className={`flex flex-col gap-2 ${customClassName || ""}`}>
            <Item>Profile</Item>
            <Item>Settings</Item>
            <Item>Logout</Item>
        </div>
    );
}
