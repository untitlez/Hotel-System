"use client";

import { useRouter, useSearchParams } from "next/navigation";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

interface NextPagePropertyProps {
  pagination: {
    limit: number;
    page: number;
    total: number;
  };
}

export function NextPageProperty({ pagination }: NextPagePropertyProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const { limit, page, total } = pagination;
  const totalPages = Math.ceil(total / limit);

  const updatePage = (value: number) => {
    if (value < 1 || value > totalPages) return;
    const query = new URLSearchParams(searchParams.toString());
    query.set("page", value.toString());
    router.push("?" + query);
  };

  return (
    <Pagination>
      <PaginationContent>
        {/* Previous */}
        <PaginationItem>
          <PaginationPrevious
            className="cursor-pointer"
            onClick={() => updatePage(page - 1)}
          />
        </PaginationItem>

        {/* Page */}
        {Array.from({ length: totalPages }, (_, i) => {
          const pageNum = i + 1;
          return (
            <PaginationItem key={pageNum}>
              <PaginationLink
                isActive={page === pageNum}
                href={`?page=${pageNum}`}
              >
                {pageNum}
              </PaginationLink>
            </PaginationItem>
          );
        })}

        {/* Next */}
        <PaginationItem>
          <PaginationNext
            className="cursor-pointer"
            onClick={() => updatePage(page + 1)}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
