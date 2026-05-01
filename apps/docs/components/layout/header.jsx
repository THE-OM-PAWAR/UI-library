"use client";

import { Button } from "@repo/components";
import { Github, Moon, Search, Sun } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export function Header() {
    const [theme, setTheme] = useState("dark");

    useEffect(() => {
        // Check for saved theme preference or default to dark
        const savedTheme = localStorage.getItem("theme") || "dark";
        setTheme(savedTheme);
        document.documentElement.classList.toggle(
            "dark",
            savedTheme === "dark"
        );
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === "dark" ? "light" : "dark";
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme);
        document.documentElement.classList.toggle("dark", newTheme === "dark");
    };

    return (
        <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-14 max-w-[100%] items-center">
                {/* Logo */}
                <Link href="/" className="mr-6 flex items-center space-x-2">
                    <svg
                        className="h-5 w-5"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M12 2L2 7l10 5 10-5-10-5z" />
                        <path d="M2 17l10 5 10-5" />
                        <path d="M2 12l10 5 10-5" />
                    </svg>
                </Link>

                {/* Navigation */}
                <nav className="flex items-center gap-6 text-sm">
                    <Link
                        href="/docs"
                        className="transition-colors hover:text-foreground/80 text-foreground/60"
                    >
                        Docs
                    </Link>
                    <Link
                        href="/components"
                        className="transition-colors hover:text-foreground/80 text-foreground/60"
                    >
                        Components
                    </Link>
                    <Link
                        href="/blocks"
                        className="transition-colors hover:text-foreground/80 text-foreground/60"
                    >
                        Blocks
                    </Link>
                    <Link
                        href="/charts"
                        className="transition-colors hover:text-foreground/80 text-foreground/60"
                    >
                        Charts
                    </Link>
                    <Link
                        href="/directory"
                        className="transition-colors hover:text-foreground/80 text-foreground/60"
                    >
                        Directory
                    </Link>
                    <Link
                        href="/create"
                        className="transition-colors hover:text-foreground/80 text-foreground/60"
                    >
                        Create
                    </Link>
                </nav>

                {/* Right side actions */}
                <div className="flex flex-1 items-center justify-end space-x-2">
                    {/* Search */}
                    <div className="relative w-full max-w-sm">
                        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                        <input
                            type="search"
                            placeholder="Search documentation..."
                            className="h-9 w-full rounded-md border border-border bg-background pl-9 pr-4 text-sm outline-none placeholder:text-muted-foreground focus:border-ring focus:ring-1 focus:ring-ring"
                        />
                    </div>

                    {/* GitHub */}
                    <Button variant="ghost" size="icon" asChild>
                        <a
                            href="https://github.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub"
                        >
                            <Github className="h-4 w-4" />
                        </a>
                    </Button>

                    {/* Theme Toggle */}
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={toggleTheme}
                        aria-label="Toggle theme"
                    >
                        {theme === "dark" ? (
                            <Sun className="h-4 w-4" />
                        ) : (
                            <Moon className="h-4 w-4" />
                        )}
                    </Button>

                    {/* New Button */}
                    <Button size="sm" className="h-8 px-3">
                        New
                    </Button>
                </div>
            </div>
        </header>
    );
}
