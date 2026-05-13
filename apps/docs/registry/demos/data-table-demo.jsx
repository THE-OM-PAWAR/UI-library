"use client";

import {
    Button,
    DataTable,
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@shery-ui/components";

import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import { useMemo } from "react";

export default function DataTableDemo() {
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
                accessorKey: "email",
                header: ({ column }) => (
                    <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => column.toggleSorting()}
                    >
                        Email
                        <ArrowUpDown className="ml-2 h-4 w-4" />
                    </Button>
                ),
            },

            {
                accessorKey: "status",
                header: "Status",
            },

            {
                accessorKey: "amount",

                header: () => <div className="text-right">Amount</div>,

                cell: ({ row }) => {
                    const amount = parseFloat(row.getValue("amount"));

                    const formatted = new Intl.NumberFormat("en-US", {
                        style: "currency",
                        currency: "USD",
                    }).format(amount);

                    return (
                        <div className="text-right font-medium">
                            {formatted}
                        </div>
                    );
                },
            },

            {
                id: "actions",

                cell: () => (
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

                            <DropdownMenuSeparator />

                            <DropdownMenuItem>View details</DropdownMenuItem>

                            <DropdownMenuItem>Copy ID</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                ),
            },
        ],
        []
    );

    return (
        <div className="w-full max-w-5xl">
            <DataTable
                columns={columns}
                data={data}
                filterColumn="email"
                filterPlaceholder="Filter emails..."
            />
        </div>
    );
}
