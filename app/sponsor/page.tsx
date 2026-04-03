// app/sponsor/page.tsx
'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Users, Award, Heart, Briefcase, Target, Sparkles, ArrowRight, GraduationCap, Calendar, Trophy, Gift } from 'lucide-react'
import Image from 'next/image'

export default function SponsorPage() {
  const benefits = [
    {
      icon: Users,
      title: 'Reach 5000+ Developers',
      description: 'Get your brand in front of Nepal\'s largest tech community'
    },
    {
      icon: Award,
      title: 'Brand Visibility',
      description: 'Logo placement on website, events, and marketing materials'
    },
    {
      icon: Briefcase,
      title: 'Talent Acquisition',
      description: 'Connect with top tech talent for recruitment'
    },
    {
      icon: Target,
      title: 'Targeted Marketing',
      description: 'Reach your ideal audience of tech professionals'
    },
    {
      icon: Heart,
      title: 'Social Impact',
      description: 'Support Nepal\'s tech ecosystem growth'
    },
    {
      icon: Sparkles,
      title: 'Event Sponsorship',
      description: 'Sponsor workshops, hackathons, and meetups'
    }
  ]

  const impactStories = [
    {
      title: 'Empower 100 Students',
      description: 'Sponsor a student\'s tech education journey',
      cost: 'NPR 15,000',
      impact: 'Covers workshop fees, resources, and mentorship for one aspiring developer',
      icon: GraduationCap,
      gradient: 'from-blue-500 to-cyan-500',
      bgGradient: 'from-blue-600/20 to-cyan-600/10'
    },
    {
      title: 'Host a Workshop',
      description: 'Bring industry experts to 50+ students',
      cost: 'NPR 50,000',
      impact: 'One full-day workshop with hands-on learning, certificates, and networking',
      icon: Calendar,
      gradient: 'from-green-500 to-emerald-500',
      bgGradient: 'from-green-600/20 to-emerald-600/10'
    },
    {
      title: 'Fund a Hackathon',
      description: 'Enable innovation and competition',
      cost: 'NPR 1,50,000',
      impact: '24-hour hackathon with 100+ participants, prizes, mentorship, and industry exposure',
      icon: Trophy,
      gradient: 'from-purple-500 to-pink-500',
      bgGradient: 'from-purple-600/20 to-pink-600/10'
    },
    {
      title: 'Annual Scholarship',
      description: 'Support long-term tech education',
      cost: 'NPR 3,00,000',
      impact: 'Full-year program access for 20 deserving students including mentorship and resources',
      icon: Gift,
      gradient: 'from-orange-500 to-red-500',
      bgGradient: 'from-orange-600/20 to-red-600/10'
    }
  ]

  const pastSponsors = [
    { name: 'Ultima', logo: '/Ultima-with-Chevron-Red-Logo-002.jpg' },
    { name: 'CFC', logo: '/cfc.png' },
    { name: 'KU', logo: '/ku.jpg' },
    { name: 'Prateek', logo: '/prateek.png' }
  ]

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-b from-black via-purple-900/10 to-black">
      {/* Background gradient effects - matching About page */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-600/5 via-purple-600/5 to-transparent" />
      
      {/* Animated gradient orbs */}
      <div className="absolute top-20 -left-32 w-96 h-96 bg-red-600/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-20 -right-32 w-96 h-96 bg-purple-600/15 rounded-full blur-[120px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-500/5 rounded-full blur-[120px]" />
      
      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grid' width='60' height='60' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 60 0 L 0 0 0 60' fill='none' stroke='rgba(255,255,255,0.03)' stroke-width='1'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grid)'/%3E%3C/svg%3E")`
        }}
      />

      {/* Hero Section */}
      <section className="pt-32 pb-16 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link href="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-red-500 transition mb-8 group">
            <span className="group-hover:-translate-x-1 transition-transform">←</span> Back to Home
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block mb-4 px-4 py-1 bg-gradient-to-r from-red-600/20 to-purple-600/20 rounded-full border border-red-500/30 backdrop-blur-sm">
              <span className="text-red-400 text-sm font-medium">Make an Impact</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Create Lasting{' '}
              <span className="bg-gradient-to-r from-red-500 via-purple-500 to-red-500 bg-clip-text text-transparent">
                Impact
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">
              Your support directly empowers Nepal's tech ecosystem. Choose an impact area that resonates with your mission and help shape the future of technology in Nepal.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Sponsor Section */}
      <section className="py-16 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Sponsor Us?</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-red-500 to-purple-600 mx-auto rounded-full" />
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              Join hands with Nepal's fastest-growing tech community
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-red-500/50 hover:shadow-[0_0_30px_rgba(239,68,68,0.1)] transition-all duration-300 text-center"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-red-600/20 to-purple-600/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-7 h-7 text-red-500" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stories Section - Main Focus */}
      <section className="py-16 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-red-900/5 to-black" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Choose Your Impact</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-red-500 to-purple-600 mx-auto rounded-full" />
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              Every contribution creates real change. Select an impact area that aligns with your goals.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {impactStories.map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="relative group"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${story.bgGradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                
                <div className="relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-red-500/50 transition-all duration-300">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-14 h-14 bg-gradient-to-br ${story.gradient} rounded-xl flex items-center justify-center shadow-lg`}>
                      <story.icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold bg-gradient-to-r from-red-500 to-purple-500 bg-clip-text text-transparent">
                        {story.cost}
                      </p>
                      <p className="text-gray-500 text-xs">minimum contribution</p>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2">{story.title}</h3>
                  <p className="text-red-300 text-sm mb-3">{story.description}</p>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    {story.impact}
                  </p>
                  
                  <div className="flex items-center gap-3 pt-3 border-t border-white/10">
                    <div className="flex-1">
                      <div className="w-full bg-white/10 rounded-full h-1.5">
                        <div 
                          className={`h-1.5 rounded-full bg-gradient-to-r ${story.gradient}`}
                          style={{ width: `${Math.floor(Math.random() * 40) + 60}%` }}
                        />
                      </div>
                    </div>
                    {/* Red theme button */}
                    <button className="bg-red-600 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-red-700 transition-all duration-300 shadow-lg hover:shadow-red-600/30 shadow-red-600/20">
                      Sponsor This
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Calculator Section */}
      <section className="py-16 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
          >
            <h3 className="text-2xl font-bold text-white mb-4 text-center">Your Impact Calculator</h3>
            <p className="text-gray-400 text-center mb-6">See how your contribution makes a difference</p>
            
            <div className="grid md:grid-cols-4 gap-4">
              {[
                { amount: '10k', impact: 'Supports 1 student workshop' },
                { amount: '25k', impact: 'Funds 1 mentorship session' },
                { amount: '50k', impact: 'Sponsors 1 full workshop' },
                { amount: '1L+', impact: 'Enables 1 hackathon track' }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-4 bg-gradient-to-br from-red-600/10 to-purple-600/10 rounded-xl border border-white/10 cursor-pointer hover:border-red-500/50 transition-all"
                >
                  <p className="text-2xl font-bold text-red-400">{item.amount}</p>
                  <p className="text-gray-400 text-xs mt-2">{item.impact}</p>
                </motion.div>
              ))}
            </div>
            
            {/* Red theme button in calculator */}
            <div className="text-center mt-6">
              <button className="bg-red-600 px-6 py-2 rounded-lg text-sm font-semibold hover:bg-red-700 transition-all duration-300 shadow-lg shadow-red-600/20">
                Calculate Custom Amount
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Past Sponsors */}
      <section className="py-16 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h3 className="text-2xl font-bold text-white mb-4">Trusted By</h3>
            <div className="w-16 h-0.5 bg-gradient-to-r from-red-500 to-purple-600 mx-auto rounded-full" />
          </motion.div>

          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {pastSponsors.map((sponsor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1 }}
                className="relative w-24 h-24 md:w-28 md:h-28 cursor-pointer"
              >
                <Image
                  src={sponsor.logo}
                  alt={sponsor.name}
                  fill
                  className="object-contain opacity-70 hover:opacity-100 transition-opacity"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-red-500/30 transition-all duration-300"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center">
              Ready to Make an{' '}
              <span className="bg-gradient-to-r from-red-500 to-purple-500 bg-clip-text text-transparent">Impact</span>?
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-center gap-3 group">
                  <div className="w-10 h-10 bg-gradient-to-br from-red-600/20 to-purple-600/20 rounded-lg flex items-center justify-center group-hover:from-red-600/30 group-hover:to-purple-600/30 transition-colors">
                    <Mail className="w-5 h-5 text-red-500" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Email Us</p>
                    <a href="mailto:sponsor@devcommunitynepal.com" className="text-white hover:text-red-400 transition">
                      sponsor@devcommunitynepal.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 group">
                  <div className="w-10 h-10 bg-gradient-to-br from-red-600/20 to-purple-600/20 rounded-lg flex items-center justify-center group-hover:from-red-600/30 group-hover:to-purple-600/30 transition-colors">
                    <Phone className="w-5 h-5 text-red-500" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Call Us</p>
                    <a href="tel:+9779800000000" className="text-white hover:text-red-400 transition">
                      +977 980-000-0000
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 group">
                  <div className="w-10 h-10 bg-gradient-to-br from-red-600/20 to-purple-600/20 rounded-lg flex items-center justify-center group-hover:from-red-600/30 group-hover:to-purple-600/30 transition-colors">
                    <MapPin className="w-5 h-5 text-red-500" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Visit Us</p>
                    <p className="text-white">Kathmandu, Nepal</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="bg-gradient-to-br from-red-600/10 to-purple-600/10 rounded-lg p-4 border border-white/10">
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Interested in creating impact? Fill out our partnership form and we'll get back to you within 24 hours to discuss how we can collaborate.
                  </p>
                  {/* Red theme button */}
                  <button className="mt-3 bg-red-600 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-red-700 transition inline-flex items-center gap-2 shadow-lg shadow-red-600/20">
                    Partnership Form <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}