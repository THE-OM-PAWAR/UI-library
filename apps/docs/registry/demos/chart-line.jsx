import { ChartContainer } from "@repo/components";

const chartConfig = {
    revenue: { label: "Revenue", color: "#8b5cf6" },
};

const data = [
    { month: "Jan", value: 42 },
    { month: "Feb", value: 58 },
    { month: "Mar", value: 34 },
    { month: "Apr", value: 72 },
    { month: "May", value: 64 },
    { month: "Jun", value: 88 },
];

export default function ChartLine() {
    const max = Math.max(...data.map((d) => d.value));
    const points = data
        .map((d, i) => {
            const x = (i / (data.length - 1)) * 100;
            const y = 100 - (d.value / max) * 80;
            return `${x},${y}`;
        })
        .join(" ");

    return (
        <ChartContainer
            config={chartConfig}
            className="w-full max-w-md rounded-lg border p-4"
        >
            <div className="mb-4 text-sm font-medium">Revenue over time</div>
            <div className="relative h-44">
                <svg
                    viewBox="0 0 100 100"
                    className="h-full w-full"
                    preserveAspectRatio="none"
                >
                    <defs>
                        <linearGradient
                            id="lineGrad"
                            x1="0"
                            y1="0"
                            x2="0"
                            y2="1"
                        >
                            <stop
                                offset="0%"
                                stopColor="#8b5cf6"
                                stopOpacity="0.3"
                            />
                            <stop
                                offset="100%"
                                stopColor="#8b5cf6"
                                stopOpacity="0"
                            />
                        </linearGradient>
                    </defs>
                    {/* Grid lines */}
                    {[0, 25, 50, 75, 100].map((y) => (
                        <line
                            key={y}
                            x1="0"
                            y1={y}
                            x2="100"
                            y2={y}
                            stroke="currentColor"
                            strokeOpacity="0.1"
                            strokeWidth="0.2"
                        />
                    ))}
                    {/* Area fill */}
                    <polygon
                        points={`0,100 ${points} 100,100`}
                        fill="url(#lineGrad)"
                    />
                    {/* Line */}
                    <polyline
                        points={points}
                        fill="none"
                        stroke="#8b5cf6"
                        strokeWidth="1"
                        vectorEffect="non-scaling-stroke"
                    />
                    {/* Dots */}
                    {data.map((d, i) => {
                        const x = (i / (data.length - 1)) * 100;
                        const y = 100 - (d.value / max) * 80;
                        return (
                            <circle
                                key={i}
                                cx={x}
                                cy={y}
                                r="2"
                                fill="#8b5cf6"
                                vectorEffect="non-scaling-stroke"
                            />
                        );
                    })}
                </svg>
            </div>
            <div className="mt-2 flex justify-between">
                {data.map((d) => (
                    <span
                        key={d.month}
                        className="text-xs text-muted-foreground"
                    >
                        {d.month}
                    </span>
                ))}
            </div>
        </ChartContainer>
    );
}
