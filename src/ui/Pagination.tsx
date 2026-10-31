type PaginationProps = {
    page: number
    totalPages: number
    hasPrevious: boolean
    hasNext: boolean
    previous: () => void
    next: () => void
}


export default function Pagination({ page, totalPages, hasPrevious, hasNext, previous, next }:PaginationProps) {
    if(totalPages <= 1) {
        return null
    }
    return (
    <nav aria-label="Pagination" className="flex items-center justify-between gap-3 border-t border-slate-200 px-4 py-4 sm:px-6">
            <button onClick={previous} disabled={!hasPrevious} className="min-h-11 rounded-full border border-slate-300 px-4 font-semibold text-slate-700 transition-colors hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40">
                Previous
            </button>
            <span className="text-sm font-medium text-slate-500">Page {page} of {totalPages}</span>
            <button onClick={next} disabled={!hasNext} className="min-h-11 rounded-full border border-slate-300 px-4 font-semibold text-slate-700 transition-colors hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40">
                Next
            </button>
        </nav>
        )
   
}
