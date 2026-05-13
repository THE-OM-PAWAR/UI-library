import { Card, CardContent, Spinner } from "@shery-ui/components";

export default function SpinnerInCard() {
    return (
        <Card className="w-full max-w-sm">
            <CardContent className="flex flex-col items-center justify-center gap-3 py-10">
                <Spinner className="size-8 text-primary" />
                <p className="text-sm text-muted-foreground">Fetching data…</p>
            </CardContent>
        </Card>
    );
}
