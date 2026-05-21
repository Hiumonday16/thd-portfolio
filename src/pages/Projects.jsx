import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: "Personal Portfolio Website",
      tech: "React, React Router, Framer Motion, Tailwind CSS, JavaScript",
      description:
        "A modern, responsive portfolio website built with React that showcases my skills, projects, and professional background. The site features smooth scroll navigation, animated transitions using Framer Motion, and a sleek dark-themed UI designed with Tailwind CSS. It includes multiple sections: an interactive home page with hero content, an about section highlighting education and hobbies, a projects showcase, a skills section, and a contact form. The website demonstrates proficiency in modern frontend development practices, component-based architecture, and creating engaging user experiences with fluid animations and responsive design principles.",
      github: "https://github.com/Hiumonday16/portfolio",
      period: "2025 – Present",
    },
    {
      title: "Fragments Microservice – Cloud-Based Data Management API",
      tech: "Node.js, Express, AWS (DynamoDB, S3, ECS, Cognito), Docker, GitHub Actions",
      description:
        "Fragments is a production-ready RESTful API microservice built with Node.js and Express for managing text, image, and JSON data. The project leverages AWS cloud services including DynamoDB for data storage, S3 for file management, ECS for container orchestration, and Cognito for JWT-based authentication. I implemented a complete CI/CD pipeline using GitHub Actions with automated testing using Jest and Hurl, along with Docker deployment workflows. The application features production-grade capabilities such as structured logging, comprehensive security middleware, and graceful shutdown handling for reliable operation.",
      github: "https://github.com/Hiumonday16/fragments",
      period: "Sep 2025 – Dec 2025",
    },
    {
      title: "NomNomSnack – Snack E-Commerce Website (Team Project)",
      tech: "Backend Technologies",
      description:
        "NomNomSnack is a full-stack e-commerce web application developed as a team project for selling Vietnamese snacks. My primary contributions focused on the backend infrastructure, where I designed and implemented a robust user authentication system with secure registration, login functionality, password hashing, and session management. Additionally, I developed a role-based access control system that differentiates permissions between customer and admin users, ensuring secure access to appropriate features and data.",
      github: "https://github.com/Group-25-BTP405-NBB/backend",
      period: "March 2025 – April 2025",
    },
    {
      title: "Weather Web Application (Personal Project)",
      tech: "HTML, CSS, JavaScript",
      description:
        "This weather application is a responsive web app that provides real-time weather data by integrating with third-party weather APIs. Built using vanilla HTML, CSS, and JavaScript, the project showcases clean UI design and modern frontend development practices. I implemented asynchronous programming techniques for efficient API integration, ensuring smooth data fetching without blocking the user interface. Through thorough testing, I ensured cross-browser compatibility, making the application accessible across different web browsers and devices.",
      github: "https://github.com/Hiumonday16/A6_Weather-App",
      period: "March 2024 – May 2024",
    },
  ];

  return (
    <div
      ref={ref}
      className="relative w-full min-h-screen bg-gradient-to-br from-black via-gray-900 to-black py-20 px-6 lg:px-12 flex items-center"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl" />
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" />

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.2 }}
          >
            My Projects
          </motion.h2>
          <motion.p
            className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.4 }}
          >
            A collection of projects showcasing my skills in full-stack development,
            cloud services, and modern web technologies.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 max-w-4xl mx-auto gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
