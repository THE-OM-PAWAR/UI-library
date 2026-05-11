import { Image } from "@repo/components";

const src =
    "https://images.unsplash.com/photo-1774711268987-a56e0de1d79d?q=80&w=800";

export default function ImageDemo() {
    return (
        <Image
            src={src}
            alt="Demo image"
            width={500}
            height={300}
            fit="cover"
            className="rounded-lg"
        />
    );
}
