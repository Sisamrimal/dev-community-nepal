// app/page.tsx
'use client'

import Hero from './components/Hero'
import About from './components/About'
import Objectives from './components/Objectives'
import Projects from './components/Projects'
import Partners from './components/Partners'
import CTA from './components/CTA'
import OurNationalEvent from './components/OurNationalEvent'
import Footer from './components/Footer'

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Objectives />
      <Projects />
      <OurNationalEvent />
      <CTA />
      <Partners />
      <Footer />
    </>
  )
}