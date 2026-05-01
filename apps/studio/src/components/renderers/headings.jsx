function HeadingsDemo({ Heading, Separator }) {
    return (
        <div className="flex flex-col gap-6">
            <h4 className="font-medium">Size Variants</h4>
            <div className="flex flex-col gap-4">
                <Heading size="h1">Heading 1 — The quick brown fox</Heading>
                <Heading size="h2">Heading 2 — The quick brown fox</Heading>
                <Heading size="h3">Heading 3 — The quick brown fox</Heading>
                <Heading size="h4">Heading 4 — The quick brown fox</Heading>
                <Heading size="h5">Heading 5 — The quick brown fox</Heading>
                <Heading size="h6">Heading 6 — The quick brown fox</Heading>
            </div>

            <Separator />

            <h4 className="font-medium">Paragraph</h4>
            <Heading size="p">
                This is a paragraph variant. It uses muted foreground color and
                is capped at max-w-2xl for comfortable reading line length.
            </Heading>

            <Separator />

            <h4 className="font-medium">Extra Small / Label</h4>
            <Heading size="xs">Section Label — Uppercase Small</Heading>

            <Separator />

            <h4 className="font-medium">With Custom Class</h4>
            <Heading size="h2" className="text-primary">
                Custom colored heading
            </Heading>

            <Separator />

            <h4 className="font-medium">With ID (anchor target)</h4>
            <Heading size="h3" id="section-anchor">
                Heading with anchor id
            </Heading>
        </div>
    );
}

export function renderHeadings(components) {
    return <HeadingsDemo {...components} />;
}
