import { useEffect } from 'react'
import Lenis from '@studio-freight/lenis'

export default function SmoothScroll() {
    useEffect(() => {
        // Initialize Lenis with ultra-smooth scrolling
        const lenis = new Lenis({
            duration: 2.0, // Increased for smoother, slower scroll
            easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            lerp: 0.05, // Lower value = more delay/smoothness (0.05 = very smooth)
        } as any)

        // Animation frame loop
        function raf(time: number) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)

        // Cleanup
        return () => {
            lenis.destroy()
        }
    }, [])

    return null
}
