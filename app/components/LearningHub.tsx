// components/LearningHub.tsx
'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { BookOpen, Video, FileText, ExternalLink } from 'lucide-react'

const LearningHub = () => {
  const [activeTab, setActiveTab] = useState('roadmaps')

  const tabs = [
    { id: 'roadmaps', label: 'Roadmaps', icon: BookOpen },
    { id: 'resources', label: 'Free Resources', icon: Video },
    { id: 'notes', label: 'Notes', icon: FileText }
  ]

  const content = {
    roadmaps: [
      { title: 'Frontend Development', items: ['HTML/CSS', 'JavaScript', 'React', 'Next.js', 'Tailwind CSS'] },
      { title: 'Backend Development', items: ['Node.js', 'Python', 'Databases', 'APIs', 'Docker'] },
      { title: 'AI/ML', items: ['Python Basics', 'NumPy/Pandas', 'TensorFlow', 'Neural Networks', 'Computer Vision'] }
    ],
    resources: [
      { name: 'JavaScript Mastery', type: 'YouTube', url: '#' },
      { name: 'FreeCodeCamp', type: 'Course', url: '#' },
      { name: 'MDN Web Docs', type: 'Documentation', url: '#' },
      { name: 'The Odin Project', type: 'Course', url: '#' }
    ],
    notes: [
      { title: 'JavaScript Fundamentals', description: 'Complete beginner notes with examples', level: 'Beginner' },
      { title: 'React Hooks Guide', description: 'Understanding and using React hooks', level: 'Intermediate' },
      { title: 'Python for Data Science', description: 'Essential Python for data analysis', level: 'Intermediate' }
    ]
  }

  return (
    <section id="learning" className="py-20 relative bg-gradient-to-b from-purple-900/20 to-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">🚀 Learning Hub</h2>
          <div className="w-20 h-1 bg-red-600 mx-auto mb-6" />
          <p className="text-gray-300 max-w-2xl mx-auto">
            Your one-stop destination for learning resources, roadmaps, and notes
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-12">
          {tabs.map((tab) => (
            <motion.button
              key={tab.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-red-600 text-white shadow-[0_0_20px_rgba(255,0,0,0.2)]'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20'
              }`}
            >
              <tab.icon size={18} />
              {tab.label}
            </motion.button>
          ))}
        </div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {activeTab === 'roadmaps' && (
              <div className="grid md:grid-cols-3 gap-6">
                {content.roadmaps.map((roadmap, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="bg-gradient-to-br from-white/5 to-white/10 rounded-2xl p-6 border border-white/10 hover:border-red-500/50 transition-all duration-300"
                  >
                    <h3 className="text-2xl font-bold mb-4">{roadmap.title}</h3>
                    <ul className="space-y-2">
                      {roadmap.items.map((item, i) => (
                        <li key={i} className="text-gray-300 flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-red-500 rounded-full" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            )}

            {activeTab === 'resources' && (
              <div className="grid md:grid-cols-2 gap-6">
                {content.resources.map((resource, index) => (
                  <motion.a
                    key={index}
                    href={resource.url}
                    whileHover={{ scale: 1.02 }}
                    className="bg-gradient-to-br from-white/5 to-white/10 rounded-2xl p-6 border border-white/10 hover:border-red-500/50 transition-all duration-300 flex justify-between items-center group"
                  >
                    <div>
                      <h3 className="text-xl font-semibold mb-1">{resource.name}</h3>
                      <p className="text-gray-400">{resource.type}</p>
                    </div>
                    <ExternalLink className="text-gray-400 group-hover:text-red-500 transition" />
                  </motion.a>
                ))}
              </div>
            )}

            {activeTab === 'notes' && (
              <div className="grid md:grid-cols-3 gap-6">
                {content.notes.map((note, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="bg-gradient-to-br from-white/5 to-white/10 rounded-2xl p-6 border border-white/10 hover:border-red-500/50 transition-all duration-300"
                  >
                    <h3 className="text-xl font-semibold mb-2">{note.title}</h3>
                    <p className="text-gray-400 mb-3">{note.description}</p>
                    <span className="inline-block px-3 py-1 bg-red-600/20 rounded-full text-sm text-red-400">
                      {note.level}
                    </span>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}

export default LearningHub