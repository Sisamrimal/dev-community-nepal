// components/CommunityProjects.tsx
'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Users, Briefcase, Calendar, TrendingUp, Sparkles } from 'lucide-react'
import Image from 'next/image'

const CommunityProjects = () => {
  const images = [
    { src: '/aida.jpg', alt: 'AIDA Event - Community Workshop' },
    { src: '/aida-1.jpg', alt: 'AIDA Workshop - Hands-on Learning' },
    { src: '/award.jpg', alt: 'Award Ceremony - Recognizing Excellence' },
    { src: '/cs-1.jpg', alt: 'Community Session - Knowledge Sharing' },
    { src: '/meetup-image.jpg', alt: 'Meetup Event - Networking' },
    { src: '/meet second.jpg', alt: 'Meetup Second - Community Gathering' },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const stats = [
    { icon: Briefcase, value: '150+', label: 'Workshops', suffix: '', color: 'from-blue-500 to-cyan-500' },
    { icon: Users, value: '100+', label: 'Collaborations', suffix: '', color: 'from-purple-500 to-pink-500' },
    { icon: Calendar, value: '7+', label: 'Meetups', suffix: '', color: 'from-red-500 to-orange-500' },
  ]

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 5000)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 5000)
  }

  useEffect(() => {
    if (!isAutoPlaying) return
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length)
    }, 4000)
    
    return () => clearInterval(interval)
  }, [isAutoPlaying, images.length])

  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-b from-black to-purple-900/20">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-red-600 rounded-full blur-[100px]" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-600 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header with "We drop jaws!" */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600/20 to-purple-600/20 rounded-full px-6 py-2 mb-4 border border-white/10">
            <Sparkles className="w-4 h-4 text-red-500" />
            <span className="text-sm text-gray-300">Our Impact</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            We drop jaws!
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            In January 2019, we powered our first community workshop. Since then we've grown to
          </p>
        </motion.div>

        {/* Stats Cards - Large Numbers */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="text-center relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 to-purple-600/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
              <div className="relative bg-gradient-to-br from-white/5 to-white/10 rounded-2xl p-8 border border-white/10 group-hover:border-red-500/50 transition-all duration-300">
                <stat.icon className="w-12 h-12 text-red-500 mx-auto mb-4" />
                <h3 className="text-5xl md:text-6xl font-bold text-white mb-2">
                  {stat.value}
                </h3>
                <p className="text-gray-400 text-lg">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Image Slider/Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="relative rounded-2xl overflow-hidden border border-white/20 shadow-2xl">
            {/* Main Image */}
            <div className="relative h-[450px] md:h-[550px] w-full">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={images[currentIndex].src}
                    alt={images[currentIndex].alt}
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                </motion.div>
              </AnimatePresence>

              {/* Caption Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                <p className="text-white text-lg font-semibold">
                  {images[currentIndex].alt}
                </p>
                <p className="text-gray-300 text-sm mt-1">
                  Building Nepal's tech community, one event at a time
                </p>
              </div>

              {/* Image Counter Dots */}
              <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 z-10 flex gap-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setCurrentIndex(index)
                      setIsAutoPlaying(false)
                      setTimeout(() => setIsAutoPlaying(true), 5000)
                    }}
                    className={`transition-all duration-300 ${
                      currentIndex === index
                        ? 'w-8 h-2 bg-red-500 rounded-full'
                        : 'w-2 h-2 bg-white/50 rounded-full hover:bg-white/80'
                    }`}
                  />
                ))}
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 hover:bg-red-600/80 rounded-full p-3 transition-all duration-300 backdrop-blur-sm group"
              >
                <ChevronLeft className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 hover:bg-red-600/80 rounded-full p-3 transition-all duration-300 backdrop-blur-sm group"
              >
                <ChevronRight className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Additional Stats Line */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-3 bg-white/5 rounded-full px-8 py-4 border border-white/10 backdrop-blur-sm">
            <TrendingUp className="w-5 h-5 text-red-500" />
            <span className="text-gray-300">
              Join <span className="text-red-500 font-bold">5000+</span> developers in Nepal's fastest-growing tech community
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CommunityProjects