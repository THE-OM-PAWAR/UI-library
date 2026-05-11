import { Image } from "@repo/components";

const src =
    "https://images.unsplash.com/photo-1774711268987-a56e0de1d79d?q=80&w=800";

export default function ImageScaleDown() {
    return (
        <Image
            src={src}
            alt="Scale-down fit"
            width={480}
            height={200}
            fit="scale-down"
            className="rounded-md bg-muted"
        />
    );
}
