// components/Navbar.tsx
'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, ChevronDown } from 'lucide-react'
import Link from 'next/link'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [isEventsOpen, setIsEventsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: ' Home', href: '/' },
    { name: 'About', href: '/about' },
    { 
      name: 'Event', 
      href: '#event',
      dropdown: [
        { name: 'All Events', href: '#event' },
        { name: 'Project 100 Minds', href: '/events/project-100-minds' },
        { name: 'CodeFest', href: '/events/codefest' },
        { name: 'Tech Conclave', href: '/events/tech-conclave' },
      ]
    },
    { name: 'Our Impact', href: '/our-impact' },
    
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/80 backdrop-blur-lg border-b border-white/10' : ''
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-xl md:text-2xl font-bold cursor-pointer"
            >
              <span className="text-white">DEV</span>
              <span className="text-red-600">Community</span>
              <span className="text-white">Nepal</span>
            </motion.div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 items-center">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                {item.dropdown ? (
                  <>
                    <button
                      className="text-gray-300 hover:text-red-500 transition-colors text-sm font-medium flex items-center gap-1"
                      onClick={() => setIsEventsOpen(!isEventsOpen)}
                      onMouseEnter={() => setIsEventsOpen(true)}
                      onMouseLeave={() => setIsEventsOpen(false)}
                    >
                      {item.name} <ChevronDown size={14} />
                    </button>
                    {isEventsOpen && (
                      <div
                        className="absolute top-full left-0 mt-2 w-48 bg-black/90 backdrop-blur-lg rounded-lg border border-white/10 shadow-lg py-2"
                        onMouseEnter={() => setIsEventsOpen(true)}
                        onMouseLeave={() => setIsEventsOpen(false)}
                      >
                        {item.dropdown.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            href={dropdownItem.href}
                            className="block px-4 py-2 text-sm text-gray-300 hover:text-red-500 hover:bg-white/5 transition-colors"
                          >
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="text-gray-300 hover:text-red-500 transition-colors text-sm font-medium"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="bg-red-600 px-5 py-2 rounded-lg text-sm font-semibold hover:bg-red-700 transition"
            >
              Join Now
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden"
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-black/90 backdrop-blur-lg rounded-lg mt-2 p-4"
          >
            {navItems.map((item) => (
              <div key={item.name}>
                {item.dropdown ? (
                  <>
                    <div className="text-gray-300 text-sm font-medium py-2">
                      {item.name}
                    </div>
                    <div className="pl-4">
                      {item.dropdown.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.name}
                          href={dropdownItem.href}
                          className="block py-2 text-gray-400 hover:text-red-500 text-sm"
                          onClick={() => setIsOpen(false)}
                        >
                          {dropdownItem.name}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="block py-2 text-gray-300 hover:text-red-500 text-sm"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            <button className="w-full mt-2 bg-red-600 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-red-700 transition">
              Join Now
            </button>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}

export default Navbar