import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'À propos', href: '#about' },
  { label: 'Restaurant', href: '#restaurant' },
  { label: 'Appartements', href: '#appartements' },
  { label: 'Galerie', href: '#galerie' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'glass shadow-lg border-b border-primary-100'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <span className="font-heading text-2xl sm:text-3xl font-bold text-primary-700">
              Laourient
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-charcoal hover:text-primary-700 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://wa.me/21625681552?text=Bonjour, je voudrais des informations."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary-700 hover:bg-primary-800 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-colors"
            >
              Réserver
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-charcoal"
            aria-label="Menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-primary-100"
          >
            <div className="px-4 py-4 space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block text-base font-medium text-charcoal hover:text-primary-700 py-2 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="https://wa.me/21625681552?text=Bonjour, je voudrais des informations."
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-primary-700 hover:bg-primary-800 text-white px-5 py-3 rounded-full text-center font-semibold transition-colors"
              >
                Réserver
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
