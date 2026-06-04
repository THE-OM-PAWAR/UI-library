"use client";

import { cn } from "@repo/utils";
import { Check, Copy } from "lucide-react";
import { useEffect, useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
    atomDark,
    oneLight,
} from "react-syntax-highlighter/dist/esm/styles/prism";

export function ComponentPreview({
    children,
    code,
    language = "jsx",
    className,
}) {
    const [isCodeVisible, setIsCodeVisible] = useState(false);
    const [isCopied, setIsCopied] = useState(false);
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        const html = document.documentElement;
        const check = () => setIsDark(html.classList.contains("dark"));
        check();
        const observer = new MutationObserver(check);
        observer.observe(html, {
            attributes: true,
            attributeFilter: ["class"],
        });
        return () => observer.disconnect();
    }, []);

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
                        isCodeVisible ? "max-h-none" : "max-h-[100px]"
                    )}
                >
                    <div
                        className={cn(
                            "relative",
                            isDark ? "bg-[#1a1b26]" : "bg-[#fafbfc]"
                        )}
                    >
                        {/* Copy Button */}
                        <button
                            onClick={handleCopy}
                            className={cn(
                                "absolute top-3 right-3 z-10",
                                "p-2 rounded-md",
                                "bg-background/80 hover:bg-background border border-border",
                                "text-muted-foreground hover:text-foreground",
                                "transition-all duration-200 shadow-sm"
                            )}
                            title="Copy code"
                        >
                            {isCopied ? (
                                <Check className="w-4 h-4 text-green-500" />
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
                                style={isDark ? atomDark : oneLight}
                                customStyle={{
                                    margin: 0,
                                    padding: "1.5rem",
                                    background: "transparent",
                                    fontSize: "14px",
                                    lineHeight: "1.5",
                                    overflowX: "auto",
                                    whiteSpace: "pre-wrap",
                                    wordBreak: "break-word",
                                }}
                                showLineNumbers={true}
                                lineNumberStyle={{
                                    minWidth: "3em",
                                    paddingRight: "1em",
                                    color: isDark
                                        ? "rgba(255,255,255,0.25)"
                                        : "#b0b0b0",
                                    userSelect: "none",
                                }}
                            >
                                {code}
                            </SyntaxHighlighter>
                        </div>

                        {/* Fade Overlay when collapsed */}
                        {!isCodeVisible && (
                            <div
                                className={cn(
                                    "absolute inset-0 pointer-events-none",
                                    isDark
                                        ? "bg-gradient-to-t from-[#1a1b26] via-[#1a1b26]/80 to-transparent"
                                        : "bg-gradient-to-t from-[#fafbfc] via-[#fafbfc]/80 to-transparent"
                                )}
                            />
                        )}
                    </div>
                </div>

                {/* View Code / View Less Button - at bottom */}
                <div className="border-t border-border">
                    <button
                        onClick={() => setIsCodeVisible(!isCodeVisible)}
                        className={cn(
                            "w-full inline-flex items-center justify-center gap-2 px-4 py-3",
                            "text-sm font-medium",
                            "text-muted-foreground hover:text-foreground",
                            "hover:bg-accent/50",
                            "transition-all duration-200"
                        )}
                    >
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
                        <span>{isCodeVisible ? "View Less" : "View Code"}</span>
                    </button>
                </div>
            </div>
        </div>
    );
}
