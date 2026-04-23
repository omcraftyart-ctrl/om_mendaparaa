import { Phone, Mail, Instagram, Linkedin, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';

const footerLinks = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'Pricing', path: '/pricing' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
  { name: 'Testimonials', path: '/testimonials' },
  { name: 'FAQ', path: '/faq' },
];

const socials = [
  { icon: Phone, href: 'tel:+919316474039', label: 'Call' },
  { icon: Mail, href: 'mailto:ommendapara900@gmail.com', label: 'Email' },
  { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
];

export default function Footer() {
  return (
    <footer className="bg-surface-lighter border-t border-white/5 pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Rocket className="text-white w-5 h-5" />
              </div>
              <span className="text-lg font-bold tracking-tight text-white">
                Om <span className="text-primary font-light">Mendapara</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-8">
              Helping local businesses grow through premium websites, smart lead handling and high-converting digital presence.
            </p>
            <div className="flex gap-4">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-full glass flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary transition-all"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <div className="grid grid-cols-1 gap-3">
              {footerLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-gray-400 hover:text-primary transition-colors text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Services</h4>
            <div className="flex flex-col gap-3">
              <span className="text-gray-400 text-sm">Business Websites</span>
              <span className="text-gray-400 text-sm">Booking Systems</span>
              <span className="text-gray-400 text-sm">Ecommerce Solutions</span>
              <span className="text-gray-400 text-sm">Landing Pages</span>
              <span className="text-gray-400 text-sm">SEO Optimization</span>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Location</h4>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Surat, Gujarat<br />
              India
            </p>
            <Link
              to="/free-demo"
              className="inline-block bg-primary/10 text-primary border border-primary/20 px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-primary hover:text-white transition-all"
            >
              Request a Quote
            </Link>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Om Mendapara. All rights reserved.</p>
          <div className="flex gap-8">
            <Link to="/privacy" className="hover:text-gray-300">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-gray-300">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
