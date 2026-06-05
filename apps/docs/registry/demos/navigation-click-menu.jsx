import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@repo/components";

const components = [
    {
        title: "Alert Dialog",
        href: "/docs/primitives/alert-dialog",
        description:
            "A modal dialog that interrupts the user with important content and expects a response.",
    },
    {
        title: "Hover Card",
        href: "/docs/primitives/hover-card",
        description:
            "For sighted users to preview content available behind a link.",
    },
    {
        title: "Progress",
        href: "/docs/primitives/progress",
        description:
            "Displays an indicator showing the completion progress of a task.",
    },
    {
        title: "Scroll-area",
        href: "/docs/primitives/scroll-area",
        description: "Visually or semantically separates content.",
    },
    {
        title: "Tabs",
        href: "/docs/primitives/tabs",
        description:
            "A set of layered sections of content—known as tab panels.",
    },
    {
        title: "Tooltip",
        href: "/docs/primitives/tooltip",
        description: "A popup that appears on hover or focus.",
    },
];

export default function NavigationMenuClick() {
    return (
        <NavigationMenu>
            <NavigationMenuList>
                {/* Getting Started */}
                <NavigationMenuItem>
                    <NavigationMenuTrigger>
                        Getting started
                    </NavigationMenuTrigger>

                    <NavigationMenuContent className="navigation-content">
                        <ul className="w-96">
                            <ListItem href="/docs" title="Introduction">
                                Re-usable components built with Tailwind CSS.
                            </ListItem>

                            <ListItem
                                href="/docs/installation"
                                title="Installation"
                            >
                                How to install dependencies and structure your
                                app.
                            </ListItem>

                            <ListItem
                                href="/docs/typography"
                                title="Typography"
                            >
                                Styles for headings, paragraphs, lists...etc
                            </ListItem>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Components */}
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Components</NavigationMenuTrigger>

                    <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                            {components.map((component) => (
                                <ListItem
                                    key={component.title}
                                    title={component.title}
                                    href={component.href}
                                >
                                    {component.description}
                                </ListItem>
                            ))}
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Docs */}
                <NavigationMenuItem>
                    <NavigationMenuLink
                        className={navigationMenuTriggerStyle()}
                    >
                        <a href="/docs">Docs</a>
                    </NavigationMenuLink>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    );
}
function ListItem({ title, children, href, ...props }) {
    return (
        <li {...props}>
            <NavigationMenuLink asChild>
                <a href={href}>
                    <div className="flex flex-col gap-1 text-sm">
                        <div className="font-medium leading-none">{title}</div>
                        <div className="line-clamp-2 text-muted-foreground">
                            {children}
                        </div>
                    </div>
                </a>
            </NavigationMenuLink>
        </li>
    );
}
