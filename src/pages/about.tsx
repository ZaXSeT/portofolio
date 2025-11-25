import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import AboutSection from '@/components/AboutSection'

export default function About() {
    return (
        <>
            <Navbar />
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="pt-20"
            >
                <AboutSection />
            </motion.div>
            <Footer />
        </>
    )
}
