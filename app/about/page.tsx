// app/about/page.tsx
'use client'

import { motion } from 'framer-motion'
import { Heart, Users, Target, Lightbulb, Award, Globe, Calendar, Sparkles, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function AboutPage() {
  const values = [
    {
      icon: Heart,
      title: 'Community First',
      description: 'We believe in the power of community and collective growth.',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: Target,
      title: 'Excellence',
      description: 'Striving for the highest quality in everything we do.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Encouraging creative solutions and new ideas.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Users,
      title: 'Inclusivity',
      description: 'Creating opportunities for everyone regardless of background.',
      color: 'from-green-500 to-emerald-500'
    }
  ]

  const milestones = [
    { year: '2019', title: 'First Workshop', description: 'Organized our first community workshop with 50+ participants' },
    { year: '2020', title: 'Online Learning', description: 'Launched virtual learning programs during pandemic' },
    { year: '2021', title: 'First Hackathon', description: 'Successfully conducted CodeFest 2021 with 200+ participants' },
    { year: '2022', title: 'Nationwide Reach', description: 'Expanded to 7 provinces with partner organizations' },
    { year: '2023', title: '1000+ Members', description: 'Crossed 1000 active community members milestone' },
    { year: '2024', title: 'Project 100 Minds', description: 'Launched flagship leadership development program' },
  ]

  const team = [
    {
      name: 'Sushant Rimal',
      role: 'Founder & President',
      bio: 'Visionary leader passionate about transforming Nepal\'s tech ecosystem.',
      image: '/project100.jpg'
    },
    {
      name: 'Priya Karki',
      role: 'Vice President',
      bio: 'Community builder with expertise in developer relations.',
      image: '/aida.jpg'
    },
    {
      name: 'Bikash Thapa',
      role: 'Technical Lead',
      bio: 'Full-stack developer leading technical workshops and hackathons.',
      image: '/cs-1.jpg'
    },
    {
      name: 'Sujan Shrestha',
      role: 'Program Manager',
      bio: 'Managing events, partnerships, and community programs.',
      image: '/social.jpg'
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
              About DEV Community Nepal
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We are a non-profit initiative dedicated to empowering Nepal's future developers 
              through collaboration, learning, and innovation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-white/5 to-white/10 rounded-2xl p-8 border border-white/10 hover:border-red-500/50 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
              <p className="text-gray-300 leading-relaxed">
                To empower Nepal's tech community by providing accessible learning opportunities, 
                fostering collaboration, and creating pathways to meaningful careers in technology.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-white/5 to-white/10 rounded-2xl p-8 border border-white/10 hover:border-red-500/50 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-4">Our Vision</h2>
              <p className="text-gray-300 leading-relaxed">
                A Nepal where every aspiring developer has the resources, mentorship, and community 
                support needed to build innovative solutions and drive technological progress.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 relative bg-gradient-to-b from-black to-purple-900/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  DEV Community Nepal was founded in 2019 by a group of passionate developers who saw 
                  the need for a supportive tech community in Nepal. What started as small meetups in 
                  Kathmandu has grown into a nationwide movement.
                </p>
                <p>
                  Today, we have over 5000+ members across all 7 provinces of Nepal. We've organized 
                  50+ workshops, 10+ hackathons, and helped 200+ developers land their dream jobs.
                </p>
                <p>
                  Our journey is driven by the belief that collaboration and knowledge sharing can 
                  transform Nepal's tech landscape. We're building more than just a community - 
                  we're building the future of technology in Nepal.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative rounded-2xl overflow-hidden border border-white/20 shadow-[0_0_30px_rgba(255,0,0,0.2)]"
            >
              <Image
                src="/meetup-image.jpg"
                alt="DEV Community Nepal Meetup"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Core Values</h2>
            <div className="w-20 h-1 bg-red-600 mx-auto" />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.05 }}
                className="bg-gradient-to-br from-white/5 to-white/10 rounded-2xl p-6 text-center border border-white/10 hover:border-red-500/50 transition-all duration-300"
              >
                <div className={`bg-gradient-to-br ${value.color} w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4`}>
                  <value.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{value.title}</h3>
                <p className="text-gray-400 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones Timeline */}
      <section className="py-16 relative bg-gradient-to-b from-black to-purple-900/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Journey</h2>
            <div className="w-20 h-1 bg-red-600 mx-auto" />
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-red-500/30 hidden md:block" />
            
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-6 items-center`}
                >
                  <div className="flex-1">
                    <div className="bg-gradient-to-br from-white/5 to-white/10 rounded-2xl p-6 border border-white/10 hover:border-red-500/50 transition-all duration-300">
                      <div className="text-red-500 text-2xl font-bold mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-bold text-white mb-2">{milestone.title}</h3>
                      <p className="text-gray-400">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-red-500 rounded-full border-2 border-white/20" />
                  </div>
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Leadership Team</h2>
            <div className="w-20 h-1 bg-red-600 mx-auto" />
            <p className="text-gray-300 mt-4">Meet the passionate individuals driving our mission forward</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.05 }}
                className="bg-gradient-to-br from-white/5 to-white/10 rounded-2xl overflow-hidden border border-white/10 hover:border-red-500/50 transition-all duration-300 text-center"
              >
                <div className="relative h-48">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-white mb-1">{member.name}</h3>
                  <p className="text-red-500 text-sm mb-2">{member.role}</p>
                  <p className="text-gray-400 text-xs">{member.bio}</p>
                </div>
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
              Join Our Community
            </h2>
            <p className="text-gray-300 mb-8">
              Be part of Nepal's fastest-growing tech community. Let's learn, build, and grow together.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/#register">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="bg-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition shadow-[0_0_20px_rgba(255,0,0,0.2)]"
                >
                  Join Now
                </motion.button>
              </Link>
              <Link href="/#event">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="border border-white/20 px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition"
                >
                  Upcoming Events
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}