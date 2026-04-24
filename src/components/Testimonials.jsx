import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Star, Quote } from 'lucide-react'

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

const testimonials = [
  {
    text: "We were instantly drawn in by the building's majestic, castle-like exterior. We ordered paella — magnificent dish, cooked to absolute perfection. The staff were exceptionally gracious and attentive.",
    author: 'Visiteur Google',
    date: 'Juillet 2025',
    rating: 5,
    lang: 'en',
  },
  {
    text: "One of the best restaurants I have tried in a while. We tried the Mexican Burger, delicious. Chef Mahir treated us to free fresh lemonade and on-the-house salads. Prices very reasonable.",
    author: 'Visiteur Google',
    date: 'Juillet 2025',
    rating: 5,
    lang: 'en',
  },
  {
    text: "Très bon accueil, très joli endroit, les gérants sont des professionnels du tourisme.",
    author: 'Visiteur TripAdvisor',
    date: 'Saison 2024',
    rating: 5,
    lang: 'fr',
  },
]

function StarRating({ count }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(count)].map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
      ))}
      {[...Array(5 - count)].map((_, i) => (
        <Star key={`empty-${i}`} className="w-4 h-4 text-gray-200" />
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <FadeInWhenVisible>
          <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
            <span className="text-primary-700 font-medium text-sm tracking-[0.2em] uppercase">
              Témoignages
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal mt-3 mb-5">
              Ce que disent nos visiteurs
            </h2>
            <p className="text-charcoal/70 leading-relaxed">
              Des expériences authentiques partagées par ceux qui ont découvert Laourient.
            </p>
          </div>
        </FadeInWhenVisible>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((t, i) => (
            <FadeInWhenVisible key={i} delay={i * 0.12}>
              <div className="bg-sand rounded-2xl p-6 sm:p-8 h-full flex flex-col relative group hover:shadow-lg transition-shadow">
                {/* Quote icon */}
                <Quote className="w-8 h-8 text-primary-200 mb-4" />
                
                {/* Stars */}
                <div className="mb-4">
                  <StarRating count={t.rating} />
                </div>

                {/* Text */}
                <p className="text-charcoal/80 text-sm sm:text-base leading-relaxed flex-1 mb-6 italic">
                  «&nbsp;{t.text}&nbsp;»
                </p>

                {/* Author */}
                <div className="border-t border-primary-100 pt-4">
                  <p className="font-semibold text-charcoal text-sm">{t.author}</p>
                  <p className="text-charcoal/50 text-xs mt-0.5">{t.date}</p>
                </div>

                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-primary-100 to-transparent rounded-br-3xl rounded-tl-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </FadeInWhenVisible>
          ))}
        </div>

        {/* Google rating summary */}
        <FadeInWhenVisible delay={0.4}>
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-3 bg-sand rounded-full px-6 py-3">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <span className="font-heading text-lg font-bold text-charcoal">4.7</span>
              <span className="text-charcoal/50 text-sm">/ 5 — 64 avis Google</span>
            </div>
          </div>
        </FadeInWhenVisible>
      </div>
    </section>
  )
}
