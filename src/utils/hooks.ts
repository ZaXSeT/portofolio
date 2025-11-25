import { useEffect, useState, useRef } from 'react'

interface MousePosition {
    x: number
    y: number
}

/**
 * Hook to track mouse position
 * Returns normalized x and y values (0-1)
 */
export function useMousePosition() {
    const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 })

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const { clientX, clientY } = e
            const { innerWidth, innerHeight } = window

            // Normalize to 0-1 range
            const x = clientX / innerWidth
            const y = clientY / innerHeight

            setMousePosition({ x, y })
        }

        window.addEventListener('mousemove', handleMouseMove)
        return () => window.removeEventListener('mousemove', handleMouseMove)
    }, [])

    return mousePosition
}

/**
 * Hook to detect scroll direction
 * Returns 'up' or 'down'
 */
export function useScrollDirection() {
    const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('down')

    useEffect(() => {
        let lastScrollY = window.pageYOffset

        const updateScrollDirection = () => {
            const scrollY = window.pageYOffset
            const direction = scrollY > lastScrollY ? 'down' : 'up'

            if (direction !== scrollDirection && Math.abs(scrollY - lastScrollY) > 10) {
                setScrollDirection(direction)
            }

            lastScrollY = scrollY > 0 ? scrollY : 0
        }

        window.addEventListener('scroll', updateScrollDirection)
        return () => window.removeEventListener('scroll', updateScrollDirection)
    }, [scrollDirection])

    return scrollDirection
}

/**
 * Hook for scroll-down-only animations with reset
 * - Animates when scrolling DOWN and entering viewport
 * - Resets when scrolling DOWN and exiting viewport (bottom)
 * - NO animation when scrolling UP (stays visible)
 */
export function useScrollDownAnimation(options?: { margin?: string }) {
    const ref = useRef<Element>(null)
    const [isVisible, setIsVisible] = useState(false)
    const [hasAnimated, setHasAnimated] = useState(false)
    const scrollDirection = useScrollDirection()
    const lastScrollY = useRef(0)

    useEffect(() => {
        if (!ref.current) return

        const observer = new IntersectionObserver(
            ([entry]) => {
                const currentScrollY = window.pageYOffset
                const isScrollingDown = currentScrollY > lastScrollY.current

                if (entry.isIntersecting) {
                    // Element is in viewport
                    if (isScrollingDown) {
                        // Scrolling down and entering viewport - ANIMATE
                        setIsVisible(true)
                        setHasAnimated(true)
                    }
                    // If scrolling up and entering viewport - keep visible (no animation)
                } else {
                    // Element is out of viewport
                    if (isScrollingDown) {
                        // Scrolling down and exiting viewport (passed the bottom) - RESET
                        setIsVisible(false)
                        setHasAnimated(false)
                    }
                    // If scrolling up and exiting viewport - keep visible (no change)
                }

                lastScrollY.current = currentScrollY
            },
            {
                rootMargin: options?.margin || '-100px',
                threshold: 0,
            }
        )

        if (ref.current) {
            observer.observe(ref.current)
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current)
            }
        }
    }, [options?.margin])

    return { ref, isVisible }
}
