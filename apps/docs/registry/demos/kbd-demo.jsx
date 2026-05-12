import { Kbd } from "@repo/components";

export default function KbdDemo() {
  return (
    <div className="flex items-center gap-2 text-sm">
      Press <Kbd>Ctrl</Kbd><Kbd>K</Kbd> to open command search.
    </div>
  );
}
