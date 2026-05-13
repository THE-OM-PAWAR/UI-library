import {
    Avatar,
    AvatarBadge,
    AvatarFallback,
    AvatarImage,
} from "@shery-ui/components";
import { Check } from "lucide-react";

export default function AvatarDemo() {
    return (
        <div className="flex items-center gap-4">
            <Avatar size="sm">
                <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="User avatar"
                />
                <AvatarFallback>SM</AvatarFallback>
                <AvatarBadge />
            </Avatar>

            <Avatar size="default">
                <AvatarImage
                    src="https://github.com/leerob.png"
                    alt="User avatar"
                />
                <AvatarFallback>DF</AvatarFallback>
                <AvatarBadge>
                    <Check />
                </AvatarBadge>
            </Avatar>

            <Avatar size="lg">
                <AvatarFallback>LG</AvatarFallback>
            </Avatar>
        </div>
    );
}
