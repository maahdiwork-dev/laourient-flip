import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle } from 'lucide-react'

export default function WhatsAppButton() {
  return (
    <AnimatePresence>
      <motion.a
        href="https://wa.me/21625681552?text=Bonjour, je voudrais des informations."
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 2, type: 'spring', stiffness: 200 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 sm:w-16 sm:h-16 bg-[#25D366] hover:bg-[#20bd5a] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow group"
        aria-label="Contactez-nous sur WhatsApp"
      >
        <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8 text-white" />

        {/* Tooltip */}
        <span className="absolute right-full mr-3 bg-charcoal text-white text-xs font-medium px-3 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          Écrivez-nous !
        </span>

        {/* Ping animation */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />
      </motion.a>
    </AnimatePresence>
  )
}
