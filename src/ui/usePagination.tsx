import { useSearchParams } from "react-router"

export function usePagination<T>(items: T[], pageSize = 10) {
    const [searchParams, setSearchParams] = useSearchParams()

    const totalPages = Math.max(1, Math.ceil(items.length / pageSize))
    const requested = Number(searchParams.get("page") ?? 1)
    const page = Math.min(Math.max(requested, 1), totalPages)

    const pageItems = items.slice((page - 1) * pageSize, page * pageSize)

    function goToPage(next: number) {
        setSearchParams({ page: String(next)})
    }

    return {
        page,
        totalPages,
        pageItems,
        hasPrevious: page > 1,
        hasNext: page < totalPages,
        previous: () => goToPage(page - 1),
        next: () => goToPage(page + 1)
    }
}