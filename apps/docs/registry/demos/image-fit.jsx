import { Image, Separator } from "@repo/components";

const src =
    "https://images.unsplash.com/photo-1774711268987-a56e0de1d79d?q=80&w=800";

export default function ImageFitVariants() {
    const fits = ["cover", "contain", "fill", "scale-down", "none"];

    return (
        <div className="flex flex-col gap-6 w-full max-w-lg">
            {fits.map((fit, i) => (
                <div key={fit} className="flex flex-col gap-2">
                    <p className="text-sm font-medium capitalize">
                        fit="{fit}"
                    </p>
                    <Image
                        src={src}
                        alt={`Fit ${fit}`}
                        width={480}
                        height={200}
                        fit={fit}
                        className="rounded-md bg-muted"
                    />
                    {i < fits.length - 1 && <Separator className="mt-2" />}
                </div>
            ))}
        </div>
    );
}
