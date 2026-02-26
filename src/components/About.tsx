'use client'

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-32 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left content */}
          <div>
            <h2 className="font-display font-bold text-4xl lg:text-5xl text-primary mb-6">
              About me
            </h2>
            <p className="text-lg text-gray-600 mb-4 leading-relaxed">
              I&apos;m a Dev specializing in AI-driven application development and distributed systems architecture. With over 8 years of experience spanning enterprise search platforms, AI/ML infrastructure, and cloud-native solutions, I&apos;ve designed and built systems that process millions of records daily for Fortune 500 companies.
            </p>
            <p className="text-lg text-gray-600 mb-4 leading-relaxed">
              Currently at Scotiabank, I lead the development of enterprise AI document-processing platforms leveraging large language models (Gemini, custom models) and modern cloud infrastructure. My expertise spans Python, FastAPI, GCP, Kubernetes, and building production-grade, multi-tenant systems at scale.
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              I&apos;m passionate about translating complex business challenges into elegant, scalable software solutions while fostering collaborative, Agile development environments.
            </p>

            {/* Skills */}
            <div>
              <h3 className="font-semibold text-primary mb-4">Core Skills</h3>
              <div className="flex flex-wrap gap-3">
                {[
                  'Python',
                  'FastAPI',
                  'LLMs & AI/ML',
                  'GCP',
                  'Kubernetes',
                  'React',
                  'Node.js',
                  'PostgreSQL',
                  'MongoDB',
                  'Apache Solr',
                  'Microservices',
                  'Cloud-Native',
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-full bg-white border border-gray-300 text-sm font-medium text-primary hover:border-secondary hover:text-secondary transition-colors duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right side - stats card */}
          <div className="lg:pt-12">
            <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-sm border border-gray-100">
              <div className="space-y-8">
                <div>
                  <p className="text-4xl font-bold bg-gradient-to-r from-secondary to-orange-600 bg-clip-text text-transparent mb-2">
                    8+
                  </p>
                  <p className="text-gray-600 text-lg">Years in enterprise software</p>
                </div>
                <div>
                  <p className="text-4xl font-bold bg-gradient-to-r from-secondary to-orange-600 bg-clip-text text-transparent mb-2">
                    Scotiabank
                  </p>
                  <p className="text-gray-600 text-lg">Lead SWE on AI/ML Platform</p>
                </div>
                <div>
                  <p className="text-4xl font-bold bg-gradient-to-r from-secondary to-orange-600 bg-clip-text text-transparent mb-2">
                    Guelph
                  </p>
                  <p className="text-gray-600 text-lg">B.Comp with Honors (2020)</p>
                </div>
                <div className="pt-4 border-t border-gray-200">
                  <p className="text-sm text-gray-500 mb-4">Core Technologies:</p>
                  <div className="flex flex-wrap gap-2">
                    {['Python', 'FastAPI', 'GCP', 'Kubernetes', 'React', 'PostgreSQL'].map(
                      (tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded-md bg-primary/5 text-primary text-xs font-medium"
                        >
                          {tech}
                        </span>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
