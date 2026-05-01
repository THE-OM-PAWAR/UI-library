export function renderTabs(
    { Tabs, TabsList, TabsTrigger, TabsContent },
    customClassName
) {
    return (
        <Tabs defaultValue="tab1" className={customClassName}>
            <TabsList>
                <TabsTrigger value="tab1">Account</TabsTrigger>
                <TabsTrigger value="tab2">Password</TabsTrigger>
            </TabsList>
            <TabsContent value="tab1">Account content</TabsContent>
            <TabsContent value="tab2">Password content</TabsContent>
        </Tabs>
    );
}
