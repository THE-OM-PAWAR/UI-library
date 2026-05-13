import { Tabs, TabsContent, TabsList, TabsTrigger } from "@shery-ui/components";

export default function TabsDemo() {
    return (
        <Tabs defaultValue="account" className="w-full max-w-sm">
            <TabsList>
                <TabsTrigger value="account">Account</TabsTrigger>
                <TabsTrigger value="password">Password</TabsTrigger>
            </TabsList>
            <TabsContent
                value="account"
                className="rounded-lg border p-4 text-sm"
            >
                Manage your account settings.
            </TabsContent>
            <TabsContent
                value="password"
                className="rounded-lg border p-4 text-sm"
            >
                Update your password here.
            </TabsContent>
        </Tabs>
    );
}
