import { ChartContainer } from "@shery-ui/components";

const chartConfig = {
    desktop: { label: "Desktop", color: "#2563eb" },
    mobile: { label: "Mobile", color: "#16a34a" },
};

const data = [
    { month: "Jan", desktop: 64, mobile: 42 },
    { month: "Feb", desktop: 82, mobile: 58 },
    { month: "Mar", desktop: 74, mobile: 66 },
    { month: "Apr", desktop: 96, mobile: 72 },
];

export default function ChartDemo() {
    return (
        <ChartContainer
            config={chartConfig}
            className="w-full max-w-md rounded-lg border p-4"
        >
            <div className="mb-4 text-sm font-medium">Traffic by device</div>
            <div className="flex h-44 items-end gap-4">
                {data.map((item) => (
                    <div
                        key={item.month}
                        className="flex flex-1 flex-col items-center gap-2"
                    >
                        <div className="flex h-32 items-end gap-1">
                            <div
                                className="w-5 rounded-t bg-[var(--color-desktop)]"
                                style={{ height: item.desktop }}
                            />
                            <div
                                className="w-5 rounded-t bg-[var(--color-mobile)]"
                                style={{ height: item.mobile }}
                            />
                        </div>
                        <span className="text-xs text-muted-foreground">
                            {item.month}
                        </span>
                    </div>
                ))}
            </div>
        </ChartContainer>
    );
}
