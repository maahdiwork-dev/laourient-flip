import { Phone, Mail, MapPin } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-charcoal text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="font-heading text-2xl font-bold text-primary-400 mb-3">
              Laourient
            </h3>
            <p className="text-white/60 text-sm leading-relaxed mb-4">
              Restaurant, café et résidence à Mahdia-Baghdadi. 
              Dormez bien — dinez bien.
            </p>
            <div className="flex text-primary-400">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: 'À propos', href: '#about' },
                { label: 'Restaurant', href: '#restaurant' },
                { label: 'Appartements', href: '#appartements' },
                { label: 'Galerie', href: '#galerie' },
                { label: 'Contact', href: '#contact' },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/50 hover:text-primary-400 text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              Contact
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+21625681552"
                  className="flex items-center gap-2 text-white/50 hover:text-primary-400 text-sm transition-colors"
                >
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  +216 25 681 552
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@apartments-tunisia.com"
                  className="flex items-center gap-2 text-white/50 hover:text-primary-400 text-sm transition-colors"
                >
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  info@apartments-tunisia.com
                </a>
              </li>
              <li className="flex items-start gap-2 text-white/50 text-sm">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>Zone Touristique, Baghdadi<br />Mahdia 5090, Tunisie</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              Horaires
            </h4>
            <div className="text-white/50 text-sm space-y-2">
              <p>
                <span className="text-white/70 font-medium">Ouvert</span> tous les jours
              </p>
              <p>
                <span className="text-primary-400 font-medium">07:00 – 00:00</span>
              </p>
              <p className="pt-2 text-xs">
                Restaurant, café, SkyTerrace
              </p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs">
            © {currentYear} Laourient. Tous droits réservés.
          </p>
          <p className="text-white/40 text-xs">
            Créé par{' '}
            <span className="text-primary-400 font-medium">Kniss Digital</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
