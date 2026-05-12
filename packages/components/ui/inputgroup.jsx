import * as React from "react";
import { cn } from "@repo/utils";

const InputGroup = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("flex w-full items-stretch rounded-md border bg-background overflow-hidden", className)}
      {...props}
    />
  );
});

const InputGroupAddon = React.forwardRef(({ className, position = "left", children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "flex items-center px-3 text-sm text-muted-foreground bg-muted",
        position === "left" && "border-r",
        position === "right" && "border-l",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
});

const InputGroupInput = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <input ref={ref} className={cn("flex-1 px-3 py-2 text-sm outline-none bg-transparent", className)} {...props} />
  );
});

InputGroup.displayName = "InputGroup";
InputGroupAddon.displayName = "InputGroupAddon";
InputGroupInput.displayName = "InputGroupInput";

export { InputGroup, InputGroupAddon, InputGroupInput };
