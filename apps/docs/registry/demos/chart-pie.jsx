import { ChartContainer } from "@repo/components";

const chartConfig = {
    desktop: { label: "Desktop", color: "#3b82f6" },
    mobile: { label: "Mobile", color: "#10b981" },
    tablet: { label: "Tablet", color: "#f59e0b" },
};

const data = [
    { label: "Desktop", value: 55, color: "#3b82f6" },
    { label: "Mobile", value: 35, color: "#10b981" },
    { label: "Tablet", value: 10, color: "#f59e0b" },
];

export default function ChartPie() {
    const total = data.reduce((sum, d) => sum + d.value, 0);
    let cumulative = 0;

    const segments = data.map((d) => {
        const start = (cumulative / total) * 100;
        cumulative += d.value;
        const end = (cumulative / total) * 100;
        return { ...d, start, end };
    });

    return (
        <ChartContainer
            config={chartConfig}
            className="w-full max-w-md rounded-lg border p-4"
        >
            <div className="mb-4 text-sm font-medium">Device usage</div>
            <div className="flex items-center gap-6">
                <div className="relative h-40 w-40 shrink-0">
                    <svg
                        viewBox="0 0 36 36"
                        className="h-full w-full -rotate-90"
                    >
                        {segments.map((seg, i) => (
                            <circle
                                key={i}
                                cx="18"
                                cy="18"
                                r="14"
                                fill="none"
                                stroke={seg.color}
                                strokeWidth="5"
                                strokeDasharray={`${seg.end - seg.start} ${100 - (seg.end - seg.start)}`}
                                strokeDashoffset={-seg.start}
                            />
                        ))}
                    </svg>
                </div>
                <div className="space-y-3">
                    {data.map((d) => (
                        <div key={d.label} className="flex items-center gap-2">
                            <div
                                className="h-3 w-3 rounded-full"
                                style={{ backgroundColor: d.color }}
                            />
                            <span className="text-sm text-muted-foreground">
                                {d.label}
                            </span>
                            <span className="text-sm font-medium ml-auto">
                                {d.value}%
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </ChartContainer>
    );
}
