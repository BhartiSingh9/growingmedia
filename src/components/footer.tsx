import { Link } from 'react-router-dom'
import { Mail, LinkedIn } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img
                src="/logo-tgms.png"
                alt="The Growing Media Solutions Logo"
                className="h-auto w-40"
              />
            </div>
            <p className="text-gray-400 text-sm">Where your growth is our success.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <Link to="/services#web-dev" className="hover:text-green-400 transition">
                  Web Development
                </Link>
              </li>
              <li>
                <Link to="/services#seo" className="hover:text-green-400 transition">
                  SEO
                </Link>
              </li>
              <li>
                <Link to="/services#social" className="hover:text-green-400 transition">
                  Social Media
                </Link>
              </li>
              <li>
                <Link to="/services#personal-branding" className="hover:text-green-400 transition">
                  Personal Branding
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <Link to="/about" className="hover:text-green-400 transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="hover:text-green-400 transition">
                  Our Approach
                </Link>
              </li>
              <li>
                <Link to="/careers" className="hover:text-green-400 transition">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-green-400 transition">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Get in Touch</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-green-400" />
                <a href="mailto:business@thegrowingmedia.com" className="hover:text-green-400 transition">
                  business@thegrowingmedia.com
                </a>
              </li>
              <li className="flex gap-3 pt-2">
                <a href="https://www.linkedin.com/company/the-growing-media-solutions/" className="hover:text-green-400 transition">
                  <LinkedIn size={18} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">© {currentYear} The Growing Media Solutions. All rights reserved.</p>
          <div className="flex gap-6 text-sm text-gray-400 mt-4 sm:mt-0">
            <Link to="/privacy" className="hover:text-green-400 transition">
              Privacy
            </Link>
            <Link to="/terms" className="hover:text-green-400 transition">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
