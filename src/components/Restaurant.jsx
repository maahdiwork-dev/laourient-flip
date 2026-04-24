import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import {
  UtensilsCrossed,
  Sun,
  Coffee,
  ChefHat,
  Star,
  Clock,
  Users,
} from 'lucide-react'
import terraceImage from '../assets/images/gallery/02-terrace.jpg'

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

const services = [
  {
    icon: Coffee,
    title: 'Petit-déjeuner',
    desc: 'Start your day with fresh pastries, Tunisian specialties, and a sea view on our sunny terrace.',
    tag: '07:00 – 11:00',
  },
  {
    icon: UtensilsCrossed,
    title: 'Dîner tunisien & méditerranéen',
    desc: 'Cuisine raffinée mêlant saveurs traditionnelles tunisiennes et touches méditerranéennes modernes.',
    tag: 'Dès 18:00',
  },
  {
    icon: Star,
    title: 'SkyTerrace',
    desc: 'Notre rooftop panoramique pour une expérience culinaire unique avec vue imprenable sur la mer.',
    tag: 'Sur réservation',
  },
  {
    icon: Coffee,
    title: 'Café maure',
    desc: 'Un voyage sensoriel au cœur de la tradition tunisienne, dans un cadre authentique et élégant.',
    tag: 'Tout au long de la journée',
  },
  {
    icon: ChefHat,
    title: 'Spécialités locales',
    desc: 'Plats traditionnels préparés avec amour. Sur commande 24h à l\'avance pour une expérience sur mesure.',
    tag: 'Sur commande',
  },
  {
    icon: Users,
    title: 'Menu enfant',
    desc: 'Des plats savoureux adaptés aux plus jeunes, pour que toute la famille profite du moment.',
    tag: 'Disponible',
  },
]

export default function Restaurant() {
  return (
    <section id="restaurant" className="py-20 sm:py-28 bg-sand">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <FadeInWhenVisible>
          <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
            <span className="text-primary-700 font-medium text-sm tracking-[0.2em] uppercase">
              Gastronomie
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal mt-3 mb-5">
              Restaurant & Café
            </h2>
            <p className="text-charcoal/70 leading-relaxed">
              De la table du petit-déjeuner au rooftop de la SkyTerrasse, laissez-vous séduire 
              par une cuisine généreuse et créative dans un cadre d'exception.
            </p>
          </div>
        </FadeInWhenVisible>

        {/* Services grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {services.map((item, i) => (
            <FadeInWhenVisible key={i} delay={i * 0.08}>
              <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow group">
                <div className="w-12 h-12 rounded-xl bg-primary-50 group-hover:bg-primary-100 flex items-center justify-center mb-4 transition-colors">
                  <item.icon className="w-6 h-6 text-primary-700" />
                </div>
                <h3 className="font-heading text-lg font-bold text-charcoal mb-2">
                  {item.title}
                </h3>
                <p className="text-charcoal/60 text-sm leading-relaxed mb-3">
                  {item.desc}
                </p>
                <span className="inline-flex items-center gap-1.5 text-xs font-medium text-primary-700 bg-primary-50 px-3 py-1 rounded-full">
                  <Clock className="w-3 h-3" />
                  {item.tag}
                </span>
              </div>
            </FadeInWhenVisible>
          ))}
        </div>

        {/* Atmosphere cards */}
        <FadeInWhenVisible>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="md:col-span-1 rounded-2xl overflow-hidden bg-gradient-to-br from-primary-700 to-primary-900 text-white p-8 flex flex-col justify-center min-h-[240px]">
              <Sun className="w-8 h-8 text-primary-200 mb-4" />
              <h3 className="font-heading text-xl font-bold mb-2">Terrasse ensoleillée</h3>
              <p className="text-primary-100 text-sm leading-relaxed">
                Profitez du climat méditerranéen sur notre terrasse climatisée, parfaite 
                pour un déjeuner en plein air ou un café à l'ombre.
              </p>
            </div>
            <div className="md:col-span-2 relative rounded-2xl overflow-hidden min-h-[240px] flex items-center justify-center">
              <img
                src={terraceImage}
                alt="Terrasse de Laourient"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary-950/75 via-primary-900/55 to-primary-900/25" />
              <div className="relative z-10 text-center px-6 py-8">
                <h3 className="font-heading text-2xl font-bold text-primary-800 mb-3">
                  <span className="text-white">Cuisine tunisienne & méditerranéenne</span>
                </h3>
                <p className="text-white/85 max-w-md mx-auto mb-6">
                  Des recettes traditionnelles revisitées avec passion par notre chef Mahir, 
                  pour un voyage culinaire inoubliable.
                </p>
                <a
                  href="https://wa.me/21625681552?text=Bonjour, je voudrais des informations sur le menu du restaurant."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-primary-700 hover:bg-primary-800 text-white px-6 py-3 rounded-full text-sm font-semibold transition-colors"
                >
                  Contactez-nous pour les tarifs
                </a>
              </div>
            </div>
          </div>
        </FadeInWhenVisible>
      </div>
    </section>
  )
}
