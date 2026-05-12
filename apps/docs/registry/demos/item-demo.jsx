import { Item } from "@repo/components";
import { Bell, ChevronRight } from "lucide-react";

export default function ItemDemo() {
  return (
    <div className="w-full max-w-sm rounded-lg border p-1">
      <Item leftIcon={<Bell className="h-4 w-4" />} rightIcon={<ChevronRight className="h-4 w-4" />}>
        Notifications
      </Item>
    </div>
  );
}
