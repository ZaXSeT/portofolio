import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { AnimatePresence, motion } from 'framer-motion'
import SmoothScroll from '@/components/SmoothScroll'
import UniqueLoading from '@/components/morph-loading'
import { useState, useEffect } from 'react'

export default function App({ Component, pageProps, router }: AppProps) {
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false)
        }, 2500)
        return () => clearTimeout(timer)
    }, [])

    return (
        <>
            <SmoothScroll />
            <AnimatePresence mode="wait">
                {isLoading && (
                    <motion.div
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5, ease: 'easeInOut' }}
                        className="fixed inset-0 z-[9999] bg-white flex items-center justify-center"
                    >
                        <UniqueLoading variant="morph" size="lg" />
                    </motion.div>
                )}
            </AnimatePresence>
            <AnimatePresence mode="wait" initial={false}>
                <Component {...pageProps} key={router.route} />
            </AnimatePresence>
        </>
    )
}
