'use client'

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-50 rounded-full blur-3xl opacity-60"></div>
        <div className="absolute -bottom-32 left-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-60"></div>
      </div>

      <div className="max-w-5xl mx-auto px-6 lg:px-8 py-20 text-center">
        <div className="animate-fade-in">
          <h1 className="font-display font-bold text-6xl lg:text-7xl tracking-tight text-primary mb-6">
            Hi, I&apos;m{' '}
            <span className="bg-gradient-to-r from-secondary via-orange-600 to-red-600 bg-clip-text text-transparent">
              Alex Lai
            </span>
          </h1>

          <p className="text-xl lg:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Lead Software Engineer with deep expertise in{' '}
            <span className="font-semibold text-primary">AI-driven application development</span>
            {' '}and{' '}
            <span className="font-semibold text-primary">cloud-native engineering</span>
            . Building scalable distributed systems and AI-powered platforms.
          </p>

          {/* Stats */}
          <div className="flex justify-center gap-12 pt-12 border-t border-gray-200/50">
            <div>
              <p className="text-2xl font-bold text-primary">8+</p>
              <p className="text-gray-600 text-sm">Years Building Enterprise Solutions</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-primary">5+</p>
              <p className="text-gray-600 text-sm">Companies & Platforms</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-primary">100+</p>
              <p className="text-gray-600 text-sm">Million Records Processed</p>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg
            className="w-5 h-5 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  )
}
