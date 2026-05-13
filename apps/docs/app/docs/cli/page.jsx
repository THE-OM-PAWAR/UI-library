import {
    DocsDescription,
    DocsHeading,
} from "../../../components/docs/docs-heading";
import { DocsSection } from "../../../components/docs/docs-section";

export const metadata = {
    title: "CLI - shery-ui",
    description:
        "Use the shery-ui CLI to initialize your project and add components with a single command.",
};

function CommandBlock({ command }) {
    return (
        <div className="px-4 py-3 my-4 font-mono text-sm border rounded-lg border-border bg-muted/30 dark:bg-muted/10">
            <code className="text-foreground">{command}</code>
        </div>
    );
}

function OptionsTable({ options }) {
    return (
        <div className="my-4 overflow-x-auto border rounded-lg border-border">
            <table className="w-full text-sm">
                <thead>
                    <tr className="border-b border-border bg-muted/40">
                        <th className="px-4 py-2.5 text-left font-medium text-foreground">
                            Option
                        </th>
                        <th className="px-4 py-2.5 text-left font-medium text-foreground">
                            Default
                        </th>
                        <th className="px-4 py-2.5 text-left font-medium text-foreground">
                            Description
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {options.map((opt) => (
                        <tr
                            key={opt.flag}
                            className="border-b border-border last:border-0"
                        >
                            <td className="px-4 py-2.5 font-mono text-xs text-cyan-600 dark:text-cyan-400">
                                {opt.flag}
                            </td>
                            <td className="px-4 py-2.5 font-mono text-xs text-muted-foreground">
                                {opt.default ?? "—"}
                            </td>
                            <td className="px-4 py-2.5 text-muted-foreground">
                                {opt.description}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default function CLIPage() {
    return (
        <div className="container max-w-4xl px-4 py-10 mx-auto">
            {/* Header */}
            <div className="mb-12">
                <DocsHeading level={1}>CLI</DocsHeading>
                <DocsDescription>
                    Use the{" "}
                    <code className="font-mono text-sm bg-muted px-1.5 py-0.5 rounded">
                        shery-ui@latest
                    </code>{" "}
                    CLI to initialize your project and add components with a
                    single command.
                </DocsDescription>
            </div>

            {/* Installation / Usage */}
            <DocsSection>
                <DocsHeading level={2}>Installation</DocsHeading>
                <p className="mb-4 text-muted-foreground">
                    Run the CLI directly with{" "}
                    <code className="font-mono text-sm bg-muted px-1.5 py-0.5 rounded">
                        npx
                    </code>{" "}
                    — no global install required.
                </p>
                <CommandBlock command="npx shery-ui@latest <command>" />
                <p className="text-sm text-muted-foreground">
                    Or install it globally:
                </p>
                <CommandBlock command="npm install -g shery-ui@latest" />
            </DocsSection>

            {/* init */}
            <DocsSection>
                <DocsHeading level={2}>init</DocsHeading>
                <p className="mb-4 text-muted-foreground">
                    Initialize shery-ui in your project. Creates a{" "}
                    <code className="font-mono text-sm bg-muted px-1.5 py-0.5 rounded">
                        shery-ui.json
                    </code>{" "}
                    config file, sets up your{" "}
                    <code className="font-mono text-sm bg-muted px-1.5 py-0.5 rounded">
                        lib/utils
                    </code>{" "}
                    helper, and installs{" "}
                    <code className="font-mono text-sm bg-muted px-1.5 py-0.5 rounded">
                        clsx
                    </code>{" "}
                    +{" "}
                    <code className="font-mono text-sm bg-muted px-1.5 py-0.5 rounded">
                        tailwind-merge
                    </code>
                    .
                </p>
                <CommandBlock command="npx shery-ui@latest init" />

                <DocsHeading level={3}>What it does</DocsHeading>
                <ul className="mb-6 space-y-2 list-disc list-inside text-muted-foreground">
                    <li>
                        Auto-detects your framework (Next.js, Vite, Remix,
                        Astro)
                    </li>
                    <li>
                        Auto-detects TypeScript from{" "}
                        <code className="font-mono text-xs bg-muted px-1 py-0.5 rounded">
                            tsconfig.json
                        </code>
                    </li>
                    <li>
                        Prompts for CSS path, Tailwind config, and import
                        aliases
                    </li>
                    <li>
                        Creates{" "}
                        <code className="font-mono text-xs bg-muted px-1 py-0.5 rounded">
                            shery-ui.json
                        </code>{" "}
                        in your project root
                    </li>
                    <li>
                        Creates{" "}
                        <code className="font-mono text-xs bg-muted px-1 py-0.5 rounded">
                            lib/utils.ts
                        </code>{" "}
                        (or{" "}
                        <code className="font-mono text-xs bg-muted px-1 py-0.5 rounded">
                            .js
                        </code>
                        ) with the{" "}
                        <code className="font-mono text-xs bg-muted px-1 py-0.5 rounded">
                            cn()
                        </code>{" "}
                        helper
                    </li>
                    <li>Installs required dependencies automatically</li>
                </ul>

                <DocsHeading level={3}>Options</DocsHeading>
                <OptionsTable
                    options={[
                        {
                            flag: "-y, --yes",
                            default: "false",
                            description:
                                "Skip all confirmation prompts and use defaults",
                        },
                        {
                            flag: "--cwd <path>",
                            default: "process.cwd()",
                            description: "The working directory to run init in",
                        },
                    ]}
                />

                <DocsHeading level={3}>Config file</DocsHeading>
                <p className="mb-3 text-muted-foreground">
                    Running{" "}
                    <code className="font-mono text-sm bg-muted px-1.5 py-0.5 rounded">
                        init
                    </code>{" "}
                    generates a{" "}
                    <code className="font-mono text-sm bg-muted px-1.5 py-0.5 rounded">
                        shery-ui.json
                    </code>{" "}
                    file at your project root:
                </p>
                <div className="overflow-hidden border rounded-lg border-border">
                    <div className="px-4 py-2 border-b border-border bg-muted/40">
                        <code className="font-mono text-xs text-muted-foreground">
                            shery-ui.json
                        </code>
                    </div>
                    <pre className="px-4 py-3 overflow-x-auto text-sm">
                        <code>{`{
  "$schema": "https://shery-ui.dev/schema.json",
  "style": "default",
  "tsx": true,
  "tailwind": {
    "config": "tailwind.config.ts",
    "css": "app/globals.css",
    "baseColor": "neutral",
    "cssVariables": true
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui",
    "lib": "@/lib"
  }
}`}</code>
                    </pre>
                </div>
            </DocsSection>

            {/* add */}
            <DocsSection>
                <DocsHeading level={2}>add</DocsHeading>
                <p className="mb-4 text-muted-foreground">
                    Add one or more components to your project. Reads{" "}
                    <code className="font-mono text-sm bg-muted px-1.5 py-0.5 rounded">
                        shery-ui.json
                    </code>{" "}
                    to determine where to write files and which import aliases
                    to use.
                </p>
                <CommandBlock command="npx shery-ui@latest add [components...]" />

                <DocsHeading level={3}>Examples</DocsHeading>
                <div className="mb-6 space-y-3">
                    <div>
                        <p className="text-xs text-muted-foreground mb-1.5">
                            Add a single component:
                        </p>
                        <CommandBlock command="npx shery-ui@latest add button" />
                    </div>
                    <div>
                        <p className="text-xs text-muted-foreground mb-1.5">
                            Add multiple components at once:
                        </p>
                        <CommandBlock command="npx shery-ui@latest add button card dialog" />
                    </div>
                    <div>
                        <p className="text-xs text-muted-foreground mb-1.5">
                            Interactive picker (no arguments):
                        </p>
                        <CommandBlock command="npx shery-ui@latest add" />
                    </div>
                </div>

                <DocsHeading level={3}>Options</DocsHeading>
                <OptionsTable
                    options={[
                        {
                            flag: "-y, --yes",
                            default: "false",
                            description: "Skip confirmation prompts",
                        },
                        {
                            flag: "--cwd <path>",
                            default: "process.cwd()",
                            description: "The working directory to run add in",
                        },
                        {
                            flag: "-p, --path <path>",
                            default: "—",
                            description:
                                "Override the output directory (ignores shery-ui.json)",
                        },
                    ]}
                />

                <DocsHeading level={3}>How it works</DocsHeading>
                <ul className="space-y-2 list-disc list-inside text-muted-foreground">
                    <li>
                        Reads{" "}
                        <code className="font-mono text-xs bg-muted px-1 py-0.5 rounded">
                            shery-ui.json
                        </code>{" "}
                        for output path and import aliases
                    </li>
                    <li>
                        Rewrites internal imports to match your configured
                        aliases
                    </li>
                    <li>
                        Extracts and installs required npm packages
                        automatically
                    </li>
                    <li>
                        Detects your package manager (pnpm / bun / yarn / npm)
                        from lockfiles
                    </li>
                    <li>
                        Falls back to interactive multi-select when no component
                        names are given
                    </li>
                </ul>
            </DocsSection>

            {/* list */}
            <DocsSection>
                <DocsHeading level={2}>list</DocsHeading>
                <p className="mb-4 text-muted-foreground">
                    Print all 51 available components with their descriptions.
                </p>
                <CommandBlock command="npx shery-ui@latest list" />

                <div className="px-4 py-3 font-mono text-sm border rounded-lg border-border bg-muted/20 text-muted-foreground">
                    <p>
                        <span className="text-cyan-600 dark:text-cyan-400">
                            accordion
                        </span>
                        {"                "}A vertically stacked set of
                        interactive headings.
                    </p>
                    <p>
                        <span className="text-cyan-600 dark:text-cyan-400">
                            alert
                        </span>
                        {"                    "}Displays a callout for important
                        user-facing messages.
                    </p>
                    <p>
                        <span className="text-cyan-600 dark:text-cyan-400">
                            button
                        </span>
                        {"                   "}Displays a button or a component
                        that looks like a button.
                    </p>
                    <p className="text-muted-foreground/50">... and 48 more</p>
                </div>
            </DocsSection>

            {/* Quick start */}
            <DocsSection>
                <DocsHeading level={2}>Quick start</DocsHeading>
                <p className="mb-6 text-muted-foreground">
                    Get up and running in under a minute.
                </p>
                <div className="space-y-3">
                    {[
                        {
                            step: "1",
                            label: "Initialize your project",
                            command: "npx shery-ui@latest init",
                        },
                        {
                            step: "2",
                            label: "Add your first component",
                            command: "npx shery-ui@latest add button",
                        },
                        {
                            step: "3",
                            label: "Import and use it",
                            command: `import { Button } from "@/components/ui/button";`,
                        },
                    ].map(({ step, label, command }) => (
                        <div key={step} className="flex items-start gap-4">
                            <div className="flex items-center justify-center flex-shrink-0 w-6 h-6 mt-3 text-xs font-bold rounded-full bg-primary/10 text-primary">
                                {step}
                            </div>
                            <div className="flex-1">
                                <p className="mb-1 text-sm font-medium text-foreground">
                                    {label}
                                </p>
                                <CommandBlock command={command} />
                            </div>
                        </div>
                    ))}
                </div>
            </DocsSection>
        </div>
    );
}
