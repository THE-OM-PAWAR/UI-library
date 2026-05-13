import { Badge, Heading } from "@shery-ui/components";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import {
    DocsDescription,
    DocsHeading,
} from "../../../components/docs/docs-heading";
import { docsConfig } from "../../../config/docs";
import { getDocBySlug } from "../../../lib/docs";

export const metadata = {
    title: "Components - UI Library",
    description: "Browse all the components available in the library.",
};

export default async function ComponentsPage() {
    const componentNavItems =
        docsConfig.sidebarNav.find((section) => section.title === "Components")
            ?.items ?? [];

    const components = (
        await Promise.all(
            componentNavItems.map(async (item) => {
                const slug = item.href.replace("/docs/", "");
                const doc = await getDocBySlug(slug);
                return {
                    name: item.title,
                    slug,
                    description: doc?.description ?? "",
                    isNew: item.label === "New",
                };
            })
        )
    ).sort((a, b) => a.name.localeCompare(b.name));

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
                            <div className="flex items-center gap-2">
                                <Heading size="h6" className="font-semibold">
                                    {component.name}
                                </Heading>
                                {component.isNew && (
                                    <Badge
                                        variant="outline"
                                        className={
                                            "text-green-500 border-green-500"
                                        }
                                    >
                                        New
                                    </Badge>
                                )}
                            </div>
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
