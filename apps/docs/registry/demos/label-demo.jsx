import { Input, Label } from "@repo/components";

export default function LabelDemo() {
  return (
    <div className="grid w-full max-w-sm gap-2">
      <Label htmlFor="username">Username</Label>
      <Input id="username" placeholder="bhavya" />
    </div>
  );
}
