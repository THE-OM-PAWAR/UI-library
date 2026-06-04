import { Heading } from "@repo/components";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import {
    DocsDescription,
    DocsHeading,
} from "../../../components/docs/docs-heading";

export const metadata = {
    title: "Components - UI Library",
    description: "Browse all the components available in the library.",
};

const components = [
    {
        name: "Accordion",
        slug: "accordion",
        description: "A collapsible content area that expands and collapses.",
    },
    {
        name: "Alert",
        slug: "alert",
        description:
            "Displays a callout for important information or messages.",
    },
    {
        name: "Aspect Ratio",
        slug: "aspect-ratio",
        description: "Displays content within a desired ratio.",
    },
    {
        name: "Avatar",
        slug: "avatar",
        description:
            "An image element with a fallback for representing the user.",
    },
    {
        name: "Badge",
        slug: "badge",
        description: "Displays a badge or a component that looks like a badge.",
    },
    {
        name: "Breadcrumb",
        slug: "breadcrumb",
        description: "Displays the path to the current page.",
    },
    {
        name: "Button",
        slug: "button",
        description:
            "Displays a button or a component that looks like a button.",
    },
    {
        name: "Button Group",
        slug: "button-group",
        description: "Groups multiple buttons together into a single unit.",
    },
    {
        name: "Calendar",
        slug: "calendar",
        description: "A date picker component for selecting dates.",
    },
    {
        name: "Card",
        slug: "card",
        description: "Displays a card with header, content, and footer.",
    },
    {
        name: "Carousel",
        slug: "carousel",
        description: "A slider or carousel for cycling through content.",
    },
    {
        name: "Chart",
        slug: "chart",
        description: "Displays data visualization charts.",
    },
    {
        name: "Checkbox",
        slug: "checkbox",
        description:
            "A control that allows the user to toggle between checked and not checked.",
    },
    {
        name: "Collapsible",
        slug: "collapsible",
        description:
            "A collapsible section that can be expanded and collapsed.",
    },
    {
        name: "Combobox",
        slug: "combobox",
        description: "A dropdown with search and autocomplete functionality.",
    },
    {
        name: "Context Menu",
        slug: "context-menu",
        description: "A menu that appears on right-click.",
    },
    {
        name: "Data Table",
        slug: "data-table",
        description:
            "A table component with sorting, filtering, and pagination.",
    },
    {
        name: "Dialog",
        slug: "dialog",
        description:
            "A window overlaid on either the primary window or another dialog window.",
    },
    {
        name: "Drawer",
        slug: "drawer",
        description:
            "A drawer component that slides in from the edge of the screen.",
    },
    {
        name: "Dropdown Menu",
        slug: "dropdown-menu",
        description: "Displays a menu triggered by a button.",
    },
    {
        name: "Empty",
        slug: "empty",
        description: "An empty state component for when there is no data.",
    },
    {
        name: "Field",
        slug: "field",
        description: "A form field wrapper with label and error messaging.",
    },
    {
        name: "Headings",
        slug: "headings",
        description:
            "Styles for headings, paragraphs, lists and other typographic elements.",
    },
    {
        name: "Hover Card",
        slug: "hover-card",
        description: "Displays rich content when hovering over a trigger.",
    },
    {
        name: "Image",
        slug: "image",
        description:
            "An image component with support for fallback and various fit modes.",
    },
    {
        name: "Input",
        slug: "input",
        description: "A form input component for text entry.",
    },
    {
        name: "Input Group",
        slug: "inputgroup",
        description: "Groups input elements with addons or buttons.",
    },
    {
        name: "Input OTP",
        slug: "inputotp",
        description: "A one-time password input component.",
    },
    { name: "Item", slug: "item", description: "A list item component." },
    {
        name: "Kbd",
        slug: "kbd",
        description: "Displays keyboard input or shortcuts.",
    },
    { name: "Label", slug: "label", description: "A form label component." },
    {
        name: "Menubar",
        slug: "menubar",
        description: "A horizontal menu bar with nested menus.",
    },
    {
        name: "Navigation Menu",
        slug: "navigation-menu",
        description: "A navigation component with dropdowns.",
    },
    {
        name: "Pagination",
        slug: "pagination",
        description: "Pagination navigation for navigating between pages.",
    },
    {
        name: "Popover",
        slug: "popover",
        description:
            "Displays rich content in a portal, triggered by a button.",
    },
    {
        name: "Progress",
        slug: "progress",
        description:
            "Displays an indicator showing the completion progress of a task.",
    },
    {
        name: "Radio",
        slug: "radio",
        description:
            "A radio button input for selecting one option from a set.",
    },
    {
        name: "Resizable",
        slug: "resizable",
        description: "A resizable panel component.",
    },
    {
        name: "Scroll Area",
        slug: "scroll-area",
        description: "A custom scrollbar component.",
    },
    {
        name: "Separator",
        slug: "separator",
        description: "A visual divider between content sections.",
    },
    {
        name: "Sheet",
        slug: "sheet",
        description:
            "A sliding panel that appears from the edge of the screen.",
    },
    {
        name: "Sidebar",
        slug: "sidebar",
        description:
            "A composable, themeable and customizable sidebar component.",
    },
    {
        name: "Skeleton",
        slug: "skeleton",
        description: "A placeholder loading component.",
    },
    {
        name: "Sonner",
        slug: "sonner",
        description: "A toast notification component.",
    },
    {
        name: "Spinner",
        slug: "spinner",
        description: "Displays an animated loading spinner.",
    },
    {
        name: "Switch",
        slug: "switch",
        description: "A toggle switch for on/off states.",
    },
    {
        name: "Table",
        slug: "table",
        description: "A styled HTML table component.",
    },
    {
        name: "Tabs",
        slug: "tabs",
        description: "A tabbed interface for organizing content.",
    },
    {
        name: "Textarea",
        slug: "textarea",
        description:
            "Displays a form textarea or a component that looks like a textarea.",
    },
    {
        name: "Toggle",
        slug: "toggle",
        description: "A two-state button that can be either on or off.",
    },
    {
        name: "Tooltip",
        slug: "tooltip",
        description: "Displays a tooltip on hover.",
    },
];

export default function ComponentsPage() {
    return (
        <div className="container max-w-5xl px-4 py-10 mx-auto md:px-8">
            <div className="mb-10">
                <DocsHeading level={1} className="mb-3">
                    Components
                </DocsHeading>
                <DocsDescription className="mb-0">
                    Here you can find all the components available in the
                    library. We are working on adding more components.
                </DocsDescription>
            </div>

            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
                {components.map((component) => (
                    <Link
                        key={component.slug}
                        href={`/docs/${component.slug}`}
                        className="relative flex flex-col gap-3 p-6 transition-all border rounded-xl group border-border bg-card hover:bg-accent/40 hover:border-accent-foreground/20 hover:shadow-sm"
                    >
                        <div className="flex items-center justify-between">
                            <Heading size="h6" className="font-semibold">
                                {component.name}
                            </Heading>
                            <ArrowRight className="transition-all -translate-x-1 opacity-0 size-5 text-muted-foreground group-hover:opacity-100 group-hover:translate-x-0" />
                        </div>
                        <Heading size="p" className="line-clamp-2">
                            {component.description}
                        </Heading>
                    </Link>
                ))}
            </div>
        </div>
    );
}
