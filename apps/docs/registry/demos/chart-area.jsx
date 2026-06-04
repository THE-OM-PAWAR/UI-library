import { ChartContainer } from "@repo/components";

const chartConfig = {
    users: { label: "Users", color: "#ec4899" },
};

const data = [
    { day: "Mon", value: 120 },
    { day: "Tue", value: 180 },
    { day: "Wed", value: 140 },
    { day: "Thu", value: 220 },
    { day: "Fri", value: 190 },
    { day: "Sat", value: 280 },
    { day: "Sun", value: 240 },
];

export default function ChartArea() {
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
            <div className="mb-4 text-sm font-medium">Weekly active users</div>
            <div className="relative h-44">
                <svg
                    viewBox="0 0 100 100"
                    className="h-full w-full"
                    preserveAspectRatio="none"
                >
                    <defs>
                        <linearGradient
                            id="areaGrad"
                            x1="0"
                            y1="0"
                            x2="0"
                            y2="1"
                        >
                            <stop
                                offset="0%"
                                stopColor="#ec4899"
                                stopOpacity="0.4"
                            />
                            <stop
                                offset="100%"
                                stopColor="#ec4899"
                                stopOpacity="0.05"
                            />
                        </linearGradient>
                    </defs>
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
                    <polygon
                        points={`0,100 ${points} 100,100`}
                        fill="url(#areaGrad)"
                    />
                    <polyline
                        points={points}
                        fill="none"
                        stroke="#ec4899"
                        strokeWidth="1"
                        vectorEffect="non-scaling-stroke"
                    />
                </svg>
            </div>
            <div className="mt-2 flex justify-between">
                {data.map((d) => (
                    <span key={d.day} className="text-xs text-muted-foreground">
                        {d.day}
                    </span>
                ))}
            </div>
        </ChartContainer>
    );
}
