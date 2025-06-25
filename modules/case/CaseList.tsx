"use client";

import { ChevronRight } from "@/components/icons/ChevronRight";
import { cn } from "@/lib/utils";
import { useState } from "react";
import CaseItem from "./CaseItem";
import { useGetCases } from "@/hooks/useGetCases";

const ITEMS_PER_PAGE = 12; // Show 12items per page

export default function CaseList() {
  const [currentPage, setCurrentPage] = useState(1);
  const { data, isLoading, error } = useGetCases(100); // Fetch more items to handle pagination locally
  if (isLoading) {
    return (
      <div className="space-y-16 px-6 sm:px-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-12">
          {Array.from({ length: 12 }).map((_, index) => (
            <div key={index} className="animate-pulse">
              <div className="bg-gray-200 aspect-video rounded-lg mb-4"></div>
              <div className="bg-gray-200 h-4 rounded mb-2"></div>
              <div className="bg-gray-200 h-4 rounded w-3/4"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="space-y-16 px-6 sm:px-0">
        <div className="text-center text-red-500">
          Error loading cases. Please try again later.
        </div>
      </div>
    );
  }

  const cases = data?.cases || [];
  const totalPages = Math.ceil(cases.length / ITEMS_PER_PAGE);

  // Get current page items
  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentItems = cases.slice(indexOfFirstItem, indexOfLastItem);

  // Generate page numbers array
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  // Transform case data to match CaseItem props
  const transformedItems = currentItems.map((caseItem) => ({
    image: caseItem.thumbnail,
    category: caseItem.category,
    title: caseItem.title,
    shortDesc: caseItem.cardDescription,
    date: caseItem.createdAt
      ? new Date(caseItem.createdAt).toLocaleDateString("ja-JP")
      : "",
    href: `/case/${caseItem.id}`,
  }));

  return (
    <div className="space-y-16 px-6 sm:px-0">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-12">
        {transformedItems.map((item, index) => (
          <CaseItem key={`${item.href}-${index}`} {...item} index={index} />
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-14">
          <button
            onClick={handlePrevPage}
            className="p-2 text-web-main transition-colors rotate-180 disabled:!cursor-not-allowed"
            disabled={currentPage === 1}
          >
            <ChevronRight />
          </button>

          <div className="flex items-center gap-8">
            {pageNumbers.map((number) => (
              <button
                key={number}
                onClick={() => handlePageChange(number)}
                className={cn(
                  "w-6 h-auto block relative text-normal transition-all duration-300",
                  currentPage === number
                    ? "text-web-dark after:absolute after:-bottom-3 after:left-0 after:w-full after:h-0.5 after:bg-web-main"
                    : "hover:opacity-30"
                )}
              >
                {number}
              </button>
            ))}
          </div>

          {totalPages > pageNumbers.length && <span className="px-2">...</span>}

          <button
            onClick={handleNextPage}
            className="p-2 text-web-main transition-colors"
            disabled={currentPage === totalPages}
          >
            <ChevronRight />
          </button>
        </div>
      )}
    </div>
  );
}
