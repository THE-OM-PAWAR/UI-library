import {
    Accessibility,
    ArrowRight,
    Copy,
    Paintbrush,
    Puzzle,
} from "lucide-react";
import Link from "next/link";
import {
    DocsDescription,
    DocsHeading,
} from "../../components/docs/docs-heading";

export const metadata = {
    title: "Documentation - UI Components",
    description:
        "Beautiful and accessible React components built with Radix UI and Tailwind CSS.",
};

export default function DocsPage() {
    const components = [
        {
            title: "Button",
            href: "/docs/button",
            description:
                "Displays a button or a component that looks like a button.",
        },
        {
            title: "Sidebar",
            href: "/docs/sidebar",
            description:
                "A sidebar component for building navigation layouts.",
        },
        {
            title: "Accordion",
            href: "/docs/accordion",
            description:
                "A vertically stacked set of interactive headings.",
        },
        {
            title: "Alert",
            href: "/docs/alert",
            description:
                "Displays a callout for important user-facing messages.",
        },
        {
            title: "Avatar",
            href: "/docs/avatar",
            description:
                "An image element with fallback and group support.",
        },
    ];

    return (
        <div className="container max-w-4xl mx-auto py-10 px-4">
            <div className="mb-12">
                <DocsHeading level={1}>Introduction</DocsHeading>
                <DocsDescription>
                    Beautiful and accessible React components built with Radix
                    UI and Tailwind CSS.
                </DocsDescription>
            </div>

            <section className="mb-12">
                <DocsHeading level={2}>What is this?</DocsHeading>
                <p className="text-muted-foreground">
                    This is a collection of reusable React components that you
                    can copy and paste into your projects. Each component is
                    fully customizable, follows best practices for
                    accessibility, and is built on top of{" "}
                    <a
                        href="https://www.radix-ui.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline underline-offset-4 hover:text-foreground"
                    >
                        Radix UI
                    </a>{" "}
                    primitives and styled with{" "}
                    <a
                        href="https://tailwindcss.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline underline-offset-4 hover:text-foreground"
                    >
                        Tailwind CSS
                    </a>
                    .
                </p>
            </section>

            <section className="mb-16">
                <DocsHeading level={2}>Components</DocsHeading>
                <div className="grid gap-4 sm:grid-cols-2 mt-6">
                    {components.map((component) => (
                        <Link
                            key={component.href}
                            href={component.href}
                            className="group relative rounded-lg border border-border bg-card p-6 hover:bg-accent/50 transition-colors"
                        >
                            <h3 className="font-semibold text-lg mb-2 group-hover:text-foreground">
                                {component.title}
                            </h3>
                            <p className="text-sm text-muted-foreground mb-4">
                                {component.description}
                            </p>
                            <div className="flex items-center text-sm font-medium text-primary">
                                View component
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            <section className="mb-12">
                <DocsHeading level={2}>FAQ</DocsHeading>
                <div className="space-y-6 mt-4">
                    <div>
                        <h3 className="font-medium mb-1">
                            Can I use this in a commercial project?
                        </h3>
                        <p className="text-sm text-muted-foreground">
                            Yes. The components are MIT licensed. You can use
                            them in personal and commercial projects without
                            attribution.
                        </p>
                    </div>
                    <div>
                        <h3 className="font-medium mb-1">
                            Do I need to install any additional packages?
                        </h3>
                        <p className="text-sm text-muted-foreground">
                            Each component lists its own peer dependencies.
                            You'll typically need the relevant Radix UI package
                            and Tailwind CSS configured in your project.
                        </p>
                    </div>
                    <div>
                        <h3 className="font-medium mb-1">
                            Can I contribute new components?
                        </h3>
                        <p className="text-sm text-muted-foreground">
                            Contributions are welcome. Open an issue to discuss
                            a new component idea or submit a pull request
                            directly on GitHub.
                        </p>
                    </div>
                </div>
            </section>

            <section className="mb-12">
                <DocsHeading level={2}>Browse Components</DocsHeading>
                <p className="text-muted-foreground mb-6">
                    Explore all available components in the library. Click the
                    link below to see the full list with descriptions.
                </p>
                <Link
                    href="/docs/components"
                    className="group inline-flex items-center gap-2 rounded-lg border border-border bg-card px-6 py-4 text-sm font-medium transition-colors hover:bg-accent/50"
                >
                    View all components
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
            </section>
        </div>
    );
}
