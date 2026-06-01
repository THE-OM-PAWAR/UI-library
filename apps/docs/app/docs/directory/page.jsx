import { FolderSearch } from "lucide-react";
import {
    DocsDescription,
    DocsHeading,
} from "../../../components/docs/docs-heading";

export const metadata = {
    title: "Directory - UI Library",
    description:
        "A searchable directory of all components and blocks. Coming soon.",
};

export default function DirectoryPage() {
    return (
        <div className="container max-w-4xl mx-auto py-10 px-4">
            <div className="mb-12">
                <DocsHeading level={1}>Directory</DocsHeading>
                <DocsDescription>
                    A searchable, filterable directory of every component,
                    block, and pattern in the library.
                </DocsDescription>
            </div>

            <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-border bg-muted/20 py-24 px-6 text-center gap-5">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-muted">
                    <FolderSearch className="h-7 w-7 text-muted-foreground" />
                </div>
                <div className="space-y-2 max-w-md">
                    <h2 className="text-xl font-semibold">Coming Soon</h2>
                    <p className="text-sm text-muted-foreground">
                        The directory will give you a single place to search,
                        filter by category, and browse every piece of the
                        library at a glance.
                    </p>
                </div>
                <div className="flex flex-wrap justify-center gap-2 mt-2">
                    {[
                        "Search",
                        "Filter by Category",
                        "Tag Browsing",
                        "Preview Thumbnails",
                        "Sorting",
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
