
import { ArrowUpRightIcon,FolderCog } from "lucide-react"
import {Button} from "../../../../../packages/components/ui/button"

export function renderEmpty({Empty,EmptyHeader,
  EmptyMedia,
  EmptyTitle,
  EmptyDescription,
  EmptyContent,}){
     return (

      
           <Empty>
      <EmptyHeader>
        <EmptyMedia variant="icon">
      <FolderCog/>
        </EmptyMedia>
        <EmptyTitle>No Projects Yet</EmptyTitle>
        <EmptyDescription>
          You haven&apos;t created any projects yet. Get started by creating
          your first project.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent className="flex-row justify-center gap-2">
        <Button>Create Project</Button>
        <Button variant="outline">Import Project</Button>
      </EmptyContent>
     
      <EmptyContent className="flex gap-1 hover:underline ">
 <Button
        variant="link"
        asChild
        className="text-muted-foreground"
        size="sm"
      >
        <a href="#">
          Learn More  
        </a>
      </Button>
      <ArrowUpRightIcon/>
      </EmptyContent>

    </Empty>
        
     )
}