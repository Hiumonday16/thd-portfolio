import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  const scrollToNext = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black">
      {/* Animated background gradient */}
      <div className="absolute inset-0 opacity-30">
        <div
          className="absolute w-96 h-96 rounded-full blur-3xl bg-gradient-to-r from-blue-600 to-purple-600"
          style={{
            left: `calc(50% + ${mousePosition.x}px)`,
            top: `calc(50% + ${mousePosition.y}px)`,
            transition: "all 0.3s ease-out",
          }}
        />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center h-full px-6 lg:px-12">
        {/* Left side - Image */}
        <motion.div
          className="w-full lg:w-1/2 flex items-center justify-center lg:justify-center mb-8 lg:mb-0 lg:pr-12"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.6, -0.05, 0.01, 0.99] }}
        >
          <motion.div
            className="relative"
            whileHover={{ scale: 1.03, rotate: 1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {/* Enhanced gradient glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-3xl blur-2xl opacity-60 animate-pulse" />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-600/50 to-transparent rounded-3xl" />
            
            {/* Decorative corner elements */}
            <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-blue-400/50 rounded-tl-lg" />
            <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-purple-400/50 rounded-br-lg" />
            
            <img
              src="/IMG_3057.JPG"
              alt="Trung Hieu Duong"
              className="relative w-72 h-[500px] lg:w-80 lg:h-[600px] object-cover rounded-3xl shadow-2xl border-2 border-white/30 backdrop-blur-sm"
              style={{
                objectPosition: 'center center',
              }}
            />
            
            {/* Shine overlay on hover */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-3xl opacity-0"
              whileHover={{ opacity: 1, x: ['-100%', '100%'] }}
              transition={{ duration: 0.8 }}
            />
          </motion.div>
        </motion.div>

        {/* Right side - Content */}
        <motion.div
          className="w-full lg:w-1/2 flex flex-col justify-center lg:pl-12 text-center lg:text-left"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants}>
            <motion.h1
              className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              Hello, I'm
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Trung Hieu Duong
              </span>
            </motion.h1>
          </motion.div>

          <motion.div variants={itemVariants}>
            <p className="text-xl lg:text-2xl text-gray-300 mb-4 max-w-2xl leading-relaxed">
              Motivated and detail-oriented{" "}
              <span className="text-white font-semibold">
                Honours Bachelor of Technology – Software Development
              </span>{" "}
              student at Seneca College with a passion for{" "}
              <span className="text-white font-semibold">web</span> and{" "}
              <span className="text-white font-semibold">cloud programming</span>
              .
            </p>
            <p className="text-lg lg:text-xl text-gray-400 mb-8 max-w-2xl leading-relaxed">
              Experienced in building full-stack applications through academic and
              personal projects, with hands-on skills in frontend, backend, and API
              integration. Seeking a{" "}
              <span className="text-gray-300 font-medium">
                Software Developer Intern
              </span>{" "}
              role to apply technical knowledge and grow in a collaborative
              environment.
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm text-gray-300 border border-white/20">
                🎓 Class of 2027
              </span>
              <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm text-gray-300 border border-white/20">
                🏫 Seneca College
              </span>
              <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm text-gray-300 border border-white/20">
                💻 Full-Stack Developer
              </span>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <motion.button
              onClick={() => {
                const projectsSection = document.getElementById("projects");
                if (projectsSection) {
                  projectsSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(99, 102, 241, 0.4)" }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Now
            </motion.button>
            <motion.button
              onClick={() => {
                const contactSection = document.getElementById("contact");
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        <motion.button
          onClick={scrollToNext}
          className="flex flex-col items-center text-gray-400 hover:text-white transition-colors"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <span className="text-sm mb-2">Scroll</span>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.button>
      </motion.div>
    </div>
  );
}
