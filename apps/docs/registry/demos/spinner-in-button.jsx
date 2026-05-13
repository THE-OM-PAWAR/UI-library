import { Button, Spinner } from "@shery-ui/components";

export default function SpinnerInButton() {
    return (
        <div className="flex flex-wrap items-center gap-3">
            <Button disabled>
                <Spinner className="size-4" />
                Loading…
            </Button>
            <Button variant="outline" disabled>
                <Spinner className="size-4" />
                Saving…
            </Button>
            <Button variant="secondary" disabled>
                <Spinner className="size-4" />
                Please wait
            </Button>
        </div>
    );
}
