"use client";

import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@repo/components";
import React, { useState } from "react";

export default function PaginationDemo() {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious 
            href="#" 
            onClick={(e) => { e.preventDefault(); setCurrentPage(prev => Math.max(prev - 1, 1)); }} 
            className={currentPage === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}
          />
        </PaginationItem>
        
        {[1, 2, 3].map((page) => (
          <PaginationItem key={page}>
            <PaginationLink 
              href="#" 
              isActive={currentPage === page}
              onClick={(e) => { e.preventDefault(); setCurrentPage(page); }}
            >
              {page}
            </PaginationLink>
          </PaginationItem>
        ))}
        
        <PaginationItem><PaginationEllipsis /></PaginationItem>
        
        <PaginationItem>
          <PaginationNext 
            href="#" 
            onClick={(e) => { e.preventDefault(); setCurrentPage(prev => Math.min(prev + 1, 3)); }} 
            className={currentPage === 3 ? "pointer-events-none opacity-50" : "cursor-pointer"}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
