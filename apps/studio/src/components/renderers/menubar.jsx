export function renderMenubar(components, customClassName) {
    const {
        Menubar,
        MenubarMenu,
        MenubarTrigger,
        MenubarContent,
        MenubarItem,
    } = components;

    return (
        <Menubar className={customClassName}>
            <MenubarMenu>
                <MenubarTrigger>File</MenubarTrigger>
                <MenubarContent>
                    <MenubarItem>New Tab</MenubarItem>
                    <MenubarItem>Open File</MenubarItem>
                    <MenubarItem>Save</MenubarItem>
                </MenubarContent>
            </MenubarMenu>

            <MenubarMenu>
                <MenubarTrigger>Edit</MenubarTrigger>
                <MenubarContent>
                    <MenubarItem>Undo</MenubarItem>
                    <MenubarItem>Redo</MenubarItem>
                </MenubarContent>
            </MenubarMenu>
        </Menubar>
    );
}
