// components/NationalEvents.tsx
'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const NationalEvents = () => {
  const events = [
    {
      id: 1,
      title: 'Social Impact Event',
      description: 'DEV Community Nepal not only tries to uplift the students pursuing technology, but also strives to create an impact on the society through various awareness programs, as our responsibility towards our nation.',
      image: '/social.jpg',
      tag: 'Social Impact'
    },
    {
      id: 2,
      title: 'CodeFest',
      description: 'CodeFest will be conducted in all 7 provinces of Nepal. The students pursuing IT can participate in this competition. The competition will be conducted in 3 levels: local, provincial, and the national finale.',
      image: '/code fest.jpg',
      tag: 'Hackathon'
    },
    {
      id: 3,
      title: 'AIDA(Hackathon)',
      description: 'Introducing AiDA – AI for People with Disability, in collaboration with Prateek. Build innovative solutions to empower differently-abled individuals.',
      image: '/aidam.jpg',
      tag: 'Tech Conclave'
    }
  ]

  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-b from-black to-purple-900/20">
      {/* Background Decor */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-40 left-20 w-72 h-72 bg-red-600 rounded-full blur-[100px]" />
        <div className="absolute bottom-40 right-20 w-96 h-96 bg-purple-600 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Our National Events
          </h2>
          <div className="w-20 h-1 bg-red-600 mx-auto" />
        </motion.div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.2 }
              }}
              className="group relative"
            >
              {/* Card Glow Effect on Hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-purple-600/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Main Card */}
              <div className="relative bg-gradient-to-br from-white/5 to-white/10 rounded-xl overflow-hidden border border-white/10 group-hover:border-red-500/50 transition-all duration-300 h-full flex flex-col">
                {/* Image Container */}
                <div className="relative w-full aspect-[4/3] overflow-hidden">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                </div>

                {/* Content */}
                <div className="p-5 flex-grow flex flex-col">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-400 transition-colors">
                    {event.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {event.description}
                  </p>
                </div>

                {/* Animated Border on Hover */}
                <div className="absolute inset-0 rounded-xl pointer-events-none">
                  <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute top-0 left-0 w-20 h-0.5 bg-gradient-to-r from-red-500 to-transparent rounded-tl-xl" />
                    <div className="absolute top-0 right-0 w-20 h-0.5 bg-gradient-to-l from-red-500 to-transparent rounded-tr-xl" />
                    <div className="absolute bottom-0 left-0 w-20 h-0.5 bg-gradient-to-r from-red-500 to-transparent rounded-bl-xl" />
                    <div className="absolute bottom-0 right-0 w-20 h-0.5 bg-gradient-to-l from-red-500 to-transparent rounded-br-xl" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default NationalEvents