// components/Partners.tsx
'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const Partners = () => {
  const partners = [
    { id: 1, name: 'Ultima', logo: '/Ultima-with-Chevron-Red-Logo-002.jpg' },
    { id: 2, name: 'CFC', logo: '/cfc.png' },
    { id: 3, name: 'KU', logo: '/ku.jpg' },
    { id: 4, name: 'Prateek', logo: '/prateek.png' },
    { id: 5, name: 'Sindhi Association of Nepal', logo: '/lf.jpg' }
  ]

  return (
    <section className="py-16 relative overflow-hidden bg-gradient-to-b from-black to-purple-900/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            We have worked with
          </h2>
          <div className="w-20 h-1 bg-red-600 mx-auto" />
        </motion.div>

        {/* Logos Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16"
        >
          {partners.map((partner, index) => (
            <motion.div
              key={partner.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1 }}
              className="relative w-24 h-24 md:w-28 md:h-28 cursor-pointer"
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                fill
                className="object-contain"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Partners