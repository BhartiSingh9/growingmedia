import { Link } from 'react-router-dom'
import { FileText, Scale, AlertCircle, CheckCircle, Mail } from 'lucide-react'

export default function TermsPage() {
    return (
        <div className="overflow-hidden">
            {/* Header */}
            <section className="relative min-h-96 flex items-center justify-center text-white pt-24 pb-12 bg-gradient-to-br from-[#001B4D] to-blue-700">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl" />
                    <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl" />
                </div>

                <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <Scale className="w-16 h-16 mx-auto mb-6 text-blue-300" />
                    <h1 className="text-5xl md:text-6xl font-bold mb-6">Terms of Service</h1>
                    <p className="text-xl text-gray-300">
                        Please read these terms carefully before using our services.
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
                                Welcome to The Growing Media Solutions. These Terms of Service ("Terms") govern your access to and use of our website, services, and products. By accessing or using our services, you agree to be bound by these Terms. If you do not agree with any part of these Terms, please do not use our services.
                            </p>
                        </div>

                        {/* Acceptance of Terms */}
                        <div className="mb-12">
                            <div className="flex items-center gap-3 mb-4">
                                <CheckCircle className="text-[#001B4D]" size={28} />
                                <h2 className="text-3xl font-bold text-[#001B4D] m-0">Acceptance of Terms</h2>
                            </div>

                            <p className="text-gray-700">
                                By accessing our website or engaging our services, you acknowledge that you have read, understood, and agree to be bound by these Terms, as well as our Privacy Policy. These Terms apply to all visitors, users, and others who access or use our services.
                            </p>
                        </div>

                        {/* Services Description */}
                        <div className="mb-12">
                            <div className="flex items-center gap-3 mb-4">
                                <FileText className="text-[#001B4D]" size={28} />
                                <h2 className="text-3xl font-bold text-[#001B4D] m-0">Description of Services</h2>
                            </div>

                            <p className="text-gray-700 mb-4">
                                The Growing Media Solutions provides digital marketing services, including but not limited to:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                <li>Website development and design</li>
                                <li>Search engine optimization (SEO)</li>
                                <li>Social media marketing and management</li>
                                <li>Content creation and strategy</li>
                                <li>Digital advertising campaigns</li>
                                <li>Analytics and performance reporting</li>
                            </ul>
                            <p className="text-gray-700 mt-4">
                                We reserve the right to modify, suspend, or discontinue any aspect of our services at any time without prior notice.
                            </p>
                        </div>

                        {/* User Responsibilities */}
                        <div className="mb-12">
                            <h2 className="text-3xl font-bold text-[#001B4D] mb-4">User Responsibilities</h2>

                            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Account Registration</h3>
                            <p className="text-gray-700 mb-4">
                                When creating an account or engaging our services, you agree to:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                <li>Provide accurate, current, and complete information</li>
                                <li>Maintain the security of your account credentials</li>
                                <li>Notify us immediately of any unauthorized use of your account</li>
                                <li>Accept responsibility for all activities under your account</li>
                            </ul>

                            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Prohibited Activities</h3>
                            <p className="text-gray-700 mb-4">
                                You agree not to:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                <li>Use our services for any illegal or unauthorized purpose</li>
                                <li>Violate any applicable laws, regulations, or third-party rights</li>
                                <li>Transmit viruses, malware, or other harmful code</li>
                                <li>Attempt to gain unauthorized access to our systems or networks</li>
                                <li>Interfere with or disrupt the integrity or performance of our services</li>
                                <li>Engage in any form of harassment, abuse, or harmful behavior</li>
                                <li>Impersonate any person or entity or misrepresent your affiliation</li>
                            </ul>
                        </div>

                        {/* Intellectual Property */}
                        <div className="mb-12">
                            <h2 className="text-3xl font-bold text-[#001B4D] mb-4">Intellectual Property Rights</h2>

                            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Our Content</h3>
                            <p className="text-gray-700">
                                All content, materials, and intellectual property on our website and in our services, including but not limited to text, graphics, logos, images, software, and design elements, are owned by or licensed to The Growing Media Solutions and are protected by copyright, trademark, and other intellectual property laws.
                            </p>

                            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Client Content</h3>
                            <p className="text-gray-700">
                                You retain ownership of any content, materials, or information you provide to us. By providing such content, you grant us a non-exclusive, worldwide, royalty-free license to use, reproduce, modify, and display the content solely for the purpose of providing our services to you.
                            </p>

                            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Work Product</h3>
                            <p className="text-gray-700">
                                Upon full payment for our services, you will own the final deliverables created specifically for you. We retain the right to use general methodologies, techniques, and knowledge gained during our engagement for other clients.
                            </p>
                        </div>

                        {/* Payment Terms */}
                        <div className="mb-12">
                            <h2 className="text-3xl font-bold text-[#001B4D] mb-4">Payment and Billing</h2>

                            <p className="text-gray-700 mb-4">
                                Payment terms will be specified in individual service agreements or proposals. General payment terms include:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                <li>Invoices are due within the timeframe specified in your agreement</li>
                                <li>Late payments may incur additional fees or interest charges</li>
                                <li>We reserve the right to suspend services for non-payment</li>
                                <li>All fees are non-refundable unless otherwise stated in writing</li>
                                <li>You are responsible for all applicable taxes</li>
                            </ul>
                        </div>

                        {/* Confidentiality */}
                        <div className="mb-12">
                            <h2 className="text-3xl font-bold text-[#001B4D] mb-4">Confidentiality</h2>

                            <p className="text-gray-700">
                                Both parties agree to maintain the confidentiality of any proprietary or confidential information disclosed during the course of our engagement. This obligation survives the termination of our services and continues for a reasonable period thereafter.
                            </p>
                        </div>

                        {/* Limitation of Liability */}
                        <div className="mb-12">
                            <div className="flex items-center gap-3 mb-4">
                                <AlertCircle className="text-[#001B4D]" size={28} />
                                <h2 className="text-3xl font-bold text-[#001B4D] m-0">Limitation of Liability</h2>
                            </div>

                            <p className="text-gray-700 mb-4">
                                To the maximum extent permitted by law:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                <li>Our services are provided "as is" without warranties of any kind, either express or implied</li>
                                <li>We do not guarantee specific results or outcomes from our services</li>
                                <li>We are not liable for any indirect, incidental, special, consequential, or punitive damages</li>
                                <li>Our total liability shall not exceed the amount paid by you for the specific service giving rise to the claim</li>
                                <li>We are not responsible for third-party services, platforms, or content</li>
                            </ul>
                        </div>

                        {/* Indemnification */}
                        <div className="mb-12">
                            <h2 className="text-3xl font-bold text-[#001B4D] mb-4">Indemnification</h2>

                            <p className="text-gray-700">
                                You agree to indemnify, defend, and hold harmless The Growing Media Solutions, its officers, directors, employees, and agents from any claims, liabilities, damages, losses, or expenses arising from your use of our services, violation of these Terms, or infringement of any third-party rights.
                            </p>
                        </div>

                        {/* Termination */}
                        <div className="mb-12">
                            <h2 className="text-3xl font-bold text-[#001B4D] mb-4">Termination</h2>

                            <p className="text-gray-700 mb-4">
                                Either party may terminate services under the following conditions:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                <li>With written notice as specified in the service agreement</li>
                                <li>Immediately for material breach of these Terms</li>
                                <li>Immediately if required by law or regulatory authority</li>
                            </ul>
                            <p className="text-gray-700 mt-4">
                                Upon termination, you remain responsible for any outstanding payments, and certain provisions of these Terms will survive termination.
                            </p>
                        </div>

                        {/* Dispute Resolution */}
                        <div className="mb-12">
                            <h2 className="text-3xl font-bold text-[#001B4D] mb-4">Dispute Resolution</h2>

                            <p className="text-gray-700">
                                In the event of any dispute arising from these Terms or our services, both parties agree to first attempt to resolve the matter through good-faith negotiation. If negotiation fails, disputes may be resolved through mediation or arbitration as mutually agreed upon.
                            </p>
                        </div>

                        {/* Governing Law */}
                        <div className="mb-12">
                            <h2 className="text-3xl font-bold text-[#001B4D] mb-4">Governing Law</h2>

                            <p className="text-gray-700">
                                These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which The Growing Media Solutions operates, without regard to its conflict of law provisions.
                            </p>
                        </div>

                        {/* Changes to Terms */}
                        <div className="mb-12">
                            <h2 className="text-3xl font-bold text-[#001B4D] mb-4">Changes to These Terms</h2>

                            <p className="text-gray-700">
                                We reserve the right to modify these Terms at any time. We will notify you of any material changes by posting the updated Terms on this page with a new "Last Updated" date. Your continued use of our services after such changes constitutes acceptance of the modified Terms.
                            </p>
                        </div>

                        {/* Severability */}
                        <div className="mb-12">
                            <h2 className="text-3xl font-bold text-[#001B4D] mb-4">Severability</h2>

                            <p className="text-gray-700">
                                If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions will continue in full force and effect.
                            </p>
                        </div>

                        {/* Contact */}
                        <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
                            <div className="flex items-center gap-3 mb-4">
                                <Mail className="text-[#001B4D]" size={28} />
                                <h2 className="text-3xl font-bold text-[#001B4D] m-0">Contact Us</h2>
                            </div>
                            <p className="text-gray-700 mb-4">
                                If you have any questions or concerns about these Terms of Service, please contact us:
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
