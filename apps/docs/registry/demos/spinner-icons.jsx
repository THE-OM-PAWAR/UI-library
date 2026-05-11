import { Spinner } from "@repo/components";
import { Loader, Loader2 } from "lucide-react";

const icons = [
    { icon: Loader, label: "Loader" },
    { icon: Loader2, label: "Loader2" },
];

export default function SpinnerIcons() {
    return (
        <div className="flex items-end gap-8">
            {icons.map(({ icon, label }) => (
                <div key={label} className="flex flex-col items-center gap-2">
                    <Spinner icon={icon} className="size-6" />
                    <span className="text-xs text-muted-foreground">
                        {label}
                    </span>
                </div>
            ))}
        </div>
    );
}
