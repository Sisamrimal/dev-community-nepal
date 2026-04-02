// app/page.tsx
'use client'

import Hero from './components/Hero'
import About from './components/About'
import Objectives from './components/Objectives'
import Projects from './components/Projects'
import LearningHub from './components/LearningHub'
import CTA from './components/CTA'

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Objectives />
      <Projects />
      <LearningHub />
      <CTA />
    </>
  )
}