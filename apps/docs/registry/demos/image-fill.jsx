import { Image } from "@repo/components";

const src =
    "https://images.unsplash.com/photo-1774711268987-a56e0de1d79d?q=80&w=800";

export default function ImageFill() {
    return (
        <Image
            src={src}
            alt="Fill fit"
            width={480}
            height={200}
            fit="fill"
            className="rounded-md bg-muted"
        />
    );
}
