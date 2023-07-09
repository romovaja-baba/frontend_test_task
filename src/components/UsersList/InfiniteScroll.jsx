import { cloneElement, useEffect, useRef, useState } from "react"
import { generateUsers } from "../../lib/fakeGenerator"

const InfiniteScroll = ({ loader, onReceiveItems, hasMore, children }) => {
    const element = useRef(null)
    const [initCall, setInitCall] = useState(false)
    const [page, setPage] = useState(1)
    const loaderWithRef = cloneElement(loader, { ref: element })

    const setInitialData = () => {
        onReceiveItems(generateUsers(), page)
        setPage(page + 1)
        setInitCall(true)
    }

    const intersectionObserver = new IntersectionObserver(entries => {
        const entry = entries[0]

        if (entry.isIntersecting && hasMore) {
            onReceiveItems(generateUsers(), page)
            setPage(page + 1)
        }
    })

    useEffect(() => {
        if (!initCall) setInitialData()

        if (hasMore) intersectionObserver.observe(element.current)

        return () => {
            element.current && intersectionObserver.unobserve(element.current)
        }
    }, [page])

    return (
        <>
            {children}
            {hasMore && loaderWithRef}
        </>
    )
}

export default InfiniteScroll
