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
        description:
            "A vertically stacked set of interactive headings that each reveal a section of content.",
    },
    {
        name: "Alert",
        slug: "alert",
        description: "Displays a callout for user attention.",
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
        description:
            "Displays the path to the current resource using a hierarchy of links.",
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
        description:
            "A date field component that allows users to enter and edit date.",
    },
    {
        name: "Card",
        slug: "card",
        description: "Displays a card with header, content, and footer.",
    },
    {
        name: "Carousel",
        slug: "carousel",
        description: "A carousel with motion and swipe built using Embla.",
    },
    {
        name: "Chart",
        slug: "chart",
        description: "Beautiful and interactive charts built with Recharts.",
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
            "An interactive component which expands/collapses a panel.",
    },
    {
        name: "Combobox",
        slug: "combobox",
        description:
            "Autocomplete input and command palette with a list of suggestions.",
    },
    {
        name: "Context Menu",
        slug: "context-menu",
        description:
            "Displays a menu to the user — such as a set of actions or functions — triggered by a button.",
    },
    {
        name: "Data Table",
        slug: "data-table",
        description: "Powerful table and datagrids built using TanStack Table.",
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
        description:
            "Displays a menu to the user, such as a set of actions or functions, triggered by a button.",
    },
    {
        name: "Empty",
        slug: "empty",
        description:
            "Displays an empty state for when there is no data to show.",
    },
    {
        name: "Field",
        slug: "field",
        description: "A flexible input field component.",
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
        description:
            "For sighted users to preview content available behind a link.",
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
        description:
            "Displays a form input field or a component that looks like an input field.",
    },
    {
        name: "Input Group",
        slug: "inputgroup",
        description: "Displays a group of inputs.",
    },
    {
        name: "Input OTP",
        slug: "inputotp",
        description:
            "Accessible one-time password component with copy paste functionality.",
    },
    {
        name: "Item",
        slug: "item",
        description: "A sub-component for displaying an item within a list.",
    },
    { name: "Kbd", slug: "kbd", description: "A keyboard shortcut component." },
    {
        name: "Label",
        slug: "label",
        description: "Renders an accessible label associated with controls.",
    },
    {
        name: "Menubar",
        slug: "menubar",
        description:
            "A visually persistent menu common in desktop applications.",
    },
    {
        name: "Navigation Menu",
        slug: "navigation-menu",
        description: "A collection of links for navigating websites.",
    },
    {
        name: "Pagination",
        slug: "pagination",
        description:
            "Pagination with page navigation, next and previous links.",
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
            "A set of checkable buttons where no more than one can be checked at a time.",
    },
    {
        name: "Resizable",
        slug: "resizable",
        description:
            "Accessible resizable panel groups and layouts with keyboard support.",
    },
    {
        name: "Scroll Area",
        slug: "scroll-area",
        description:
            "Augments native scroll functionality for custom, cross-browser styling.",
    },
    {
        name: "Separator",
        slug: "separator",
        description: "Visually or semantically separates content.",
    },
    {
        name: "Sheet",
        slug: "sheet",
        description:
            "Extends the Dialog component to display content that complements the main content of the screen.",
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
        description: "Use to show a placeholder while content is loading.",
    },
    {
        name: "Sonner",
        slug: "sonner",
        description: "An opinionated toast component for React.",
    },
    {
        name: "Spinner",
        slug: "spinner",
        description: "Displays an animated loading spinner.",
    },
    {
        name: "Switch",
        slug: "switch",
        description:
            "A control that allows the user to toggle between checked and not checked.",
    },
    {
        name: "Table",
        slug: "table",
        description: "A responsive table component.",
    },
    {
        name: "Tabs",
        slug: "tabs",
        description:
            "A set of layered sections of content that are displayed one at a time.",
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
        description:
            "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
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
