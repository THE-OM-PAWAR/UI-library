export function renderPagination({
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationPrevious,
    PaginationNext,
    PaginationEllipsis,
}) {
    const currentPage = 2;
    const items = [1, 2, 3, "ellipsis"];

    return (
        <div className="flex w-full min-w-[520px] max-w-2xl items-center justify-center rounded-lg border border-border bg-card p-6">
            <Pagination>
                <PaginationContent className="gap-2">
                    <PaginationItem>
                        <PaginationPrevious
                            href="#"
                            className="h-8 rounded-lg bg-secondary px-3 text-secondary-foreground hover:bg-secondary/80"
                        />
                    </PaginationItem>

                    {items.map((item) => (
                        <PaginationItem key={item}>
                            {typeof item === "number" ? (
                                <PaginationLink
                                    href="#"
                                    isActive={item === currentPage}
                                    className="size-8 rounded-lg border-transparent bg-transparent p-0 text-foreground hover:bg-accent hover:text-accent-foreground data-[active=true]:border-border data-[active=true]:bg-background"
                                >
                                    {item}
                                </PaginationLink>
                            ) : (
                                <PaginationEllipsis className="size-8 text-muted-foreground" />
                            )}
                        </PaginationItem>
                    ))}

                    <PaginationItem>
                        <PaginationNext
                            href="#"
                            className="h-8 rounded-lg bg-transparent px-3 text-foreground hover:bg-accent hover:text-accent-foreground"
                        />
                    </PaginationItem>
                </PaginationContent>
            </Pagination>
        </div>
    );
}
