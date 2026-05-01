import { Button } from "@repo/components";
import { ArrowRight } from "lucide-react";
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
                <DocsHeading level={1}>Documentation</DocsHeading>
                <DocsDescription>
                    Beautiful and accessible React components built with Radix
                    UI and Tailwind CSS.
                </DocsDescription>
            </div>

            <section className="mb-16">
                <DocsHeading level={2}>Getting Started</DocsHeading>
                <p className="text-muted-foreground mb-6">
                    Browse our collection of reusable components. Each component
                    is fully customizable and follows best practices for
                    accessibility and performance.
                </p>
            </section>

            <section className="mb-16">
                <DocsHeading level={2}>Components</DocsHeading>
                <div className="grid gap-4 sm:grid-cols-2 mt-6">
                    <Link
                        href="/docs/button"
                        className="group relative rounded-lg border border-border bg-card p-6 hover:bg-accent/50 transition-colors"
                    >
                        <h3 className="font-semibold text-lg mb-2 group-hover:text-foreground">
                            Button
                        </h3>
                        <p className="text-sm text-muted-foreground mb-4">
                            Displays a button or a component that looks like a
                            button.
                        </p>
                        <div className="flex items-center text-sm font-medium text-primary">
                            View component
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </div>
                    </Link>
                </div>
            </section>
        </div>
    );
}
