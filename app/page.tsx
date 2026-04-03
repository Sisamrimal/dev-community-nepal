// app/page.tsx
'use client'

import Hero from './components/Hero'
import WhatWeDo from './components/WhatWEDo'
import Objectives from './components/Objectives'
import Projects from './components/Projects'
import Partners from './components/Partners'
import CTA from './components/CTA'
import OurNationalEvent from './components/OurNationalEvent'



export default function Home() {
  return (
    <>
      <Hero />
      <WhatWeDo />
      <Objectives />
      <Projects />
      <OurNationalEvent />
      <CTA />
      <Partners />
      
    </>
  )
}