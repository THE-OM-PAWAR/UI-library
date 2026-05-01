import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import { useMemo } from "react";

function DataTableDemo({
    DataTable,
    Button,
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    customClassName,
}) {
    const data = useMemo(
        () => [
            {
                id: "pay_001",
                email: "olivia@example.com",
                status: "paid",
                amount: 250,
            },
            {
                id: "pay_002",
                email: "jack@example.com",
                status: "pending",
                amount: 150,
            },
            {
                id: "pay_003",
                email: "isabella@example.com",
                status: "failed",
                amount: 350,
            },
        ],
        []
    );

    const columns = useMemo(
        () => [
            {
                id: "select",
                header: ({ table }) => (
                    <input
                        type="checkbox"
                        aria-label="Select all"
                        checked={table.getIsAllPageRowsSelected()}
                        onChange={(e) =>
                            table.toggleAllPageRowsSelected(e.target.checked)
                        }
                    />
                ),
                cell: ({ row }) => (
                    <input
                        type="checkbox"
                        aria-label="Select row"
                        checked={row.getIsSelected()}
                        onChange={(e) => row.toggleSelected(e.target.checked)}
                    />
                ),
            },
            {
                accessorKey: "email",
                header: ({ column }) => (
                    <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => column.toggleSorting()}
                    >
                        Email <ArrowUpDown className="ml-2 h-4 w-4" />
                    </Button>
                ),
            },
            { accessorKey: "status", header: "Status" },
            {
                accessorKey: "amount",
                header: () => <div className="text-right">Amount</div>,
                cell: ({ row }) => {
                    const formatted = new Intl.NumberFormat("en-US", {
                        style: "currency",
                        currency: "USD",
                    }).format(row.getValue("amount"));
                    return (
                        <div className="text-right font-medium">
                            {formatted}
                        </div>
                    );
                },
            },
            {
                id: "actions",
                cell: ({ row }) => (
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button
                                variant="ghost"
                                size="sm"
                                className="h-8 w-8 p-0"
                            >
                                <MoreHorizontal className="h-4 w-4" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuItem>Copy ID</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>View details</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                ),
            },
        ],
        [
            Button,
            DropdownMenu,
            DropdownMenuTrigger,
            DropdownMenuContent,
            DropdownMenuItem,
            DropdownMenuLabel,
            DropdownMenuSeparator,
        ]
    );

    return (
        <div className="w-full max-w-5xl">
            <DataTable
                className={customClassName}
                columns={columns}
                data={data}
                filterColumn="email"
                filterPlaceholder="Filter emails..."
            />
        </div>
    );
}

export function renderDataTable(components, customClassName) {
    return <DataTableDemo {...components} customClassName={customClassName} />;
}
