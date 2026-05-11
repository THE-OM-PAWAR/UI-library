import { Spinner } from "@repo/components";

const colors = [
    { cls: "text-foreground", label: "Foreground" },
    { cls: "text-primary", label: "Primary" },
    { cls: "text-destructive", label: "Destructive" },
    { cls: "text-muted-foreground", label: "Muted" },
];

export default function SpinnerColors() {
    return (
        <div className="flex items-center gap-8">
            {colors.map(({ cls, label }) => (
                <div key={cls} className="flex flex-col items-center gap-2">
                    <Spinner className={`size-6 ${cls}`} />
                    <span className="text-xs text-muted-foreground">
                        {label}
                    </span>
                </div>
            ))}
        </div>
    );
}
