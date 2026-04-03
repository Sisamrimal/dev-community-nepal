// components/Hero.tsx
'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import SectionWrapper  from './SectionWrapper'


const Hero = () => {
  const roles = ['PARTNER', 'SUPPORTER', 'CHANGEMAKER', 'TRAINER', 'MAKER']
  const [currentRole, setCurrentRole] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const handleTyping = () => {
      const fullText = roles[currentRole]
      
      if (isDeleting) {
        setDisplayText(fullText.substring(0, displayText.length - 1))
        if (displayText === '') {
          setIsDeleting(false)
          setCurrentRole((prev) => (prev + 1) % roles.length)
        }
      } else {
        setDisplayText(fullText.substring(0, displayText.length + 1))
        if (displayText === fullText) {
          setTimeout(() => setIsDeleting(true), 1500)
        }
      }
    }

    const timer = setTimeout(handleTyping, 100)
    return () => clearTimeout(timer)
  }, [displayText, isDeleting, currentRole])

  return (
        
    <section className="min-h-screen flex items-center relative overflow-hidden bg-black">
      {/* Clean subtle gradient - minimal purple */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-600/5 via-transparent to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 items-center justify-between">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1"
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 leading-tight">
              BECOME A
              <br />
              <span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
                {displayText}
                <span className="animate-pulse text-red-500">|</span>
              </span>
            </h1>
            
            <p className="text-base text-gray-300 mb-8 leading-relaxed max-w-lg">
              We are Open platform for the Learners to learn and trainers to transfer their learning to learners. 
              We are the group of Young people uniting all the IT students and professionals under the same roof 
              for the technological revolutions.
            </p>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-red-600 px-8 py-3 rounded-lg font-semibold inline-flex items-center gap-2 hover:bg-red-700 transition-all shadow-lg"
            >
              Sponsor Us <ArrowRight size={18} />
            </motion.button>
          </motion.div>

          {/* Right Column - Wider Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-5xl">
              <div className="relative aspect-[21/9] w-full">
                <Image
                  src="/s8.jpg"
                  alt="DEV Community Nepal"
                  fill
                  className="object-cover rounded-lg"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
    
  )
}

export default Hero