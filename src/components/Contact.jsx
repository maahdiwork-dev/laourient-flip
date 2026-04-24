import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Phone, Mail, Clock, MessageCircle } from 'lucide-react'

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

const contactItems = [
  {
    icon: Phone,
    label: 'Téléphone',
    value: '+216 25 681 552',
    href: 'tel:+21625681552',
    color: 'bg-primary-50',
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: '+216 25 681 552',
    href: 'https://wa.me/21625681552?text=Bonjour, je voudrais des informations.',
    color: 'bg-green-50',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'info@apartments-tunisia.com',
    href: 'mailto:info@apartments-tunisia.com',
    color: 'bg-primary-50',
  },
  {
    icon: Clock,
    label: 'Horaires',
    value: '07:00 – 00:00',
    subValue: 'Tous les jours',
    href: null,
    color: 'bg-primary-50',
  },
]

export default function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <FadeInWhenVisible>
          <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
            <span className="text-primary-700 font-medium text-sm tracking-[0.2em] uppercase">
              Contact
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal mt-3 mb-5">
              Contactez-nous
            </h2>
            <p className="text-charcoal/70 leading-relaxed">
              Notre équipe se tient à votre disposition pour toute information ou réservation. 
              N'hésitez pas à nous écrire ou nous appeler !
            </p>
          </div>
        </FadeInWhenVisible>

        {/* Contact cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 mb-12">
          {contactItems.map((item, i) => (
            <FadeInWhenVisible key={i} delay={i * 0.08}>
              <div className={`${item.color} rounded-2xl p-6 text-center h-full flex flex-col items-center justify-center`}>
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mb-4 shadow-sm">
                  <item.icon className="w-5 h-5 text-primary-700" />
                </div>
                <h3 className="font-semibold text-charcoal text-sm mb-1">{item.label}</h3>
                {item.href ? (
                  <a
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="text-primary-700 hover:text-primary-800 font-medium text-sm transition-colors"
                  >
                    {item.value}
                  </a>
                ) : (
                  <>
                    <p className="text-charcoal font-medium text-sm">{item.value}</p>
                    {item.subValue && (
                      <p className="text-charcoal/50 text-xs mt-0.5">{item.subValue}</p>
                    )}
                  </>
                )}
              </div>
            </FadeInWhenVisible>
          ))}
        </div>

        {/* CTA Banner */}
        <FadeInWhenVisible delay={0.3}>
          <div className="bg-gradient-to-r from-primary-700 via-primary-800 to-primary-900 rounded-2xl p-8 sm:p-12 text-center">
            <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-3">
              Prêt pour une expérience inoubliable ?
            </h3>
            <p className="text-primary-100 mb-8 max-w-xl mx-auto">
              Réservez votre table ou votre appartement en quelques clics via WhatsApp. 
              Nous répondons rapidement !
            </p>
            <a
              href="https://wa.me/21625681552?text=Bonjour, je voudrais des informations."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-primary-800 hover:bg-primary-50 px-8 py-4 rounded-full font-bold transition-colors shadow-lg hover:shadow-xl"
            >
              <MessageCircle className="w-5 h-5" />
              Écrire sur WhatsApp
            </a>
          </div>
        </FadeInWhenVisible>
      </div>
    </section>
  )
}
