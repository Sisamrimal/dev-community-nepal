'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, TrendingUp, Sparkles } from 'lucide-react'
import Image from 'next/image'

const CommunityProjects = () => {
  const images = [
    { src: '/aida.jpg', alt: 'AIDA Event - Community Workshop' },
    { src: '/aida 1.jpg', alt: 'AIDA Workshop - Hands-on Learning' },
    { src: '/award.jpg', alt: 'Award Ceremony - Recognizing Excellence' },
    { src: '/cs-1.jpg', alt: 'Community Session - Knowledge Sharing' },
    { src: '/meetup.jpg', alt: 'Meetup Event - Networking' },
    { src: '/meet second.jpg', alt: 'Meetup Second - Community Gathering' },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const stats = [
    { value: '150+', label: 'workshops' },
    { value: '100+', label: 'collaborations' },
    { value: '7+', label: 'meetups' },
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
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-red-600 rounded-full blur-[100px]" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-black-600 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600/20 to-purple-600/20 rounded-full px-6 py-2 border border-white/10">
            <Sparkles className="w-4 h-4 text-red-500" />
            <span className="text-sm text-gray-300">Our Impact</span>
          </div>
        </motion.div>

        {/* Main Two-Column Layout */}
        <div className="flex flex-col lg:flex-row items-stretch gap-12 lg:gap-14">

          {/* LEFT — Image Slider Card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="w-full lg:w-[480px] flex-shrink-0"
          >
            <div
              className="relative rounded-2xl overflow-hidden border border-white/15 shadow-2xl w-full"
              style={{ height: '540px' }}
            >
              {/* Sliding Images */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, scale: 1.08 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.55 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={images[currentIndex].src}
                    alt={images[currentIndex].alt}
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                </motion.div>
              </AnimatePresence>

              {/* Caption + dots */}
              <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                <p className="text-white text-sm font-semibold leading-snug">
                  {images[currentIndex].alt}
                </p>
                <p className="text-gray-400 text-xs mt-1">
                  Building Nepal's tech community, one event at a time
                </p>
                <div className="flex gap-2 mt-4">
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
                          ? 'w-6 h-2 bg-red-500 rounded-full'
                          : 'w-2 h-2 bg-white/40 rounded-full hover:bg-white/70'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-3 top-1/2 -translate-y-1/2 z-10 bg-black/60 hover:bg-red-600 rounded-full p-2.5 transition-all duration-300"
              >
                <ChevronLeft className="w-4 h-4 text-white" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-3 top-1/2 -translate-y-1/2 z-10 bg-black/60 hover:bg-red-600 rounded-full p-2.5 transition-all duration-300"
              >
                <ChevronRight className="w-4 h-4 text-white" />
              </button>
            </div>
          </motion.div>

          {/* RIGHT — Title + Stat Rows */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex-1 flex flex-col justify-center"
          >
            {/* Heading */}
            <div className="mb-10">
              <h2 className="text-5xl md:text-6xl font-extrabold mb-5 leading-tight text-white">
                We drop jaws!
              </h2>
              <p className="text-gray-400 text-base max-w-md leading-relaxed">
                In January 2021, we powered our first community. Since then we've grown to
              </p>
            </div>

            {/* Stat rows — red/black/white only, cascading width */}
            <div className="flex flex-col gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.25 + index * 0.13 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 6 }}
                  className="flex items-center gap-5 bg-white/[0.04] border border-white/10 hover:border-red-600/50 hover:bg-white/[0.07] rounded-2xl px-6 py-5 transition-all duration-300 cursor-default"
                  style={{
                    width: index === 0 ? '100%' : index === 1 ? '87%' : '72%',
                  }}
                >
                  {/* Red accent bar */}
                  <div className="w-[3px] h-12 bg-red-600 rounded-full flex-shrink-0" />

                  {/* Number */}
                  <span className="text-red-500 font-black text-5xl md:text-6xl tracking-tight leading-none">
                    {stat.value}
                  </span>

                  {/* Label */}
                  <span className="text-gray-300 font-medium text-xl capitalize">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-14 flex justify-center"
        >
          <div className="inline-flex items-center gap-3 bg-white/5 rounded-full px-8 py-4 border border-white/10 backdrop-blur-sm">
            <TrendingUp className="w-5 h-5 text-red-500" />
            <span className="text-gray-300 text-sm">
              Join <span className="text-red-500 font-bold">5000+</span> developers in Nepal's fastest-growing tech community
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CommunityProjects