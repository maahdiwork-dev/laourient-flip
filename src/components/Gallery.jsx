import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'

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

const galleryItems = [
  {
    title: 'Façade du restaurant',
    gradient: 'from-primary-400 via-primary-500 to-amber-500',
    size: 'col-span-2 row-span-2',
    icon: '🏛️',
  },
  {
    title: 'Terrasse ensoleillée',
    gradient: 'from-amber-300 via-yellow-400 to-orange-400',
    size: 'col-span-1 row-span-1',
    icon: '☀️',
  },
  {
    title: 'SkyTerrasse',
    gradient: 'from-primary-600 via-primary-700 to-charcoal',
    size: 'col-span-1 row-span-1',
    icon: '🌙',
  },
  {
    title: 'Piscine',
    gradient: 'from-cyan-400 via-blue-400 to-primary-400',
    size: 'col-span-1 row-span-1',
    icon: '🏊',
  },
  {
    title: 'Chambre Orient',
    gradient: 'from-amber-600 via-primary-600 to-primary-800',
    size: 'col-span-1 row-span-1',
    icon: '🛏️',
  },
  {
    title: 'Jardin',
    gradient: 'from-green-400 via-emerald-400 to-primary-400',
    size: 'col-span-2 row-span-1',
    icon: '🌿',
  },
]

export default function Gallery() {
  return (
    <section id="galerie" className="py-20 sm:py-28 bg-sand">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <FadeInWhenVisible>
          <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
            <span className="text-primary-700 font-medium text-sm tracking-[0.2em] uppercase">
              Galerie
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal mt-3 mb-5">
              Découvrez nos lieux
            </h2>
            <p className="text-charcoal/70 leading-relaxed">
              Un aperçu de l'atmosphère unique qui vous attend au sein de Laourient.
            </p>
          </div>
        </FadeInWhenVisible>

        {/* Gallery grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[180px] sm:auto-rows-[200px] md:auto-rows-[220px]">
          {galleryItems.map((item, i) => (
            <FadeInWhenVisible key={i} delay={i * 0.08}>
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className={`relative rounded-2xl overflow-hidden bg-gradient-to-br ${item.gradient} ${item.size} group cursor-pointer shadow-sm hover:shadow-xl transition-shadow`}
              >
                {/* Pattern overlay */}
                <div className="absolute inset-0 bg-black/5" />
                
                {/* Icon */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                  <span className="text-4xl sm:text-5xl mb-3 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </span>
                  <h3 className="font-heading text-sm sm:text-base font-bold text-white/90 drop-shadow-lg">
                    {item.title}
                  </h3>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
              </motion.div>
            </FadeInWhenVisible>
          ))}
        </div>
      </div>
    </section>
  )
}
