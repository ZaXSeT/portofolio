import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import AboutSection from '@/components/AboutSection'
import ProjectsSection from '@/components/ProjectsSection'
import TypographySection from '@/components/TypographySection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'

export default function Home() {
    return (
        <>
            <Navbar />
            <main>
                {/* Fixed Hero Section */}
                <Hero />

                {/* Spacer to allow scrolling */}
                <div className="h-screen" />

                {/* Scrollable Content - overlays Hero */}
                <div className="relative z-20">
                    <AboutSection />
                    <ProjectsSection />
                    <TypographySection />
                    <ContactSection />
                </div>
            </main>
            <Footer />
        </>
    )
}
