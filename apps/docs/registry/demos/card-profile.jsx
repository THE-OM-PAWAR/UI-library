import {
    Button,
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@repo/components";

export default function CardProfile() {
    return (
        <div className="max-w-xs w-full">
            <Card>
                <CardHeader className="items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-2xl font-semibold text-primary mb-2">
                        JD
                    </div>
                    <CardTitle>Jane Doe</CardTitle>
                    <CardDescription>
                        Product Designer · San Francisco
                    </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                    <p className="text-sm text-muted-foreground">
                        Crafting beautiful digital experiences with a focus on
                        accessibility and usability.
                    </p>
                </CardContent>
                <CardFooter className="justify-center gap-2">
                    <Button size="sm">Follow</Button>
                    <Button size="sm" variant="outline">
                        Message
                    </Button>
                </CardFooter>
            </Card>
        </div>
    );
}
