import { ChevronsUpDown } from "lucide-react";
import {Button} from "../../../../../packages/components/ui/button"
export function renderCollapsible({  Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
    CollapsibleWithLogic}){
    return (
         <CollapsibleWithLogic>
      {({ isOpen, setIsOpen }) => (
        <Collapsible
          open={isOpen}
          onOpenChange={setIsOpen}
          className="flex w-[350px] flex-col gap-2"
        >
          {/* Header */}
          <div className="flex items-center justify-between gap-4 px-4">
            <h4 className="text-sm font-semibold">Order #4189</h4>

            <CollapsibleTrigger asChild>
              <Button variant="ghost" size="icon" className="size-8">
                <ChevronsUpDown />
              </Button>
            </CollapsibleTrigger>
          </div>

          {/* Always visible */}
          <div className="flex items-center justify-between rounded-md border px-4 py-2 text-sm">
            <span className="text-muted-foreground">Status</span>
            <span className="font-medium">Shipped</span>
          </div>

          {/* Hidden content */}
          <CollapsibleContent className="flex flex-col gap-2">
            <div className="rounded-md border px-4 py-2 text-sm">
              <p className="font-medium">Shipping address</p>
              <p className="text-muted-foreground">
                100 Market St, San Francisco
              </p>
            </div>

            <div className="rounded-md border px-4 py-2 text-sm">
              <p className="font-medium">Items</p>
              <p className="text-muted-foreground">
                2x Studio Headphones
              </p>
            </div>
          </CollapsibleContent>
        </Collapsible>
      )}
    </CollapsibleWithLogic>
    )
}