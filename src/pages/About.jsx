import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const hobbies = [
    {
      icon: "🎮",
      title: "Gaming",
      description: "I enjoy playing video games in my free time, exploring different worlds and stories.",
    },
    {
      icon: "📚",
      title: "Reading",
      description: "I love reading books, especially tech blogs and programming resources to stay updated.",
    },
    {
      icon: "🏃",
      title: "Fitness",
      description: "Staying active through running and working out helps me maintain balance.",
    },
    {
      icon: "🎵",
      title: "Music",
      description: "Music is a big part of my life, whether listening or discovering new artists.",
    },
    {
      icon: "🍳",
      title: "Cooking",
      description: "I enjoy experimenting with new recipes and cooking for friends and family.",
    },
    {
      icon: "✈️",
      title: "Travel",
      description: "Exploring new places and experiencing different cultures inspires my creativity.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  return (
    <div
      ref={ref}
      className="relative w-full min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 py-20 px-6 lg:px-12 flex items-center overflow-hidden"
    >
      {/* Enhanced Background decoration with more depth */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-600/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-600/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-pink-600/20 rounded-full blur-3xl" />
      </div>

      {/* Animated Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" />
      
      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => {
          const randomX = Math.random() * 100;
          const randomY = Math.random() * 100;
          const randomDelay = Math.random() * 2;
          const randomDuration = 3 + Math.random() * 2;
          return (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white/20 rounded-full"
              initial={{
                x: `${randomX}%`,
                y: `${randomY}%`,
              }}
              animate={{
                y: [`${randomY}%`, `${(randomY + 30) % 100}%`],
                opacity: [0.2, 0.8, 0.2],
              }}
              transition={{
                duration: randomDuration,
                repeat: Infinity,
                delay: randomDelay,
                ease: "easeInOut",
              }}
            />
          );
        })}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          {/* Enhanced Title with better spacing */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative inline-block mb-4 pb-2"
          >
            {/* Decorative lines */}
            <div className="absolute -left-8 top-1/2 transform -translate-y-1/2 w-6 h-0.5 bg-gradient-to-r from-transparent via-purple-500 to-purple-500" />
            <div className="absolute -right-8 top-1/2 transform -translate-y-1/2 w-6 h-0.5 bg-gradient-to-l from-transparent via-blue-500 to-blue-500" />
            
            <motion.h2
              className="text-6xl lg:text-7xl font-extrabold bg-gradient-to-r from-blue-400 via-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient leading-[1.2] pb-2"
              style={{
                backgroundSize: '200% auto',
                animation: 'gradient 3s ease infinite',
                lineHeight: '1.2',
              }}
              initial={{ opacity: 0, y: -20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              When I'm Not Coding
            </motion.h2>
            
            {/* Subtle glow effect behind text */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 blur-3xl -z-10" style={{ marginBottom: '-20px' }} />
          </motion.div>

          {/* Description with proper spacing */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-0"
          >
            <p className="text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
              <span className="text-white font-medium">Beyond the terminal</span>, I'm passionate about various hobbies that keep me
              inspired and balanced. Here's what I love doing when I'm not building
              applications.
            </p>
          </motion.div>

          {/* Enhanced Education & Languages Info */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-16 mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.7 }}
          >
            <motion.div
              className="px-6 py-3 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-full border border-blue-500/30 hover:border-blue-400/50 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
            >
              <span className="text-gray-200 text-sm font-medium">
                🎓 <span className="text-white font-semibold">Seneca College</span> • Honours B.Tech Software Development • Class of 2027
              </span>
            </motion.div>
            <motion.div
              className="px-6 py-3 bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-full border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
            >
              <span className="text-gray-200 text-sm font-medium">
                🌍 <span className="text-white font-semibold">Vietnamese</span> (Fluent) • <span className="text-white font-semibold">English</span> (Proficient)
              </span>
            </motion.div>
            <motion.div
              className="px-6 py-3 bg-gradient-to-r from-pink-600/20 to-blue-600/20 backdrop-blur-sm rounded-full border border-pink-500/30 hover:border-pink-400/50 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
            >
              <span className="text-gray-200 text-sm font-medium">
                💼 <span className="text-white font-semibold">Core Skills:</span> Teamwork • Communication • Problem-Solving
              </span>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {hobbies.map((hobby, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative"
            >
              <motion.div
                className="relative h-full p-8 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-2xl border border-white/20 hover:border-white/40 transition-all duration-300 overflow-hidden"
                whileHover={{ y: -12, scale: 1.03, rotate: 1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Enhanced gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Shine effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </div>

                {/* Corner decoration */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-blue-400/50 rounded-tl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-purple-400/50 rounded-br-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative z-10">
                  <motion.div
                    className="text-6xl mb-5 inline-block"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    {hobby.icon}
                  </motion.div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                    {hobby.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                    {hobby.description}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

