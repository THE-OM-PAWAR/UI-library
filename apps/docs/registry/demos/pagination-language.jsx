"use client";

import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@repo/components";
import { AlertCircle } from "lucide-react";
import React from "react";

export default function PaginationLanguage() {
  const [language, setLanguage] = React.useState("sanskrit");
  const [currentPage, setCurrentPage] = React.useState(2);

  const translations = {
    sanskrit: { prev: "पूर्वम्", next: "अग्रिमम्", n1: "१", n2: "२", n3: "३" },
    hindi: { prev: "पिछला", next: "अगला", n1: "१", n2: "२", n3: "३" },
  };

  const t = translations[language];

  return (
    <div className="flex flex-col justify-between w-full min-h-[300px] p-6 rounded-lg border bg-background text-foreground shadow-sm">
      {/* Top Header with Language Dropdown and Info Icon */}
      <div className="flex items-start justify-between w-full">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="w-[180px] justify-between text-muted-foreground shadow-none">
              {language === "sanskrit" ? "Sanskrit (संस्कृतम्)" : "Hindi (हिन्दी)"}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="w-[180px]">
            <DropdownMenuRadioGroup value={language} onValueChange={setLanguage}>
              <DropdownMenuRadioItem value="sanskrit">Sanskrit (संस्कृतम्)</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="hindi">Hindi (हिन्दी)</DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>

        <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
          <AlertCircle className="size-5" />
          <span className="sr-only">Info</span>
        </Button>
      </div>

      {/* Centered Pagination at the bottom */}
      <div className="mt-auto pt-10">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                href="#"
                text={t.prev}
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
                  {page === 1 ? t.n1 : page === 2 ? t.n2 : t.n3}
                </PaginationLink>
              </PaginationItem>
            ))}

            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext
                href="#"
                text={t.next}
                onClick={(e) => { e.preventDefault(); setCurrentPage(prev => Math.min(prev + 1, 3)); }}
                className={currentPage === 3 ? "pointer-events-none opacity-50" : "cursor-pointer"}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
}
