import React from 'react'
import { Link } from 'react-router-dom'

const Connect = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      icon: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z',
      url: 'https://github.com/Sarthak92101',
      description: 'Check out my projects and code',
      color: '#333333'
    },
    {
      name: 'LinkedIn',
      icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z',
      url: 'https://www.linkedin.com/in/sarthak-sharma-594483238/',
      description: 'Connect with me professionally',
      color: '#0A66C2'
    },
    {
      name: 'YouTube',
      icon: 'M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z',
      url: 'https://www.youtube.com/@classesbysarthak',
      description: 'Watch my educational content',
      color: '#FF0000'
    },
    {
      name: 'Instagram',
      icon: 'M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.117.63c-.79.297-1.427.795-2.03 1.399a5.89 5.89 0 0 0-1.399 2.03c-.297.79-.498 1.659-.558 3.937-.059 1.28-.074 1.688-.074 4.968s.015 3.688.072 4.968c.06 2.277.261 3.149.558 3.939.297.79.795 1.428 1.399 2.03.604.604 1.239 1.102 2.03 1.399.79.297 1.659.499 3.937.558 1.28.06 1.688.074 4.968.074s3.688-.015 4.968-.072c2.277-.06 3.149-.261 3.939-.558.79-.297 1.428-.795 2.03-1.399.604-.604 1.102-1.239 1.399-2.03.297-.79.499-1.659.558-3.937.06-1.28.074-1.688.074-4.968s-.015-3.688-.072-4.968c-.06-2.277-.261-3.149-.558-3.939-.297-.79-.795-1.428-1.399-2.03a5.986 5.986 0 0 0-2.03-1.399c-.79-.297-1.659-.499-3.937-.558C15.688.015 15.28 0 12 0zm0 2.16c3.203 0 3.585.009 4.849.070 1.171.054 1.805.244 2.227.408.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.354 1.057.408 2.227.061 1.264.07 1.646.07 4.849s-.009 3.585-.07 4.849c-.054 1.171-.244 1.805-.408 2.227-.217.562-.477.96-.896 1.382-.42.419-.819.679-1.381.896-.422.164-1.057.354-2.227.408-1.264.061-1.646.07-4.849.07s-3.585-.009-4.849-.07c-1.171-.054-1.805-.244-2.227-.408-.562-.217-.96-.477-1.382-.896-.419-.42-.679-.819-.896-1.381-.164-.422-.354-1.057-.408-2.227-.061-1.264-.07-1.646-.07-4.849s.009-3.585.07-4.849c.054-1.171.244-1.805.408-2.227.217-.562.477-.96.896-1.382.42-.419.819-.679 1.381-.896.422-.164 1.057-.354 2.227-.408 1.264-.061 1.646-.07 4.849-.07z M12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.322a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z',
      url: 'https://www.instagram.com/sarthak.hr07',
      description: 'Follow me on Instagram',
      color: '#E4405F'
    },
    {
      name: 'Twitter',
      icon: 'M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417a9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z',
      url: 'https://twitter.com',
      description: 'Follow me on Twitter',
      color: '#1DA1F2'
    },
    {
      name: 'LeetCode',
      icon: 'M13.483 0a1.374 1.374 0 00-.961.438L7.116 6.226a1.3 1.3 0 100 1.838l5.407 5.788c.41.44 1.142.436 1.543-.002l5.407-5.793c.411-.44.411-1.155 0-1.595L14.025.436a1.373 1.373 0 00-.542-.436zM10.89 7.75a.63.63 0 110 1.26.63.63 0 010-1.26z M9.54 9.91L2.423 3.201a1.374 1.374 0 00-1.961 1.904l7.117 6.75a1.3 1.3 0 101.839-.001l7.117-6.75c.44-.44.436-1.155-.002-1.543l-.434-.433a1.374 1.374 0 00-1.961-.002l-5.178 4.944z',
      url: 'https://leetcode.com/u/Sarthak25702/',
      description: 'Check my coding profile',
      color: '#FFA500'
    },
    {
      name: 'Email',
      icon: 'M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z',
      url: 'mailto:sarthaksharma25702@gmail.com',
      description: 'Send me an email',
      color: '#EA4335'
    },
    {
      name: 'Portfolio',
      icon: 'M3 13h2v8H3zm4-8h2v16H7zM21 4h-7v2h4.6L9.5 15.1 11 16.6 17 10.7V15h2V4z',
      url: '/',
      description: 'View my portfolio',
      color: '#1565C0'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black mb-4">
            Connect With Me
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Follow me on various platforms to stay updated with my latest content, projects, and insights about web development, DSA, and technology.
          </p>
        </div>

        {/* Social Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
            >
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-full">
                <div className="p-8 flex flex-col items-center justify-center text-center h-full">
                  {/* Icon */}
                  <div
                    className="mb-4 p-4 rounded-full transition-all duration-300 inline-flex items-center justify-center"
                    style={{ backgroundColor: social.color + '20' }}
                  >
                    <svg
                      className="w-8 h-8 transition-all duration-300"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      style={{ color: social.color }}
                    >
                      <path d={social.icon} />
                    </svg>
                  </div>

                  {/* Name */}
                  <h3 className="text-xl font-bold text-black mb-2">
                    {social.name}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                    {social.description}
                  </p>

                  {/* Button */}
                  <button
                    className="mt-auto px-6 py-2 rounded-lg font-semibold text-white transition-all duration-300 inline-block"
                    style={{
                      backgroundColor: social.color,
                      transform: 'scale(1)',
                    }}
                    onMouseEnter={(e) => (e.target.style.transform = 'scale(1.05)')}
                    onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
                  >
                    Visit
                  </button>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Alternative Contact Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-12 text-center">
          <h2 className="text-3xl font-bold text-black mb-4">
            Have a Question?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Feel free to reach out to me directly via email or any of my social media platforms. I'd love to hear from you!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:sarthaksharma25702@gmail.com"
              className="bg-[#1565C0] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#0d47a1] transition-colors duration-300 inline-block"
            >
              Contact Me
            </a>
            <Link
              to="/"
              className="bg-gray-300 text-black px-8 py-3 rounded-lg font-semibold hover:bg-gray-400 transition-colors duration-300 inline-block"
            >
              Back to Portfolio
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Connect
