import {
    Button,
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@repo/components";

export default function CardWithImage() {
    return (
        <div className="max-w-sm w-full">
            <Card className="overflow-hidden">
                <img
                    src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=800"
                    alt="Mountain landscape"
                    className="w-full h-48 object-cover"
                />
                <CardHeader>
                    <CardTitle>Mountain Trail</CardTitle>
                    <CardDescription>
                        A scenic hike through alpine meadows.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <p className="text-sm text-muted-foreground">
                        Explore breathtaking views at 3,200m elevation. Suitable
                        for intermediate hikers.
                    </p>
                </CardContent>
                <CardFooter className="gap-2">
                    <Button size="sm">Book Now</Button>
                    <Button size="sm" variant="outline">
                        Learn More
                    </Button>
                </CardFooter>
            </Card>
        </div>
    );
}
