import { Button } from "@repo/components";
import { ComponentShowcase } from "components/home/ComponentShowcase";
import {
    ArrowRight,
    Box,
    Code,
    Layers,
    Palette,
    Sparkles,
    Zap,
} from "lucide-react";
import Link from "next/link";

const features = [
    {
        icon: Zap,
        title: "Fast by default",
        description:
            "Tree-shakeable components built with performance in mind. Only ship what you use.",
    },
    {
        icon: Palette,
        title: "Fully customizable",
        description:
            "Built on CSS variables and Tailwind CSS. Theme every component to match your brand.",
    },
    {
        icon: Code,
        title: "Accessible",
        description:
            "WCAG 2.1 compliant, built on Radix UI primitives for keyboard and screen reader support.",
    },
    {
        icon: Box,
        title: "Copy & Paste",
        description:
            "Own your components. Copy code directly into your project — no package lock-in.",
    },
    {
        icon: Sparkles,
        title: "Dark mode",
        description:
            "First-class dark mode support via CSS variables for seamless theme switching.",
    },
    {
        icon: Layers,
        title: "Composable",
        description:
            "Primitive-based design lets you compose complex UIs from simple, focused building blocks.",
    },
];

export default function HomePage() {
    return (
        <div className="flex flex-col min-h-screen gap-20 py-20">
            {/* Hero Section */}
            <section className="flex flex-col items-center justify-center gap-10">
                <div className="flex max-w-[980px] flex-col items-center gap-8 text-center">
                    <h1 className="text-4xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1]">
                        Build beautiful apps with our component library
                    </h1>
                    <p className="max-w-[750px] text-lg text-muted-foreground sm:text-xl">
                        Accessible and customizable components that you can copy
                        and paste into your apps. Built with Radix UI and
                        Tailwind CSS.
                    </p>
                    <div className="flex gap-4">
                        <Link href="/docs">
                            <Button size="lg">
                                Get Started
                                <ArrowRight className="w-4 h-4 ml-2" />
                            </Button>
                        </Link>
                        <Link href="/docs/components/button">
                            <Button size="lg" variant="outline">
                                Browse Components
                            </Button>
                        </Link>
                    </div>
                </div>

                {/* Component Showcase */}
                <div className="w-full max-w-5xl">
                    <p className="mb-4 text-sm font-medium text-center text-muted-foreground">
                        A glimpse of what's inside
                    </p>
                    <ComponentShowcase />
                </div>
            </section>

            {/* Features Section */}
            <section className="px-4 py-24 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-14">
                        <h2 className="text-3xl font-bold tracking-tight">
                            Why this library?
                        </h2>
                        <p className="max-w-2xl mx-auto mt-3 text-lg text-muted-foreground">
                            Everything you need to build modern, accessible, and
                            beautiful user interfaces.
                        </p>
                    </div>
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {features.map(({ icon: Icon, title, description }) => (
                            <div
                                key={title}
                                className="flex flex-col gap-3 p-6 transition-shadow border rounded-xl bg-card hover:shadow-sm"
                            >
                                <div className="p-2.5 rounded-lg bg-primary/10 w-fit">
                                    <Icon className="w-5 h-5" />
                                </div>
                                <h3 className="text-lg font-semibold">
                                    {title}
                                </h3>
                                <p className="text-sm leading-relaxed text-muted-foreground">
                                    {description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="px-4 py-24 border-t lg:px-8">
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="mb-4 text-3xl font-bold tracking-tight">
                        Ready to build?
                    </h2>
                    <p className="mb-8 text-lg text-muted-foreground">
                        Browse the components, copy the code, and ship something
                        great.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link href="/docs">
                            <Button size="lg">
                                Get Started
                                <ArrowRight className="w-4 h-4 ml-2" />
                            </Button>
                        </Link>
                        <Link href="/docs/components">
                            <Button size="lg" variant="outline">
                                View all components
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
