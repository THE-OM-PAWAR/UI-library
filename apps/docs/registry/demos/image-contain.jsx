import { Image } from "@shery-ui/components";

const src =
    "https://images.unsplash.com/photo-1774711268987-a56e0de1d79d?q=80&w=800";

export default function ImageContain() {
    return (
        <Image
            src={src}
            alt="Contain fit"
            width={480}
            height={200}
            fit="contain"
            className="rounded-md bg-muted"
        />
    );
}
