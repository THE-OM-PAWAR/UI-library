import { Blocks } from "lucide-react";
import {
    DocsDescription,
    DocsHeading,
} from "../../../components/docs/docs-heading";

export const metadata = {
    title: "Blocks - UI Library",
    description: "Pre-built page sections and layout blocks. Coming soon.",
};

export default function BlocksPage() {
    return (
        <div className="container max-w-4xl mx-auto py-10 px-4">
            <div className="mb-12">
                <DocsHeading level={1}>Blocks</DocsHeading>
                <DocsDescription>
                    Pre-built page sections and layout blocks you can drop
                    straight into your project.
                </DocsDescription>
            </div>

            <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-border bg-muted/20 py-24 px-6 text-center gap-5">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-muted">
                    <Blocks className="h-7 w-7 text-muted-foreground" />
                </div>
                <div className="space-y-2 max-w-md">
                    <h2 className="text-xl font-semibold">Coming Soon</h2>
                    <p className="text-sm text-muted-foreground">
                        We&apos;re working on a library of ready-to-use blocks —
                        hero sections, feature grids, pricing tables, and more.
                        Check back soon.
                    </p>
                </div>
                <div className="flex flex-wrap justify-center gap-2 mt-2">
                    {[
                        "Hero Section",
                        "Feature Grid",
                        "Pricing Table",
                        "CTA Banner",
                        "Testimonials",
                        "Footer",
                    ].map((tag) => (
                        <span
                            key={tag}
                            className="inline-flex items-center rounded-full border border-border px-3 py-1 text-xs text-muted-foreground"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}
