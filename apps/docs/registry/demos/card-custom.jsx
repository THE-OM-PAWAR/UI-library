import { Card, CardContent, CardHeader, CardTitle } from "@shery-ui/components";

export default function CardCustom() {
    return (
        <Card className="hover:scale-[1.02] transition">
            <CardHeader>
                <CardTitle>Interactive Card</CardTitle>
            </CardHeader>
            <CardContent>Hover me to see effect.</CardContent>
        </Card>
    );
}
