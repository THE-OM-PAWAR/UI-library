import { Check } from "lucide-react";

export function renderAvatar({
    Avatar,
    AvatarImage,
    AvatarFallback,
    AvatarBadge,
    AvatarGroup,
    AvatarGroupCount,
}) {
    return (
        <div className="flex flex-col gap-6">
            <div className="flex items-end gap-4 rounded-md border border-border bg-card p-3">
                <Avatar size="sm">
                    <AvatarImage
                        src="https://i.pravatar.cc/64?img=12"
                        alt="User avatar"
                    />
                    <AvatarFallback>OM</AvatarFallback>
                    <AvatarBadge />
                </Avatar>
                <Avatar size="default">
                    <AvatarImage
                        src="https://i.pravatar.cc/64?img=16"
                        alt="User avatar"
                    />
                    <AvatarFallback>DP</AvatarFallback>
                    <AvatarBadge>
                        <Check />
                    </AvatarBadge>
                </Avatar>
                <Avatar size="lg">
                    <AvatarImage
                        src="https://i.pravatar.cc/64?img=28"
                        alt="User avatar"
                    />
                    <AvatarFallback>UI</AvatarFallback>
                    <AvatarBadge>
                        <Check />
                    </AvatarBadge>
                </Avatar>
            </div>

            <AvatarGroup className="rounded-md border border-border bg-card p-3">
                <Avatar size="default">
                    <AvatarImage
                        src="https://i.pravatar.cc/64?img=20"
                        alt="Member 1"
                    />
                    <AvatarFallback>A</AvatarFallback>
                </Avatar>
                <Avatar size="default">
                    <AvatarImage
                        src="https://i.pravatar.cc/64?img=32"
                        alt="Member 2"
                    />
                    <AvatarFallback>B</AvatarFallback>
                </Avatar>
                <Avatar size="default">
                    <AvatarImage
                        src="https://i.pravatar.cc/64?img=45"
                        alt="Member 3"
                    />
                    <AvatarFallback>C</AvatarFallback>
                </Avatar>
                <AvatarGroupCount>+4</AvatarGroupCount>
            </AvatarGroup>

            <div className="flex items-center gap-4 rounded-md border border-border bg-card p-3">
                <Avatar size="default">
                    <AvatarFallback>AB</AvatarFallback>
                </Avatar>
                <Avatar size="default">
                    <AvatarFallback className="bg-primary text-primary-foreground">
                        CD
                    </AvatarFallback>
                </Avatar>
                <Avatar size="default">
                    <AvatarImage
                        src="https://i.pravatar.cc/64?img=52"
                        alt="User avatar"
                    />
                    <AvatarBadge className="bg-success-9 text-white" />
                </Avatar>
            </div>

            <AvatarGroup className="rounded-md border border-border bg-card p-3">
                <Avatar size="sm">
                    <AvatarImage
                        src="https://i.pravatar.cc/64?img=15"
                        alt="Member 1"
                    />
                    <AvatarFallback>E</AvatarFallback>
                </Avatar>
                <Avatar size="sm">
                    <AvatarImage
                        src="https://i.pravatar.cc/64?img=9"
                        alt="Member 2"
                    />
                    <AvatarFallback>F</AvatarFallback>
                </Avatar>
                <Avatar size="sm">
                    <AvatarImage
                        src="https://i.pravatar.cc/64?img=8"
                        alt="Member 3"
                    />
                    <AvatarFallback>G</AvatarFallback>
                </Avatar>
                <AvatarGroupCount>+8</AvatarGroupCount>
            </AvatarGroup>
        </div>
    );
}
