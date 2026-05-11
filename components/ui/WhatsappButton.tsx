'use client'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { trackEvent } from '@/lib/analytics'
import { admin } from '@/lib/contact'

const WhatsappButton = () => {
  const pathname = usePathname();
    if (pathname === "/links") return null;
  const handleReserve = () => {
    trackEvent('whatsapp_button', {
      category: 'tracking',
      label: 'Whatsapp Button',
    })
    window.open(`https://wa.me/${admin.phone}?text=Hi%20GOASAYA%2C%20I%E2%80%99d%20like%20to%20get%20more%20information.%20Thank%20you.
`, '_blank', 'noopener,noreferrer')
  }
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-[99]"
    >
      <motion.button
        aria-label="Contact via WhatsApp"
        type="button"
        onClick={handleReserve}
        className="flex justify-center items-center cursor-pointer"
      >
        <Image
          src="/images/icon-wa-btn.png"
          alt="Whatsapp GOASAYA"
          width={50}
          height={50}
        />
      </motion.button>
    </motion.div>
  )
}

export default WhatsappButton
