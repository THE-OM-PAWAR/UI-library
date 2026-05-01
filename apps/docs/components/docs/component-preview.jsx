"use client";

import { cn } from "@repo/utils";
import { Check, Copy } from "lucide-react";
import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

export function ComponentPreview({
    children,
    code,
    language = "jsx",
    className,
}) {
    const [isCodeVisible, setIsCodeVisible] = useState(false);
    const [isCopied, setIsCopied] = useState(false);

    const handleCopy = async () => {
        await navigator.clipboard.writeText(code);
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
    };

    return (
        <div className={cn("relative w-full my-6", className)}>
            {/* Single unified container */}
            <div className="relative rounded-xl border border-border overflow-hidden bg-card">
                {/* Preview Section */}
                <div className="relative bg-background">
                    <div className="flex min-h-[350px] items-center justify-center p-10">
                        {children}
                    </div>
                </div>

                {/* Separator */}
                <div className="border-t border-border" />

                {/* Code Section */}
                <div
                    className={cn(
                        "relative overflow-hidden transition-all duration-300 ease-in-out",
                        isCodeVisible ? "max-h-[600px]" : "max-h-[100px]"
                    )}
                >
                    <div className="relative bg-muted/30 dark:bg-[#0d1117]">
                        {/* View Code Button */}
                        <div className="absolute left-1/2 top-3 -translate-x-1/2 z-20">
                            <button
                                onClick={() => setIsCodeVisible(!isCodeVisible)}
                                className={cn(
                                    "inline-flex items-center gap-2 px-4 py-2 rounded-md",
                                    "bg-background border border-border",
                                    "text-sm font-medium text-foreground",
                                    "hover:bg-accent hover:text-accent-foreground",
                                    "transition-all duration-200",
                                    "shadow-sm"
                                )}
                            >
                                <span>View Code</span>
                                <svg
                                    className={cn(
                                        "w-4 h-4 transition-transform duration-200",
                                        isCodeVisible && "rotate-180"
                                    )}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            </button>
                        </div>

                        {/* Copy Button */}
                        <button
                            onClick={handleCopy}
                            className={cn(
                                "absolute top-3 right-3 z-10",
                                "p-2 rounded-md",
                                "bg-background/80 hover:bg-background border border-border",
                                "text-muted-foreground hover:text-foreground",
                                "transition-all duration-200"
                            )}
                            title="Copy code"
                        >
                            {isCopied ? (
                                <Check className="w-4 h-4" />
                            ) : (
                                <Copy className="w-4 h-4" />
                            )}
                        </button>

                        {/* Code Block */}
                        <div
                            className={cn(
                                "overflow-hidden",
                                "[&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
                            )}
                        >
                            <SyntaxHighlighter
                                language={language}
                                style={vscDarkPlus}
                                customStyle={{
                                    margin: 0,
                                    padding: "1.5rem",
                                    background: "transparent",
                                    fontSize: "1.3rem",
                                    lineHeight: "1.3",
                                }}
                                showLineNumbers={true}
                                lineNumberStyle={{
                                    minWidth: "3em",
                                    paddingRight: "1em",
                                    color: "rgba(255, 255, 255, 0.3)",
                                    userSelect: "none",
                                }}
                            >
                                {code}
                            </SyntaxHighlighter>
                        </div>

                        {/* Fade Overlay when collapsed */}
                        {!isCodeVisible && (
                            <div className="absolute inset-0 bg-gradient-to-t from-muted/30 via-muted/20 to-transparent dark:from-[#0d1117] dark:via-[#0d1117]/80 dark:to-transparent pointer-events-none" />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
