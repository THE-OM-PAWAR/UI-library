export function renderAspectRatio({ AspectRatio, Heading, Separator }) {
    const ratios = [
        { ratio: 16 / 9, label: "16 / 9", description: "Widescreen" },
        { ratio: 4 / 3, label: "4 / 3", description: "Classic" },
        { ratio: 1 / 1, label: "1 / 1", description: "Square" },
        { ratio: 9 / 16, label: "9 / 16", description: "Portrait" },
    ];

    return (
        <div className="flex flex-col w-full max-w-lg gap-8">
            <div className="flex flex-col gap-3">
                <Heading size="h5">With Image</Heading>
                <AspectRatio
                    ratio={16 / 9}
                    className="overflow-hidden rounded-xl bg-muted"
                >
                    <img
                        src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
                        alt="Landscape photo"
                        className="object-cover w-full h-full"
                    />
                </AspectRatio>
            </div>

            <Separator />

            <div className="flex flex-col gap-3">
                <Heading size="h5">Common Ratios</Heading>
                <div className="grid grid-cols-2 gap-4">
                    {ratios.map(({ ratio, label, description }) => (
                        <div key={label} className="flex flex-col gap-1.5">
                            <AspectRatio
                                ratio={ratio}
                                className="flex items-center justify-center overflow-hidden rounded-lg bg-muted"
                            >
                                <div className="flex flex-col items-center gap-1 text-muted-foreground">
                                    <span className="text-sm font-medium">
                                        {label}
                                    </span>
                                    <span className="text-xs">
                                        {description}
                                    </span>
                                </div>
                            </AspectRatio>
                        </div>
                    ))}
                </div>
            </div>

            <Separator />

            <div className="flex flex-col gap-3">
                <Heading size="h5">Video Embed</Heading>
                <AspectRatio
                    ratio={16 / 9}
                    className="overflow-hidden bg-black rounded-xl"
                >
                    <iframe
                        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                        title="YouTube video"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full"
                    />
                </AspectRatio>
            </div>
        </div>
    );
}
