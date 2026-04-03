// app/our-impact/page.tsx
'use client'

import { motion } from 'framer-motion'
import { Heart, Users, Briefcase, Code, Award, TrendingUp, Globe, BookOpen, Target, Sparkles } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function OurImpactPage() {
  const stats = [
    { icon: Users, value: '5000+', label: 'Community Members', color: 'from-blue-500 to-cyan-500' },
    { icon: Briefcase, value: '200+', label: 'Job Placements', color: 'from-green-500 to-emerald-500' },
    { icon: Code, value: '150+', label: 'Projects Built', color: 'from-purple-500 to-pink-500' },
    { icon: Award, value: '50+', label: 'Workshops Conducted', color: 'from-orange-500 to-red-500' },
    { icon: TrendingUp, value: '30+', label: 'Partner Companies', color: 'from-red-500 to-pink-500' },
    { icon: Globe, value: '15+', label: 'Cities Reached', color: 'from-indigo-500 to-purple-500' },
  ]

  const impactAreas = [
    {
      title: 'Technical Education',
      description: 'Providing free workshops and training to students across Nepal, helping them gain practical skills.',
      icon: BookOpen,
      image: '/social.jpg'
    },
    {
      title: 'Career Development',
      description: 'Connecting talented developers with job opportunities and internships at partner companies.',
      icon: Target,
      image: '/award.jpg'
    },
    {
      title: 'Community Building',
      description: 'Creating a supportive ecosystem where developers can learn, share, and grow together.',
      icon: Users,
      image: '/meetup-image.jpg'
    },
    {
      title: 'Social Innovation',
      description: 'Developing tech solutions for social problems and raising awareness about digital inclusion.',
      icon: Sparkles,
      image: '/aidam.jpg'
    }
  ]

  const successStories = [
    {
      name: 'Ramesh Adhikari',
      role: 'Software Engineer at CloudFactory',
      story: 'Joined DEV Community Nepal as a beginner. Through workshops and mentorship, I secured a job at CloudFactory.',
      image: '/project100.jpg'
    },
    {
      name: 'Sita Sharma',
      role: 'Full Stack Developer',
      story: 'The community helped me transition from a non-tech background to a successful developer career.',
      image: '/aida.jpg'
    },
    {
      name: 'Bikash Thapa',
      role: 'Tech Entrepreneur',
      story: 'Founded my startup after connecting with like-minded developers at community hackathons.',
      image: '/codefest.jpg'
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden bg-gradient-to-b from-purple-900/20 to-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <Link href="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-red-500 transition">
              ← Back to Home
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Our Impact on Society
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              DEV Community Nepal is transforming Nepal's tech ecosystem by empowering developers, 
              creating opportunities, and driving innovation across the nation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Achievements</h2>
            <div className="w-20 h-1 bg-red-600 mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-gradient-to-br from-white/5 to-white/10 rounded-2xl p-6 text-center border border-white/10 hover:border-red-500/50 transition-all duration-300"
              >
                <div className={`bg-gradient-to-br ${stat.color} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">{stat.value}</h3>
                <p className="text-gray-400">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Areas */}
      <section className="py-16 relative bg-gradient-to-b from-black to-purple-900/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Where We Make a Difference</h2>
            <div className="w-20 h-1 bg-red-600 mx-auto" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {impactAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-white/5 to-white/10 rounded-2xl overflow-hidden border border-white/10 hover:border-red-500/50 transition-all duration-300"
              >
                <div className="relative h-48">
                  <Image
                    src={area.image}
                    alt={area.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <area.icon className="w-6 h-6 text-red-500" />
                    <h3 className="text-xl font-bold text-white">{area.title}</h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed">{area.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Success Stories</h2>
            <div className="w-20 h-1 bg-red-600 mx-auto" />
            <p className="text-gray-300 mt-4">Real stories of transformation from our community members</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {successStories.map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-gradient-to-br from-white/5 to-white/10 rounded-2xl p-6 border border-white/10 hover:border-red-500/50 transition-all duration-300 text-center"
              >
                <div className="relative w-20 h-20 rounded-full overflow-hidden mx-auto mb-4 border-2 border-red-500">
                  <Image
                    src={story.image}
                    alt={story.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-lg font-bold text-white mb-1">{story.name}</h3>
                <p className="text-red-500 text-sm mb-3">{story.role}</p>
                <p className="text-gray-400 text-sm italic">"{story.story}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 relative bg-gradient-to-r from-red-600/10 to-purple-600/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Be Part of Our Impact
            </h2>
            <p className="text-gray-300 mb-8">
              Join DEV Community Nepal today and help us create an even bigger impact on Nepal's tech ecosystem.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/#register">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="bg-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition shadow-[0_0_20px_rgba(255,0,0,0.2)]"
                >
                  Join Community
                </motion.button>
              </Link>
              <Link href="/#partner">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="border border-white/20 px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition"
                >
                  Become a Partner
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}