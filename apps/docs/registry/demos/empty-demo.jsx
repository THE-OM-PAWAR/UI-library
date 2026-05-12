import { Button, Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from "@repo/components";
import { Inbox } from "lucide-react";

export default function EmptyDemo() {
  return (
    <Empty className="w-full max-w-sm">
      <EmptyHeader>
        <EmptyMedia><Inbox className="h-6 w-6" /></EmptyMedia>
        <EmptyTitle>No messages</EmptyTitle>
        <EmptyDescription>You are all caught up for now.</EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button size="sm">Create message</Button>
      </EmptyContent>
    </Empty>
  );
}
