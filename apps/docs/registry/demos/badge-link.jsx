import { Badge } from "@repo/components";
import { ArrowUpRightIcon } from "lucide-react";

export default function BadgeAsLink() {
    return (
        <Badge asChild>
            <a href="#link" className="flex items-center">
                Open Link <ArrowUpRightIcon data-icon="inline-end" />
            </a>
        </Badge>
    );
}
