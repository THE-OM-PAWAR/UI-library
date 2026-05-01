function ImageDemo({ Image, Separator }) {
    const src =
        "https://images.unsplash.com/photo-1774711268987-a56e0de1d79d?q=100";

    return (
        <div className="flex flex-col items-start justify-start w-full max-w-2xl gap-6">
            <h4 className="font-medium">Default Image</h4>
            <Image src={src} alt="Default" />

            <Separator />

            <h4 className="font-medium">Custom Size (400×250)</h4>
            <Image src={src} alt="Custom size" width={400} height={250} />

            <Separator />

            <h4 className="font-medium">Object Fit — cover</h4>
            <Image
                src={src}
                alt="Fit cover"
                width={500}
                height={300}
                fit="cover"
            />

            <h4 className="font-medium">Object Fit — contain</h4>
            <Image
                src={src}
                alt="Fit contain"
                width={500}
                height={500}
                fit="contain"
                className="bg-muted"
            />

            <h4 className="font-medium">Object Fit — fill</h4>
            <Image
                src={src}
                alt="Fit fill"
                width={800}
                height={500}
                fit="fill"
            />

            <h4 className="font-medium">Object Fit — scale-down</h4>
            <Image
                src={src}
                alt="Fit scale-down"
                width={500}
                height={500}
                fit="scale-down"
                className="bg-muted"
            />

            <h4 className="font-medium">Object Fit — none</h4>
            <Image
                src={src}
                alt="Fit none"
                width={500}
                height={500}
                fit="none"
                className="overflow-hidden"
            />

            <Separator />

            <h4 className="font-medium">Object Position — top</h4>
            <Image
                src={src}
                alt="Position top"
                width={500}
                height={500}
                fit="cover"
                position="top"
            />

            <h4 className="font-medium">Object Position — bottom</h4>
            <Image
                src={src}
                alt="Position bottom"
                width={500}
                height={500}
                fit="cover"
                position="bottom"
            />

            <h4 className="font-medium">Object Position — left</h4>
            <Image
                src={src}
                alt="Position left"
                width={500}
                height={500}
                fit="cover"
                position="left"
            />

            <h4 className="font-medium">Object Position — right</h4>
            <Image
                src={src}
                alt="Position right"
                width={500}
                height={500}
                fit="cover"
                position="right"
            />

            <Separator />

            <h4 className="font-medium">High Priority + Eager Loading</h4>
            <Image
                src={src}
                alt="High priority"
                width={500}
                height={500}
                priority="high"
                loading="eager"
            />

            <h4 className="font-medium">Low Priority + Lazy Loading</h4>
            <Image
                src={src}
                alt="Low priority"
                width={500}
                height={500}
                priority="low"
                loading="lazy"
            />

            <Separator />

            <h4 className="font-medium">Custom Class (rounded + shadow)</h4>
            <Image
                src={src}
                alt="Custom class"
                width={500}
                height={500}
                className="shadow-lg rounded-2xl"
            />
        </div>
    );
}

export function renderImage(components) {
    return <ImageDemo {...components} />;
}
