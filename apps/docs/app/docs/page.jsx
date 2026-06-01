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

            <section className="mb-12">
                <DocsHeading level={2}>Key Features</DocsHeading>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                    <div className="rounded-lg border border-border bg-card p-5">
                        <div className="flex items-center gap-3 mb-2">
                            <Copy className="h-5 w-5 text-muted-foreground" />
                            <span className="font-medium">Copy & Paste</span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                            No package to install. Just copy the component
                            source into your project and own it fully.
                        </p>
                    </div>
                    <div className="rounded-lg border border-border bg-card p-5">
                        <div className="flex items-center gap-3 mb-2">
                            <Accessibility className="h-5 w-5 text-muted-foreground" />
                            <span className="font-medium">Accessible</span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                            Built on Radix UI primitives, every component meets
                            WAI-ARIA standards out of the box.
                        </p>
                    </div>
                    <div className="rounded-lg border border-border bg-card p-5">
                        <div className="flex items-center gap-3 mb-2">
                            <Paintbrush className="h-5 w-5 text-muted-foreground" />
                            <span className="font-medium">Themeable</span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                            Styled with Tailwind CSS and CSS variables so you
                            can adapt every component to your design system.
                        </p>
                    </div>
                    <div className="rounded-lg border border-border bg-card p-5">
                        <div className="flex items-center gap-3 mb-2">
                            <Puzzle className="h-5 w-5 text-muted-foreground" />
                            <span className="font-medium">Composable</span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                            Small, focused primitives that compose together. Use
                            only what you need and leave the rest.
                        </p>
                    </div>
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
