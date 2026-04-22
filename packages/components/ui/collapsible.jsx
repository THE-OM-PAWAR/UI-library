import * as CollapsiblePrimitive from "@radix-ui/react-collapsible";
import React, { useState } from "react";
const Collapsible=CollapsiblePrimitive.Root;
const CollapsibleTrigger=CollapsiblePrimitive.Trigger

const CollapsibleContent=React.forwardRef(({className,...props},ref)=>{
return <CollapsiblePrimitive.Content ref={ref}
className={`overflow-hidden ${className}`}
{...props}
/>
})


CollapsibleContent.displayName="CollapsibleContent"

const CollapsibleWithLogic =({children})=>{
    const [isOpen, setIsOpen] = useState(false);
    const toggle=()=>setIsOpen((prev)=>!prev)
    return children({
        isOpen,
        setIsOpen,toggle

    });
}

export {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
    CollapsibleWithLogic
};