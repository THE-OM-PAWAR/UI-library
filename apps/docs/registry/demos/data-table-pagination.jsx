"use client";

import { DataTable } from "@repo/components";
import { useMemo } from "react";

export default function DataTablePagination() {
    const data = useMemo(
        () =>
            Array.from({ length: 20 }, (_, index) => ({
                id: `invoice_${index + 1}`,
                customer: `Customer ${index + 1}`,
                status:
                    index % 3 === 0
                        ? "Paid"
                        : index % 3 === 1
                        ? "Pending"
                        : "Failed",
                amount: `$${(index + 1) * 25}`,
            })),
        []
    );

    const columns = useMemo(
        () => [
            {
                accessorKey: "customer",
                header: "Customer",
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
        <div className="w-full max-w-5xl">
            <DataTable
                columns={columns}
                data={data}
                showFilter={false}
            />
        </div>
    );
}