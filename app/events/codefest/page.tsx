// app/events/codefest/page.tsx
'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function CodeFestPage() {
  return (
    <section className="pt-32 pb-20 min-h-screen bg-gradient-to-b from-black to-purple-900/20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-red-500 transition mb-8">
          ← Back to Home
        </Link>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">CodeFest 2026</h1>
        <p className="text-gray-300 text-lg">Coming soon! Stay tuned for updates.</p>
      </div>
    </section>
  )
}