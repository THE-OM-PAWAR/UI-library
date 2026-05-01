import { cn } from "@repo/utils";

export function DocsHeading({ level = 1, children, className, ...props }) {
    const Component = `h${level}`;

    const styles = {
        1: "text-4xl font-bold tracking-tight mb-2",
        2: "text-3xl font-bold tracking-tight mt-12 mb-4 pb-2 ",
        3: "text-2xl font-semibold tracking-tight mt-8 mb-4",
        4: "text-xl font-semibold tracking-tight mt-6 mb-3",
    };

    return (
        <Component className={cn(styles[level], className)} {...props}>
            {children}
        </Component>
    );
}

export function DocsDescription({ children, className }) {
    return (
        <p className={cn("text-lg text-muted-foreground mb-8", className)}>
            {children}
        </p>
    );
}
