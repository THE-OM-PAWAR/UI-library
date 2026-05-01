import { notFound } from "next/navigation";
import { ComponentPreview } from "../../../components/docs/component-preview";
import { DemoComponent } from "../../../components/docs/demo-component";
import {
    DocsDescription,
    DocsHeading,
} from "../../../components/docs/docs-heading";
import { DocsSection } from "../../../components/docs/docs-section";
import { InstallationBlock } from "../../../components/docs/installation-block";
import { UsageBlock } from "../../../components/docs/usage-block";
import { getAllDocs, getDemoLoader, getDocBySlug } from "../../../lib/docs";

export async function generateStaticParams() {
    const docs = getAllDocs();
    return docs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
    const doc = await getDocBySlug(params.slug);

    if (!doc) {
        return {};
    }

    return {
        title: `${doc.title} - UI Components`,
        description: doc.description,
    };
}

export default async function ComponentDocPage({ params }) {
    const doc = await getDocBySlug(params.slug);
    if (!doc) {
        notFound();
    }

    // Prepare installation tabs
    const installationTabs = [
        {
            label: "CLI",
            value: "cli",
            type: "command",
            command: doc.installation.cli,
        },
    ];

    if (doc.installation.manual) {
        installationTabs.push({
            label: "Manual",
            value: "manual",
            type: "manual",
            steps: doc.installation.manual,
        });
    }

    // Get basic example
    const basicExample = doc.examples?.find(
        (ex) => ex.demo === doc.usage?.basic
    );

    return (
        <div className="container max-w-4xl px-4 py-10 mx-auto">
            {/* Header */}
            <div className="mb-12">
                <DocsHeading level={1}>{doc.title}</DocsHeading>
                <DocsDescription>{doc.description}</DocsDescription>
            </div>

            {/* Preview Section */}
            {doc.usage?.basic && basicExample && (
                <DocsSection>
                    <ComponentPreview code={basicExample.code}>
                        <DemoComponent name={doc.usage.basic} />
                    </ComponentPreview>
                </DocsSection>
            )}

            {/* Installation Section */}
            <DocsSection>
                <InstallationBlock
                    title="Installation"
                    tabs={installationTabs}
                />
            </DocsSection>

            {/* Usage Section */}
            {doc.usage?.import && (
                <DocsSection>
                    <DocsHeading level={2}>Usage</DocsHeading>
                    <UsageBlock
                        code={doc.usage.import}
                        language="jsx"
                        title="Import"
                    />
                </DocsSection>
            )}

            {/* Examples Section */}
            {doc.examples && doc.examples.length > 0 && (
                <DocsSection>
                    <DocsHeading level={2}>Examples</DocsHeading>
                    <div className="mt-8 space-y-12">
                        {doc.examples.map((example, index) => (
                            <div key={index}>
                                <DocsHeading level={3}>
                                    {example.title}
                                </DocsHeading>
                                {example.description && (
                                    <p className="mb-6 text-muted-foreground">
                                        {example.description}
                                    </p>
                                )}
                                <ComponentPreview code={example.code}>
                                    <DemoComponent name={example.demo} />
                                </ComponentPreview>
                            </div>
                        ))}
                    </div>
                </DocsSection>
            )}
        </div>
    );
}
