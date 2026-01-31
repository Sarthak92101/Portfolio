import React from 'react'

const Teaching = () => {
  const videos = [
    {
      id: 'VIDEO_ID_1',
      title: 'Introduction to Web Development',
      description: 'Learn the basics of web development with HTML, CSS, and JavaScript.',
      thumbnail: 'https://img.youtube.com/vi/VIDEO_ID_1/maxresdefault.jpg'
    },
    {
      id: 'VIDEO_ID_2',
      title: 'React for Beginners',
      description: 'A comprehensive guide to getting started with React.js.',
      thumbnail: 'https://img.youtube.com/vi/VIDEO_ID_2/maxresdefault.jpg'
    },
    {
      id: 'VIDEO_ID_3',
      title: 'Advanced JavaScript Concepts',
      description: 'Deep dive into advanced JavaScript topics and best practices.',
      thumbnail: 'https://img.youtube.com/vi/VIDEO_ID_3/maxresdefault.jpg'
    },
    {
      id: 'VIDEO_ID_4',
      title: 'Building Modern Web Apps',
      description: 'Learn to build responsive and modern web applications.',
      thumbnail: 'https://img.youtube.com/vi/VIDEO_ID_4/maxresdefault.jpg'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#1565C0] to-[#0d47a1] text-white py-12 sm:py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 lg:mb-6">
            Teaching & Learning
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl mb-6 lg:mb-8 max-w-4xl mx-auto">
            Sharing knowledge through my YouTube channel where I teach maths, DSA and many more.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://youtube.com/@classesbysarthak"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-600 hover:bg-red-700 text-white px-6 sm:px-8 py-3 rounded-lg font-semibold transition-colors duration-300 flex items-center text-sm sm:text-base"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
              Subscribe to My Channel
            </a>
            <div className="text-center">
              <div className="text-xl sm:text-2xl font-bold">10K+</div>
              <div className="text-sm opacity-90">Subscribers</div>
            </div>
          </div>
        </div>
      </div>

      {/* About Channel Section */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
              About My Teaching Journey
            </h2>
            <div className="space-y-4 text-gray-600">
              <p className="text-lg leading-relaxed">
                As a Computer Science Engineering student, I believe in the power of sharing knowledge.
                Through my YouTube channel, I create educational content that makes complex programming
                concepts accessible to everyone.
              </p>
              <p className="text-lg leading-relaxed">
                From beginner-friendly tutorials to advanced programming techniques, my goal is to help
                aspiring developers build strong foundations and stay updated with the latest technologies.
              </p>
              <p className="text-lg leading-relaxed">
                Join thousands of learners who are building their careers in tech through my comprehensive
                video tutorials, coding challenges, and project-based learning content.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-black mb-6 text-center">Channel Stats</h3>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#1565C0] mb-2">150+</div>
                <div className="text-gray-600">Videos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#1565C0] mb-2">50K+</div>
                <div className="text-gray-600">Views</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#1565C0] mb-2">200+</div>
                <div className="text-gray-600">Subscribers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#1565C0] mb-2">2</div>
                <div className="text-gray-600">Years</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Videos Section */}
      <div className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-black text-center mb-12">
            Featured Videos
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {videos.map((video, index) => (
              <div key={index} className="bg-gray-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-video">
                  <iframe
                    src={`https://www.youtube.com/embed/iUnAYskjZKk`}
                    title={video.title}
                    className="w-full h-full"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-black mb-3">{video.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{video.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Topics Covered Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-black text-center mb-12">
            Topics I Cover
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-[#1565C0] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-black mb-3">Maths</h3>
              <p className="text-gray-600">Maths class 11th</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-[#1565C0] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-black mb-3">Programming Concepts</h3>
              <p className="text-gray-600">Data structures, algorithms, design patterns, and coding best practices</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-[#1565C0] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-black mb-3">Project Tutorials</h3>
              <p className="text-gray-600">Complete project builds, portfolio development, and real-world applications</p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-[#1565C0] text-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Learning?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Subscribe to my channel and join a community of passionate learners.
            New videos every week covering the latest in technology and programming.
          </p>
          <a
            href="https://youtube.com/@classesbysarthak"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-300 inline-flex items-center"
          >
            <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
            Subscribe Now
          </a>
        </div>
      </div>
    </div>
  )
}

export default Teaching