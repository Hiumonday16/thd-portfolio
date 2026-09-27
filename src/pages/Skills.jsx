import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      category: "Languages",
      skills: ["Python", "C", "C++", "JavaScript (ES6+)", "HTML", "CSS", "SQL"],
      color: "from-blue-500 to-cyan-500",
    },
    {
      category: "Frontend",
      skills: ["React", "Tailwind CSS"],
      color: "from-purple-500 to-pink-500",
    },
    {
      category: "Backend",
      skills: ["Node.js", "Express.js", "REST APIs"],
      color: "from-green-500 to-emerald-500",
    },
    {
      category: "Databases",
      skills: ["MySQL", "MongoDB"],
      color: "from-orange-500 to-red-500",
    },
    {
      category: "DevOps & Cloud",
      skills: [
        "Git/GitHub",
        "GitHub Actions",
        "AWS (DynamoDB, S3, ECS, ECR, Cognito)",
        "Docker",
        "Docker Compose",
      ],
      color: "from-indigo-500 to-purple-500",
    },
    {
      category: "AI & Data",
      skills: [
        "NumPy",
        "Microsoft 365 Copilot",
        "Data Cleaning",
        "Data Validation",
        "Document Processing",
        "Basic Machine Learning Concepts",
      ],
      color: "from-teal-500 to-blue-500",
    },
    {
      category: "Tools",
      skills: [
        "Microsoft 365",
        "SharePoint",
        "OneNote",
        "Salesforce",
        "Microsoft Teams",
        "Excel",
      ],
      color: "from-yellow-500 to-orange-500",
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
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  return (
    <div
      ref={ref}
      className="relative w-full min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 py-20 px-6 lg:px-12 flex items-center"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-600/20 rounded-full blur-3xl" />
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
            Skills & Technologies
          </motion.h2>
          <motion.p
            className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.4 }}
          >
            Technologies and tools I use to bring ideas to life
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              variants={itemVariants}
              className="group"
            >
              <motion.div
                className="relative h-full p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-white/30 transition-all duration-300"
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Gradient overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${category.color} rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                />

                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-white mb-4">
                    {category.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skillIndex}
                        className="px-3 py-1.5 bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white rounded-lg text-sm font-medium transition-all duration-300 border border-white/10 hover:border-white/30 cursor-default"
                        whileHover={{ scale: 1.05 }}
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ delay: 0.1 * (categoryIndex + skillIndex) }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
