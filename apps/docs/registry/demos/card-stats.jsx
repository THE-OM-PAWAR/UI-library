import { Card, CardContent } from "@shery-ui/components";

const stats = [
    { label: "Total Revenue", value: "$45,231", change: "+20.1%" },
    { label: "Active Users", value: "2,350", change: "+15.3%" },
    { label: "New Orders", value: "1,247", change: "+8.7%" },
    { label: "Conversion Rate", value: "3.24%", change: "+1.2%" },
];

export default function CardStats() {
    return (
        <div className="grid grid-cols-2 gap-4 w-full max-w-lg">
            {stats.map((stat) => (
                <Card key={stat.label}>
                    <CardContent className="pt-6">
                        <p className="text-sm text-muted-foreground">
                            {stat.label}
                        </p>
                        <p className="text-2xl font-bold mt-1">{stat.value}</p>
                        <p className="text-xs text-green-600 mt-1">
                            {stat.change} from last month
                        </p>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
}
