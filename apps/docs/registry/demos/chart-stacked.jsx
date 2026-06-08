import { ChartContainer } from "@repo/components";

const chartConfig = {
    direct: { label: "Direct", color: "#3b82f6" },
    organic: { label: "Organic", color: "#10b981" },
    referral: { label: "Referral", color: "#f59e0b" },
};

const data = [
    { month: "Jan", direct: 30, organic: 40, referral: 20 },
    { month: "Feb", direct: 45, organic: 35, referral: 25 },
    { month: "Mar", direct: 35, organic: 50, referral: 30 },
    { month: "Apr", direct: 50, organic: 45, referral: 20 },
];

export default function ChartStacked() {
    const max = Math.max(...data.map((d) => d.direct + d.organic + d.referral));

    return (
        <ChartContainer
            config={chartConfig}
            className="w-full max-w-md rounded-lg border p-4"
        >
            <div className="mb-4 text-sm font-medium">Traffic sources</div>
            <div className="flex h-44 items-end gap-3">
                {data.map((item) => {
                    const total = item.direct + item.organic + item.referral;
                    const h = (total / max) * 128;
                    return (
                        <div
                            key={item.month}
                            className="flex flex-1 flex-col items-center gap-2"
                        >
                            <div
                                className="flex w-full flex-col"
                                style={{ height: h }}
                            >
                                <div
                                    className="w-full rounded-t"
                                    style={{
                                        flex: item.referral,
                                        backgroundColor: "#f59e0b",
                                    }}
                                />
                                <div
                                    className="w-full"
                                    style={{
                                        flex: item.organic,
                                        backgroundColor: "#10b981",
                                    }}
                                />
                                <div
                                    className="w-full rounded-b"
                                    style={{
                                        flex: item.direct,
                                        backgroundColor: "#3b82f6",
                                    }}
                                />
                            </div>
                            <span className="text-xs text-muted-foreground">
                                {item.month}
                            </span>
                        </div>
                    );
                })}
            </div>
            <div className="mt-4 flex flex-wrap gap-4">
                {Object.entries(chartConfig).map(([key, cfg]) => (
                    <div key={key} className="flex items-center gap-1.5">
                        <div
                            className="h-2.5 w-2.5 rounded-full"
                            style={{ backgroundColor: cfg.color }}
                        />
                        <span className="text-xs text-muted-foreground">
                            {cfg.label}
                        </span>
                    </div>
                ))}
            </div>
        </ChartContainer>
    );
}
