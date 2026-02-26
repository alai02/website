'use client'

export default function Experience() {
  const experiences = [
    {
      title: 'Lead Software Engineer',
      company: 'Scotiabank — AI Engineering & Labs',
      period: 'Feb 2025 – Present',
      description:
        'Leading application development of an enterprise AI document-processing platform. Architecting backend services using Python (FastAPI) that integrate with large language models—Google Gemini and custom models—to extract structured insights and generate downstream reports.',
      highlights: [
        'Architecting multi-tenant AI document processing platform on GCP',
        'Integrating LLMs (Gemini, custom models) for document intelligence',
        'Optimizing inference workflows on GCP Pub/Sub, Kubernetes, Celery',
        'Collaborating with product, data science, and platform teams',
      ],
    },
    {
      title: 'Software Engineer',
      company: 'Scotiabank — Find.BNS Search Platform',
      period: 'Mar 2021 – Feb 2025',
      description:
        'Owned backend and frontend components of Find.BNS, a large-scale enterprise search solution built on Apache Solr. Designed and implemented modern React features, maintained Node.js service layer, and architected MongoDB analytics cluster.',
      highlights: [
        'Designed and deployed MongoDB cluster for search analytics',
        'Developed numerous API-driven crawling pipelines to ingest content into Solr',
        'Implemented modern React features for improved user experience',
        'Architected Node.js service layer for Solr integration',
        'Improved search ranking and relevance for thousands of internal users',
      ],
    },
    {
      title: 'Full Stack Developer (Co-op)',
      company: 'Scotiabank',
      period: 'May 2019 – Aug 2019',
      description:
        'Enhanced Scotiabank&apos;s internal search ecosystem by indexing the Fine Art Collection and developing React-based gallery interface. Implemented internationalization support across the Find.BNS application.',
      highlights: [
        'Indexed bank&apos;s Fine Art Collection using Apache Solr',
        'Developed React-based gallery interface for employee discovery',
        'Implemented internationalization (i18n) support for multi-region deployment',
      ],
    },
    {
      title: 'Web Analytics Developer (Co-op)',
      company: 'Scotiabank',
      period: 'Jan 2019 – Apr 2019',
      description:
        'Implemented analytics tracking solutions for secure online banking properties using JavaScript and Adobe Dynamic Tag Management. Designed and built primary reporting dashboard for Mobile Banking App using Adobe Analytics.',
      highlights: [
        'Implemented analytics tracking across high-traffic customer workflows',
        'Built executive-level reporting dashboard for Mobile Banking App',
        'Provided key decision-support insights for Senior VP leadership',
        'Guided product roadmap and mobile experience optimization',
      ],
    },
    {
      title: 'Software Developer (Co-op)',
      company: 'Merge Healthcare (IBM Watson Health)',
      period: 'May 2018 – Dec 2018',
      description:
        'Developed automation tooling in C# to streamline release documentation. Designed and executed automated tests using Selenium and TestExecute to ensure product reliability for iConnect Access 7.0.',
      highlights: [
        'Built C# utilities integrating JIRA and QAComplete APIs',
        'Designed automated UI and integration tests using Selenium',
        'Supported comprehensive manual testing across multiple disciplines',
      ],
    },
    {
      title: 'Software Developer (Co-op)',
      company: 'The Co-operators',
      period: 'Sep 2017 – Dec 2017',
      description:
        'Contributed to Master Data Management (MDM) database migration initiative supporting legacy insurance web applications. Developed migration scripts and validated data consistency across systems.',
      highlights: [
        'Analyzed existing data models and mapped legacy schemas',
        'Developed migration scripts ensuring consistency and minimal disruption',
        'Validated migrated data with business stakeholders',
        'Modernized application logic toward more maintainable architecture',
      ],
    },
    {
      title: 'Full Stack Developer (Co-op)',
      company: 'Quest Mindshare',
      period: 'May 2017 – Aug 2017',
      description:
        'Developed responsive front-end components using Angular and TypeScript. Built REST APIs in Node.js backed by MongoDB and designed Elasticsearch aggregation queries for advanced data filtering.',
      highlights: [
        'Developed responsive front-end components with Angular and TypeScript',
        'Built REST APIs in Node.js backed by MongoDB',
        'Designed Elasticsearch aggregation queries for advanced filtering',
        'Implemented lazy loading patterns to reduce initial load times',
      ],
    },
  ]

  return (
    <section id="experience" className="py-20 lg:py-32 bg-white">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="font-display font-bold text-4xl lg:text-5xl text-primary mb-4">
            Experience
          </h2>
          <p className="text-xl text-gray-600">
            A track record of delivering impact across multiple organizations
          </p>
        </div>

        {/* Timeline */}
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative pl-8 pb-8 border-l-2 border-gray-200 hover:border-secondary transition-colors duration-300"
            >
              {/* Timeline dot */}
              <div className="absolute -left-4 top-0 w-6 h-6 rounded-full bg-white border-2 border-gray-200 hover:border-secondary transition-colors duration-300"></div>

              <div className="group">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-2">
                  <h3 className="font-display font-bold text-xl text-primary group-hover:text-secondary transition-colors">
                    {exp.title}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1 lg:mt-0">{exp.period}</p>
                </div>
                <p className="text-secondary font-semibold mb-3">{exp.company}</p>
                <p className="text-gray-600 mb-4 leading-relaxed">{exp.description}</p>

                {/* Highlights */}
                <ul className="space-y-2">
                  {exp.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-600">
                      <span className="text-secondary font-bold mt-1">✓</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Download CV Button */}
        <div className="mt-12 text-center">
          <a
            href="https://github.com/alai02"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-primary text-primary font-semibold hover:bg-primary/5 transition-colors duration-300"
          >
            <span>View on GitHub</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
