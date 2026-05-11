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
        name: "Card",
        slug: "card",
        description: "Displays a card with header, content, and footer.",
    },
    {
        name: "Checkbox",
        slug: "checkbox",
        description:
            "A control that allows the user to toggle between checked and not checked.",
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
        name: "Image",
        slug: "image",
        description:
            "An image component with support for fallback and various fit modes.",
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
        name: "Sidebar",
        slug: "sidebar",
        description:
            "A composable, themeable and customizable sidebar component.",
    },
    {
        name: "Spinner",
        slug: "spinner",
        description: "Displays an animated loading spinner.",
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
        name: "Headings",
        slug: "headings",
        description:
            "Styles for headings, paragraphs, lists and other typographic elements.",
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
