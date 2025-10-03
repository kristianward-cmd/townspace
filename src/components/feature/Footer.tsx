
import { Link } from 'react-router-dom';

export default function Footer() {
  const quickLinks = [
    { name: 'How It Works', href: '/how-it-works' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Industries', href: '/industries' },
    { name: 'Samples', href: '/samples' },
    { name: 'Reviews', href: '/reviews' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' }
  ];

  const legalLinks = [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' }
  ];

  const socialLinks = [
    { name: 'Facebook', icon: 'ri-facebook-fill', href: '#' },
    { name: 'Twitter', icon: 'ri-twitter-fill', href: '#' },
    { name: 'LinkedIn', icon: 'ri-linkedin-fill', href: '#' },
    { name: 'Instagram', icon: 'ri-instagram-fill', href: '#' }
  ];

  const officeLocations = [
    {
      city: 'New York',
      address: '350 Fifth Avenue, Suite 7600, New York, NY 10118'
    },
    {
      city: 'Los Angeles',
      address: '1999 Avenue of the Stars, Suite 1100, Los Angeles, CA 90067'
    },
    {
      city: 'Toronto',
      address: '181 Bay Street, Suite 2550, Toronto, ON M5J 2T3'
    }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <img 
                src="https://static.readdy.ai/image/58938d9e79a19d07dbe9865450e86f0e/e426c612e735f95239099198cbaa7a7e.png" 
                alt="Townspace Logo" 
                className="h-64 w-auto"
              />
            </Link>
            <p className="text-gray-300 mb-4 max-w-md">
              Rent a high-performing local website for $299/month. We build, host, optimize, and continuously improve your site to drive more calls and appointments.
            </p>
            <div className="space-y-2">
              <a
                href="tel:+1-555-TOWNSPACE"
                className="flex items-center text-secondary-400 hover:text-secondary-300 transition-colors duration-200"
              >
                <div className="w-5 h-5 flex items-center justify-center mr-2">
                  <i className="ri-phone-line"></i>
                </div>
                1-555-TOWNSPACE
              </a>
              <a
                href="mailto:hello@townspace.net"
                className="flex items-center text-gray-300 hover:text-white transition-colors duration-200"
              >
                <div className="w-5 h-5 flex items-center justify-center mr-2">
                  <i className="ri-mail-line"></i>
                </div>
                hello@townspace.net
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Office Locations */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Office Locations</h3>
            <div className="space-y-4">
              {officeLocations.map((office) => (
                <div key={office.city} className="text-sm">
                  <h4 className="font-medium text-white mb-1">{office.city}</h4>
                  <p className="text-gray-300 leading-relaxed">{office.address}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Legal & Social */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 mb-6">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-8 h-8 flex items-center justify-center bg-gray-800 hover:bg-primary-500 rounded-full transition-colors duration-200"
                  aria-label={social.name}
                >
                  <i className={`${social.icon} text-sm`}></i>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 Townspace. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
