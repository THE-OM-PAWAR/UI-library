"use client";
import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { Search, X } from "lucide-react";

const components = [
    { name: "Accordion", slug: "accordion" },
    { name: "Alert", slug: "alert" },
    { name: "Avatar", slug: "avatar" },
    { name: "Badge", slug: "badge" },
    { name: "Button", slug: "button" },
    { name: "Card", slug: "card" },
    { name: "Checkbox", slug: "checkbox" },
    { name: "Dialog", slug: "dialog" },
    { name: "Input", slug: "input" },
    { name: "Input Group", slug: "inputgroup" },
    { name: "Kbd", slug: "kbd" },
    { name: "Popover", slug: "popover" },
    { name: "Tabs", slug: "tabs" },
    { name: "Tooltip", slug: "tooltip" },
];

export default function CommandSearch({ open, onClose }) {
    const inputRef = useRef(null);
    const router = useRouter();

    useEffect(() => {
        if (open) setTimeout(() => inputRef.current?.focus(), 50);
    }, [open]);

    useEffect(() => {
        const handleKey = (e) => {
            if (e.key === "Escape") onClose();
        };
        document.addEventListener("keydown", handleKey);
        return () => document.removeEventListener("keydown", handleKey);
    }, [onClose]);

    if (!open) return null;

    const handleSelect = (slug) => {
        router.push(`/docs/${slug}`);
        onClose();
    };

    return (
        <div
            className="fixed inset-0 z-50 flex items-start justify-center bg-black/50 pt-24"
            onMouseDown={onClose}
        >
            <div
                className="w-full max-w-lg rounded-xl border border-border bg-background shadow-2xl"
                onMouseDown={(e) => e.stopPropagation()}
            >
                <div className="flex items-center gap-3 border-b border-border px-4 py-3">
                    <Search className="h-4 w-4 shrink-0 text-muted-foreground" />
                    <input
                        ref={inputRef}
                        className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
                        placeholder="Search components..."
                    />
                    <button
                        className="rounded p-1 text-muted-foreground hover:text-foreground"
                        onClick={onClose}
                    >
                        <X size={16} />
                    </button>
                </div>
                <ul className="max-h-80 overflow-y-auto py-2">
                    {components.map((c) => (
                        <li key={c.slug}>
                            <button
                                className="w-full px-4 py-2 text-left text-sm hover:bg-accent hover:text-accent-foreground"
                                onClick={() => handleSelect(c.slug)}
                            >
                                {c.name}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}