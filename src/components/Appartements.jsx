import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import {
  Home,
  Waves,
  TreePine,
  Bike,
  Wind,
  Mountain,
  Sparkles,
  Sun,
} from 'lucide-react'

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

const apartments = [
  { name: 'Waha', emoji: '🌿', desc: 'Nature et sérénité' },
  { name: 'Jasmin', emoji: '🌸', desc: 'Fleur de poésie' },
  { name: 'Zitouna', emoji: '🫒', desc: 'Olivier centenaire' },
  { name: 'Sahara', emoji: '🏜️', desc: 'Esprit nomade' },
  { name: 'Bahr', emoji: '🌊', desc: 'L\'appel de la mer' },
  { name: 'Orient', emoji: '🕌', desc: 'Élégance orientale' },
  { name: 'El Shems', emoji: '☀️', desc: 'Lumière solaire' },
  { name: 'Nujoum', emoji: '✨', desc: 'Nuit étoilée' },
]

const amenities = [
  { icon: Waves, label: 'Piscine' },
  { icon: Sparkles, label: 'Sauna' },
  { icon: TreePine, label: 'Jardin' },
  { icon: Bike, label: 'Vélos gratuits' },
]

const activities = [
  'Surf', 'Jet ski', 'Paddle', 'Kitesurf', 'Quad', 'E-bike',
]

export default function Appartements() {
  return (
    <section id="appartements" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <FadeInWhenVisible>
          <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
            <span className="text-primary-700 font-medium text-sm tracking-[0.2em] uppercase">
              Séjour
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal mt-3 mb-5">
              Appartements thématiques
            </h2>
            <p className="text-charcoal/70 leading-relaxed">
              Huit appartements au charme unique, chacun inspiré d'un thème méditerranéen. 
              Un havre de paix à quelques pas de la mer, avec piscine, sauna et jardin.
            </p>
          </div>
        </FadeInWhenVisible>

        {/* Apartments grid */}
        <FadeInWhenVisible>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-5 mb-14">
            {apartments.map((apt, i) => (
              <motion.div
                key={apt.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-primary-50 to-amber-50 p-5 sm:p-6 text-center hover:shadow-lg transition-shadow group cursor-pointer"
              >
                <div className="text-3xl sm:text-4xl mb-2">{apt.emoji}</div>
                <h3 className="font-heading text-base sm:text-lg font-bold text-charcoal group-hover:text-primary-700 transition-colors">
                  {apt.name}
                </h3>
                <p className="text-xs text-charcoal/50 mt-1">{apt.desc}</p>
              </motion.div>
            ))}
          </div>
        </FadeInWhenVisible>

        {/* Amenities */}
        <FadeInWhenVisible>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-10">
            {amenities.map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-2 bg-primary-50 px-5 py-3 rounded-full"
              >
                <item.icon className="w-5 h-5 text-primary-700" />
                <span className="text-sm font-medium text-charcoal">{item.label}</span>
              </div>
            ))}
          </div>
        </FadeInWhenVisible>

        {/* Activities */}
        <FadeInWhenVisible>
          <div className="text-center mb-10">
            <p className="text-sm text-charcoal/50 mb-3 font-medium">Activités à proximité</p>
            <div className="flex flex-wrap justify-center gap-2">
              {activities.map((act) => (
                <span
                  key={act}
                  className="bg-charcoal/5 text-charcoal/70 text-xs font-medium px-3 py-1.5 rounded-full"
                >
                  {act}
                </span>
              ))}
            </div>
          </div>
        </FadeInWhenVisible>

        {/* Info banner */}
        <FadeInWhenVisible>
          <div className="bg-gradient-to-r from-primary-50 via-cream to-primary-50 rounded-2xl p-6 sm:p-8 text-center">
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 mb-6 text-sm text-charcoal/70">
              <div className="flex items-center gap-2">
                <Waves className="w-4 h-4 text-primary-700" />
                <span>500m de la plage</span>
              </div>
              <div className="flex items-center gap-2">
                <Mountain className="w-4 h-4 text-primary-700" />
                <span>25 min de la medina</span>
              </div>
              <div className="flex items-center gap-2">
                <Home className="w-4 h-4 text-primary-700" />
                <span>Parking gratuit</span>
              </div>
            </div>
            <a
              href="https://wa.me/21625681552?text=Bonjour, je voudrais des informations sur les appartements."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary-700 hover:bg-primary-800 text-white px-8 py-3.5 rounded-full font-semibold transition-colors"
            >
              Contactez-nous pour les tarifs
            </a>
          </div>
        </FadeInWhenVisible>
      </div>
    </section>
  )
}
