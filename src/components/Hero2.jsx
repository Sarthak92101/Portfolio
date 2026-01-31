import React from 'react'

const Hero2 = () => {
  return (
    <div className='min-h-screen w-screen px-4 md:px-10'>
      <div className="min-h-[40vh] w-full flex flex-col justify-center items-center text-center md:text-left text-black mt-10 space-y-4">
        <p className="text-sm md:text-base">Developer</p>
        <h1 className="text-3xl md:text-5xl font-bold">Student,learner and builder</h1>
        <p className="text-sm md:text-base">CSE Student at Maharaja Surajmat institute of technology</p>

      </div>
 <div className="min-h-[60vh] w-full flex flex-col md:flex-row gap-6 justify-center items-center py-6">

        <div className="w-full md:w-[55%] h-[200px] md:h-full bg-[#B3B4B3] rounded-[7px]"></div>

        <div className="w-full md:w-[23%] h-[200px] md:h-full bg-[#B3B4B3] rounded-[7px]"></div>

        <div className="w-full md:w-[22%] h-[200px] md:h-full bg-[#B3B4B3] rounded-[7px]"></div>

      </div>
    </div>
  )
}

export default Hero2
