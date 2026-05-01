import { cn } from "@repo/utils";

function Image({
    src,
    alt,
    className,
    priority = "low",
    width = 500,
    height = 500,
    loading = "lazy",
    fit = "cover",
    position = "center",
    ...props
}) {
    return (
        <img
            data-slot="image"
            src={src}
            alt={alt ?? "Image"}
            fetchPriority={priority}
            loading={loading}
            className={cn("block", className)}
            style={{
                width,
                height,
                objectFit: fit,
                objectPosition: position,
            }}
            {...props}
        />
    );
}

export { Image };
