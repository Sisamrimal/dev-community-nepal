// components/CurrentEvent.tsx
'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Globe, MapPin, Calendar, Clock } from 'lucide-react'
import Link from 'next/link'

const CurrentEvent = () => {
  return (
    <section className="py-16 relative overflow-hidden bg-gradient-to-b from-black to-purple-900/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-1262px;
">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-white tracking-wide">
            OUR CURRENT EVENT
          </h2>
          <div className="w-16 h-0.5 bg-red-600 mx-auto" />
        </motion.div>

        {/* Main Event Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-white/5 to-white/10 rounded-xl border border-white/10 overflow-hidden"
        >
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Left Column - Image */}
            <div className="relative group overflow-hidden">
              <Link href="/events/project-100-minds">
                <div className="relative h-[400px] lg:h-full min-h-[380px] cursor-pointer">
                  {/* Blue Gradient Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900">
                    {/* Pattern Overlay */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent_50%)]" />
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2240%22 height=%2240%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cdefs%3E%3Cpattern id=%22grid%22 width=%2240%22 height=%2240%22 patternUnits=%22userSpaceOnUse%22%3E%3Cpath d=%22M 40 0 L 0 0 0 40%22 fill=%22none%22 stroke=%22rgba(255,255,255,0.05)%22 stroke-width=%220.5%22/%3E%3C/pattern%3E%3C/defs%3E%3Crect width=%22100%25%22 height=%22100%25%22 fill=%22url(%23grid)%22/%3E%3C/svg%3E')] opacity-30" />
                  </div>
                  
                  {/* Content Overlay */}
                  <div className="absolute inset-0 flex flex-col justify-between p-6">
                    {/* Top */}
                    <div className="text-right">
                      <div className="inline-block">
                        <p className="text-white/70 text-xs mb-1">DEV</p>
                        <div className="text-3xl font-bold text-white leading-tight">
                          &lt;/&gt;
                        </div>
                      </div>
                    </div>
                    
                    {/* Center Content */}
                    <div className="text-center">
                      <p className="text-white/70 text-xs mb-2">DEV Community Nepal</p>
                      <h3 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                        PROJECT<br />100 MINDS
                      </h3>
                      <div className="w-16 h-0.5 bg-red-500 mx-auto my-3" />
                      <p className="text-white text-base font-semibold">Cohort I (2026)</p>
                      <p className="text-white/70 text-xs">Bagmati Province Cohort</p>
                    </div>
                    
                    {/* Bottom */}
                    <div className="text-left">
                      <p className="text-white/50 text-[10px]">DEV COMMUNITY NEPAL</p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            {/* Right Column - Content */}
            <div className="p-6 md:p-8">
              {/* Header */}
              <div className="mb-5">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2 leading-tight">
                  DEV COMMUNITY NEPAL PROJECT<br />
                  100 MINDS - GENERAL MEMBERSHIP RECRUITMENT
                </h3>
                <p className="text-red-500 font-semibold text-base">
                  Project: 100 Minds | Cohort (2026)
                </p>
                <p className="text-gray-400 text-sm">
                  Bagmati Province Cohort
                </p>
              </div>

              {/* Description */}
              <div className="space-y-3 mb-5">
                <p className="text-gray-300 text-sm leading-relaxed">
                  <span className="text-red-500 font-semibold">Dev Community Nepal Recruitment 25/26 – Project 100 Minds General Membership is OPEN! | Recruitment</span>
                </p>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Project 100 Minds Recruitment 25/26 – General Membership is OPEN! Are you passionate about technology, 
                  innovation, and social impact? This is your chance to be part of a nationwide community.
                </p>
                <Link href="/events/project-100-minds">
                  <button className="text-red-500 hover:text-red-400 font-semibold text-sm inline-flex items-center gap-1 transition-colors">
                    Open... read more <ArrowRight size={14} />
                  </button>
                </Link>
              </div>

              {/* Event Details */}
              <div className="flex flex-wrap gap-3 mb-6 text-xs">
                <div className="flex items-center gap-1.5 text-gray-300">
                  <Globe size={14} className="text-red-500" />
                  <span>Online</span>
                </div>
                <div className="flex items-center gap-1.5 text-gray-300">
                  <MapPin size={14} className="text-red-500" />
                  <span>national</span>
                </div>
                <div className="flex items-center gap-1.5 text-gray-300">
                  <Calendar size={14} className="text-red-500" />
                  <span>January 28, 2026</span>
                </div>
                <div className="flex items-center gap-1.5 text-gray-300">
                  <Clock size={14} className="text-red-500" />
                  <span>End: February 05, 2026</span>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex gap-3">
                <Link href="/events/project-100-minds" className="flex-1">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-red-600 px-4 py-2.5 rounded-lg font-semibold text-sm hover:bg-red-700 transition shadow-[0_0_20px_rgba(255,0,0,0.2)]"
                  >
                    Register
                  </motion.button>
                </Link>
                <Link href="/events/project-100-minds" className="flex-1">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full border border-white/20 px-4 py-2.5 rounded-lg font-semibold text-sm hover:bg-white/10 transition"
                  >
                    Sponsor
                  </motion.button>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CurrentEvent