import { cn } from "@repo/utils";

export function DocsSection({ children, className, ...props }) {
    return (
        <section className={cn("mb-16", className)} {...props}>
            {children}
        </section>
    );
}
