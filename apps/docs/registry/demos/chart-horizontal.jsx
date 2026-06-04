import { ChartContainer } from "@repo/components";

const chartConfig = {
    sales: { label: "Sales", color: "#06b6d4" },
};

const data = [
    { label: "Electronics", value: 840 },
    { label: "Clothing", value: 620 },
    { label: "Food", value: 480 },
    { label: "Books", value: 320 },
    { label: "Sports", value: 240 },
];

export default function ChartHorizontal() {
    const max = Math.max(...data.map((d) => d.value));

    return (
        <ChartContainer
            config={chartConfig}
            className="w-full max-w-md rounded-lg border p-4"
        >
            <div className="mb-4 text-sm font-medium">Sales by category</div>
            <div className="space-y-3">
                {data.map((item) => (
                    <div key={item.label} className="flex items-center gap-3">
                        <span className="w-20 shrink-0 text-right text-xs text-muted-foreground">
                            {item.label}
                        </span>
                        <div className="flex-1 overflow-hidden rounded-full bg-muted">
                            <div
                                className="h-6 rounded-full transition-all duration-500"
                                style={{
                                    width: `${(item.value / max) * 100}%`,
                                    backgroundColor: "#06b6d4",
                                }}
                            />
                        </div>
                        <span className="w-12 text-right text-xs font-medium">
                            {item.value}
                        </span>
                    </div>
                ))}
            </div>
        </ChartContainer>
    );
}
