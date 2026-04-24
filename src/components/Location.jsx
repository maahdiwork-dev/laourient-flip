import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { MapPin, Navigation, Waves, Landmark } from 'lucide-react'

function FadeInWhenVisible({ children, delay = 0 }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}

const proximities = [
  { icon: Waves, text: 'Plage — 500m' },
  { icon: Landmark, text: 'Medina de Mahdia — 25 min' },
  { icon: Navigation, text: 'Zone touristique — 500m' },
]

export default function Location() {
  return (
    <section className="py-20 sm:py-28 bg-sand">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <FadeInWhenVisible>
          <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
            <span className="text-primary-700 font-medium text-sm tracking-[0.2em] uppercase">
              Localisation
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal mt-3 mb-5">
              Nous trouver
            </h2>
            <p className="text-charcoal/70 leading-relaxed">
              Situé dans le quartier résidentiel de Baghdadi, à deux pas de la mer et de la zone touristique de Mahdia.
            </p>
          </div>
        </FadeInWhenVisible>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Map */}
          <FadeInWhenVisible className="lg:col-span-2">
            <div className="rounded-2xl overflow-hidden shadow-lg h-[350px] sm:h-[450px]">
              <iframe
                src="https://www.google.com/maps?q=35.556303,11.023721&z=16&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Laourient sur Google Maps"
              />
            </div>
          </FadeInWhenVisible>

          {/* Info */}
          <FadeInWhenVisible delay={0.2}>
            <div className="space-y-6">
              {/* Address */}
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary-50 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary-700" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-bold text-charcoal">Adresse</h3>
                    <p className="text-charcoal/60 text-sm mt-1">
                      Zone Touristique, Baghdadi<br />
                      Mahdia 5090, Tunisie
                    </p>
                  </div>
                </div>
                <a
                  href="https://www.google.com/maps?q=35.556303,11.023721"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-700 hover:text-primary-800 text-sm font-medium transition-colors"
                >
                  Ouvrir dans Google Maps →
                </a>
              </div>

              {/* Proximities */}
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="font-heading text-lg font-bold text-charcoal mb-4">
                  À proximité
                </h3>
                <div className="space-y-3">
                  {proximities.map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-primary-50 flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-4 h-4 text-primary-700" />
                      </div>
                      <span className="text-charcoal/70 text-sm">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeInWhenVisible>
        </div>
      </div>
    </section>
  )
}
