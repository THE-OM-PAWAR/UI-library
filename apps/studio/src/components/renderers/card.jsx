export function renderCard(
    {
        Card,
        CardHeader,
        CardTitle,
        CardDescription,
        CardContent,
        CardFooter,
        Button,
    },
    customClassName
) {
    return (
        <div className="max-w-sm">
            <Card className={customClassName}>
                <CardHeader>
                    <CardTitle>Card Title</CardTitle>
                    <CardDescription>
                        Card description goes here.
                    </CardDescription>
                </CardHeader>
                <CardContent>This is the main content area.</CardContent>
                <CardFooter>
                    <Button>Action</Button>
                </CardFooter>
            </Card>
        </div>
    );
}
