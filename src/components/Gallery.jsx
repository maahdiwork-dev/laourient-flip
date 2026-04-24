import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import facadeImage from '../assets/images/gallery/01-facade.jpg'
import terraceImage from '../assets/images/gallery/02-terrace.jpg'
import skyTerrasseImage from '../assets/images/gallery/03-skyterrasse.jpg'
import poolImage from '../assets/images/gallery/04-pool.jpg'
import roomOrientImage from '../assets/images/gallery/05-room-orient.jpg'
import gardenImage from '../assets/images/gallery/06-garden.jpg'

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
    image: facadeImage,
    size: 'col-span-2 row-span-2',
  },
  {
    title: 'Terrasse ensoleillée',
    image: terraceImage,
    size: 'col-span-1 row-span-1',
  },
  {
    title: 'SkyTerrasse',
    image: skyTerrasseImage,
    size: 'col-span-1 row-span-1',
  },
  {
    title: 'Piscine',
    image: poolImage,
    size: 'col-span-1 row-span-1',
  },
  {
    title: 'Chambre Orient',
    image: roomOrientImage,
    size: 'col-span-1 row-span-1',
  },
  {
    title: 'Jardin',
    image: gardenImage,
    size: 'col-span-2 row-span-1',
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
                className={`relative rounded-2xl overflow-hidden ${item.size} group cursor-pointer shadow-sm hover:shadow-xl transition-shadow`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/5 to-transparent" />

                <div className="absolute inset-0 flex flex-col items-start justify-end p-4 sm:p-5 text-white">
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
