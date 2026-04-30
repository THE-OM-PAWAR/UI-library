import { getDocBySlug, getAllDocs, getDemoLoader } from "../../../lib/docs";
import { ComponentPreview } from "../../../components/docs/component-preview";
import { InstallationBlock } from "../../../components/docs/installation-block";
import { UsageBlock } from "../../../components/docs/usage-block";
import { DocsHeading, DocsDescription } from "../../../components/docs/docs-heading";
import { DocsSection } from "../../../components/docs/docs-section";
import { DemoComponent } from "../../../components/docs/demo-component";
import { notFound } from "next/navigation";

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
  const basicExample = doc.examples?.find(ex => ex.demo === doc.usage?.basic);
  console.log(basicExample)

  return (
    <div className="container max-w-4xl mx-auto py-10 px-4">
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
        <InstallationBlock title="Installation" tabs={installationTabs} />
      </DocsSection>

      {/* Usage Section */}
      {doc.usage?.import && (
        <DocsSection>
          <DocsHeading level={2}>Usage</DocsHeading>
          <UsageBlock code={doc.usage.import} language="jsx" title="Import" />
        </DocsSection>
      )}

      {/* Examples Section */}
      {doc.examples && doc.examples.length > 0 && (
        <DocsSection>
          <DocsHeading level={2}>Examples</DocsHeading>
          <div className="space-y-12 mt-8">
            {doc.examples.map((example, index) => (
              <div key={index}>
                <DocsHeading level={3}>{example.title}</DocsHeading>
                {example.description && (
                  <p className="text-muted-foreground mb-6">{example.description}</p>
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
