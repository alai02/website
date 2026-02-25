'use client'

import { useState } from 'react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { coopExperiences } from '@/data/coop-experiences'

interface CoopPageProps {
  id: string
}

export default function CoopPage({ id }: CoopPageProps) {
  const experience = coopExperiences[id]
  const [activeSection, setActiveSection] = useState('introduction')

  if (!experience) {
    return (
      <div className="min-h-screen bg-white">
        <Navigation />
        <div className="pt-32 text-center">
          <h1 className="text-3xl font-bold text-gray-900">Experience not found</h1>
        </div>
        <Footer />
      </div>
    )
  }

  const sections = Object.entries(experience.sections)
  const currentSection = experience.sections[activeSection]

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <main className="pt-16">
        {/* Hero section with company accent color */}
        <div className={`bg-gradient-to-r ${experience.accentColorClass} py-16 text-white`}>
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h1 className="font-display font-bold text-5xl lg:text-6xl mb-4">
              {experience.company}
            </h1>
            <p className="text-xl mb-2">{experience.role}</p>
            <p className="text-white/80">{experience.period}</p>
          </div>
        </div>

        {/* Content section */}
        <div className="py-16 lg:py-20">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            {/* Navigation tabs */}
            <div className="mb-12 overflow-x-auto">
              <div className="flex gap-2 min-w-max lg:flex-wrap">
                {sections.map(([key, section]) => (
                  <button
                    key={key}
                    onClick={() => setActiveSection(key)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 whitespace-nowrap ${
                      activeSection === key
                        ? `bg-gradient-to-r ${experience.accentColorClass} text-white`
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {section.title}
                  </button>
                ))}
              </div>
            </div>

            {/* Content */}
            <div className="prose prose-lg max-w-none">
              <h2 className={`text-3xl font-bold mb-6 bg-gradient-to-r ${experience.accentColorClass} bg-clip-text text-transparent`}>
                {currentSection.title}
              </h2>
              <div className="text-gray-700 leading-relaxed whitespace-pre-wrap">
                {currentSection.content}
              </div>
            </div>

            {/* Navigation between experiences */}
            <div className="mt-16 pt-8 border-t border-gray-200">
              <div className="flex justify-between items-center">
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  ← Back to all experiences
                </a>
                <a
                  href="/#experience"
                  className="px-6 py-3 rounded-lg bg-primary text-white font-semibold hover:bg-gray-900 transition-colors"
                >
                  View main portfolio
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
