import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@repo/components";
import {
    Bell,
    HelpCircle,
    LayoutDashboard,
    Puzzle,
    Settings,
} from "lucide-react";

const items = [
    { label: "Dashboard", icon: LayoutDashboard, isActive: true },
    { label: "Components", icon: Puzzle },
    { label: "Notifications", icon: Bell },
    { label: "Settings", icon: Settings },
    { label: "Help", icon: HelpCircle },
];

export default function SidebarWithIcons() {
    return (
        <div className="h-[500px] rounded-lg border">
            <Sidebar className="h-full">
                <SidebarHeader>
                    <h2 className="text-base font-semibold">Dashboard</h2>
                    <p className="text-sm text-muted-foreground">
                        Navigation menu
                    </p>
                </SidebarHeader>

                <SidebarContent>
                    <SidebarGroup>
                        <SidebarGroupLabel>Main</SidebarGroupLabel>
                        <SidebarGroupContent>
                            <SidebarMenu>
                                {items.map(
                                    ({ label, icon: Icon, isActive }) => (
                                        <SidebarMenuItem key={label}>
                                            <SidebarMenuButton
                                                isActive={isActive}
                                            >
                                                <Icon className="h-4 w-4 mr-2" />
                                                {label}
                                            </SidebarMenuButton>
                                        </SidebarMenuItem>
                                    )
                                )}
                            </SidebarMenu>
                        </SidebarGroupContent>
                    </SidebarGroup>
                </SidebarContent>

                <SidebarFooter>
                    <p className="text-xs text-muted-foreground">v1.0.0</p>
                </SidebarFooter>
            </Sidebar>
        </div>
    );
}
