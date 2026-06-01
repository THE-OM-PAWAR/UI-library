import { Heading } from "@repo/components";

export default function HeadingsParagraph() {
    return (
        <Heading size="p">
            This is a paragraph variant. It uses muted foreground color and is
            capped at max-w-2xl for comfortable reading line length.
        </Heading>
    );
}
