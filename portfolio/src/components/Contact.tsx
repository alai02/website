export default function Contact() {
  return (
    <section id="contact" className="py-20 lg:py-32 bg-white">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-display font-bold text-4xl lg:text-5xl text-primary mb-4">
            Get in Touch
          </h2>
          <p className="text-xl text-gray-600">
            Let&apos;s connect and explore opportunities together
          </p>
        </div>

        {/* Contact links */}
        <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {[
            {
              icon: '✉️',
              label: 'Email',
              value: 'alexlai7704@gmail.com',
              link: 'mailto:alexlai7704@gmail.com',
            },
            {
              icon: '🔗',
              label: 'LinkedIn',
              value: 'linkedin.com/in/alexlai02',
              link: 'https://www.linkedin.com/in/alexlai02/',
            },
          ].map((item) => (
            <a
              key={item.label}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-8 rounded-xl border border-gray-200 hover:border-secondary hover:bg-gray-50 transition-all duration-300 text-center"
            >
              <div className="text-5xl mb-4">{item.icon}</div>
              <p className="text-sm text-gray-500 mb-2">{item.label}</p>
              <p className="font-semibold text-primary group-hover:text-secondary transition-colors text-lg">
                {item.value}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
