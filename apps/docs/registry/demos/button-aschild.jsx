import { Button } from "@repo/components";
import Link from "next/link";

export default function ButtonAsChild() {
    return (
        <Button>
            <Link href="/login">Login</Link>
        </Button>
    );
}
