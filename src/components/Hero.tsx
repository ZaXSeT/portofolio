import { motion, useScroll, useTransform, useMotionValue } from 'framer-motion'
import { useEffect, useState, useRef } from 'react'
import BounceCards from './BounceCards'

export default function Hero() {
    const [mounted, setMounted] = useState(false)
    const sectionRef = useRef(null)
    const contentRef = useRef(null)

    // Mouse position for parallax effect
    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)

    // Transform mouse position to parallax values
    const parallaxX = useTransform(mouseX, [0, 1], [-20, 20])
    const parallaxY = useTransform(mouseX, [0, 1], [-20, 20])

    // Scroll parallax for Hero section - 55% speed (increased by 20% more)
    const { scrollY } = useScroll()
    const heroY = useTransform(scrollY, [0, 3000], [0, -1650]) // 55% speed - consistent throughout

    useEffect(() => {
        setMounted(true)

        const handleMouseMove = (e: MouseEvent) => {
            const { clientX, clientY } = e
            const { innerWidth, innerHeight } = window

            // Normalize mouse position to 0-1 range
            const x = clientX / innerWidth
            const y = clientY / innerHeight

            mouseX.set(x)
            mouseY.set(y)
        }

        window.addEventListener('mousemove', handleMouseMove)
        return () => window.removeEventListener('mousemove', handleMouseMove)
    }, [mouseX, mouseY])

    return (
        <motion.section
            ref={sectionRef}
            style={{ y: heroY }}
            className="fixed top-[30vh] left-0 right-0 z-10 min-h-screen flex items-center justify-center overflow-hidden bg-white w-full"
        >
            {/* Animated Background Elements with Parallax */}
            <motion.div
                style={{ x: parallaxX, y: parallaxY }}
                className="absolute top-[5%] left-[5%] w-[40vw] max-w-[18rem] h-[40vw] max-h-[18rem] bg-black/5 rounded-full blur-3xl"
            />
            <motion.div
                style={{
                    x: useTransform(parallaxX, (x) => -x),
                    y: useTransform(parallaxY, (y) => -y)
                }}
                className="absolute bottom-[5%] right-[5%] w-[50vw] max-w-[24rem] h-[50vw] max-h-[24rem] bg-black/5 rounded-full blur-3xl"
            />
            <motion.div
                style={{
                    x: useTransform(parallaxX, (x) => x * 0.5),
                    y: useTransform(parallaxY, (y) => y * 0.5)
                }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] max-w-[31.25rem] h-[60vw] max-h-[31.25rem] bg-black/3 rounded-full blur-3xl"
            />

            {/* Main Content */}
            <div
                ref={contentRef}
                className="relative z-10 w-full max-w-[90rem] mx-auto px-[clamp(1rem,3vw,1.5rem)] py-8"
            >
                <div className="flex flex-col lg:flex-row items-center justify-center gap-[clamp(3rem,6vw,5rem)] w-full">
                    {/* BounceCards */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            duration: 0.8,
                            delay: 0.2,
                            type: 'spring',
                            stiffness: 100,
                        }}
                        className="relative w-full lg:w-1/2 flex justify-center items-center"
                    >
                        <BounceCards
                            images={[
                                '/images/bouncecard/cat2.jpg',
                                '/images/bouncecard/catangry.jpg',
                                '/images/bouncecard/catcsgo.jpg',
                                '/images/bouncecard/catfreak.jpg',
                                '/images/bouncecard/goofycat.png'
                            ] as any}
                            containerWidth={750}
                            containerHeight={650}
                            animationDelay={0.5}
                            animationStagger={0.08}
                            transformStyles={[
                                'rotate(10deg) translate(-240px)',
                                'rotate(5deg) translate(-120px)',
                                'rotate(-3deg)',
                                'rotate(-10deg) translate(120px)',
                                'rotate(2deg) translate(240px)'
                            ] as any}
                        />
                    </motion.div>

                    {/* Text Content */}
                    <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-[clamp(1.5rem,4vw,2rem)] max-w-2xl w-full lg:w-1/2">
                        {/* Greeting */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                        >
                            <span className="text-lg md:text-xl font-medium text-black">
                                Hello, I'm
                            </span>
                        </motion.div>

                        {/* Name */}
                        <motion.h1
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="text-5xl md:text-6xl lg:text-8xl font-bold text-black leading-tight"
                        >
                            kenshiisalive
                        </motion.h1>

                        {/* Tagline */}
                        <motion.p
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                            className="text-xl md:text-2xl lg:text-3xl text-black/80 leading-relaxed"
                        >
                            Front-End Developer | Motion Graphic Designer | UI/UX Enthusiast
                            <br />
                            <span className="text-lg md:text-xl text-black/60">
                                Building engaging interfaces, crafting visual narratives, and designing intuitive digital experiences
                            </span>
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            className="flex flex-wrap justify-center lg:justify-start gap-3 md:gap-4 pt-4"
                        >
                            <motion.a
                                href="#projects-section"
                                onClick={(e) => {
                                    e.preventDefault()
                                    document.getElementById('projects-section')?.scrollIntoView({ behavior: 'smooth' })
                                }}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-6 py-3 md:px-8 md:py-4 bg-black text-white font-semibold rounded-lg border border-black hover:bg-black/90 transition-all duration-200 text-sm md:text-base"
                            >
                                View My Work
                            </motion.a>
                            <motion.a
                                href="#contact-section"
                                onClick={(e) => {
                                    e.preventDefault()
                                    document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })
                                }}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-6 py-3 md:px-8 md:py-4 bg-white text-black font-semibold rounded-lg border-2 border-black hover:bg-black/5 transition-all duration-200 text-sm md:text-base"
                            >
                                Get In Touch
                            </motion.a>
                        </motion.div>

                        {/* Social Links */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.7 }}
                            className="flex gap-4 pt-4"
                        >
                            {/* GitHub */}
                            <motion.a
                                href="https://github.com/ZaXSeT"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.2, y: -4 }}
                                whileTap={{ scale: 0.9 }}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.8 }}
                                className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-white text-black border border-black hover:bg-black hover:text-white transition-all duration-200"
                                aria-label="GitHub"
                            >
                                <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                                </svg>
                            </motion.a>

                            {/* LinkedIn */}
                            <motion.a
                                href="https://www.linkedin.com/in/zacky-setiawan-279520334"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.2, y: -4 }}
                                whileTap={{ scale: 0.9 }}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.9 }}
                                className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-white text-black border border-black hover:bg-black hover:text-white transition-all duration-200"
                                aria-label="LinkedIn"
                            >
                                <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                </svg>
                            </motion.a>

                            {/* Twitter/X */}
                            <motion.a
                                href="https://x.com/zackystwn_"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.2, y: -4 }}
                                whileTap={{ scale: 0.9 }}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1.0 }}
                                className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-white text-black border border-black hover:bg-black hover:text-white transition-all duration-200"
                                aria-label="Twitter"
                            >
                                <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                                </svg>
                            </motion.a>
                        </motion.div>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.6,
                        delay: 1,
                        repeat: Infinity,
                        repeatType: 'reverse',
                        repeatDelay: 0.5,
                    }}
                    className="absolute bottom-2 left-1/2 -translate-x-1/2 cursor-pointer hover:scale-110 transition-transform"
                    onClick={() => {
                        const aboutSection = document.getElementById('about-section')
                        if (aboutSection) {
                            aboutSection.scrollIntoView({ behavior: 'smooth' })
                        }
                    }}
                >
                    <div className="flex flex-col items-center gap-2">
                        <span className="text-sm text-black/60">Scroll Down</span>
                        <svg
                            className="w-6 h-6 text-black/60"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 14l-7 7m0 0l-7-7m7 7V3"
                            />
                        </svg>
                    </div>
                </motion.div>
            </div>
        </motion.section>
    )
}
