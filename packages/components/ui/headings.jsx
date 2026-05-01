import { cn } from "@repo/utils";
import { cva } from "class-variance-authority";

const headingVariants = cva("text-pretty", {
    variants: {
        size: {
            h1: "text-3xl font-semibold lg:text-4xl xl:text-5xl",
            h2: "text-2xl font-semibold lg:text-3xl xl:text-4xl",
            h3: "text-xl font-medium lg:text-2xl xl:text-3xl",
            h4: "text-lg font-medium lg:text-xl xl:text-2xl",
            h5: "text-base lg:text-lg xl:text-xl",
            h6: "text-sm lg:text-base xl:text-lg max-w-2xl",
            p: "text-sm md:text-base text-muted-foreground max-w-2xl",
            xs: "text-xs md:text-sm uppercase text-muted-foreground",
            code: "text-xs font-mono bg-muted px-2 py-1 rounded",
            span: "text-sm text-muted-foreground",
        },
    },
    defaultVariants: {
        size: "h1",
    },
});

export const Heading = ({ className, size = "h1", id, children, ...props }) => {
    const Tag = size === "p" ? "p" : size === "xs" ? "span" : size;
    return (
        <Tag
            className={cn(headingVariants({ size }), className)}
            id={id}
            {...props}
        >
            {children}
        </Tag>
    );
};
