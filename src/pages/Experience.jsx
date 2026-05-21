import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences = [
    {
      type: "work",
      role: "Information Technology Systems Technologist (Co-op)",
      company: "Seneca Polytechnic ITS Student Service Desk",
      location: "Toronto, ON",
      period: "April 2026 – August 2026",
      icon: "💼",
      highlights: [
        "Provided technical support to students through walk-ins, Omni Chat, and the Salesforce ticket system across multiple campuses",
        "Assisted users with account access, password resets, software issues, printing services, and general troubleshooting",
        "Supported Computing Commons operations and laptop loan services while following ITS procedures and service standards",
        "Communicated technical information clearly to students with different levels of technical knowledge",
        "Collaborated with team members and staff to resolve technical issues efficiently in a fast-paced support environment"
      ]
    },
    {
      type: "work",
      role: "Kitchen Helper",
      company: "Mi BOWL MEAL",
      location: "Toronto, ON",
      period: "November 2025 – Present",
      icon: "🍽️",
      highlights: [
        "Prepared and portioned food items accurately into containers while maintaining cleanliness and food safety standards",
        "Assisted with printing, verifying, and affixing labels to food containers and delivery bags to ensure order accuracy",
        "Worked efficiently in a fast-paced team environment, following procedures and meeting time-sensitive deadlines",
        "Demonstrated attention to detail and reliability during high-volume service periods"
      ]
    },
    {
      type: "extracurricular",
      role: "Group Presentation: Unreal Engine Overview",
      company: "Course Project",
      location: "Seneca Polytechnic",
      period: "September 2024 – October 2024",
      icon: "🎮",
      highlights: [
        "Researched and presented core Unreal Engine features and real-world applications in game development and simulation",
        "Collaborated with team members to prepare technical explanations and demonstrations",
        "Responded to questions during presentation, explaining software concepts clearly to a non-expert audience"
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  return (
    <div
      ref={ref}
      className="relative w-full min-h-screen bg-gradient-to-br from-black via-gray-900 to-black py-20 px-6 lg:px-12 flex items-center"
      id="experience"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" />

      <div className="relative z-10 max-w-5xl mx-auto w-full">
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
            My Experience
          </motion.h2>
          <motion.p
            className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-8"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.4 }}
          >
            A timeline of my professional work experience, co-op terms, and extra-curricular academic achievements.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ delay: 0.5 }}
          >
            <a
              href="/resume.pdf"
              download="Trung_Hieu_Duong_resume.pdf"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download Full Resume
            </a>
          </motion.div>
        </motion.div>

        {/* Timeline wrapper */}
        <motion.div
          className="relative border-l-2 border-white/10 max-w-3xl mx-auto pl-8 sm:pl-10 space-y-12"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative group"
            >
              {/* Timeline indicator node */}
              <div className="absolute -left-[53px] sm:-left-[57px] top-1.5 flex items-center justify-center w-10 h-10 rounded-full bg-gray-950 border border-white/20 group-hover:border-blue-500/50 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300 shadow-md">
                <span className="text-lg group-hover:scale-110 transition-transform duration-300">
                  {exp.icon}
                </span>
              </div>

              {/* Card Container */}
              <motion.div
                className="relative p-6 sm:p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-white/30 transition-all duration-300"
                whileHover={{ y: -4, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Hover shine gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-purple-600/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative z-10">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                        {exp.role}
                      </h3>
                      <span className="text-md font-medium text-gray-300 block sm:inline">
                        {exp.company}
                      </span>
                      <span className="hidden sm:inline text-gray-500"> • </span>
                      <span className="text-sm text-gray-400 font-light block sm:inline">
                        {exp.location}
                      </span>
                    </div>
                    <div>
                      <span className="inline-block px-3 py-1 text-xs font-semibold bg-gradient-to-r from-blue-600/20 to-purple-600/20 text-blue-400 border border-blue-500/20 rounded-full">
                        {exp.period}
                      </span>
                    </div>
                  </div>

                  <ul className="list-disc list-outside ml-4 space-y-2 text-gray-300 font-light leading-relaxed">
                    {exp.highlights.map((highlight, hIndex) => (
                      <li key={hIndex} className="hover:text-white transition-colors duration-200">
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
