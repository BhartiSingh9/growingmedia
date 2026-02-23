import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function Home() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY })
        }

        window.addEventListener('mousemove', handleMouseMove)
        return () => window.removeEventListener('mousemove', handleMouseMove)
    }, [])

    const services = [
        {
            image: '/web-design.jpeg',
            title: 'Web Development',
            description: 'Fast, responsive, and conversion-optimized websites that elevate your brand.',
        },
        {
            image: '/SEO-optimization.jpeg',
            title: 'SEO Optimization',
            description: 'Strategic SEO to rank higher, drive organic traffic, and dominate search results.',
        },
        {
            image: '/social-media.jpeg',
            title: 'Social Media Marketing',
            description: 'Engaging content and strategies that build communities and drive engagement.',
        },
    ]

    return (
        <div className="overflow-hidden">
            {/* Hero Section - Dynamic Background */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-30"
                    style={{ backgroundImage: "url('/hero-light-bg.jpg')" }}
                />

                {/* Animated gradient overlay */}
                <div
                    className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-white/20 to-orange-50/30 gradient-animate"
                    style={{
                        backgroundImage: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(13, 21, 174, 0.1) 0%, transparent 50%)`,
                    }}
                />

                {/* Animated shapes - updated to brand colors */}
                <div className="absolute top-20 left-10 w-72 h-72 bg-[#001B4D] rounded-full mix-blend-multiply filter blur-3xl opacity-10 float" />
                <div className="absolute top-40 right-10 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 float animation-delay-2000" />
                <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-[#001B4D] rounded-full mix-blend-multiply filter blur-3xl opacity-10 float animation-delay-4000" />

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Content */}
                        <div className="space-y-8">
                            <div className="space-y-4">
                                <div className="inline-block px-4 py-2 bg-gradient-to-r from-[#001B4D]/10 to-green-100 text-[#001B4D] border border-green-300 rounded-full text-sm font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                                    📈 Growing Your Digital Presence
                                </div>
                                <h1 className="text-6xl md:text-7xl font-extrabold leading-tight tracking-tight">
                                    Your Growth, <span className="gradient-text">Our Mission</span>
                                </h1>
                                <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-semibold">
                                    Welcome to The Growing Media Solutions. We're a passionate team dedicated to delivering exceptional
                                    digital marketing results. We're just getting started, but our expertise is proven and our commitment
                                    is unwavering.
                                </p>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link
                                    to="/contact"
                                    className="inline-flex items-center justify-center px-10 py-5 bg-gradient-to-r from-[#001B4D] to-green-600 text-white rounded-full text-lg font-bold hover:shadow-2xl hover:shadow-green-500/30 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 group relative overflow-hidden"
                                >
                                    <span className="relative z-10">Let's Start</span>
                                    <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform duration-300 relative z-10" size={22} />
                                    <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-[#001B4D] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </Link>
                                <Link
                                    to="/portfolio"
                                    className="inline-flex items-center justify-center px-10 py-5 border-2 border-green-600 text-green-700 rounded-full text-lg font-bold hover:bg-green-50 transition-all duration-300 transform hover:scale-105"
                                >
                                    Our Approach
                                </Link>
                            </div>

                            <div className="grid grid-cols-1 gap-4 pt-8 border-t-2 border-green-200">
                                <div className="transform hover:scale-110 transition-transform duration-300">
                                    <div className="text-5xl font-extrabold bg-gradient-to-r from-[#001B4D] to-green-600 bg-clip-text text-transparent">100%</div>
                                    <p className="text-gray-700 text-base font-semibold">Commitment to Growth</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Preview Section */}
            <section className="py-20 bg-gradient-to-b from-white to-gray-50">
                {/* Services Section Header */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center space-y-4">
                    <h2 className="text-4xl md:text-5xl font-bold">Our Services</h2>
                    <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                        Comprehensive digital solutions tailored to fuel your business growth
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {services.map((service, index) => (
                        <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 group">
                            <div className="relative h-56 w-full overflow-hidden">
                                <img src={service.image || '/placeholder.svg'} alt={service.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>
                            <div className="p-8 space-y-4">
                                <h2 className="text-2xl font-extrabold text-gray-900 group-hover:text-green-600 transition-colors duration-300">{service.title}</h2>
                                <p className="text-gray-600 text-lg leading-relaxed">{service.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Explore Services Button */}
                <div className="flex justify-center mt-12">
                    <Link
                        to="/services"
                        className="inline-flex items-center justify-center px-10 py-5 bg-gradient-to-r from-[#001B4D] to-green-600 text-white rounded-full text-xl font-bold hover:shadow-2xl hover:shadow-green-500/30 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 group relative overflow-hidden"
                    >
                        <span className="relative z-10">Explore Services</span>
                        <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform duration-300 relative z-10" size={24} />
                        <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-[#001B4D] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </Link>
                </div>
            </section>

            {/* CTA Section - Navy green brand gradient */}
            <section className="relative py-24 bg-gradient-to-r from-[#001B4D] via-[#001B4D] to-green-700 text-white overflow-hidden">
                {/* Animated background elements */}
                <div className="absolute inset-0">
                    <div className="absolute top-0 left-1/4 w-96 h-96 bg-green-500 rounded-full mix-blend-overlay filter blur-3xl opacity-20 animate-pulse" />
                    <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#001B4D] rounded-full mix-blend-overlay filter blur-3xl opacity-30 animate-pulse animation-delay-2000" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center space-y-8">
                        <div className="space-y-4">
                            <h2 className="text-5xl md:text-6xl font-bold leading-tight animate-fade-in">
                                Ready to Boost Your Business?
                            </h2>
                            <p className="text-xl md:text-2xl leading-relaxed max-w-3xl mx-auto">
                                Let's collaborate to achieve your digital marketing goals.
                            </p>
                        </div>
                        <Link
                            to="/contact"
                            className="inline-flex items-center justify-center px-10 py-5 bg-white text-[#001B4D] rounded-full text-lg font-bold hover:bg-green-50 hover:text-green-700 hover:shadow-2xl transition-all group transform hover:scale-105"
                        >
                            Contact Us
                            <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" size={22} />
                        </Link>
                    </div>
                </div>

                {/* Decorative animated lines */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-green-400 to-transparent opacity-40" />
            </section>
        </div>
    )
}
