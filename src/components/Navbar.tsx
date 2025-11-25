import { motion } from 'framer-motion'
import { useState } from 'react'
// @ts-ignore - JSX component
import FlowingMenu from './FlowingMenu'

const menuItems = [
    {
        name: 'Home',
        link: '#home',
        text: 'Home',
        image: '/images/mewing.png',
        sectionId: null
    },
    {
        name: 'About',
        link: '#about-section',
        text: 'About',
        image: '/images/mewing.png',
        sectionId: 'about-section'
    },
    {
        name: 'Projects',
        link: '#projects-section',
        text: 'Projects',
        image: '/images/mewing.png',
        sectionId: 'projects-section'
    },
    {
        name: 'Typography',
        link: '#typography-section',
        text: 'Typography',
        image: '/images/mewing.png',
        sectionId: 'typography-section'
    },
    {
        name: 'Contact',
        link: '#contact-section',
        text: 'Contact',
        image: '/images/mewing.png',
        sectionId: 'contact-section'
    },
]

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string | null) => {
        e.preventDefault()
        setIsMobileMenuOpen(false)

        if (sectionId) {
            const element = document.getElementById(sectionId)
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' })
            }
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' })
        }
    }

    return (
        <>
            {/* Desktop Vertical Flowing Menu */}
            <motion.div
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="hidden md:block sticky top-0 left-0 right-0 z-50 bg-black shadow-lg"
            >
                <div className="h-auto max-h-[50vh]">
                    <FlowingMenu items={menuItems} onClick={handleClick} />
                </div>
            </motion.div>

            {/* Mobile Menu */}
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
                className="md:hidden sticky top-0 left-0 right-0 z-50 bg-white border-b border-black"
            >
                <div className="w-full max-w-[90rem] mx-auto px-[clamp(1rem,3vw,1.5rem)] py-[clamp(0.75rem,2vw,1rem)]">
                    <div className="flex items-center justify-between w-full">
                        {/* Logo */}
                        <a
                            href="/"
                            onClick={(e) => {
                                e.preventDefault()
                                window.scrollTo({ top: 0, behavior: 'smooth' })
                            }}
                            className="text-2xl font-bold text-black cursor-pointer hover:opacity-80 transition-opacity"
                        >
                            kenshiisalive
                        </a>

                        {/* Mobile Menu Button */}
                        <button
                            className="p-2 text-black"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            aria-label="Toggle menu"
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                {isMobileMenuOpen ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu Dropdown */}
                <motion.div
                    initial={false}
                    animate={{
                        height: isMobileMenuOpen ? 'auto' : 0,
                        opacity: isMobileMenuOpen ? 1 : 0
                    }}
                    className="overflow-hidden bg-white border-t border-black/10"
                >
                    <div className="px-6 py-4 space-y-4">
                        {menuItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.link}
                                onClick={(e) => handleClick(e, item.sectionId)}
                                className="block text-base font-medium text-black hover:text-black/60 transition-colors"
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>
                </motion.div>
            </motion.nav>
        </>
    )
}
