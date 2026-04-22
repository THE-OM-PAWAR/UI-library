import React, { useState, useRef, useEffect } from "react"
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import { cn } from '@repo/utils';

const DropdownMenu = DropdownMenuPrimitive.Root;
const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;
const DropdownMenuGroup = DropdownMenuPrimitive.Group;
const DropdownMenuPortal = DropdownMenuPrimitive.Portal;
const DropdownMenuSub = DropdownMenuPrimitive.Sub;
const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup;

export function ButtonGroup({ children }) {
  return <div className="flex items-center gap-1">{children}</div>
}

export function Button({ children, className = "", ...props }) {
  return (
    <button
      className={`px-4 py-2 border bg-white hover:bg-gray-100 ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

export function Dropdown({ children }) {
  const [open, setOpen] = useState(false)
  const ref = useRef()

  // close on outside click
  useEffect(() => {
    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false)
      }
    }
    document.addEventListener("click", handleClick)
    return () => document.removeEventListener("click", handleClick)
  }, [])

  return (
    <div ref={ref} className="relative">
      {React.Children.map(children, (child) =>
        React.cloneElement(child, { open, setOpen })
      )}
    </div>
  )
}

export function DropdownTrigger({ children, setOpen }) {
  return (
    <button
      onClick={() => setOpen((prev) => !prev)}
      className="px-3 py-2 border bg-white hover:bg-gray-100 rounded-xl"
    >
      {children}
    </button>
  )
}

export function DropdownContent({ children, open }) {
  if (!open) return null

  return (
    <div className="absolute right-0 mt-2 w-40 bg-white border shadow rounded">
      {children}
    </div>
  )
}

export function DropdownItem({ children, setOpen }) {
    
  return (
    <div
      onClick={() => setOpen(false)}
      className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
    >
      {children}
    </div>
  )
}