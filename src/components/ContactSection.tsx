import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useState } from 'react'

// Contact methods
const contactMethods = [
    {
        icon: '✉️',
        title: 'Email',
        value: 'zackyxie1234@gmail.com',
        link: 'mailto:zackyxie1234@gmail.com',
    },
    {
        icon: '💼',
        title: 'LinkedIn',
        value: 'linkedin.com/in/zacky-setiawan',
        link: 'https://www.linkedin.com/in/zacky-setiawan-279520334',
    },
    {
        icon: '🐙',
        title: 'GitHub',
        value: 'github.com/ZaXSeT',
        link: 'https://github.com/ZaXSeT',
    },
    {
        icon: '🐦',
        title: 'Twitter',
        value: '@zackystwn_',
        link: 'https://x.com/zackystwn_',
    },
]

export default function ContactSection() {
    const sectionRef = useRef(null)
    const headerRef = useRef(null)
    const infoRef = useRef(null)
    const formRef = useRef(null)
    const socialRef = useRef(null)

    // Scroll-linked animations
    const { scrollYProgress: headerProgress } = useScroll({
        target: headerRef,
        offset: ["start end", "end start"]
    })

    const { scrollYProgress: infoProgress } = useScroll({
        target: infoRef,
        offset: ["start end", "end start"]
    })

    const { scrollYProgress: formProgress } = useScroll({
        target: formRef,
        offset: ["start end", "end start"]
    })

    const { scrollYProgress: socialProgress } = useScroll({
        target: socialRef,
        offset: ["start end", "end start"]
    })

    // Transform scroll progress to animation values
    const headerOpacity = useTransform(headerProgress, [0, 0.3, 1], [0, 1, 1])
    const headerY = useTransform(headerProgress, [0, 0.3, 1], [30, 0, 0])

    const infoOpacity = useTransform(infoProgress, [0, 0.3, 1], [0, 1, 1])
    const infoX = useTransform(infoProgress, [0, 0.3, 1], [-50, 0, 0])

    const formOpacity = useTransform(formProgress, [0, 0.3, 1], [0, 1, 1])
    const formX = useTransform(formProgress, [0, 0.3, 1], [50, 0, 0])

    const socialOpacity = useTransform(socialProgress, [0, 0.3, 1], [0, 1, 1])
    const socialY = useTransform(socialProgress, [0, 0.3, 1], [30, 0, 0])

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log('Form submitted:', formData)
        alert('Thank you for your message! I will get back to you soon.')
        setFormData({ name: '', email: '', message: '' })
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    return (
        <section ref={sectionRef} id="contact-section" className="py-[clamp(3rem,8vw,5rem)] bg-white border-t border-black w-full overflow-hidden">
            <div className="w-full max-w-[90rem] mx-auto px-[clamp(1rem,3vw,1.5rem)]">
                {/* Section Header */}
                <motion.div
                    ref={headerRef}
                    style={{ opacity: headerOpacity, y: headerY }}
                    className="text-center mb-12 md:mb-16"
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-black">
                        Get In Touch
                    </h2>
                    <p className="text-lg md:text-xl text-black/60 max-w-3xl mx-auto px-4 leading-relaxed">
                        Have a project in mind or just want to say hi? I'd love to hear from you!
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
                    {/* Contact Info */}
                    <motion.div
                        ref={infoRef}
                        style={{ opacity: infoOpacity, x: infoX }}
                    >
                        <h3 className="text-2xl md:text-3xl font-bold text-black mb-6 md:mb-8">
                            Let's Connect
                        </h3>

                        <p className="text-base md:text-lg text-black/70 mb-8 md:mb-10 leading-relaxed">
                            I'm always open to discussing new projects, creative ideas, or opportunities
                            to be part of your vision. Feel free to reach out through any of these channels.
                        </p>

                        {/* Contact Methods */}
                        <div className="space-y-3 md:space-y-4">
                            {contactMethods.map((method, index) => {
                                const methodOpacity = useTransform(
                                    infoProgress,
                                    [0, 0.3 + index * 0.1, 1],
                                    [0, 1, 1]
                                )
                                const methodY = useTransform(
                                    infoProgress,
                                    [0, 0.3 + index * 0.1, 1],
                                    [20, 0, 0]
                                )

                                return (
                                    <motion.a
                                        key={method.title}
                                        href={method.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{ opacity: methodOpacity, y: methodY }}
                                        whileHover={{ scale: 1.03, x: 8 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="flex items-center gap-4 p-4 md:p-5 bg-white rounded-xl border-2 border-black/10 hover:border-black/30 hover:shadow-lg transition-all duration-300"
                                    >
                                        <div className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full bg-gradient-to-br from-black to-black/80 text-white text-xl md:text-2xl shadow-md">
                                            {method.icon}
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-black text-base md:text-lg mb-1">
                                                {method.title}
                                            </h4>
                                            <p className="text-sm md:text-base text-black/60">
                                                {method.value}
                                            </p>
                                        </div>
                                    </motion.a>
                                )
                            })}
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        ref={formRef}
                        style={{ opacity: formOpacity, x: formX }}
                    >
                        <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                            {/* Name Input */}
                            <div>
                                <label
                                    htmlFor="name"
                                    className="block text-sm font-semibold text-black mb-2"
                                >
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-5 py-4 bg-white border-2 border-black/10 rounded-xl focus:ring-2 focus:ring-black/20 focus:border-black/30 hover:border-black/20 outline-none transition-all duration-300 text-black text-sm md:text-base shadow-sm"
                                    placeholder="John Doe"
                                />
                            </div>

                            {/* Email Input */}
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-semibold text-black mb-2"
                                >
                                    Your Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-5 py-4 bg-white border-2 border-black/10 rounded-xl focus:ring-2 focus:ring-black/20 focus:border-black/30 hover:border-black/20 outline-none transition-all duration-300 text-black text-sm md:text-base shadow-sm"
                                    placeholder="john@example.com"
                                />
                            </div>

                            {/* Message Textarea */}
                            <div>
                                <label
                                    htmlFor="message"
                                    className="block text-sm font-semibold text-black mb-2"
                                >
                                    Your Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={6}
                                    className="w-full px-5 py-4 bg-white border-2 border-black/10 rounded-xl focus:ring-2 focus:ring-black/20 focus:border-black/30 hover:border-black/20 outline-none transition-all duration-300 text-black resize-none text-sm md:text-base shadow-sm"
                                    placeholder="Tell me about your project..."
                                />
                            </div>

                            {/* Submit Button */}
                            <motion.button
                                type="submit"
                                whileHover={{ scale: 1.02, y: -2 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full px-8 py-5 bg-black hover:bg-black/90 text-white font-bold rounded-xl border-2 border-black transition-all duration-300 text-base md:text-lg shadow-lg hover:shadow-xl"
                            >
                                Send Message ✨
                            </motion.button>
                        </form>
                    </motion.div>
                </div>

                {/* Additional Info */}
                <motion.div
                    ref={socialRef}
                    style={{ opacity: socialOpacity, y: socialY }}
                    className="mt-16 text-center"
                >
                    <p className="text-black/60 mb-4">
                        Prefer a quick chat? Schedule a call or send me a direct message on any platform.
                    </p>
                    <div className="flex justify-center gap-4">
                        {['GitHub', 'LinkedIn', 'Twitter'].map((social, index) => {
                            const iconOpacity = useTransform(
                                socialProgress,
                                [0, 0.4 + index * 0.1, 1],
                                [0, 1, 1]
                            )
                            const iconScale = useTransform(
                                socialProgress,
                                [0, 0.4 + index * 0.1, 1],
                                [0.8, 1, 1]
                            )

                            return (
                                <motion.a
                                    key={social}
                                    href={`#${social.toLowerCase()}`}
                                    style={{ opacity: iconOpacity, scale: iconScale }}
                                    whileHover={{ scale: 1.2, y: -4 }}
                                    whileTap={{ scale: 0.9 }}
                                    className="w-12 h-12 flex items-center justify-center rounded-full bg-white border border-black text-black hover:bg-black hover:text-white transition-all duration-300"
                                >
                                    <span className="text-sm font-semibold">{social[0]}</span>
                                </motion.a>
                            )
                        })}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
