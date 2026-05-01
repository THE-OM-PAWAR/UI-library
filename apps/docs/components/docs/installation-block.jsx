"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@repo/components";
import { cn } from "@repo/utils";
import { Check, ChevronDown, Copy } from "lucide-react";
import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

// Package Manager Selector Component
function PackageManagerCommand({
    command,
    managers = ["npm", "yarn", "pnpm", "bun"],
}) {
    const [selectedManager, setSelectedManager] = useState(managers[0]);
    const [isCopied, setIsCopied] = useState(false);

    const commands = {
        npm: command.npm || command,
        yarn: command.yarn || command.replace("npm install", "yarn add"),
        pnpm: command.pnpm || command.replace("npm install", "pnpm add"),
        bun: command.bun || command.replace("npm install", "bun add"),
    };

    const handleCopy = async () => {
        await navigator.clipboard.writeText(commands[selectedManager]);
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
    };

    return (
        <div className="relative rounded-lg border border-border bg-muted/30 dark:bg-muted/10 overflow-hidden">
            {/* Package Manager Pills */}
            <div className="flex items-center gap-1 px-3 py-2 border-b border-border bg-muted/50 dark:bg-muted/5">
                {managers.map((manager) => (
                    <button
                        key={manager}
                        onClick={() => setSelectedManager(manager)}
                        className={cn(
                            "px-3 py-1 text-xs font-medium rounded-md transition-all",
                            selectedManager === manager
                                ? "bg-background text-foreground shadow-sm"
                                : "text-muted-foreground hover:text-foreground hover:bg-background/50"
                        )}
                    >
                        {manager}
                    </button>
                ))}
            </div>

            {/* Command Display */}
            <div className="relative">
                <button
                    onClick={handleCopy}
                    className={cn(
                        "absolute top-3 right-3 z-10",
                        "p-2 rounded-md",
                        "bg-background/80 hover:bg-background border border-border",
                        "text-muted-foreground hover:text-foreground",
                        "transition-all duration-200"
                    )}
                    title="Copy command"
                >
                    {isCopied ? (
                        <Check className="w-3.5 h-3.5" />
                    ) : (
                        <Copy className="w-3.5 h-3.5" />
                    )}
                </button>

                <div className="px-4 py-3 font-mono text-sm">
                    <code className="text-foreground">
                        {commands[selectedManager]}
                    </code>
                </div>
            </div>
        </div>
    );
}

// Code Block with File Path Header
function CodeBlock({ filePath, code, language = "tsx", collapsible = false }) {
    const [isExpanded, setIsExpanded] = useState(!collapsible);
    const [isCopied, setIsCopied] = useState(false);

    const handleCopy = async () => {
        await navigator.clipboard.writeText(code);
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
    };

    return (
        <div className="relative rounded-lg border border-border overflow-hidden bg-card">
            {/* File Path Header */}
            {filePath && (
                <div className="flex items-center justify-between px-4 py-2 border-b border-border bg-muted/30 dark:bg-muted/10">
                    <code className="text-xs font-mono text-muted-foreground">
                        {filePath}
                    </code>
                    <div className="flex items-center gap-2">
                        <button
                            onClick={handleCopy}
                            className={cn(
                                "p-1.5 rounded-md",
                                "hover:bg-background/80",
                                "text-muted-foreground hover:text-foreground",
                                "transition-all duration-200"
                            )}
                            title="Copy code"
                        >
                            {isCopied ? (
                                <Check className="w-3.5 h-3.5" />
                            ) : (
                                <Copy className="w-3.5 h-3.5" />
                            )}
                        </button>
                        {collapsible && (
                            <button
                                onClick={() => setIsExpanded(!isExpanded)}
                                className={cn(
                                    "p-1.5 rounded-md",
                                    "hover:bg-background/80",
                                    "text-muted-foreground hover:text-foreground",
                                    "transition-all duration-200"
                                )}
                            >
                                <ChevronDown
                                    className={cn(
                                        "w-3.5 h-3.5 transition-transform duration-200",
                                        isExpanded && "rotate-180"
                                    )}
                                />
                            </button>
                        )}
                    </div>
                </div>
            )}

            {/* Code Content */}
            <div
                className={cn(
                    "overflow-hidden transition-all duration-300",
                    collapsible && !isExpanded && "max-h-[200px]"
                )}
            >
                <div className="relative bg-muted/30 dark:bg-[#0d1117]">
                    <div className="[&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                        <SyntaxHighlighter
                            language={language}
                            style={vscDarkPlus}
                            customStyle={{
                                margin: 0,
                                padding: "1rem",
                                background: "transparent",
                                fontSize: "1.3rem",
                                lineHeight: "1.3",
                            }}
                            showLineNumbers={false}
                        >
                            {code}
                        </SyntaxHighlighter>
                    </div>

                    {collapsible && !isExpanded && (
                        <div className="absolute inset-0 bg-gradient-to-t from-muted/30 via-muted/20 to-transparent dark:from-[#0d1117] dark:via-[#0d1117]/80 dark:to-transparent pointer-events-none" />
                    )}
                </div>
            </div>
        </div>
    );
}

// Manual Installation Steps with Timeline
function ManualSteps({ steps }) {
    return (
        <div className="relative space-y-8">
            {steps.map((step, index) => (
                <div key={index} className="relative pl-8">
                    {/* Timeline Line */}
                    {index < steps.length - 1 && (
                        <div className="absolute left-[15px] top-8 bottom-0 w-px bg-border" />
                    )}

                    {/* Step Number Circle */}
                    <div className="absolute left-0 top-1 flex h-8 w-8 items-center justify-center rounded-full border-2 border-border bg-background">
                        <span className="text-sm font-semibold text-foreground">
                            {index + 1}
                        </span>
                    </div>

                    {/* Step Content */}
                    <div className="space-y-4">
                        {/* Step Title/Description */}
                        {step.title && (
                            <div>
                                <h3 className="text-base font-semibold text-foreground mb-2">
                                    {step.title}
                                </h3>
                                {step.description && (
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        {step.description}
                                    </p>
                                )}
                            </div>
                        )}

                        {/* Command */}
                        {step.command && (
                            <PackageManagerCommand
                                command={step.command}
                                managers={
                                    step.managers || [
                                        "npm",
                                        "yarn",
                                        "pnpm",
                                        "bun",
                                    ]
                                }
                            />
                        )}

                        {/* Code Block */}
                        {step.code && (
                            <CodeBlock
                                filePath={step.filePath}
                                code={step.code}
                                language={step.language || "tsx"}
                                collapsible={step.collapsible}
                            />
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
}

// Main Installation Block Component
export function InstallationBlock({ title = "Installation", tabs }) {
    return (
        <div className="w-full my-8">
            {/* Title */}
            {title && (
                <h2 className="text-2xl font-bold text-foreground mb-6">
                    {title}
                </h2>
            )}

            {/* Tabs */}
            <Tabs defaultValue={tabs[0]?.value || "cli"} className="w-full">
                <TabsList className="w-fit">
                    {tabs.map((tab) => (
                        <TabsTrigger key={tab.value} value={tab.value}>
                            {tab.label}
                        </TabsTrigger>
                    ))}
                </TabsList>

                {tabs.map((tab) => (
                    <TabsContent
                        key={tab.value}
                        value={tab.value}
                        className="mt-6"
                    >
                        {/* CLI/Command Tab */}
                        {tab.type === "command" && tab.command && (
                            <PackageManagerCommand
                                command={tab.command}
                                managers={
                                    tab.managers || [
                                        "npm",
                                        "yarn",
                                        "pnpm",
                                        "bun",
                                    ]
                                }
                            />
                        )}

                        {/* Manual Steps Tab */}
                        {tab.type === "manual" && tab.steps && (
                            <ManualSteps steps={tab.steps} />
                        )}

                        {/* Custom Content */}
                        {tab.content && <div>{tab.content}</div>}
                    </TabsContent>
                ))}
            </Tabs>
        </div>
    );
}
