// app/events/project-100-minds/page.tsx
'use client'

import { motion } from 'framer-motion'
import { Calendar, MapPin, Users, Globe, Clock, ArrowRight, ChevronRight, Home } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function Project100MindsPage() {
  const locations = [
    'FarWest', 'Kamahl', 'Dang', 'Butwal', 'Pokhara', 'Chitwan', 'Kathmandu', 'Kohli', 'Birgunj'
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden bg-gradient-to-b from-purple-900/20 to-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <Link href="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-red-500 transition">
              <Home size={16} /> Back to Home
            </Link>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden border border-white/20">
                <Image
                  src="/project100.jpg"
                  alt="Project 100 Minds"
                  width={600}
                  height={500}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>
            </motion.div>

            {/* Right Column - Event Details */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
                  DEV COMMUNITY NEPAL RECRUITMENT
                </h1>
                <p className="text-red-500 font-semibold text-xl">
                  25/26 - GENERAL MEMBERSHIP
                </p>
              </div>

              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <p className="text-gray-300 leading-relaxed mb-3">
                  <span className="text-red-500 font-semibold">Project 100 Minds Recruitment 25/26 – General Membership is OPEN! | Recruitment</span>
                </p>
                <p className="text-gray-400 leading-relaxed">
                  Project 100 Minds Recruitment 25/26 – General Membership is OPEN! Are you passionate about technology, 
                  innovation, and social impact? This is your chance to be part of a nationwide community. 🎉
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3 text-gray-300">
                  <Globe size={18} className="text-red-500" />
                  <span className="text-sm">Online</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <MapPin size={18} className="text-red-500" />
                  <span className="text-sm">National</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <Calendar size={18} className="text-red-500" />
                  <span className="text-sm">January 28, 2026</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <Clock size={18} className="text-red-500" />
                  <span className="text-sm">End: February 05, 2026</span>
                </div>
              </div>

              <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                <div className="flex flex-wrap gap-2 justify-center">
                  {locations.map((location, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-white/10 rounded-full text-xs text-gray-300 hover:bg-red-500/20 hover:text-red-400 transition-colors"
                    >
                      {location}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-4 pt-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1 bg-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition shadow-[0_0_20px_rgba(255,0,0,0.2)]"
                >
                  Register Now
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1 border border-white/20 px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition"
                >
                  Sponsor Event
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Project 100 Minds Details Section */}
      <section className="py-20 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-gradient-to-br from-red-600/10 to-purple-600/10 rounded-2xl p-8 md:p-10 border border-white/10"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
              𝗔𝗽𝗽𝗹𝗶𝗰𝗮𝘁𝗶𝗼𝗻𝘀 𝗢𝗽𝗲𝗻 | 𝗣𝗿𝗼𝗷𝗲𝗰𝘁 𝟭𝟬𝟬 𝗠𝗶𝗻𝗱𝘀 – 𝗕𝗮𝗴𝗺𝗮𝘁𝗶 𝗣𝗿𝗼𝘃𝗶𝗻𝗰𝗲 (𝗖𝗼𝗵𝗼𝗿𝘁 𝗜, 𝟮𝟬𝟮𝟲)
            </h2>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Project 100 Minds, an initiative of DEV Community Nepal, is inviting applications for leadership positions 
              in Bagmati Province for Cohort I (2026).
            </p>
            
            <p className="text-gray-300 mb-4 font-semibold">
              We are selecting dedicated and capable student leaders for the following roles:
            </p>
            
            <div className="grid md:grid-cols-2 gap-3 mb-8">
              <div className="flex items-center gap-2">
                <ChevronRight size={16} className="text-red-500" />
                <span className="text-gray-300">𝗣𝗿𝗼𝘃𝗶𝗻𝗰𝗲 𝗟𝗲𝗮𝗱</span>
              </div>
              <div className="flex items-center gap-2">
                <ChevronRight size={16} className="text-red-500" />
                <span className="text-gray-300">𝗣𝗿𝗼𝘃𝗶𝗻𝗰𝗲 𝗖𝗼-𝗟𝗲𝗮𝗱</span>
              </div>
              <div className="flex items-center gap-2">
                <ChevronRight size={16} className="text-red-500" />
                <span className="text-gray-300">𝗖𝗮𝗺𝗽𝘂𝘀 𝗔𝗺𝗯𝗮𝘀𝘀𝗮𝗱𝗼𝗿𝘀</span>
              </div>
            </div>
            
            <p className="text-gray-300 mb-4 font-semibold">
              𝗧𝗵𝗶𝘀 𝗶𝘀 𝗮𝗻 𝗼𝗽𝗽𝗼𝗿𝘁𝘂𝗻𝗶𝘁𝘆 𝘁𝗼:
            </p>
            
            <ul className="space-y-3 mb-8">
              {[
                'Lead and coordinate a province-level student initiative',
                'Gain structured leadership and management experience',
                'Represent Project 100 Minds at your campus',
                'Work closely with a national student community',
                'Contribute to skill development and technology awareness initiatives',
                'Build long-term impact within your academic ecosystem'
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-2 text-gray-400">
                  <ChevronRight size={14} className="text-red-500 mt-1 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            
            <div className="flex flex-wrap gap-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                className="bg-red-600 px-8 py-3 rounded-lg font-semibold inline-flex items-center gap-2 hover:bg-red-700 transition"
              >
                Apply Now <ArrowRight size={18} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                className="border border-white/20 px-8 py-3 rounded-lg font-semibold inline-flex items-center gap-2 hover:bg-white/10 transition"
              >
                Download Brochure
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}