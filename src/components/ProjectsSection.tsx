import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

// Project data
const projects = [
    {
        id: 1,
        title: 'E-Commerce Platform',
        description: 'A full-featured online shopping platform with cart, checkout, and payment integration. Built with Next.js and Stripe.',
        tags: ['Next.js', 'TypeScript', 'Stripe', 'TailwindCSS'],
        link: '#',
    },
    {
        id: 2,
        title: 'Analytics Dashboard',
        description: 'Real-time analytics dashboard with interactive charts and data visualization. Features include custom reports and exports.',
        tags: ['React', 'D3.js', 'Node.js', 'MongoDB'],
        link: '#',
    },
    {
        id: 3,
        title: 'Portfolio Website',
        description: 'A creative portfolio website with smooth animations and modern design. Showcases projects with interactive galleries.',
        tags: ['Next.js', 'Framer Motion', 'TailwindCSS'],
        link: '#',
    },
    {
        id: 4,
        title: 'Task Management App',
        description: 'Collaborative task management tool with real-time updates, team collaboration, and project tracking features.',
        tags: ['React', 'Firebase', 'Material-UI'],
        link: '#',
    },
    {
        id: 5,
        title: 'Social Media App',
        description: 'A modern social networking platform with posts, comments, likes, and real-time messaging capabilities.',
        tags: ['Next.js', 'Socket.io', 'PostgreSQL'],
        link: '#',
    },
    {
        id: 6,
        title: 'Weather Forecast App',
        description: 'Beautiful weather application with 7-day forecasts, interactive maps, and location-based weather alerts.',
        tags: ['React', 'OpenWeather API', 'Mapbox'],
        link: '#',
    },
]

export default function ProjectsSection() {
    const sectionRef = useRef(null)
    const headerRef = useRef(null)
    const gridRef = useRef(null)

    // Scroll-linked animations for header
    const { scrollYProgress: headerProgress } = useScroll({
        target: headerRef,
        offset: ["start end", "end start"]
    })

    // Scroll-linked animations for grid
    const { scrollYProgress: gridProgress } = useScroll({
        target: gridRef,
        offset: ["start end", "end start"]
    })

    // Transform scroll progress to animation values
    const headerOpacity = useTransform(headerProgress, [0, 0.3, 1], [0, 1, 1])
    const headerY = useTransform(headerProgress, [0, 0.3, 1], [50, 0, 0])

    const gridOpacity = useTransform(gridProgress, [0, 0.2, 1], [0, 1, 1])
    const gridY = useTransform(gridProgress, [0, 0.2, 1], [30, 0, 0])

    return (
        <section ref={sectionRef} id="projects-section" className="py-[clamp(3rem,8vw,5rem)] bg-white border-t border-black w-full overflow-hidden">
            <div className="w-full max-w-[90rem] mx-auto px-[clamp(1rem,3vw,1.5rem)]">
                {/* Section Header */}
                <motion.div
                    ref={headerRef}
                    style={{ opacity: headerOpacity, y: headerY }}
                    className="text-center mb-12 md:mb-16"
                >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-black">
                        Featured Projects
                    </h2>
                    <p className="text-base md:text-lg text-black/60 max-w-2xl mx-auto px-4">
                        A collection of my recent work and side projects. Each project represents a unique challenge and learning experience.
                    </p>
                </motion.div>

                {/* Projects Grid */}
                <motion.div
                    ref={gridRef}
                    style={{ opacity: gridOpacity, y: gridY }}
                    className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8"
                >
                    {projects.map((project, index) => {
                        // Individual card scroll animation with stagger
                        const cardProgress = useTransform(
                            gridProgress,
                            [0, 0.2 + index * 0.05, 1],
                            [0, 1, 1]
                        )
                        const cardOpacity = useTransform(cardProgress, [0, 1], [0, 1])

                        return (
                            <motion.div
                                key={project.id}
                                style={{ opacity: cardOpacity }}
                                whileHover={{
                                    scale: 1.05,
                                    rotateY: 5,
                                    rotateX: 5,
                                    z: 50,
                                }}
                                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                                className="bg-white rounded-lg overflow-hidden border border-black hover:border-black/50 transition-colors duration-300 flex flex-col"
                            >
                                {/* Project Image */}
                                <div className="relative h-[clamp(12rem,25vw,14rem)] bg-black/5 overflow-hidden shrink-0 w-full">
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <span className="text-[clamp(3rem,8vw,4rem)]">{['💻', '📊', '🎨', '✅', '💬', '🌤️'][index]}</span>
                                    </div>
                                </div>

                                {/* Project Info */}
                                <div className="p-5 md:p-6 flex flex-col flex-grow">
                                    <h3 className="text-lg md:text-xl font-bold text-black mb-2">
                                        {project.title}
                                    </h3>
                                    <p className="text-black/70 text-sm mb-4 line-clamp-3 flex-grow">
                                        {project.description}
                                    </p>

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="px-2 py-1 bg-black text-white text-xs font-medium rounded"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    {/* View Project Link */}
                                    <motion.a
                                        href={project.link}
                                        whileHover={{ x: 5 }}
                                        className="inline-flex items-center text-black font-semibold hover:text-black/70 transition-colors text-sm md:text-base mt-auto"
                                    >
                                        View Project
                                        <svg
                                            className="w-4 h-4 ml-2"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9 5l7 7-7 7"
                                            />
                                        </svg>
                                    </motion.a>
                                </div>
                            </motion.div>
                        )
                    })}
                </motion.div>

                {/* View All Projects CTA */}
                <motion.div
                    style={{ opacity: gridOpacity, y: gridY }}
                    className="mt-12 md:mt-16 text-center"
                >
                    <motion.a
                        href="#"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-block px-6 py-3 md:px-8 md:py-4 bg-black hover:bg-black/90 text-white font-semibold rounded-lg border border-black transition-all duration-200 text-sm md:text-base"
                    >
                        View All Projects
                    </motion.a>
                </motion.div>
            </div>
        </section>
    )
}
