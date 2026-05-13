import { Heading, Separator } from "@shery-ui/components";

export default function HeadingsVariants() {
    return (
        <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-3">
                <Heading size="h4">Paragraph</Heading>
                <Heading size="p">
                    This is a paragraph variant. It uses muted foreground color
                    and is capped at max-w-2xl for comfortable reading line
                    length.
                </Heading>
            </div>

            <Separator />

            <div className="flex flex-col gap-3">
                <Heading size="h4">Extra Small / Label</Heading>
                <Heading size="xs">Section Label — Uppercase Small</Heading>
            </div>

            <Separator />

            <div className="flex flex-col gap-3">
                <Heading size="h4">Inline Code</Heading>
                <p className="text-sm text-muted-foreground">
                    Use the <Heading size="code">code</Heading> size for inline
                    code snippets.
                </p>
            </div>

            <Separator />

            <div className="flex flex-col gap-3">
                <Heading size="h4">Custom Color</Heading>
                <Heading size="h2" className="text-primary">
                    Custom colored heading
                </Heading>
            </div>
        </div>
    );
}
