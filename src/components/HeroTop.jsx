import React from "react";
import { useNavigate } from "react-router-dom";

const HeroTop = () => {
  const navigate = useNavigate();

  const handleDownloadCV = () => {
    // Create a temporary anchor element
    const link = document.createElement('a');
    link.href = '/images/Resume.png'; // Path to your CV file in public folder
    link.download = 'Sarthak_Sharma_CV.png'; // Name for the downloaded file
    link.target = '_blank'; // Open in new tab as fallback

    // Append to body, click, and remove
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen w-full flex flex-col-reverse md:flex-row overflow-x-hidden mt-0">

      {/* Left Section */}
      <div className="w-full md:w-1/2 flex items-center">
        <div className="px-6 md:px-10 py-8 md:py-0 text-center md:text-left">

          <h1 className="text-4xl md:text-[70px] font-bold text-black tracking-tight">
            Sarthak Sharma
          </h1>

          <p className="mt-4 max-w-xl text-sm md:text-base text-black mx-auto md:mx-0">
            Currently pursuing B.Tech in Computer Science Engineering at MSIT
            and teaching through my YouTube channel.
          </p>

          {/* Buttons */}
          <div className="h-[50px] w-full md:w-[300px] flex justify-center md:justify-start items-center space-x-4 mt-6">
            <button
              className="bg-[#1565C0] h-[80%] w-[120px] rounded-[7px] cursor-pointer hover:bg-[#0d47a1] transition-colors duration-300"
              onClick={handleDownloadCV}
            >
              Download CV
            </button>

            <button
              className="bg-[#F2F2F2] h-[80%] w-[120px] text-black rounded-[7px] cursor-pointer hover:bg-[#e0e0e0] transition-colors duration-300"
              onClick={() => navigate("/projects")}
            >
              View Projects
            </button>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2 flex items-center justify-center py-6 md:py-0">
        <img
          src="/images/Snapchat.jpg"
          alt="Profile"
          className="w-[80%] md:w-[70%] h-[300px] md:h-[90%] object-cover rounded-2xl shadow-xl"
        />
      </div>
    </div>
  );
};

export default HeroTop;
