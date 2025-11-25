import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function TypographySection() {
    const containerRef = useRef<HTMLElement>(null)

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    })

    // Hero animations (0-0.14) - longer fade in, larger parallax
    const heroOpacity = useTransform(scrollYProgress, [0, 0.10, 0.12, 0.14], [0, 1, 1, 0])
    const heroScale = useTransform(scrollYProgress, [0, 0.10], [0.95, 1])

    // Statement animations (0.14-0.28) - longer fade in, larger parallax
    const statementOpacity = useTransform(scrollYProgress, [0.14, 0.24, 0.26, 0.28], [0, 1, 1, 0])
    const statementY = useTransform(scrollYProgress, [0.14, 0.24], [100, 0])

    // Split animations (0.28-0.42) - longer fade in, larger parallax
    const splitOpacity = useTransform(scrollYProgress, [0.28, 0.38, 0.40, 0.42], [0, 1, 1, 0])
    const splitLeftX = useTransform(scrollYProgress, [0.28, 0.38], [-100, 0])
    const splitRightX = useTransform(scrollYProgress, [0.28, 0.38], [100, 0])

    // Words animations (0.42-0.58) - longer fade in, larger parallax
    const wordsOpacity = useTransform(scrollYProgress, [0.42, 0.52, 0.56, 0.58], [0, 1, 1, 0])
    const word1Y = useTransform(scrollYProgress, [0.42, 0.52], [80, 0])
    const word2Y = useTransform(scrollYProgress, [0.44, 0.54], [80, 0])
    const word3Y = useTransform(scrollYProgress, [0.46, 0.56], [80, 0])

    // Quote animations (0.58-0.72) - longer fade in, larger parallax
    const quoteOpacity = useTransform(scrollYProgress, [0.58, 0.68, 0.70, 0.72], [0, 1, 1, 0])
    const quoteScale = useTransform(scrollYProgress, [0.58, 0.68], [0.98, 1])

    // Stats animations (0.72-0.86) - longer fade in, larger parallax
    const statsOpacity = useTransform(scrollYProgress, [0.72, 0.82, 0.84, 0.86], [0, 1, 1, 0])
    const stat1Y = useTransform(scrollYProgress, [0.72, 0.82], [90, 0])
    const stat2Y = useTransform(scrollYProgress, [0.74, 0.84], [90, 0])
    const stat3Y = useTransform(scrollYProgress, [0.76, 0.86], [90, 0])

    // CTA animations (0.86-1.0) - longer fade in, larger parallax
    const ctaOpacity = useTransform(scrollYProgress, [0.86, 0.96, 1], [0, 1, 1])
    const ctaY = useTransform(scrollYProgress, [0.86, 0.96], [100, 0])

    // Container visibility - stays visible during section, hides after
    const containerOpacity = useTransform(scrollYProgress, [0, 0.01, 0.99, 1], [0, 1, 1, 0])
    const containerDisplay = useTransform(scrollYProgress, (value) => {
        return value >= 0.01 && value < 1 ? 'flex' : 'none'
    })

    return (
        <section
            ref={containerRef}
            id="typography-section"
            className="relative bg-white border-t border-black"
            style={{ height: '700vh' }}
        >
            {/* Fixed viewport - stays in place while scrolling */}
            <motion.div
                style={{
                    opacity: containerOpacity,
                    display: containerDisplay
                }}
                className="fixed top-0 left-0 w-full h-screen overflow-hidden items-center justify-center z-10 bg-white"
            >
                <div className="w-full max-w-[90rem] mx-auto px-[clamp(1rem,3vw,1.5rem)] relative">

                    {/* 1. Hero */}
                    <motion.div
                        style={{ opacity: heroOpacity, scale: heroScale }}
                        className="absolute inset-0 flex items-center justify-center text-center pointer-events-none"
                    >
                        <div className="max-w-6xl space-y-6 md:space-y-8">
                            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] font-black leading-none text-black tracking-tighter">
                                Think Big.
                            </h1>
                            <p className="text-xl md:text-2xl lg:text-3xl xl:text-4xl text-black/70 font-light max-w-4xl mx-auto leading-relaxed">
                                Great design starts with bold ideas and beautiful typography.
                            </p>
                        </div>
                    </motion.div>

                    {/* 2. Statement */}
                    <motion.div
                        style={{ opacity: statementOpacity, y: statementY }}
                        className="absolute inset-0 flex items-center justify-center pointer-events-none"
                    >
                        <div className="max-w-5xl text-center space-y-6 md:space-y-8">
                            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-[1.1] text-black tracking-tight">
                                Typography is the voice of your design.
                            </h2>
                            <p className="text-xl md:text-2xl lg:text-3xl text-black/70 font-light leading-relaxed max-w-4xl mx-auto">
                                It speaks before you read it. The right typeface, size, and spacing can transform
                                a simple message into a powerful statement.
                            </p>
                        </div>
                    </motion.div>

                    {/* 3. Split */}
                    <motion.div
                        style={{ opacity: splitOpacity }}
                        className="absolute inset-0 flex items-center justify-center pointer-events-none"
                    >
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-24 items-center w-full max-w-7xl">
                            <motion.div style={{ x: splitLeftX }} className="space-y-6 md:space-y-8">
                                <h3 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-[0.95] text-black tracking-tight">
                                    Clarity meets<br />creativity.
                                </h3>
                                <p className="text-lg md:text-xl lg:text-2xl text-black/70 leading-relaxed font-light max-w-xl">
                                    Every letter, every space, every line contributes to the overall experience.
                                </p>
                            </motion.div>

                            <motion.div style={{ x: splitRightX }} className="hidden lg:flex items-center justify-end">
                                <div className="text-[14rem] xl:text-[18rem] font-black leading-none text-black/5 select-none">
                                    Aa
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* 4. Words */}
                    <motion.div
                        style={{ opacity: wordsOpacity }}
                        className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none"
                    >
                        <div className="flex flex-wrap justify-center gap-4 md:gap-8 lg:gap-12 mb-8 md:mb-10">
                            <motion.span style={{ y: word1Y }} className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black text-black tracking-tight">
                                Design.
                            </motion.span>
                            <motion.span style={{ y: word2Y }} className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black text-black tracking-tight">
                                Create.
                            </motion.span>
                            <motion.span style={{ y: word3Y }} className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black text-black tracking-tight">
                                Inspire.
                            </motion.span>
                        </div>
                        <p className="text-lg md:text-xl lg:text-2xl text-black/70 font-light max-w-3xl mx-auto leading-relaxed">
                            {"Three words that define the creative process.".split("").map((char, index) => (
                                <span
                                    key={index}
                                    style={{
                                        display: 'inline-block',
                                        animation: `slideUp 0.5s ease-out ${index * 0.03}s both`
                                    }}
                                >
                                    {char === " " ? "\u00A0" : char}
                                </span>
                            ))}
                        </p>
                    </motion.div>

                    {/* 5. Quote */}
                    <motion.div
                        style={{ opacity: quoteOpacity, scale: quoteScale }}
                        className="absolute inset-0 flex items-center justify-center pointer-events-none"
                    >
                        <blockquote className="max-w-5xl space-y-6 md:space-y-8">
                            <div className="border-l-8 border-black pl-8 md:pl-12 lg:pl-16">
                                <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.15] text-black italic tracking-tight">
                                    "The details are not the details. They make the design."
                                </p>
                            </div>
                            <footer className="text-xl md:text-2xl lg:text-3xl text-black/70 font-light pl-8 md:pl-12 lg:pl-16">
                                — Charles Eames
                            </footer>
                        </blockquote>
                    </motion.div>

                    {/* 6. Stats */}
                    <motion.div
                        style={{ opacity: statsOpacity }}
                        className="absolute inset-0 flex items-center justify-center pointer-events-none"
                    >
                        <div className="w-full max-w-6xl">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 lg:gap-20">
                                <motion.div style={{ y: stat1Y }} className="text-center space-y-3 md:space-y-4">
                                    <div className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-black leading-none tracking-tight">
                                        100+
                                    </div>
                                    <p className="text-lg md:text-xl lg:text-2xl text-black/70 font-light tracking-wide">
                                        Projects Completed
                                    </p>
                                </motion.div>

                                <motion.div style={{ y: stat2Y }} className="text-center space-y-3 md:space-y-4">
                                    <div className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-black leading-none tracking-tight">
                                        50+
                                    </div>
                                    <p className="text-lg md:text-xl lg:text-2xl text-black/70 font-light tracking-wide">
                                        Happy Clients
                                    </p>
                                </motion.div>

                                <motion.div style={{ y: stat3Y }} className="text-center space-y-3 md:space-y-4">
                                    <div className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-black leading-none tracking-tight">
                                        5+
                                    </div>
                                    <p className="text-lg md:text-xl lg:text-2xl text-black/70 font-light tracking-wide">
                                        Years Experience
                                    </p>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>

                    {/* 7. CTA - Has parallax, stays visible */}
                    <motion.div
                        style={{ opacity: ctaOpacity, y: ctaY }}
                        className="absolute inset-0 flex flex-col items-center justify-center text-center"
                    >
                        <h2 className="text-3xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 md:mb-8 text-black">
                            Ready to make an impact?
                        </h2>
                        <p className="text-lg md:text-2xl text-black/60 mb-8 md:mb-12 max-w-3xl mx-auto leading-relaxed px-4">
                            Let's create something extraordinary together.
                        </p>
                        <motion.a
                            href="#contact-section"
                            onClick={(e) => {
                                e.preventDefault()
                                document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })
                            }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-block px-8 py-4 md:px-10 md:py-5 bg-black hover:bg-black/90 text-white text-base md:text-xl font-semibold rounded-full transition-all duration-300 pointer-events-auto"
                        >
                            Get In Touch
                        </motion.a>
                    </motion.div>

                </div>
            </motion.div>
        </section>
    )
}
