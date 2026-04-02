// Alternative version with actual images
// Place images in public folder as: sushant.jpg, manu.jpg, alice.jpg

'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Quote } from 'lucide-react'

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Sushant Rimal',
      title: 'Founder, DEV Community Nepal',
      quote: 'This community has transformed the tech landscape in Nepal. Watching young developers grow from beginners to industry professionals is the most rewarding experience. Our mission to create a collaborative learning environment has truly come to life.',
      image: '/sushant.jpg',
      gradient: 'from-red-500 to-orange-500'
    },
    {
      id: 2,
      name: 'Manu Arora',
      title: 'Tech Innovator & Entrepreneur',
      quote: 'What a fantastic community! I made incredible connections and learned so much from the workshops. The platform is so easy to use. Highly recommend it to anyone looking to grow in tech.',
      image: '/manu.jpg',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      id: 3,
      name: 'Alice Johnson',
      title: 'Senior Software Engineer',
      quote: 'DEV Community Nepal has completely transformed how I approach problems. It\'s like having a brilliant community that knows exactly what I need. The collaborative spirit here is unmatched.',
      image: '/alice.jpg',
      gradient: 'from-blue-500 to-cyan-500'
    }
  ]

  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-b from-black to-purple-900/20">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-40 left-20 w-72 h-72 bg-red-600 rounded-full blur-[100px]" />
        <div className="absolute bottom-40 right-20 w-96 h-96 bg-purple-600 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            What Our Wellwishers Say
          </h2>
          <div className="w-20 h-1 bg-red-600 mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group relative cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-purple-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative bg-gradient-to-br from-white/5 to-white/10 rounded-2xl overflow-hidden border border-white/10 group-hover:border-red-500/50 transition-all duration-300 h-full flex flex-col">
                <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity">
                  <Quote size={40} className="text-white" />
                </div>

                <div className="p-6 flex-grow flex flex-col">
                  <p className="text-gray-300 text-sm leading-relaxed mb-6 italic z-10 relative">
                    "{testimonial.quote}"
                  </p>
                  
                  <div className="flex items-center gap-4 mt-auto">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-red-500/50 group-hover:border-red-500 transition-all duration-300">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    
                    <div>
                      <h4 className="text-white font-semibold text-base group-hover:text-red-400 transition-colors">
                        {testimonial.name}
                      </h4>
                      <p className="text-gray-400 text-xs">
                        {testimonial.title}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="absolute inset-0 rounded-2xl pointer-events-none">
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute top-0 left-0 w-20 h-0.5 bg-gradient-to-r from-red-500 to-transparent rounded-tl-2xl" />
                    <div className="absolute top-0 right-0 w-20 h-0.5 bg-gradient-to-l from-red-500 to-transparent rounded-tr-2xl" />
                    <div className="absolute bottom-0 left-0 w-20 h-0.5 bg-gradient-to-r from-red-500 to-transparent rounded-bl-2xl" />
                    <div className="absolute bottom-0 right-0 w-20 h-0.5 bg-gradient-to-l from-red-500 to-transparent rounded-br-2xl" />
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

export default Testimonials