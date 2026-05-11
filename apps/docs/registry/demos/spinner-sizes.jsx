import { Spinner } from "@repo/components";

const sizes = [
    { className: "size-3", label: "xs" },
    { className: "size-4", label: "sm" },
    { className: "size-6", label: "md" },
    { className: "size-8", label: "lg" },
    { className: "size-10", label: "xl" },
];

export default function SpinnerSizes() {
    return (
        <div className="flex items-end gap-8">
            {sizes.map(({ className, label }) => (
                <div key={label} className="flex flex-col items-center gap-2">
                    <Spinner className={className} />
                    <span className="text-xs text-muted-foreground">
                        {label}
                    </span>
                </div>
            ))}
        </div>
    );
}
