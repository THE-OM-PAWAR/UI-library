import { Pagination, PaginationContent, PaginationItem, PaginationNext, PaginationPrevious } from "@repo/components";

export default function PaginationRows() {
  return (
    <div className="flex items-center space-x-6 px-2 py-4">
      <div className="flex items-center space-x-2 text-sm font-medium">
        <span className="text-muted-foreground">Rows per page</span>
        <select className="h-8 w-[70px] rounded-md border border-input bg-transparent px-2 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring dark:bg-background">
          <option>10</option>
          <option>20</option>
          <option>30</option>
          <option>40</option>
          <option>50</option>
        </select>
      </div>
      <Pagination className="w-auto mx-0">
        <PaginationContent>
          <PaginationItem><PaginationPrevious href="#" /></PaginationItem>
          <PaginationItem><PaginationNext href="#" /></PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}
