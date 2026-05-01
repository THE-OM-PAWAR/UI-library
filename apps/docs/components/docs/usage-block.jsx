"use client";

import { cn } from "@repo/utils";
import { Check, Copy } from "lucide-react";
import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

export function UsageBlock({ code, language = "jsx", title = "Usage" }) {
    const [isCopied, setIsCopied] = useState(false);

    const handleCopy = async () => {
        await navigator.clipboard.writeText(code);
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
    };

    return (
        <div className="relative rounded-lg border border-border overflow-hidden bg-card my-6">
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-2 border-b border-border bg-muted/30 dark:bg-muted/10">
                <span className="text-sm font-medium text-foreground">
                    {title}
                </span>
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
            </div>

            {/* Code Content */}
            <div className="relative bg-muted/30 dark:bg-[#0d1117]">
                <div className="[&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                    <SyntaxHighlighter
                        language={language}
                        style={vscDarkPlus}
                        customStyle={{
                            margin: 0,
                            padding: "1rem",
                            background: "transparent",
                            fontSize: "0.8125rem",
                            lineHeight: "1.6",
                        }}
                        showLineNumbers={false}
                    >
                        {code}
                    </SyntaxHighlighter>
                </div>
            </div>
        </div>
    );
}
