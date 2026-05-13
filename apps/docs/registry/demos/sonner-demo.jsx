import { Button, Toaster } from "@shery-ui/components";

export default function SonnerDemo() {
    return (
        <div className="flex flex-col items-center gap-3">
            <Toaster />
            <Button variant="outline">Toaster mounted</Button>
        </div>
    );
}
