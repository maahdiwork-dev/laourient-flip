import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { MapPin, Users, Eye, Heart } from 'lucide-react'
import facadeImage from '../assets/images/about/facade-main.jpg'

function FadeInWhenVisible({ children, delay = 0 }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

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

const highlights = [
  {
    icon: MapPin,
    title: 'Baghdadi, Mahdia',
    desc: 'À 500m de la zone touristique, avec une vue imprenable sur la mer Méditerranée.',
  },
  {
    icon: Users,
    title: 'Famille Boukef',
    desc: 'Dirigé par une famille de professionnels du tourisme, pour un accueil authentique et chaleureux.',
  },
  {
    icon: Eye,
    title: 'Architecture majestueuse',
    desc: "Un bâtiment au charme de château, avec terrasse ensoleillée et SkyTerrace panoramique.",
  },
  {
    icon: Heart,
    title: 'Hospitalité tunisienne',
    desc: "Gastronomie tunisienne et méditerranéenne, café maure, et moments de partage inoubliables.",
  },
]

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <FadeInWhenVisible>
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={facadeImage}
                  alt="Facade de Laourient"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/55 via-primary-900/10 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="font-heading text-2xl text-white font-semibold drop-shadow-lg">
                    La façade majestueuse
                  </p>
                  <p className="text-white/80 text-sm mt-2">de Laourient</p>
                </div>
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary-100 rounded-2xl -z-10" />
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary-50 rounded-full -z-10" />
            </div>
          </FadeInWhenVisible>

          {/* Text */}
          <div>
            <FadeInWhenVisible>
              <span className="text-primary-700 font-medium text-sm tracking-[0.2em] uppercase">
                À propos
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal mt-3 mb-6">
                Un lieu d'exception{' '}
                <span className="text-primary-700">au cœur de Mahdia</span>
              </h2>
            </FadeInWhenVisible>

            <FadeInWhenVisible delay={0.1}>
              <p className="text-charcoal/70 leading-relaxed mb-5">
                Niché dans le quartier paisible de Baghdadi, à seulement 500 mètres de la 
                zone touristique de Mahdia, <strong className="text-charcoal">Laourient</strong> est bien plus 
                qu'un simple restaurant — c'est une expérience complète de l'hospitalité tunisienne.
              </p>
            </FadeInWhenVisible>

            <FadeInWhenVisible delay={0.2}>
              <p className="text-charcoal/70 leading-relaxed mb-5">
                Dès votre arrivée, vous serez séduit par l'architecture majestueuse du bâtiment, 
                rappelant un château méditerranéen. La famille <strong className="text-charcoal">Boukef</strong>, 
                véritables professionnels du tourisme, vous accueille avec chaleur et authenticité 
                dans cet écrin où se mêlent tradition et modernité.
              </p>
            </FadeInWhenVisible>

            <FadeInWhenVisible delay={0.3}>
              <p className="text-charcoal/70 leading-relaxed mb-8">
                Que vous veniez pour déguster notre cuisine tunisienne et méditerranéenne 
                raffinée, siroter un café maure sur notre terrasse ensoleillée, ou séjourner 
                dans l'un de nos appartements thématiques avec vue rêve, Laourient vous promet 
                des moments inoubliables entre mer et terre.
              </p>
            </FadeInWhenVisible>

            {/* Highlights grid */}
            <div className="grid sm:grid-cols-2 gap-5">
              {highlights.map((item, i) => (
                <FadeInWhenVisible key={i} delay={0.2 + i * 0.1}>
                  <div className="flex gap-3">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary-50 flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-primary-700" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-charcoal text-sm mb-1">{item.title}</h4>
                      <p className="text-charcoal/60 text-xs leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </FadeInWhenVisible>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
