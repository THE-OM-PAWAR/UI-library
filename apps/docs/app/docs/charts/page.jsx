import { BarChart2 } from "lucide-react";
import {
    DocsDescription,
    DocsHeading,
} from "../../../components/docs/docs-heading";

export const metadata = {
    title: "Charts - UI Library",
    description: "Beautiful chart components powered by Recharts. Coming soon.",
};

export default function ChartsPage() {
    return (
        <div className="container max-w-4xl mx-auto py-10 px-4">
            <div className="mb-12">
                <DocsHeading level={1}>Charts</DocsHeading>
                <DocsDescription>
                    Beautiful, responsive chart components powered by Recharts
                    and styled to match your design system.
                </DocsDescription>
            </div>

            <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-border bg-muted/20 py-24 px-6 text-center gap-5">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-muted">
                    <BarChart2 className="h-7 w-7 text-muted-foreground" />
                </div>
                <div className="space-y-2 max-w-md">
                    <h2 className="text-xl font-semibold">Coming Soon</h2>
                    <p className="text-sm text-muted-foreground">
                        Chart components are in development. We&apos;re building
                        area, bar, line, pie, and radial charts that integrate
                        seamlessly with the rest of the library.
                    </p>
                </div>
                <div className="flex flex-wrap justify-center gap-2 mt-2">
                    {[
                        "Area Chart",
                        "Bar Chart",
                        "Line Chart",
                        "Pie Chart",
                        "Radial Chart",
                        "Scatter Plot",
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
