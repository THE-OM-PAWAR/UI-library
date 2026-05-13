import chalk from "chalk";
import { execa } from "execa";
import { existsSync } from "fs";
import ora from "ora";
import { join } from "path";

export function detectPackageManager(cwd = process.cwd()) {
    if (existsSync(join(cwd, "pnpm-lock.yaml"))) return "pnpm";
    if (existsSync(join(cwd, "bun.lockb")) || existsSync(join(cwd, "bun.lock")))
        return "bun";
    if (existsSync(join(cwd, "yarn.lock"))) return "yarn";
    return "npm";
}

export async function installPackages(packages, cwd = process.cwd()) {
    if (!packages || packages.length === 0) return;

    const pm = detectPackageManager(cwd);
    const installArg = pm === "yarn" ? "add" : "install";
    const label =
        packages.length === 1 ? packages[0] : `${packages.length} packages`;

    const spinner = ora(
        `  Installing ${chalk.cyan(label)} via ${chalk.bold(pm)}...`
    ).start();

    try {
        await execa(pm, [installArg, ...packages], { cwd });
        spinner.succeed(`  Installed ${chalk.cyan(label)}`);
    } catch {
        spinner.fail(`  Failed to install dependencies automatically.`);
    }
}
