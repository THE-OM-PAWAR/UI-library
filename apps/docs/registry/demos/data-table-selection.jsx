"use client";

import { DataTable } from "@shery-ui/components";
import { useMemo } from "react";

export default function DataTableSelection() {
    const data = useMemo(
        () => [
            {
                id: "usr_001",
                name: "Olivia Martin",
                role: "Frontend Developer",
                email: "olivia@example.com",
            },
            {
                id: "usr_002",
                name: "Jackson Lee",
                role: "Backend Developer",
                email: "jackson@example.com",
            },
            {
                id: "usr_003",
                name: "Sophia Kim",
                role: "UI Designer",
                email: "sophia@example.com",
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
                accessorKey: "name",
                header: "Name",
            },

            {
                accessorKey: "role",
                header: "Role",
            },

            {
                accessorKey: "email",
                header: "Email",
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
