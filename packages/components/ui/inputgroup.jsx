"use client"

import * as React from "react"
import { cn } from "@repo/utils";


export const InputGroup = ({ className, ...props }) => {
  return (
    <div
      className={cn(
        "flex items-center border rounded-md px-2 overflow-hidden bg-white",
        className
      )}
      {...props}
    />
  )
}


export const InputGroupInput = React.forwardRef(
  ({ className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={cn("flex-1 px-3 py-2 outline-none text-sm", className)}
        {...props}
      />
    )
  }
)
InputGroupInput.displayName = "InputGroupInput"

export const InputGroupTextarea = React.forwardRef(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        className={cn(
          "flex-1 px-3 py-2 outline-none text-sm resize-none ",
          className
        )}
        {...props}
      />
    )
  }
)
InputGroupTextarea.displayName = "InputGroupTextarea"

// 🔹 Addon
export const InputGroupAddon = ({ children, align, className }) => {
  return (
    <div
      className={cn(
        "flex items-center px-2 text-gray-500",
        align === "inline-end" && "gap-2",
        align === "block-end" && "flex-col items-end gap-2 p-2",
        className
      )}
    >
      {children}
    </div>
  )
}


export const InputGroupText = ({ className, ...props }) => {
  return (
    <span className={cn("text-xs text-gray-500", className)} {...props} />
  )
}


export const InputGroupButton = ({
  className,
  variant = "default",
  size = "sm",
  ...props
}) => {
  return (
    <button
      className={cn(
        "rounded-md px-3 py-1 text-sm",
        variant === "default" && "bg-black text-white",
        size === "sm" && "text-xs px-2 py-1",
        className
      )}
      {...props}
    />
  )
}