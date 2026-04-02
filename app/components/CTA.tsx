// components/CTA.tsx
'use client'

import { motion } from 'framer-motion'
import { Users, BookOpen, ArrowRight } from 'lucide-react'

const CTA = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 via-purple-600/20 to-blue-600/20 blur-3xl" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-12 border border-white/20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Join Nepal’s Growing Tech Community
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Be part of something amazing. Connect with developers, learn together, and build the future of Nepal's tech industry.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-red-600 px-8 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-red-700 transition shadow-[0_0_20px_rgba(255,0,0,0.2)]"
            >
              <Users size={20} />
              Join Now
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border border-white/20 px-8 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-white/10 transition"
            >
              <BookOpen size={20} />
              Explore Learning
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CTA