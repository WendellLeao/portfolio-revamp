import {RefObject, useEffect, useMemo, useState} from "react";

export default function useOnScreen(ref: RefObject<HTMLElement>) : boolean {
    const [isIntersecting, setIntersecting] = useState(false)

    const observer = useMemo(() => new IntersectionObserver(
        ([entry]) => setIntersecting(entry.isIntersecting)
    ), [ref])


    useEffect(() => {
        if (ref.current) {
            observer.observe(ref.current)
            return () => observer.disconnect()
        }
        else {
            console.log("Ref current is null!")
        }
    }, [])

    return isIntersecting
}