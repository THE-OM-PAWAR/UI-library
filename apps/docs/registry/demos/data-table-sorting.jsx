"use client";

import {
    DataTable,
    Button,
} from "@repo/components";

import { ArrowUpDown } from "lucide-react";
import { useMemo } from "react";

export default function DataTableSorting() {
    const data = useMemo(
        () => [
            {
                email: "olivia@example.com",
                status: "paid",
                amount: 250,
            },
            {
                email: "jack@example.com",
                status: "pending",
                amount: 150,
            },
            {
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
                        onClick={() =>
                            column.toggleSorting(
                                column.getIsSorted() === "asc"
                            )
                        }
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
                header: "Amount",
            },
        ],
        []
    );

    return (
        <div className="w-full max-w-4xl">
            <DataTable
                columns={columns}
                data={data}
                showColumnVisibility={false}
            />
        </div>
    );
}