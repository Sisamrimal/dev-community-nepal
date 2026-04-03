// components/SectionWrapper.tsx
'use client'

import { motion } from 'framer-motion'

interface SectionWrapperProps {
  children: React.ReactNode
  className?: string
  id?: string
}

const SectionWrapper = ({ children, className = '', id }: SectionWrapperProps) => {
  return (
    <section 
      id={id}
      className={`py-20 relative overflow-hidden bg-section-gradient ${className}`}
    >
      {/* Subtle animated overlay */}
      <div className="absolute inset-0 bg-animated-gradient opacity-20" />
      
      {/* Red glow on left side */}
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-64 h-64 bg-red-600/10 rounded-full blur-[80px]" />
      
      {/* Purple glow on right side */}
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-64 h-64 bg-purple-600/10 rounded-full blur-[80px]" />
      
      {/* White glow dot */}
      <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-32 h-32 bg-white/5 rounded-full blur-[60px]" />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {children}
      </div>
    </section>
  )
}

export default SectionWrapper