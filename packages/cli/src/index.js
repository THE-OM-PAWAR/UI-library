#!/usr/bin/env node

import { Command } from "commander";
import { readFileSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { add } from "./commands/add.js";
import { init } from "./commands/init.js";
import { list } from "./commands/list.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const pkg = JSON.parse(
    readFileSync(join(__dirname, "../package.json"), "utf8")
);

const program = new Command();

program
    .name("shery-ui")
    .description("Add beautiful UI components to your project")
    .version(pkg.version)
    .showHelpAfterError();

program
    .command("init")
    .description("Initialize your project and create shery-ui.json")
    .option(
        "-y, --yes",
        "Skip all confirmation prompts and use defaults",
        false
    )
    .option("--cwd <cwd>", "The working directory", process.cwd())
    .action(init);

program
    .command("add [components...]")
    .description("Add one or more components to your project")
    .option("-y, --yes", "Skip confirmation prompts", false)
    .option("--cwd <cwd>", "The working directory", process.cwd())
    .option(
        "-p, --path <path>",
        "Override the output path (ignores shery-ui.json)"
    )
    .action(add);

program
    .command("list")
    .description("List all available components")
    .action(list);

program.parse();
