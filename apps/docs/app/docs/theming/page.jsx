import {
    DocsDescription,
    DocsHeading,
} from "../../../components/docs/docs-heading";
import { DocsSection } from "../../../components/docs/docs-section";

export const metadata = {
    title: "Theming - shery-ui",
    description:
        "Customize the look and feel of shery-ui components using CSS variables and Tailwind CSS.",
};

function CodeBlock({ filename, children }) {
    return (
        <div className="my-4 overflow-hidden border rounded-lg border-border">
            {filename && (
                <div className="px-4 py-2 border-b border-border bg-muted/40">
                    <code className="font-mono text-xs text-muted-foreground">
                        {filename}
                    </code>
                </div>
            )}
            <pre className="px-4 py-3 overflow-x-auto text-sm">
                <code>{children}</code>
            </pre>
        </div>
    );
}

function ColorSwatch({ name, className }) {
    return (
        <div className="flex items-center gap-3">
            <div
                className={`w-8 h-8 rounded-md border border-border ${className}`}
            />
            <span className="font-mono text-sm text-muted-foreground">
                {name}
            </span>
        </div>
    );
}

function OptionRow({ value, description, isDefault }) {
    return (
        <tr className="border-b border-border last:border-0">
            <td className="px-4 py-2.5 font-mono text-xs text-cyan-600 dark:text-cyan-400">
                {value}
                {isDefault && (
                    <span className="ml-2 text-[10px] text-muted-foreground normal-case font-sans">
                        (default)
                    </span>
                )}
            </td>
            <td className="px-4 py-2.5 text-sm text-muted-foreground">
                {description}
            </td>
        </tr>
    );
}

export default function ThemingPage() {
    return (
        <div className="container max-w-4xl px-4 py-10 mx-auto">
            {/* Header */}
            <div className="mb-12">
                <DocsHeading level={1}>Theming</DocsHeading>
                <DocsDescription>
                    shery-ui uses CSS variables for theming. Customize colors,
                    radius, scaling, and typography to match your brand — with
                    full dark mode support built in.
                </DocsDescription>
            </div>

            {/* Overview */}
            <DocsSection>
                <DocsHeading level={2}>Overview</DocsHeading>
                <p className="mb-4 text-muted-foreground">
                    The theming system is powered by a{" "}
                    <code className="font-mono text-sm bg-muted px-1.5 py-0.5 rounded">
                        theme.config.js
                    </code>{" "}
                    file in{" "}
                    <code className="font-mono text-sm bg-muted px-1.5 py-0.5 rounded">
                        packages/config/
                    </code>
                    . Edit it to configure your accent color, gray palette,
                    border radius, and more — then regenerate the CSS tokens.
                </p>
                <CodeBlock filename="packages/config/theme.config.js">{`export const themeConfig = {
  accent:  'indigo',   // Primary brand color
  gray:    'slate',    // Neutral palette
  radius:  'medium',   // Border roundness
  scaling: '100%',     // Global size multiplier

  error:   'red',
  success: 'green',
  warning: 'amber',

  fontFamily: {
    sans: undefined,   // undefined = system default
    mono: undefined,
  },
};`}</CodeBlock>
                <p className="text-muted-foreground">
                    After editing, regenerate the design tokens:
                </p>
                <CodeBlock>{`pnpm generate:theme`}</CodeBlock>
            </DocsSection>

            {/* CSS Variables */}
            <DocsSection>
                <DocsHeading level={2}>CSS Variables</DocsHeading>
                <p className="mb-4 text-muted-foreground">
                    All tokens are emitted as CSS custom properties and consumed
                    by every component. The variables live in{" "}
                    <code className="font-mono text-sm bg-muted px-1.5 py-0.5 rounded">
                        packages/config/tokens.css
                    </code>
                    , which you import once in your global stylesheet.
                </p>
                <CodeBlock filename="app/globals.css">{`@import "@shery-ui/config/tokens.css";`}</CodeBlock>
                <p className="mb-4 text-muted-foreground">
                    You can also override any token directly for one-off
                    customizations:
                </p>
                <CodeBlock filename="app/globals.css">{`:root {
  --color-accent-9:  oklch(55% 0.22 264);  /* override accent */
  --radius-3:        0.5rem;               /* override a radius step */
}

.dark {
  --color-accent-9:  oklch(68% 0.18 264);
}`}</CodeBlock>
            </DocsSection>

            {/* Colors */}
            <DocsSection>
                <DocsHeading level={2}>Colors</DocsHeading>

                <DocsHeading level={3}>Accent color</DocsHeading>
                <p className="mb-4 text-muted-foreground">
                    The accent color drives buttons, links, focus rings, and
                    interactive highlights. Choose the one that best matches
                    your brand.
                </p>
                <div className="grid grid-cols-2 gap-3 my-4 sm:grid-cols-3">
                    <ColorSwatch name="blue" className="bg-blue-500" />
                    <ColorSwatch name="violet" className="bg-violet-500" />
                    <ColorSwatch name="purple" className="bg-purple-500" />
                    <ColorSwatch name="pink" className="bg-pink-500" />
                    <ColorSwatch name="crimson" className="bg-rose-600" />
                    <ColorSwatch name="red" className="bg-red-500" />
                    <ColorSwatch name="orange" className="bg-orange-500" />
                    <ColorSwatch name="amber" className="bg-amber-500" />
                    <ColorSwatch name="green" className="bg-green-500" />
                    <ColorSwatch name="teal" className="bg-teal-500" />
                    <ColorSwatch name="cyan" className="bg-cyan-500" />
                    <ColorSwatch
                        name="indigo — default"
                        className="bg-indigo-500"
                    />
                </div>

                <DocsHeading level={3}>Gray palette</DocsHeading>
                <p className="mb-4 text-muted-foreground">
                    The gray palette controls backgrounds, borders, and
                    secondary text. Pick a tint that complements your accent.
                </p>
                <div className="grid grid-cols-2 gap-3 my-4 sm:grid-cols-3">
                    <ColorSwatch
                        name="slate — default"
                        className="bg-slate-500"
                    />
                    <ColorSwatch name="gray" className="bg-gray-500" />
                    <ColorSwatch name="mauve" className="bg-purple-300/60" />
                    <ColorSwatch name="sage" className="bg-green-300/60" />
                    <ColorSwatch name="olive" className="bg-lime-600/70" />
                    <ColorSwatch name="sand" className="bg-amber-200" />
                </div>

                <DocsHeading level={3}>Status colors</DocsHeading>
                <p className="text-muted-foreground">
                    Status colors are used for alerts, badges, and form
                    validation. The defaults are intentionally semantic — change
                    them only if your brand requires it.
                </p>
                <CodeBlock>{`error:   'red'     // Destructive actions, errors
success: 'green'   // Confirmations, success states
warning: 'amber'   // Caution, warnings`}</CodeBlock>
            </DocsSection>

            {/* Radius */}
            <DocsSection>
                <DocsHeading level={2}>Border Radius</DocsHeading>
                <p className="mb-4 text-muted-foreground">
                    The{" "}
                    <code className="font-mono text-sm bg-muted px-1.5 py-0.5 rounded">
                        radius
                    </code>{" "}
                    setting controls how rounded components appear across the
                    entire library.
                </p>
                <div className="my-4 overflow-x-auto border rounded-lg border-border">
                    <table className="w-full text-sm">
                        <thead>
                            <tr className="border-b border-border bg-muted/40">
                                <th className="px-4 py-2.5 text-left font-medium">
                                    Value
                                </th>
                                <th className="px-4 py-2.5 text-left font-medium">
                                    Description
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <OptionRow
                                value="none"
                                description="No rounding — sharp corners"
                            />
                            <OptionRow
                                value="small"
                                description="Subtle rounding (2–16 px)"
                            />
                            <OptionRow
                                value="medium"
                                description="Balanced rounding (4–32 px) — default"
                            />
                            <OptionRow
                                value="large"
                                description="Pronounced rounding (6–48 px)"
                            />
                            <OptionRow
                                value="full"
                                description="Maximum rounding — pill-shaped"
                            />
                        </tbody>
                    </table>
                </div>
                <p className="mb-3 text-muted-foreground">
                    Each preset maps to a 6-step CSS variable scale you can use
                    directly in Tailwind:
                </p>
                <CodeBlock>{`<div className="rounded-1">Smallest</div>
<div className="rounded-3">Medium</div>
<div className="rounded-6">Largest / pill</div>`}</CodeBlock>
            </DocsSection>

            {/* Scaling */}
            <DocsSection>
                <DocsHeading level={2}>Scaling</DocsHeading>
                <p className="mb-4 text-muted-foreground">
                    The{" "}
                    <code className="font-mono text-sm bg-muted px-1.5 py-0.5 rounded">
                        scaling
                    </code>{" "}
                    option is a global size multiplier that affects font sizes,
                    line heights, and component heights simultaneously.
                </p>
                <div className="my-4 overflow-x-auto border rounded-lg border-border">
                    <table className="w-full text-sm">
                        <thead>
                            <tr className="border-b border-border bg-muted/40">
                                <th className="px-4 py-2.5 text-left font-medium">
                                    Value
                                </th>
                                <th className="px-4 py-2.5 text-left font-medium">
                                    Best for
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <OptionRow
                                value="90%"
                                description="Dense dashboards, data-heavy UIs"
                            />
                            <OptionRow
                                value="95%"
                                description="Slightly compact layouts"
                            />
                            <OptionRow
                                value="100%"
                                description="Standard applications (default)"
                            />
                            <OptionRow
                                value="105%"
                                description="Slightly larger, more readable"
                            />
                            <OptionRow
                                value="110%"
                                description="Accessibility-focused, senior-friendly"
                            />
                        </tbody>
                    </table>
                </div>
            </DocsSection>

            {/* Typography */}
            <DocsSection>
                <DocsHeading level={2}>Typography</DocsHeading>
                <p className="mb-4 text-muted-foreground">
                    Override the default system font stacks with custom web
                    fonts by setting{" "}
                    <code className="font-mono text-sm bg-muted px-1.5 py-0.5 rounded">
                        fontFamily
                    </code>{" "}
                    in your theme config.
                </p>
                <CodeBlock filename="packages/config/theme.config.js">{`fontFamily: {
  sans: '"Inter", -apple-system, sans-serif',
  mono: '"Fira Code", monospace',
}`}</CodeBlock>
                <p className="text-muted-foreground">
                    Set either value to{" "}
                    <code className="font-mono text-sm bg-muted px-1.5 py-0.5 rounded">
                        undefined
                    </code>{" "}
                    to keep the default system font stack.
                </p>
            </DocsSection>

            {/* Dark Mode */}
            <DocsSection>
                <DocsHeading level={2}>Dark Mode</DocsHeading>
                <p className="mb-4 text-muted-foreground">
                    Dark mode is supported out of the box. All color tokens have
                    corresponding dark-mode values emitted into a{" "}
                    <code className="font-mono text-sm bg-muted px-1.5 py-0.5 rounded">
                        .dark
                    </code>{" "}
                    selector in{" "}
                    <code className="font-mono text-sm bg-muted px-1.5 py-0.5 rounded">
                        tokens.css
                    </code>
                    .
                </p>
                <p className="mb-4 text-muted-foreground">
                    Toggle dark mode by adding the{" "}
                    <code className="font-mono text-sm bg-muted px-1.5 py-0.5 rounded">
                        dark
                    </code>{" "}
                    class to your root element (or use{" "}
                    <code className="font-mono text-sm bg-muted px-1.5 py-0.5 rounded">
                        next-themes
                    </code>{" "}
                    for automatic OS preference detection):
                </p>
                <CodeBlock filename="app/layout.jsx">{`import { ThemeProvider } from "next-themes";

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}`}</CodeBlock>
            </DocsSection>

            {/* Using tokens in Tailwind */}
            <DocsSection>
                <DocsHeading level={2}>Using tokens in Tailwind</DocsHeading>
                <p className="mb-4 text-muted-foreground">
                    All design tokens are mapped into your Tailwind config so
                    you can use them as utility classes:
                </p>
                <CodeBlock>{`{/* Accent colors */}
<div className="bg-accent text-accent-foreground" />

{/* Muted backgrounds */}
<div className="bg-muted text-muted-foreground" />

{/* Status colors */}
<div className="text-destructive" />

{/* Radius scale */}
<div className="border rounded-2" />

{/* Card surface */}
<div className="border bg-card border-border rounded-3" />`}</CodeBlock>
            </DocsSection>
        </div>
    );
}
