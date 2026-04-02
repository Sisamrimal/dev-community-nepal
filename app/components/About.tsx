// components/WhatWeDo.tsx
'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const WhatWeDo = () => {
  const activities = [
    {
      title: 'WORKSHOPS',
      description: 'DEV Community Nepal organizes several personal and professional workshops throughout the calendar year. The workshops are intended to provide technical as well as market-related knowledge.',
      color: 'from-red-500 to-red-600'
    },
    {
      title: 'HACKATHON',
      description: '"DevFest" is the hackathon competition organized by DEV Community Nepal. In the past we have conducted couple of hackathons successfully. It is one of the grand events of the year.',
      color: 'from-red-500 to-red-600'
    },
    {
      title: 'SOCIAL IMPACT',
      description: 'DEV Community Nepal not only tries to uplift the students pursuing technology, but also strives to create an impact on the society through various awareness programs, as our responsibility towards our nation.',
      color: 'from-red-500 to-red-600'
    },
    {
      title: 'INTERNSHIP',
      description: 'Exposure and Networking is one of the vital gain that any member associated with the organization can achieve. The partners of DEV Community Nepal provide an excellent opportunity of internship for our members.',
      color: 'from-red-500 to-red-600'
    }
  ]

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-black to-purple-900/10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            WHAT WE DO ?
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {activities.map((activity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.03,
                transition: { duration: 0.2 }
              }}
              className="group relative bg-gradient-to-br from-white/5 to-white/10 rounded-xl p-6 border border-white/10 hover:border-red-500/50 transition-all duration-300 flex flex-col h-full min-h-[320px]"
            >
              {/* Hover Glow Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${activity.color} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300`} />
              
              <div className="relative z-10 flex flex-col h-full">
                {/* Title */}
                <h3 className="text-xl font-bold mb-4 text-white group-hover:text-red-400 transition-colors duration-300">
                  {activity.title}
                </h3>
                
                {/* Description - Fixed height with line clamping */}
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 leading-relaxed text-sm mb-6 flex-grow line-clamp-5">
                  {activity.description}
                </p>
                
                {/* Learn More Button - Always at bottom */}
                <motion.button
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-2 text-red-500 hover:text-red-400 font-semibold text-sm transition-colors duration-300 mt-auto"
                >
                  Learn More <ArrowRight size={14} />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhatWeDo