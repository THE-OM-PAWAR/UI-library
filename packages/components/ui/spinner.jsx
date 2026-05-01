import { cn } from "@repo/utils";
import { Loader } from "lucide-react";

function Spinner({ icon: Icon = Loader, className, ...props }) {
    return (
        <Icon
            role="status"
            aria-label="Loading"
            className={cn("size-4 animate-spin", className)}
            {...props}
        />
    );
}

export { Spinner };
