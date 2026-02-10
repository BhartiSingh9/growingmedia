import { Link } from 'react-router-dom'
import { Shield, Lock, Eye, FileText, Mail } from 'lucide-react'

export default function PrivacyPage() {
    return (
        <div className="overflow-hidden">
            {/* Header */}
            <section className="relative min-h-96 flex items-center justify-center text-white pt-24 pb-12 bg-gradient-to-br from-[#001B4D] to-blue-700">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl" />
                    <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl" />
                </div>

                <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <Shield className="w-16 h-16 mx-auto mb-6 text-blue-300" />
                    <h1 className="text-5xl md:text-6xl font-bold mb-6">Privacy Policy</h1>
                    <p className="text-xl text-gray-300">
                        Your privacy is important to us. Learn how we collect, use, and protect your information.
                    </p>
                    <p className="text-sm text-gray-400 mt-4">Last Updated: February 10, 2026</p>
                </div>
            </section>

            {/* Content */}
            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="prose prose-lg max-w-none">

                        {/* Introduction */}
                        <div className="mb-12">
                            <p className="text-lg text-gray-700 leading-relaxed">
                                At The Growing Media Solutions ("we," "our," or "us"), we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
                            </p>
                        </div>

                        {/* Information We Collect */}
                        <div className="mb-12">
                            <div className="flex items-center gap-3 mb-4">
                                <FileText className="text-[#001B4D]" size={28} />
                                <h2 className="text-3xl font-bold text-[#001B4D] m-0">Information We Collect</h2>
                            </div>

                            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Personal Information</h3>
                            <p className="text-gray-700 mb-4">
                                We may collect personal information that you voluntarily provide to us when you:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                <li>Fill out contact forms or request consultations</li>
                                <li>Subscribe to our newsletter or marketing communications</li>
                                <li>Create an account or register for our services</li>
                                <li>Participate in surveys, promotions, or contests</li>
                                <li>Communicate with us via email, phone, or chat</li>
                            </ul>
                            <p className="text-gray-700 mt-4">
                                This information may include your name, email address, phone number, company name, job title, and any other information you choose to provide.
                            </p>

                            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Automatically Collected Information</h3>
                            <p className="text-gray-700 mb-4">
                                When you visit our website, we automatically collect certain information about your device and browsing activity, including:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                <li>IP address and browser type</li>
                                <li>Operating system and device information</li>
                                <li>Pages visited and time spent on our site</li>
                                <li>Referring website and search terms used</li>
                                <li>Cookies and similar tracking technologies</li>
                            </ul>
                        </div>

                        {/* How We Use Your Information */}
                        <div className="mb-12">
                            <div className="flex items-center gap-3 mb-4">
                                <Eye className="text-[#001B4D]" size={28} />
                                <h2 className="text-3xl font-bold text-[#001B4D] m-0">How We Use Your Information</h2>
                            </div>

                            <p className="text-gray-700 mb-4">
                                We use the information we collect for various purposes, including:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                <li>Providing, maintaining, and improving our services</li>
                                <li>Responding to your inquiries and customer service requests</li>
                                <li>Sending you marketing communications and promotional materials (with your consent)</li>
                                <li>Analyzing website usage and optimizing user experience</li>
                                <li>Detecting, preventing, and addressing technical issues or fraudulent activity</li>
                                <li>Complying with legal obligations and enforcing our terms and policies</li>
                                <li>Personalizing your experience and delivering relevant content</li>
                            </ul>
                        </div>

                        {/* Information Sharing */}
                        <div className="mb-12">
                            <div className="flex items-center gap-3 mb-4">
                                <Lock className="text-[#001B4D]" size={28} />
                                <h2 className="text-3xl font-bold text-[#001B4D] m-0">Information Sharing and Disclosure</h2>
                            </div>

                            <p className="text-gray-700 mb-4">
                                We do not sell, rent, or trade your personal information to third parties. We may share your information only in the following circumstances:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                <li><strong>Service Providers:</strong> We may share information with trusted third-party service providers who assist us in operating our website, conducting our business, or servicing you (e.g., email service providers, analytics platforms, hosting services).</li>
                                <li><strong>Legal Requirements:</strong> We may disclose your information if required by law, court order, or governmental regulation, or to protect our rights, property, or safety.</li>
                                <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred to the acquiring entity.</li>
                                <li><strong>With Your Consent:</strong> We may share your information for any other purpose with your explicit consent.</li>
                            </ul>
                        </div>

                        {/* Data Security */}
                        <div className="mb-12">
                            <h2 className="text-3xl font-bold text-[#001B4D] mb-4">Data Security</h2>
                            <p className="text-gray-700">
                                We implement appropriate technical and organizational security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
                            </p>
                        </div>

                        {/* Your Rights */}
                        <div className="mb-12">
                            <h2 className="text-3xl font-bold text-[#001B4D] mb-4">Your Privacy Rights</h2>
                            <p className="text-gray-700 mb-4">
                                Depending on your location, you may have certain rights regarding your personal information, including:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                <li><strong>Access:</strong> Request access to the personal information we hold about you</li>
                                <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                                <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                                <li><strong>Opt-Out:</strong> Unsubscribe from marketing communications at any time</li>
                                <li><strong>Data Portability:</strong> Request a copy of your data in a structured format</li>
                            </ul>
                            <p className="text-gray-700 mt-4">
                                To exercise any of these rights, please contact us using the information provided below.
                            </p>
                        </div>

                        {/* Cookies */}
                        <div className="mb-12">
                            <h2 className="text-3xl font-bold text-[#001B4D] mb-4">Cookies and Tracking Technologies</h2>
                            <p className="text-gray-700">
                                We use cookies and similar tracking technologies to enhance your browsing experience, analyze site traffic, and understand user behavior. You can control cookie preferences through your browser settings, but disabling cookies may affect the functionality of our website.
                            </p>
                        </div>

                        {/* Third-Party Links */}
                        <div className="mb-12">
                            <h2 className="text-3xl font-bold text-[#001B4D] mb-4">Third-Party Links</h2>
                            <p className="text-gray-700">
                                Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.
                            </p>
                        </div>

                        {/* Children's Privacy */}
                        <div className="mb-12">
                            <h2 className="text-3xl font-bold text-[#001B4D] mb-4">Children's Privacy</h2>
                            <p className="text-gray-700">
                                Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If we become aware that we have collected information from a child, we will take steps to delete such information promptly.
                            </p>
                        </div>

                        {/* Changes to Policy */}
                        <div className="mb-12">
                            <h2 className="text-3xl font-bold text-[#001B4D] mb-4">Changes to This Privacy Policy</h2>
                            <p className="text-gray-700">
                                We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any material changes by posting the updated policy on this page with a new "Last Updated" date. We encourage you to review this policy periodically.
                            </p>
                        </div>

                        {/* Contact */}
                        <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
                            <div className="flex items-center gap-3 mb-4">
                                <Mail className="text-[#001B4D]" size={28} />
                                <h2 className="text-3xl font-bold text-[#001B4D] m-0">Contact Us</h2>
                            </div>
                            <p className="text-gray-700 mb-4">
                                If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
                            </p>
                            <div className="space-y-2 text-gray-700">
                                <p><strong>Email:</strong> <a href="mailto:hello@growingmedia.com" className="text-blue-600 hover:text-blue-800">hello@growingmedia.com</a></p>
                                <p><strong>Company:</strong> The Growing Media Solutions</p>
                            </div>
                        </div>

                    </div>

                    {/* Back to Home */}
                    <div className="mt-12 text-center">
                        <Link
                            to="/"
                            className="inline-block px-8 py-3 bg-[#001B4D] text-white rounded-full font-semibold hover:shadow-lg transition"
                        >
                            Back to Home
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}
