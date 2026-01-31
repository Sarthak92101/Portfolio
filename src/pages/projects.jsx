import React, { useState } from 'react'

const Projects = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution built with React and Node.js featuring user authentication, payment integration, and admin dashboard.",
      image: "/images/project1.jpg",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      link: "https://github.com/Sarthak92101/Ecommerce"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, team collaboration features, and progress tracking.",
      image: "/images/project2.jpg",
      technologies: ["React", "Firebase", "Tailwind CSS", "Socket.io"],
      link: "#"
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "A responsive weather dashboard that displays current weather conditions and forecasts for multiple locations.",
      image: "/images/project3.jpg",
      technologies: ["JavaScript", "OpenWeather API", "Chart.js", "CSS3"],
      link: "https://github.com/Sarthak92101/Weather-API-CALL"
    },
    {
      id: 4,
      title: "DSA",
      description: "A collection of data structures and algorithms implemented in Java.",
      image: "/images/project4.jpg",
      technologies: ["Java"],
      link: "https://github.com/Sarthak92101/ALPHA_DSA"
    }
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % projects.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length)
  }

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 lg:py-12 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-black mb-8 lg:mb-12">
          My Projects
        </h1>

        <div className="relative">
          {/* Main Slider Container */}
          <div className="overflow-hidden rounded-2xl shadow-2xl bg-white">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {projects.map((project) => (
                <div key={project.id} className="w-full flex-shrink-0">
                  <div className="flex flex-col lg:flex-row h-auto lg:h-[600px]">
                    {/* Image Section */}
                    <div className="w-full lg:w-1/2 relative h-48 sm:h-64 lg:h-full">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.src = "https://via.placeholder.com/600x400/1565C0/FFFFFF?text=Project+Image"
                        }}
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                    </div>

                    {/* Content Section */}
                    <div className="w-full lg:w-1/2 p-4 sm:p-6 lg:p-8 xl:p-12 flex flex-col justify-center">
                      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black mb-3 lg:mb-4">
                        {project.title}
                      </h2>
                      <p className="text-gray-600 text-sm sm:text-base lg:text-lg mb-4 lg:mb-8 leading-relaxed">
                        {project.description}
                      </p>

                      {/* Technologies */}
                      <div className="mb-6 lg:mb-8">
                        <h3 className="text-base lg:text-lg font-semibold text-black mb-3">Technologies Used:</h3>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, index) => (
                            <span
                              key={index}
                              className="bg-[#1565C0] text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* View Project Button */}
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#1565C0] text-white px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-semibold hover:bg-[#0d47a1] transition-colors duration-300 self-start text-sm sm:text-base"
                      >
                        View Project
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-90 hover:bg-opacity-100 text-black p-2 sm:p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-10"
          >
            <svg className="w-4 h-4 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-90 hover:bg-opacity-100 text-black p-2 sm:p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-10"
          >
            <svg className="w-4 h-4 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 lg:mt-8 space-x-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'bg-[#1565C0] scale-125'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
