"use client";

import React, { useState } from "react";
import { Check, Clipboard, Terminal } from "lucide-react";
import { Button, Input } from "@repo/components";
import styles from "@/css/home/CodeSnippetShowcase.module.css";

const codeExample = `import { Button, Input } from "@repo/components";

export default function SignupForm() {
  return (
    <form className="grid gap-3">
      <Input placeholder="hello@frostui.dev" />
      <Button>Create account</Button>
    </form>
  );
}`;

const installCommand = "npx frost-ui add button input";

const CodeSnippetShowcase = () => {
    const [activeTab, setActiveTab] = useState("preview");
    const [copied, setCopied] = useState(false);

    const copyCode = async () => {
        await navigator.clipboard.writeText(codeExample);
        setCopied(true);
        window.setTimeout(() => setCopied(false), 1400);
    };

    return (
        <section className={styles.wraper}>
            <div className={styles.section}>
                <div className={styles.heading}>
                    <span>Code Snippet</span>
                    <h2>Preview it, copy it, install it, and keep moving.</h2>
                </div>

                <div className={styles.shell}>
                    <div className={styles.toolbar}>
                        <div className={styles.tabs} role="tablist">
                            <button
                                aria-selected={activeTab === "preview"}
                                className={styles.tab}
                                onClick={() => setActiveTab("preview")}
                                type="button"
                            >
                                Preview
                            </button>
                            <button
                                aria-selected={activeTab === "code"}
                                className={styles.tab}
                                onClick={() => setActiveTab("code")}
                                type="button"
                            >
                                Code
                            </button>
                        </div>

                        <button
                            className={styles.copyButton}
                            onClick={copyCode}
                            type="button"
                        >
                            {copied ? (
                                <Check aria-hidden="true" />
                            ) : (
                                <Clipboard aria-hidden="true" />
                            )}
                            <span>{copied ? "Copied" : "Copy"}</span>
                        </button>
                    </div>

                    <div className={styles.panel}>
                        {activeTab === "preview" ? (
                            <div className={styles.preview}>
                                <div className={styles.previewCard}>
                                    <span>Newsletter</span>
                                    <h3>Join the Frost UI updates list.</h3>
                                    <div className={styles.form}>
                                        <Input defaultValue="hello@frostui.dev" />
                                        <Button>Create account</Button>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <pre className={styles.codeBlock}>
                                <code>{codeExample}</code>
                            </pre>
                        )}
                    </div>

                    <div className={styles.install}>
                        <Terminal aria-hidden="true" />
                        <code>{installCommand}</code>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CodeSnippetShowcase;
