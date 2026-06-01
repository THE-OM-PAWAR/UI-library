import {
    Button,
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@repo/components";

export default function DialogScrollable() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline">Scrollable Dialog</Button>
            </DialogTrigger>
            <DialogContent className="max-h-[80vh] overflow-y-auto">
                <DialogHeader>
                    <DialogTitle>Terms of Service</DialogTitle>
                    <DialogDescription>
                        Please read through the full terms before accepting.
                    </DialogDescription>
                </DialogHeader>
                <div className="space-y-4 text-sm text-muted-foreground">
                    {Array.from({ length: 8 }).map((_, i) => (
                        <p key={i}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat.
                        </p>
                    ))}
                </div>
                <DialogFooter>
                    <DialogClose asChild>
                        <Button variant="outline">Decline</Button>
                    </DialogClose>
                    <Button>Accept</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
