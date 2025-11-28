'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { trackEvent } from '@/lib/analytics'

const WhatsappButton = () => {
    const handleReserve = () => {
    trackEvent('whatsapp_button', {
      category: 'tracking',
      label: 'Whatsapp Button',
    })
    window.open('https://wa.me/6281338382845?text=Hi%20Goasaya,%20I%20want%20to%20reserve%20a%20table.', '_blank', 'noopener,noreferrer')
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
