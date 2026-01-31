import React from 'react'

const Hero2 = () => {
  return (
    <div className='min-h-screen w-full px-4 sm:px-6 lg:px-10 py-8 lg:py-16'>
      {/* Text Section */}
      <div className="min-h-[30vh] lg:min-h-[40vh] w-full flex flex-col justify-center items-center text-center text-black mb-8 lg:mb-16">
        <p className="text-sm sm:text-base lg:text-lg text-gray-600 mb-2">Developer</p>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight mb-4">
          Student, Learner and Builder
        </h1>
        <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-2xl">
          CSE Student at Maharaja Surajmal Institute of Technology
        </p>
      </div>

      {/* Cards Section */}
      <div className="min-h-[50vh] lg:min-h-[60vh] w-full grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
        {/* Main Card */}
        <div className="md:col-span-2 h-48 sm:h-56 lg:h-64 xl:h-80 bg-gradient-to-br from-[#1565C0] to-[#0d47a1] rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-center justify-center">
          <div className="text-center text-white p-6">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2">Full Stack Developer</h3>
            <p className="text-sm sm:text-base opacity-90">Building modern web applications</p>
          </div>
        </div>

        {/* Side Cards */}
        <div className="space-y-4 lg:space-y-6">
          <div className="h-32 sm:h-36 lg:h-40 xl:h-48 bg-gradient-to-br from-[#B3B4B3] to-[#9E9E9E] rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-center justify-center">
            <div className="text-center text-white p-4">
              <h4 className="text-sm sm:text-base lg:text-lg font-semibold mb-1">Problem Solver</h4>
              <p className="text-xs sm:text-sm opacity-90">DSA & Algorithms</p>
            </div>
          </div>

          <div className="h-32 sm:h-36 lg:h-40 xl:h-48 bg-gradient-to-br from-[#B3B4B3] to-[#9E9E9E] rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-center justify-center">
            <div className="text-center text-white p-4">
              <h4 className="text-sm sm:text-base lg:text-lg font-semibold mb-1">Content Creator</h4>
              <p className="text-xs sm:text-sm opacity-90">YouTube Educator</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero2
