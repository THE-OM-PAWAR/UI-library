import { cn } from "@repo/utils"
import { cva } from "class-variance-authority"
import React from "react"
import { badgeVariants } from "./badge"

export const AspectRatioVarients = cva(
    'bg-[#111]',
    {
        variants:{
            variant:  {
                landscape: 'h-[16rem] w-[9rem]',
                square: 'h-[8rem] w-[8rem]',
                protrait: 'h-[9rem] w-[16rem]',
            },
            defaultVarients: {
                varient: 'landscape',
            },
        }
    }
)

export const AspectRatio = React.forwardRef(({ className, ...props, varient}, ref) => {
    <div
    ref={ref}
    data-slot = 'aspect-ratio'
    className={cn(badgeVariants({variant}),className)}
    {...props}
     />
})
