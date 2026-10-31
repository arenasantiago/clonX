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
     return (
        <nav aria-label="Pagination" className="flex items-center justify-between p-4">
            <button onClick={previous} disabled={!hasPrevious} className="disabled:opacity-40">
                Previous
            </button>
            <span>Page {page} of {totalPages}</span>
            <button onClick={next} disabled={!hasNext} className="disabled:opacity-40">
                Next
            </button>
        </nav>
    )
  }
   
}
