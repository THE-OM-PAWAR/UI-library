"use client";

import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
} from "@repo/components";
import React, { useState } from "react";

export default function PaginationNumbers() {
    const [currentPage, setCurrentPage] = useState(2);

    return (
        <Pagination>
            <PaginationContent>
                {[1, 2, 3, 4, 5].map((page) => (
                    <PaginationItem key={page}>
                        <PaginationLink
                            href="#"
                            isActive={currentPage === page}
                            onClick={(e) => {
                                e.preventDefault();
                                setCurrentPage(page);
                            }}
                        >
                            {page}
                        </PaginationLink>
                    </PaginationItem>
                ))}
            </PaginationContent>
        </Pagination>
    );
}
