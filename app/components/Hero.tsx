'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useState, useEffect } from 'react'
import Image from 'next/image'

const Hero = () => {
  const roles = ['Partner', 'Supporter', 'Changemaker', 'Trainer', 'Maker']
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
    <section className="min-h-screen flex items-center relative overflow-hidden bg-black pt-16">
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-black" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,0,0,0.1),transparent_50%)]" />
      
      <div className="w-full relative z-10 px-6 lg:px-0">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-0">
          
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 w-full lg:w-1/2 lg:pl-16 xl:pl-24"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 leading-[1.1] text-white">
              BECOME A
              <br />
              <span className="text-red-500">
                {displayText}
                <span className="animate-pulse ml-1 text-white">|</span>
              </span>
            </h1>
            
            {/* Paragraph exactly in 3 lines as per second image */}
            <p className="text-base md:text-lg text-gray-300 mb-10 leading-relaxed max-w-md">
              We are Open platform for the Learners to learn and trainers to transfer their learning to learners.
              <br />
              We are the group of Young people uniting all the IT students and professionals under the same roof
              <br />
              for the technological revolutions.
            </p>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-red-600 px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-red-700 transition shadow-[0_0_20px_rgba(255,0,0,0.3)] w-fit text-white"
            >
              Sponsor Us <ArrowRight size={20} />
            </motion.button>
          </motion.div>

          {/* Right Column - Image positioned to the right edge */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative w-full lg:w-1/2"
          >
            <div className="relative w-full overflow-hidden rounded-l-[80px] shadow-2xl">
              <Image
                src="/s8.jpg"
                alt="DEV Community Nepal"
                width={1000}
                height={700}
                className="w-full h-[400px] lg:h-[550px] object-cover"
                priority
              />
              {/* Dark overlay for better text contrast */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-transparent" />
            </div>
          </motion.div>
        </div>
        
        
        
      </div>
    </section>
  )
}

export default Hero