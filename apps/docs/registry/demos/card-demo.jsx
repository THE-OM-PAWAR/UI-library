import {
    Button,
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@repo/components";

export default function CardDemo() {
    return (
        <div className="max-w-sm">
            <Card>
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
