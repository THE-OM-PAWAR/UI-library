import {
    Avatar,
    AvatarFallback,
    AvatarGroup,
    AvatarGroupCount,
    AvatarImage,
} from "@shery-ui/components";

export default function AvatarGroupDemo() {
    return (
        <AvatarGroup>
            <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" alt="shadcn" />
                <AvatarFallback>SC</AvatarFallback>
            </Avatar>
            <Avatar>
                <AvatarImage src="https://github.com/leerob.png" alt="leerob" />
                <AvatarFallback>LR</AvatarFallback>
            </Avatar>
            <Avatar>
                <AvatarFallback>OP</AvatarFallback>
            </Avatar>
            <AvatarGroupCount>+2</AvatarGroupCount>
        </AvatarGroup>
    );
}
