import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

// Skills data
const skillsData = [
    {
        category: 'Frontend',
        items: ['React', 'Next.js', 'TypeScript', 'TailwindCSS', 'Framer Motion'],
        icon: '🎨',
    },
    {
        category: 'Video Editing',
        items: ['Premiere Pro', 'After Effects'],
        icon: '🎬',
    },
    {
        category: 'Tools & Others',
        items: ['Photoshop', 'Git', 'Figma', 'VS Code'],
        icon: '🛠️',
    },
]

// Personal info data
const personalInfo = [
    { label: 'Location', value: 'Medan, Sumatera Utara', icon: '📍' },
    { label: 'Email', value: 'zackyxie1234@gmail.com', icon: '✉️' },
    { label: 'Experience', value: '3+ Years', icon: '💼' },
    { label: 'Education', value: 'Computer Science', icon: '🎓' },
]

export default function AboutSection() {
    const sectionRef = useRef(null)
    const headerRef = useRef(null)
    const bioRef = useRef(null)
    const skillsRef = useRef(null)
    const infoRef = useRef(null)

    // Scroll-linked animations for each element
    const { scrollYProgress: headerProgress } = useScroll({
        target: headerRef,
        offset: ["start end", "end start"]
    })

    const { scrollYProgress: bioProgress } = useScroll({
        target: bioRef,
        offset: ["start end", "end start"]
    })

    const { scrollYProgress: skillsProgress } = useScroll({
        target: skillsRef,
        offset: ["start end", "end start"]
    })

    const { scrollYProgress: infoProgress } = useScroll({
        target: infoRef,
        offset: ["start end", "end start"]
    })

    // Transform scroll progress to animation values
    const headerOpacity = useTransform(headerProgress, [0, 0.3, 1], [0, 1, 1])
    const headerY = useTransform(headerProgress, [0, 0.3, 1], [50, 0, 0])

    const bioOpacity = useTransform(bioProgress, [0, 0.3, 1], [0, 1, 1])
    const bioY = useTransform(bioProgress, [0, 0.3, 1], [50, 0, 0])

    const skillsOpacity = useTransform(skillsProgress, [0, 0.3, 1], [0, 1, 1])
    const skillsY = useTransform(skillsProgress, [0, 0.3, 1], [50, 0, 0])

    const infoOpacity = useTransform(infoProgress, [0, 0.3, 1], [0, 1, 1])
    const infoY = useTransform(infoProgress, [0, 0.3, 1], [50, 0, 0])

    return (
        <section ref={sectionRef} id="about-section" className="relative py-[clamp(3rem,8vw,5rem)] bg-white border-t border-black w-full overflow-hidden">
            <div className="w-full max-w-[90rem] mx-auto px-[clamp(1rem,3vw,1.5rem)]">
                {/* Section Header */}
                <motion.div
                    ref={headerRef}
                    style={{ opacity: headerOpacity, y: headerY }}
                    className="text-center mb-12 md:mb-16"
                >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-black">
                        About Me
                    </h2>
                    <p className="text-base md:text-lg text-black/60 max-w-2xl mx-auto px-4">
                        Get to know more about my background, skills, and what drives me as a developer
                    </p>
                </motion.div>

                {/* Personal Description */}
                <motion.div
                    ref={bioRef}
                    style={{ opacity: bioOpacity, y: bioY }}
                    className="mb-12 md:mb-16"
                >
                    <div className="bg-white rounded-lg p-6 md:p-8 lg:p-12 border border-black">
                        <h3 className="text-xl md:text-2xl font-bold text-black mb-6">
                            👋 Hello! I'm a passionate developer
                        </h3>

                        <p className="text-black/80 leading-relaxed mb-6 text-sm md:text-base">
                            I am a results-driven professional with proven experience in video editing since 2020,
                            having successfully delivered a diverse portfolio of complex and creative video projects.
                        </p>

                        <p className="text-black/80 leading-relaxed mb-6 text-sm md:text-base">
                            Currently, I am actively transitioning my career focus to Front-End Web Development.
                            I am deeply committed to acquiring and mastering modern front-end technologies to build
                            highly functional, aesthetically pleasing, and superior user-friendly web applications.
                        </p>

                        <p className="text-black/80 leading-relaxed mb-6 text-sm md:text-base">
                            My dedication lies in continuous learning and applying my background in visual detail
                            and narrative structure (gained from video editing) to create compelling and effective
                            web interfaces. I am enthusiastic about contributing to dynamic development teams and
                            solving real-world challenges through code.
                        </p>

                        <p className="text-black/80 leading-relaxed text-sm md:text-base">
                            I love learning new technologies and staying up-to-date with the latest trends in web development.
                            When I'm not coding, you can find me exploring new coffee shops, reading tech blogs, or contributing
                            to open-source projects.
                        </p>
                    </div>
                </motion.div>

                {/* Skills Section */}
                <div ref={skillsRef} className="mb-12 md:mb-16">
                    <motion.div style={{ opacity: skillsOpacity, y: skillsY }}>
                        <h3 className="text-2xl md:text-3xl font-bold text-black mb-8 text-center">
                            Skills & Technologies
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                            {skillsData.map((skill, index) => {
                                // Individual card scroll animation with stagger
                                const cardOpacity = useTransform(
                                    skillsProgress,
                                    [0, 0.3 + index * 0.1, 1],
                                    [0, 1, 1]
                                )

                                return (
                                    <motion.div
                                        key={skill.category}
                                        style={{ opacity: cardOpacity }}
                                        whileHover={{ scale: 1.05, y: -5 }}
                                        transition={{ type: 'spring', stiffness: 300 }}
                                        className="bg-white rounded-lg p-5 md:p-6 border border-black hover:border-black/50 transition-colors duration-300"
                                    >
                                        <div className="flex items-center gap-3 mb-4">
                                            <span className="text-3xl md:text-4xl">{skill.icon}</span>
                                            <h4 className="text-lg md:text-xl font-bold text-black">
                                                {skill.category}
                                            </h4>
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            {skill.items.map((item) => (
                                                <span
                                                    key={item}
                                                    className="px-2 py-1 md:px-3 md:py-1 bg-black text-white text-xs md:text-sm font-medium rounded-full"
                                                >
                                                    {item}
                                                </span>
                                            ))}
                                        </div>
                                    </motion.div>
                                )
                            })}
                        </div>
                    </motion.div>
                </div>

                {/* Personal Info Section */}
                <div ref={infoRef}>
                    <motion.div style={{ opacity: infoOpacity, y: infoY }}>
                        <h3 className="text-2xl md:text-3xl font-bold text-black mb-8 text-center">
                            Quick Info
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                            {personalInfo.map((info, index) => {
                                const cardOpacity = useTransform(
                                    infoProgress,
                                    [0, 0.3 + index * 0.05, 1],
                                    [0, 1, 1]
                                )

                                return (
                                    <motion.div
                                        key={info.label}
                                        style={{ opacity: cardOpacity }}
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ type: 'spring', stiffness: 300 }}
                                        className="bg-white rounded-lg p-5 md:p-6 border border-black text-center hover:border-black/50 transition-colors duration-300"
                                    >
                                        <div className="text-3xl md:text-4xl mb-3">{info.icon}</div>
                                        <h4 className="text-xs md:text-sm font-semibold text-black/60 mb-2">
                                            {info.label}
                                        </h4>
                                        <p className="text-base md:text-lg font-bold text-black">
                                            {info.value}
                                        </p>
                                    </motion.div>
                                )
                            })}
                        </div>
                    </motion.div>
                </div>

                {/* Call to Action */}
                <motion.div
                    style={{ opacity: infoOpacity, y: infoY }}
                    className="mt-16 text-center"
                >
                    <motion.a
                        href="#contact-section"
                        onClick={(e) => {
                            e.preventDefault()
                            document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })
                        }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-block px-8 py-4 bg-black hover:bg-black/90 text-white font-semibold rounded-lg border border-black transition-all duration-200"
                    >
                        Let's Work Together
                    </motion.a>
                </motion.div>
            </div>
        </section>
    )
}
