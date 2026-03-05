import React from "react";

const projects = [
  {
    title: "Wanderlust",
    description:
      "Airbnb-style full stack web app where users can explore and list apartments.",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2",
    github: "https://github.com/Sarthak92101/Wandurlust",
    demo: "https://wanderlust-demo.com",
  },
  {
    title: "Gym Website",
    description:
      "Responsive fitness website showcasing gym services and membership plans.",
   image: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f",
    github: "https://github.com/Sarthak92101/GYM-WEBSITE",
    demo: "#",
  },
  {
    title: "K72.ca Clone",
    description:
      "Frontend clone built to practice modern UI and responsive layouts.",
    image: "https://images.unsplash.com/photo-1492724441997-5dc865305da7",
    github: "https://github.com/Sarthak92101/K72.ca",
    demo: "#",
  },
  {
    title: "Globe Trip Master",
    description:
      "Travel booking web app where users can explore destinations.",
   image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    github: "https://github.com/Sarthak92101/GlobalTripMaster",
    demo: "#",
  },
  {
    title: "Zomato Clone",
    description:
      "Food ordering interface inspired by Zomato with restaurant listings.",
     image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
    github: "https://github.com/Sarthak92101/ZOMATO",
    demo: "#",
  },
  {
    title: "AI Video Upload",
    description:
      "Backend project where users can upload and process videos using AI.",
   image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d",
    github: "https://github.com/Sarthak92101/VideoWithAI",
    demo: "#",
  },
  {
    title: "Music App",
    description:
      "Music listing application where users can browse and play songs.",
     image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4",
    github: "https://github.com/Sarthak92101/MUSIC",
    demo: "#",
  },
];

const Projects = () => {
  return (
    <div className="px-10 py-16">
      <h2 className="text-3xl font-bold mb-8 text-black">My Projects</h2>

      <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-thin text-black">
        {projects.map((project, index) => (
          <div
            key={index}
            className="min-w-[320px] bg-white shadow-md rounded-xl overflow-hidden border"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-40 object-cover"
            />

            <div className="p-4">
              <h3 className="text-lg font-semibold">{project.title}</h3>

              <p className="text-gray-600 text-sm mt-2">
                {project.description}
              </p>

              <div className="flex gap-3 mt-4">
                <a
                  href={project.github}
                  target="_blank"
                  className="bg-black text-white px-3 py-1 rounded-md text-sm"
                >
                  GitHub
                </a>

                <a
                  href={project.demo}
                  target="_blank"
                  className="bg-blue-500 text-white px-3 py-1 rounded-md text-sm"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;