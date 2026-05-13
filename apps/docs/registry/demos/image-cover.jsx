import { Image } from "@shery-ui/components";

const src =
    "https://images.unsplash.com/photo-1774711268987-a56e0de1d79d?q=80&w=800";

export default function ImageCover() {
    return (
        <Image
            src={src}
            alt="Cover fit"
            width={480}
            height={200}
            fit="cover"
            className="rounded-md bg-muted"
        />
    );
}
