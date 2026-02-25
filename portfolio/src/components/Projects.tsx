'use client'

export default function Projects() {
  const projects = [
    {
      title: 'AI-Powered Analytics Platform',
      description:
        'Enterprise platform for real-time data analytics and machine learning insights with custom visualization engine.',
      technologies: ['Python', 'FastAPI', 'React', 'PostgreSQL', 'TensorFlow'],
      highlights: [
        'Processes 10M+ events daily',
        'Real-time dashboards for 500+ users',
        'Custom ML models with 95% accuracy',
      ],
      link: '#',
    },
    {
      title: 'Microservices Architecture',
      description:
        'Redesigned monolithic application into scalable microservices handling 5x traffic increase.',
      technologies: ['Docker', 'Kubernetes', 'Node.js', 'Python', 'gRPC'],
      highlights: [
        '60% latency reduction',
        'Independent service scaling',
        'Zero-downtime deployments',
      ],
      link: '#',
    },
    {
      title: 'Real-time Collaboration Tool',
      description:
        'Built real-time collaboration platform with operational transformation for concurrent editing.',
      technologies: ['WebSockets', 'React', 'Node.js', 'Redis', 'MongoDB'],
      highlights: [
        'Sub-100ms sync latency',
        'Support for 10k+ concurrent users',
        'Conflict-free collaboration',
      ],
      link: '#',
    },
    {
      title: 'Machine Learning Pipeline',
      description:
        'Automated ML pipeline for feature engineering, model training, and deployment with monitoring.',
      technologies: ['Python', 'Apache Airflow', 'scikit-learn', 'Docker', 'MLflow'],
      highlights: [
        'Reduced training time by 70%',
        'Automated retraining based on metrics',
        'Model versioning and rollback',
      ],
      link: '#',
    },
  ]

  return (
    <section id="projects" className="py-20 lg:py-32 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="font-display font-bold text-4xl lg:text-5xl text-primary mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600">
            Showcasing some of my most impactful work
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-xl p-8 border border-gray-200 hover:border-secondary hover:shadow-lg transition-all duration-300 overflow-hidden"
            >
              {/* Background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>

              <h3 className="font-display font-bold text-2xl text-primary mb-3 group-hover:text-secondary transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-600 mb-5 leading-relaxed">{project.description}</p>

              {/* Highlights */}
              <ul className="space-y-2 mb-6">
                {project.highlights.map((highlight, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                    {highlight}
                  </li>
                ))}
              </ul>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-6 pb-6 border-t border-gray-100">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full bg-primary/5 text-primary text-xs font-semibold"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Link */}
              <a
                href={project.link}
                className="inline-flex items-center gap-2 text-secondary font-semibold hover:gap-3 transition-all duration-300"
              >
                <span>View project</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7m0 0l-7 7m7-7H5"
                  />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
