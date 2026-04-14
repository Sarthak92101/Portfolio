import React from "react";
import { Link } from "react-router-dom";

const HeroTop = () => {
  const socialLinks = [
    { name: 'GitHub', icon: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z', url: 'https://github.com/Sarthak92101', color: '#333333' },
    { name: 'LinkedIn', icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z', url: 'https://www.linkedin.com/in/sarthak-sharma-594483238/', color: '#0A66C2' },
    { name: 'YouTube', icon: 'M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z', url: 'https://www.youtube.com/@classesbysarthak', color: '#FF0000' },
    { name: 'Instagram', icon: 'M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.117.63c-.79.297-1.427.795-2.03 1.399a5.89 5.89 0 0 0-1.399 2.03c-.297.79-.498 1.659-.558 3.937-.059 1.28-.074 1.688-.074 4.968s.015 3.688.072 4.968c.06 2.277.261 3.149.558 3.939.297.79.795 1.428 1.399 2.03.604.604 1.239 1.102 2.03 1.399.79.297 1.659.499 3.937.558 1.28.06 1.688.074 4.968.074s3.688-.015 4.968-.072c2.277-.06 3.149-.261 3.939-.558.79-.297 1.428-.795 2.03-1.399.604-.604 1.102-1.239 1.399-2.03.297-.79.499-1.659.558-3.937.06-1.28.074-1.688.074-4.968s-.015-3.688-.072-4.968c-.06-2.277-.261-3.149-.558-3.939-.297-.79-.795-1.428-1.399-2.03a5.986 5.986 0 0 0-2.03-1.399c-.79-.297-1.659-.499-3.937-.558C15.688.015 15.28 0 12 0zm0 2.16c3.203 0 3.585.009 4.849.070 1.171.054 1.805.244 2.227.408.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.354 1.057.408 2.227.061 1.264.07 1.646.07 4.849s-.009 3.585-.07 4.849c-.054 1.171-.244 1.805-.408 2.227-.217.562-.477.96-.896 1.382-.42.419-.819.679-1.381.896-.422.164-1.057.354-2.227.408-1.264.061-1.646.07-4.849.07s-3.585-.009-4.849-.07c-1.171-.054-1.805-.244-2.227-.408-.562-.217-.96-.477-1.382-.896-.419-.42-.679-.819-.896-1.381-.164-.422-.354-1.057-.408-2.227-.061-1.264-.07-1.646-.07-4.849s.009-3.585.07-4.849c.054-1.171.244-1.805.408-2.227.217-.562.477-.96.896-1.382.42-.419.819-.679 1.381-.896.422-.164 1.057-.354 2.227-.408 1.264-.061 1.646-.07 4.849-.07z M12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.322a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z', url: 'https://www.instagram.com/sarthak.hr07', color: '#E4405F' },
    { name: 'Twitter', icon: 'M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417a9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z', url: 'https://twitter.com', color: '#1DA1F2' },
    { name: 'LeetCode', icon: 'M13.483 0a1.374 1.374 0 00-.961.438L7.116 6.226a1.3 1.3 0 100 1.838l5.407 5.788c.41.44 1.142.436 1.543-.002l5.407-5.793c.411-.44.411-1.155 0-1.595L14.025.436a1.373 1.373 0 00-.542-.436zM10.89 7.75a.63.63 0 110 1.26.63.63 0 010-1.26z M9.54 9.91L2.423 3.201a1.374 1.374 0 00-1.961 1.904l7.117 6.75a1.3 1.3 0 101.839-.001l7.117-6.75c.44-.44.436-1.155-.002-1.543l-.434-.433a1.374 1.374 0 00-1.961-.002l-5.178 4.944z', url: 'https://leetcode.com/u/Sarthak25702/', color: '#FFA500' },
  ];

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

          {/* Social Media Buttons */}
          <div className="flex gap-3 justify-center lg:justify-start items-center mt-8 flex-wrap">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                title={social.name}
                className="group relative inline-flex items-center justify-center"
              >
                <div
                  className="w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg"
                  style={{ backgroundColor: social.color + '20' }}
                >
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6 transition-all duration-300"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    style={{ color: social.color }}
                  >
                    <path d={social.icon} />
                  </svg>
                </div>
              </a>
            ))}
            <Link
              to="/connect"
              className="ml-2 text-blue-600 hover:text-blue-800 font-semibold text-sm underline transition-colors duration-300"
            >
              More
            </Link>
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
