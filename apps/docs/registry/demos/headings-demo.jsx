import { Heading, Separator } from "@shery-ui/components";

export default function HeadingsDemo() {
    return (
        <div className="flex flex-col gap-4">
            <Heading size="h1">Heading 1 — The quick brown fox</Heading>
            <Heading size="h2">Heading 2 — The quick brown fox</Heading>
            <Heading size="h3">Heading 3 — The quick brown fox</Heading>
            <Heading size="h4">Heading 4 — The quick brown fox</Heading>
            <Heading size="h5">Heading 5 — The quick brown fox</Heading>
            <Heading size="h6">Heading 6 — The quick brown fox</Heading>
        </div>
    );
}
