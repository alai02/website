'use client'

import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const coopExperiences = [
    { title: 'v-Eden', slug: 'veden' },
    { title: 'The Cooperators', slug: 'cooperators' },
    { title: 'IBM Watson Health', slug: 'ibm' },
    { title: 'Scotiabank (2019)', slug: 'scotia' },
    { title: 'Scotiabank (2019 - Term 2)', slug: 'scotia2' },
  ]

  return (
    <footer className="bg-primary text-white py-12 lg:py-16">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-5 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-secondary to-orange-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">A</span>
              </div>
              <span className="font-bold text-lg">Alex Lai</span>
            </div>
            <p className="text-gray-400 text-sm">
              Engineering the future with code
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-white transition-colors">
                  Experience
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-white transition-colors">
                  Projects
                </a>
              </li>
            </ul>
          </div>

          {/* Co-op Archive */}
          <div>
            <h3 className="font-semibold mb-4 text-xs uppercase tracking-wide">Co-op Archive</h3>
            <ul className="space-y-2 text-xs text-gray-400">
              {coopExperiences.map((coop) => (
                <li key={coop.slug}>
                  <Link
                    href={`/coop/${coop.slug}`}
                    className="hover:text-white transition-colors"
                  >
                    {coop.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-semibold mb-4">Social</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a
                  href="https://www.linkedin.com/in/alexlai02/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="mailto:alexlai7704@gmail.com" className="hover:text-white transition-colors">
                  Email
                </a>
              </li>
              <li>
                <span className="text-gray-500">Toronto, ON</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>© {currentYear} Alex Lai. All rights reserved.</p>
            <p>
              Designed &amp; built with Next.js and Tailwind CSS,
              <br className="md:hidden" />
              inspired by Stripe&apos;s design system.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
