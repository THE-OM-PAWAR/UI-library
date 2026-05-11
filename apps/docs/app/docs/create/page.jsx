import { Wand2 } from "lucide-react";
import {
    DocsDescription,
    DocsHeading,
} from "../../../components/docs/docs-heading";

export const metadata = {
    title: "Create - UI Library",
    description:
        "Generate and scaffold new components with the CLI. Coming soon.",
};

export default function CreatePage() {
    return (
        <div className="container max-w-4xl mx-auto py-10 px-4">
            <div className="mb-12">
                <DocsHeading level={1}>Create</DocsHeading>
                <DocsDescription>
                    Scaffold new components, pages, and blocks instantly using
                    the CLI or the in-browser generator.
                </DocsDescription>
            </div>

            <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-border bg-muted/20 py-24 px-6 text-center gap-5">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-muted">
                    <Wand2 className="h-7 w-7 text-muted-foreground" />
                </div>
                <div className="space-y-2 max-w-md">
                    <h2 className="text-xl font-semibold">Coming Soon</h2>
                    <p className="text-sm text-muted-foreground">
                        The Create tool will let you pick components, configure
                        options, and get ready-to-paste code — or run a single
                        CLI command to add them directly to your project.
                    </p>
                </div>
                <div className="flex flex-wrap justify-center gap-2 mt-2">
                    {[
                        "CLI Scaffolding",
                        "Component Generator",
                        "Theme Picker",
                        "Copy to Clipboard",
                        "Framework Detection",
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
