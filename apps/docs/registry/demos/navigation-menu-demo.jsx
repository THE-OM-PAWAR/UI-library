import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@shery-ui/components";

export default function NavigationMenuDemo() {
    return (
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Components</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <div className="grid w-72 gap-1 p-2">
                            <NavigationMenuLink href="/docs/button">
                                Button
                            </NavigationMenuLink>
                            <NavigationMenuLink href="/docs/input">
                                Input
                            </NavigationMenuLink>
                            <NavigationMenuLink href="/docs/table">
                                Table
                            </NavigationMenuLink>
                        </div>
                    </NavigationMenuContent>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    );
}
