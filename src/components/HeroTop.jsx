import React from "react";

const HeroTop = () => {
  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/images/Resume.png';
    link.download = 'Sarthak_Sharma_CV.png';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleViewProjects = () => {
    const element = document.getElementById('projects-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen w-full flex flex-col-reverse lg:flex-row overflow-x-hidden">

      {/* Left Section */}
      <div className="w-full lg:w-1/2 flex items-center">
        <div className="px-4 sm:px-6 lg:px-10 py-8 lg:py-0 text-center lg:text-left">

          <h1 className="text-3xl sm:text-4xl lg:text-6xl xl:text-[70px] font-bold text-black tracking-tight leading-tight">
            Sarthak Sharma
          </h1>

          <p className="mt-4 max-w-xl text-sm sm:text-base lg:text-lg text-black mx-auto lg:mx-0 leading-relaxed">
            Currently pursuing B.Tech in Computer Science Engineering at MSIT
            and teaching through my YouTube channel.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start items-center mt-6 max-w-xs sm:max-w-sm lg:max-w-md mx-auto lg:mx-0">
            <button
              className="w-full sm:w-auto bg-[#1565C0] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#0d47a1] transition-colors duration-300 shadow-lg hover:shadow-xl"
              onClick={handleDownloadCV}
            >
              Download CV
            </button>

            <button
              className="w-full sm:w-auto bg-[#F2F2F2] text-black px-6 py-3 rounded-lg font-medium hover:bg-[#e0e0e0] transition-colors duration-300 shadow-lg hover:shadow-xl"
              onClick={handleViewProjects}
            >
              View Projects
            </button>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full lg:w-1/2 flex items-center justify-center py-6 lg:py-0 px-4 sm:px-6">
        <img
          src="/images/Snapchat.jpg"
          alt="Profile"
          className="w-64 sm:w-80 lg:w-[70%] xl:w-[80%] h-auto max-h-[400px] lg:max-h-[90%] object-cover rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300"
        />
      </div>
    </div>
  );
};

export default HeroTop;
