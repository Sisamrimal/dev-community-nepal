// components/WhatWeDo.tsx
'use client'

import { motion } from 'framer-motion'
import { HoverEffect } from '../components/ui/card-hover-effect'
import SectionWrapper from './SectionWrapper'

const WhatWeDo = () => {
  const activities = [
    {
      title: 'WORKSHOPS',
      description: 'DEV Community Nepal organizes several personal and professional workshops throughout the calendar year. The workshops are intended to provide technical as well as market-related knowledge.',
      link: '#',
      tag: 'Skill Development'
    },
    {
      title: 'HACKATHON',
      description: '"DevFest" is the hackathon competition organized by DEV Community Nepal. In the past we have conducted couple of hackathons successfully. It is one of the grand events of the year.',
      link: '#',
      tag: 'Competition'
    },
    {
      title: 'SOCIAL IMPACT',
      description: 'DEV Community Nepal not only tries to uplift the students pursuing technology, but also strives to create an impact on the society through various awareness programs, as our responsibility towards our nation.',
      link: '#',
      tag: 'Community Service'
    },
    
  ]

  return (
    <SectionWrapper id="what-we-do">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
          WHAT WE DO ?
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-red-600 to-purple-600 mx-auto rounded-full" />
      </div>
      <HoverEffect items={activities} />
    </SectionWrapper>
  )
}

export default WhatWeDo