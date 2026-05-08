import Link from "next/link"

import { Button } from "@repo/components"

export default function ButtonAsChild() {
  return (
    <Button>
        <Link href="/login">Login</Link>
    </Button>
  )
}
