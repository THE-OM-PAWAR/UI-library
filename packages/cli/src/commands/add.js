import { mkdirSync, writeFileSync } from "fs";
import { join } from "path";
import prompts from "prompts";
import { readConfig, resolveComponentsDir } from "../lib/config.js";
import { installPackages } from "../lib/detector.js";
import { getAllComponents, getComponent } from "../lib/registry.js";
import { transformCode } from "../lib/transformer.js";

export async function add(components, opts) {
    const cwd = opts.cwd || process.cwd();
    const config = readConfig(cwd);

    if (!config && !opts.path) {
        return;
    }

    if (!components || components.length === 0) {
        const all = await getAllComponents();

        const response = await prompts({
            type: "multiselect",
            name: "selected",
            message: "Which components would you like to add?",
            choices: all.map((c) => ({
                title: c.title,
                value: c.slug,
                description: c.description,
            })),
            hint: "Space to select · A to toggle all · Enter to confirm",
            instructions: false,
        });

        if (!response.selected || response.selected.length === 0) {
            return;
        }
        components = response.selected;
    }

    const outDir =
        opts.path || resolveComponentsDir(config, cwd) || "src/components/ui";
    const depsToInstall = new Set();
    const filesToWrite = [];
    const notFound = [];

    for (const slug of components) {
        const comp = await getComponent(slug);

        if (!comp) {
            notFound.push(slug);
            continue;
        }

        const steps = comp.installation?.manual || [];

        for (const step of steps) {
            if (step.command) {
                step.command
                    .replace(/^(npm install|yarn add|pnpm add|bun add)\s+/, "")
                    .trim()
                    .split(/\s+/)
                    .filter(Boolean)
                    .forEach((p) => depsToInstall.add(p));
            }

            if (
                step.filePath &&
                step.code &&
                !step.filePath.startsWith("lib/")
            ) {
                filesToWrite.push({
                    component: comp.title,
                    slug: comp.slug,
                    filePath: step.filePath,
                    code: transformCode(step.code, config),
                });
            }
        }
    }

    if (notFound.length > 0) {
        if (filesToWrite.length === 0) {
            return;
        }
    }

    if (filesToWrite.length === 0) {
        return;
    }

    if (!opts.yes) {
        const { confirm } = await prompts({
            type: "confirm",
            name: "confirm",
            message: `Add ${filesToWrite.length} component${filesToWrite.length > 1 ? "s" : ""}?`,
            initial: true,
        });
        if (!confirm) {
            return;
        }
    }

    for (const file of filesToWrite) {
        try {
            const filename = file.filePath.split("/").pop();
            const destDir = join(cwd, outDir);
            const dest = join(destDir, filename);
            mkdirSync(destDir, { recursive: true });
            writeFileSync(dest, file.code, "utf8");
        } catch {}
    }

    if (depsToInstall.size > 0) {
        await installPackages([...depsToInstall], cwd);
    }
}
