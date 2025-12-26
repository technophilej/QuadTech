import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  basePath: string;
}

export default function Pagination({
  currentPage,
  totalPages,
  basePath,
}: PaginationProps) {
  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  const getPageUrl = (page: number) => {
    if (page === 1) return basePath;
    return `${basePath}?page=${page}`;
  };

  return (
    <nav
      className="flex items-center justify-center gap-2 mt-12"
      aria-label="Pagination"
    >
      {currentPage > 1 && (
        <Link
          href={getPageUrl(currentPage - 1)}
          className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-slate-600 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 hover:text-[#0d9488] transition-colors"
          aria-label="Previous page"
        >
          <ChevronLeft size={16} aria-hidden="true" />
          Previous
        </Link>
      )}

      <div className="flex items-center gap-1">
        {pages.map((page) => (
          <Link
            key={page}
            href={getPageUrl(page)}
            className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
              page === currentPage
                ? "bg-[#0d9488] text-white"
                : "text-slate-600 bg-white border border-slate-200 hover:bg-slate-50 hover:text-[#0d9488]"
            }`}
            aria-current={page === currentPage ? "page" : undefined}
          >
            {page}
          </Link>
        ))}
      </div>

      {currentPage < totalPages && (
        <Link
          href={getPageUrl(currentPage + 1)}
          className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-slate-600 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 hover:text-[#0d9488] transition-colors"
          aria-label="Next page"
        >
          Next
          <ChevronRight size={16} aria-hidden="true" />
        </Link>
      )}
    </nav>
  );
}
