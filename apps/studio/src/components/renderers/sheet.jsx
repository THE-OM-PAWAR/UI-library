export function renderSheet({
  Button,
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetFooter,
}) {
  return (
    <div className="grid w-full max-w-2xl grid-cols-2 gap-3 rounded-lg border border-border bg-card p-4">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" className="w-full">Right sheet</Button>
        </SheetTrigger>
        <SheetContent side="right">
          <SheetHeader>
            <SheetTitle>Edit profile</SheetTitle>
            <SheetDescription>Right side default panel.</SheetDescription>
          </SheetHeader>
          <div className="px-4 text-sm text-muted-foreground">Sheet content goes here.</div>
          <SheetFooter>
            <Button variant="outline">Cancel</Button>
            <Button>Save</Button>
          </SheetFooter>
        </SheetContent>
      </Sheet>

      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" className="w-full">Left sheet</Button>
        </SheetTrigger>
        <SheetContent side="left">
          <SheetHeader>
            <SheetTitle>Filters</SheetTitle>
            <SheetDescription>Left side variant.</SheetDescription>
          </SheetHeader>
          <div className="px-4 text-sm text-muted-foreground">Filter options</div>
        </SheetContent>
      </Sheet>

      <Sheet>
        <SheetTrigger asChild>
          <Button variant="secondary" className="w-full">Top sheet</Button>
        </SheetTrigger>
        <SheetContent side="top">
          <SheetHeader>
            <SheetTitle>Announcements</SheetTitle>
            <SheetDescription>Top slide-in variant.</SheetDescription>
          </SheetHeader>
          <div className="px-4 pb-4 text-sm text-muted-foreground">Banner-like content.</div>
        </SheetContent>
      </Sheet>

      <Sheet>
        <SheetTrigger asChild>
          <Button className="w-full">Bottom sheet</Button>
        </SheetTrigger>
        <SheetContent side="bottom" showCloseButton={false}>
          <SheetHeader>
            <SheetTitle>Quick actions</SheetTitle>
            <SheetDescription>Bottom sheet without close button.</SheetDescription>
          </SheetHeader>
          <SheetFooter>
            <Button variant="outline">Dismiss</Button>
            <Button>Continue</Button>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
}
