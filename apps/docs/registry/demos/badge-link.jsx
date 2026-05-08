import { ArrowUpRightIcon } from "lucide-react"

import { Badge } from "@repo/components";


export default function BadgeAsLink() {
  return (
    <Badge asChild>
      <a href="#link" className="flex items-center">
        Open Link <ArrowUpRightIcon data-icon="inline-end" />
      </a>
    </Badge>
  )
}
