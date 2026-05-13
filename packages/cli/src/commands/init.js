import chalk from "chalk";
import {
    existsSync,
    mkdirSync,
    readdirSync,
    readFileSync,
    writeFileSync,
} from "fs";
import { dirname, join } from "path";
import prompts from "prompts";
import {
    CONFIG_FILE,
    DEFAULT_CONFIG,
    hasSrcDir,
    readConfig,
    resolveUtilsPath,
    writeConfig,
} from "../lib/config.js";
import { installPackages } from "../lib/detector.js";

const CN_CODE_JS = `import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
`;

const CN_CODE_TS = `import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
`;

const CSS_FULL = `@import "tailwindcss";

@custom-variant dark (&:is(.dark *));

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-card: var(--card);
  --color-card-foreground: var(--card-foreground);
  --color-popover: var(--popover);
  --color-popover-foreground: var(--popover-foreground);
  --color-primary: var(--primary);
  --color-primary-foreground: var(--primary-foreground);
  --color-secondary: var(--secondary);
  --color-secondary-foreground: var(--secondary-foreground);
  --color-muted: var(--muted);
  --color-muted-foreground: var(--muted-foreground);
  --color-accent: var(--accent);
  --color-accent-foreground: var(--accent-foreground);
  --color-destructive: var(--destructive);
  --color-border: var(--border);
  --color-input: var(--input);
  --color-ring: var(--ring);
  --color-chart-1: var(--chart-1);
  --color-chart-2: var(--chart-2);
  --color-chart-3: var(--chart-3);
  --color-chart-4: var(--chart-4);
  --color-chart-5: var(--chart-5);
  --color-sidebar: var(--sidebar);
  --color-sidebar-foreground: var(--sidebar-foreground);
  --color-sidebar-primary: var(--sidebar-primary);
  --color-sidebar-primary-foreground: var(--sidebar-primary-foreground);
  --color-sidebar-accent: var(--sidebar-accent);
  --color-sidebar-accent-foreground: var(--sidebar-accent-foreground);
  --color-sidebar-border: var(--sidebar-border);
  --color-sidebar-ring: var(--sidebar-ring);
  --radius-sm: calc(var(--radius) * 0.6);
  --radius-md: calc(var(--radius) * 0.8);
  --radius-lg: var(--radius);
  --radius-xl: calc(var(--radius) * 1.4);
  --radius-2xl: calc(var(--radius) * 1.8);
  --radius-3xl: calc(var(--radius) * 2.2);
  --radius-4xl: calc(var(--radius) * 2.6);
}

:root {
  --radius: 0.625rem;
  --background: oklch(1 0 0);
  --foreground: oklch(0.145 0 0);
  --card: oklch(1 0 0);
  --card-foreground: oklch(0.145 0 0);
  --popover: oklch(1 0 0);
  --popover-foreground: oklch(0.145 0 0);
  --primary: oklch(0.205 0 0);
  --primary-foreground: oklch(0.985 0 0);
  --secondary: oklch(0.97 0 0);
  --secondary-foreground: oklch(0.205 0 0);
  --muted: oklch(0.97 0 0);
  --muted-foreground: oklch(0.556 0 0);
  --accent: oklch(0.97 0 0);
  --accent-foreground: oklch(0.205 0 0);
  --destructive: oklch(0.577 0.245 27.325);
  --border: oklch(0.922 0 0);
  --input: oklch(0.922 0 0);
  --ring: oklch(0.708 0 0);
  --chart-1: oklch(0.646 0.222 41.116);
  --chart-2: oklch(0.6 0.118 184.704);
  --chart-3: oklch(0.398 0.07 227.392);
  --chart-4: oklch(0.828 0.189 84.429);
  --chart-5: oklch(0.769 0.188 70.08);
  --sidebar: oklch(0.985 0 0);
  --sidebar-foreground: oklch(0.145 0 0);
  --sidebar-primary: oklch(0.205 0 0);
  --sidebar-primary-foreground: oklch(0.985 0 0);
  --sidebar-accent: oklch(0.97 0 0);
  --sidebar-accent-foreground: oklch(0.205 0 0);
  --sidebar-border: oklch(0.922 0 0);
  --sidebar-ring: oklch(0.708 0 0);
}

.dark {
  --background: oklch(0.145 0 0);
  --foreground: oklch(0.985 0 0);
  --card: oklch(0.205 0 0);
  --card-foreground: oklch(0.985 0 0);
  --popover: oklch(0.205 0 0);
  --popover-foreground: oklch(0.985 0 0);
  --primary: oklch(0.922 0 0);
  --primary-foreground: oklch(0.205 0 0);
  --secondary: oklch(0.269 0 0);
  --secondary-foreground: oklch(0.985 0 0);
  --muted: oklch(0.269 0 0);
  --muted-foreground: oklch(0.708 0 0);
  --accent: oklch(0.269 0 0);
  --accent-foreground: oklch(0.985 0 0);
  --destructive: oklch(0.704 0.191 22.216);
  --border: oklch(1 0 0 / 10%);
  --input: oklch(1 0 0 / 15%);
  --ring: oklch(0.556 0 0);
  --chart-1: oklch(0.488 0.243 264.376);
  --chart-2: oklch(0.696 0.17 162.48);
  --chart-3: oklch(0.769 0.188 70.08);
  --chart-4: oklch(0.627 0.265 303.9);
  --chart-5: oklch(0.645 0.246 16.439);
  --sidebar: oklch(0.205 0 0);
  --sidebar-foreground: oklch(0.985 0 0);
  --sidebar-primary: oklch(0.488 0.243 264.376);
  --sidebar-primary-foreground: oklch(0.985 0 0);
  --sidebar-accent: oklch(0.269 0 0);
  --sidebar-accent-foreground: oklch(0.985 0 0);
  --sidebar-border: oklch(1 0 0 / 10%);
  --sidebar-ring: oklch(0.556 0 0);
}

@layer base {
  * {
    @apply border-border outline-ring/50;
  }

  body {
    @apply bg-background text-foreground;
  }
}
`;

function detectFramework(cwd) {
    if (
        existsSync(join(cwd, "next.config.js")) ||
        existsSync(join(cwd, "next.config.ts")) ||
        existsSync(join(cwd, "next.config.mjs"))
    )
        return "next";
    if (
        existsSync(join(cwd, "vite.config.js")) ||
        existsSync(join(cwd, "vite.config.ts"))
    )
        return "vite";
    if (existsSync(join(cwd, "remix.config.js"))) return "remix";
    if (existsSync(join(cwd, "astro.config.mjs"))) return "astro";
    return "other";
}

function findGlobalsCss(cwd, dir = "", depth = 0) {
    if (depth > 5) return null;
    const abs = join(cwd, dir);
    let entries;
    try {
        entries = readdirSync(abs, { withFileTypes: true });
    } catch {
        return null;
    }
    for (const entry of entries) {
        if (entry.name === "node_modules" || entry.name === ".git") continue;
        const rel = dir ? `${dir}/${entry.name}` : entry.name;
        if (entry.isFile() && entry.name === "globals.css") return rel;
        if (entry.isDirectory()) {
            const found = findGlobalsCss(cwd, rel, depth + 1);
            if (found) return found;
        }
    }
    return null;
}

function suggestCssPath(framework, cwd) {
    const found = findGlobalsCss(cwd);
    if (found) return found;
    const src = hasSrcDir(cwd);
    switch (framework) {
        case "next":
            return src ? "src/app/globals.css" : "app/globals.css";
        case "vite":
            return "src/index.css";
        case "remix":
            return src ? "src/app/root.css" : "app/root.css";
        default:
            return src ? "src/globals.css" : "globals.css";
    }
}

function suggestTailwindConfig(cwd) {
    if (existsSync(join(cwd, "tailwind.config.ts")))
        return "tailwind.config.ts";
    if (existsSync(join(cwd, "tailwind.config.js")))
        return "tailwind.config.js";
    return "tailwind.config.js";
}

function detectTypeScript(cwd) {
    return existsSync(join(cwd, "tsconfig.json"));
}

export async function init(opts) {
    const cwd = opts.cwd || process.cwd();

    const existing = readConfig(cwd);
    if (existing && !opts.yes) {
        const { overwrite } = await prompts({
            type: "confirm",
            name: "overwrite",
            message: `${chalk.yellow("shery-ui.json")} already exists. Overwrite?`,
            initial: false,
        });
        if (!overwrite) {
            return;
        }
    }

    const framework = detectFramework(cwd);
    const hasTs = detectTypeScript(cwd);

    let config = { ...DEFAULT_CONFIG };

    if (opts.yes) {
        config.tsx = hasTs;
        config.tailwind.css = suggestCssPath(framework, cwd);
        config.tailwind.config = suggestTailwindConfig(cwd);
    } else {
        const { tsx } = await prompts({
            type: "toggle",
            name: "tsx",
            message: "Would you like to use TypeScript?",
            initial: hasTs,
            active: "yes",
            inactive: "no",
        });
        config.tsx = tsx ?? hasTs;

        const { cssPath } = await prompts({
            type: "text",
            name: "cssPath",
            message: "Where is your global CSS file?",
            initial: suggestCssPath(framework, cwd),
        });
        config.tailwind.css = cssPath || suggestCssPath(framework);

        const { tailwindConfig } = await prompts({
            type: "text",
            name: "tailwindConfig",
            message: "Where is your tailwind.config file?",
            initial: suggestTailwindConfig(cwd),
        });
        config.tailwind.config = tailwindConfig || suggestTailwindConfig(cwd);

        const { cssVariables } = await prompts({
            type: "toggle",
            name: "cssVariables",
            message: "Use CSS variables for theming?",
            initial: true,
            active: "yes",
            inactive: "no",
        });
        config.tailwind.cssVariables = cssVariables ?? true;

        const { componentsAlias } = await prompts({
            type: "text",
            name: "componentsAlias",
            message: "Configure the import alias for components:",
            initial: "@/components",
        });
        config.aliases.components = componentsAlias || "@/components";
        config.aliases.ui = (componentsAlias || "@/components") + "/ui";

        const { utilsAlias } = await prompts({
            type: "text",
            name: "utilsAlias",
            message: "Configure the import alias for utils:",
            initial: "@/lib/utils",
        });
        config.aliases.utils = utilsAlias || "@/lib/utils";
        config.aliases.lib = (utilsAlias || "@/lib/utils")
            .split("/")
            .slice(0, -1)
            .join("/");
    }

    writeConfig(config, cwd);

    const cssAbsPath = join(cwd, config.tailwind.css);
    try {
        const block = `${CSS_FULL}\n`;

        if (existsSync(cssAbsPath)) {
            let existing = readFileSync(cssAbsPath, "utf8");
            const startIdx = existing.indexOf(CSS_FULL.trim().split("\n")[0]);
            const endIdx = existing.indexOf(CSS_FULL) + CSS_FULL.length;
            if (startIdx !== -1 && endIdx !== -1) {
                existing =
                    existing.slice(0, startIdx) +
                    block +
                    existing.slice(endIdx).replace(/^\n/, "");
            } else {
                const tailwindEnd = existing.lastIndexOf("@tailwind");
                const insertAt =
                    tailwindEnd !== -1
                        ? existing.indexOf("\n", tailwindEnd) + 1
                        : 0;
                existing =
                    existing.slice(0, insertAt) +
                    "\n" +
                    block +
                    existing.slice(insertAt);
            }
            writeFileSync(cssAbsPath, existing, "utf8");
        } else {
            mkdirSync(dirname(cssAbsPath), { recursive: true });
            writeFileSync(cssAbsPath, CSS_FULL, "utf8");
        }
    } catch {}

    const utilsRelPath = resolveUtilsPath(config, cwd);
    const utilsExt = config.tsx ? ".ts" : ".js";
    const utilsFile = utilsRelPath.replace(/\.js$/, utilsExt);
    const utilsAbsPath = join(cwd, utilsFile);

    try {
        mkdirSync(dirname(utilsAbsPath), { recursive: true });
        writeFileSync(
            utilsAbsPath,
            config.tsx ? CN_CODE_TS : CN_CODE_JS,
            "utf8"
        );
    } catch {}

    await installPackages(["clsx", "tailwind-merge"], cwd);
}
