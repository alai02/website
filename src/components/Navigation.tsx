'use client'

import Link from 'next/link'

export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="group flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-secondary to-orange-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">A</span>
            </div>
            <span className="font-display font-bold text-primary hidden sm:inline">
              Alex
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <NavLink href="#about">About</NavLink>
            <NavLink href="#experience">Experience</NavLink>
            <NavLink href="#projects">Projects</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </div>

          {/* CTA Button */}
          <button className="px-5 py-2 rounded-lg font-medium text-white bg-primary hover:bg-gray-900 transition-colors duration-300">
            Let&apos;s talk
          </button>
        </div>
      </div>
    </nav>
  )
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="text-gray-600 hover:text-primary transition-colors duration-300 font-medium text-sm"
    >
      {children}
    </a>
  )
}
