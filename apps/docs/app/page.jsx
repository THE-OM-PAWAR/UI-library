import { Button } from "@repo/components";
import { ArrowRight, Code, Palette, Zap } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
    return (
        <div className="flex min-h-screen flex-col">
            {/* Hero Section */}
            <section className="flex flex-col items-center justify-center gap-4 py-24 md:py-32 px-4 lg:px-8">
                <div className="flex max-w-[980px] flex-col items-center gap-4 text-center">
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
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </Link>
                        <Link href="/docs/components/button">
                            <Button size="lg" variant="outline">
                                Browse Components
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-24 px-4 lg:px-8">
                <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-3">
                    <div className="flex flex-col items-center gap-2 text-center">
                        <div className="rounded-full bg-primary/10 p-3">
                            <Zap className="h-6 w-6" />
                        </div>
                        <h3 className="text-xl font-bold">Fast</h3>
                        <p className="text-muted-foreground">
                            Optimized for performance and built with modern
                            React patterns
                        </p>
                    </div>
                    <div className="flex flex-col items-center gap-2 text-center">
                        <div className="rounded-full bg-primary/10 p-3">
                            <Palette className="h-6 w-6" />
                        </div>
                        <h3 className="text-xl font-bold">Customizable</h3>
                        <p className="text-muted-foreground">
                            Fully themeable with Tailwind CSS and CSS variables
                        </p>
                    </div>
                    <div className="flex flex-col items-center gap-2 text-center">
                        <div className="rounded-full bg-primary/10 p-3">
                            <Code className="h-6 w-6" />
                        </div>
                        <h3 className="text-xl font-bold">Accessible</h3>
                        <p className="text-muted-foreground">
                            Built on Radix UI primitives for best-in-class
                            accessibility
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
