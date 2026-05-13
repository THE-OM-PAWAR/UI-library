import { existsSync, readFileSync, writeFileSync } from "fs";
import { join } from "path";

export function hasSrcDir(cwd = process.cwd()) {
    return existsSync(join(cwd, "src"));
}

export const CONFIG_FILE = "shery-ui.json";

export const DEFAULT_CONFIG = {
    $schema: "https://shery-ui.dev/schema.json",
    style: "default",
    tsx: false,
    tailwind: {
        config: "tailwind.config.js",
        css: "app/globals.css",
        baseColor: "neutral",
        cssVariables: true,
    },
    aliases: {
        components: "@/components",
        utils: "@/lib/utils",
        ui: "@/components/ui",
        lib: "@/lib",
    },
};

export function readConfig(cwd = process.cwd()) {
    const configPath = join(cwd, CONFIG_FILE);
    if (!existsSync(configPath)) return null;
    try {
        return JSON.parse(readFileSync(configPath, "utf8"));
    } catch {
        return null;
    }
}

export function writeConfig(config, cwd = process.cwd()) {
    const configPath = join(cwd, CONFIG_FILE);
    writeFileSync(configPath, JSON.stringify(config, null, 4) + "\n", "utf8");
}

export function resolveComponentsDir(config, cwd = process.cwd()) {
    const alias = config?.aliases?.ui || "@/components/ui";
    const rel = alias.replace(/^@\//, "");
    if (hasSrcDir(cwd) && !rel.startsWith("src/")) {
        return join("src", rel);
    }
    return rel;
}

export function resolveUtilsPath(config, cwd = process.cwd()) {
    const alias = config?.aliases?.utils || "@/lib/utils";
    const rel = alias.replace(/^@\//, "") + ".js";
    if (hasSrcDir(cwd) && !rel.startsWith("src/")) {
        return join("src", rel);
    }
    return rel;
}
