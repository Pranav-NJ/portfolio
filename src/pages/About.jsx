import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, School, University } from "lucide-react";

const AboutMe = () => {
  const education = [
    {
      icon: University,
      title: "B.Tech in Information Science and Engineering",
      institution: "SIT (Siddaganga Institute of Technology)",
      location: "Tumkur, Karnataka",
      details: "3rd Year (Pursuing) | GPA: 9.36",
      year: "2023 – 2027",
    },
    {
      icon: GraduationCap,
      title: "Higher Secondary Education (12th Grade)",
      institution: "Excellent PU College",
      location: "Mangluru, Karnataka",
      details: "Karnataka Board | Percentage: 94.5%",
      year: "Completed in 2023",
    },
    {
      icon: School,
      title: "Secondary Education (10th Grade)",
      institution: "JVS Primary and High School",
      location: "Chikmagalur, Karnataka",
      details: "Karnataka Board | Percentage: 95.84%",
      year: "Completed in 2021",
    },
  ];

  return (
    <motion.section
      className="w-full min-h-screen px-4 md:px-[8%] py-16 flex flex-col items-center justify-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        className="w-full max-w-4xl bg-white/[0.03] backdrop-blur-sm rounded-2xl p-6 md:p-10 border border-white/5"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        {/* Header */}
        <motion.h2
          className="text-2xl md:text-3xl font-bold mb-5"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            About Me
          </span>
        </motion.h2>

        {/* Description */}
        <motion.p
          className="text-gray-300 text-base md:text-lg leading-relaxed mb-4"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          Hi, I'm <strong className="text-white">Pranav N J</strong> — an aspiring{" "}
<strong className="text-white">Information Science Engineer</strong> and{" "}
<strong className="text-white">Full Stack Developer</strong> who loves
building intelligent, scalable, and impactful digital solutions. I'm deeply
fascinated by how  software, <strong className="text-gray-300">artificial intelligence</strong>, and{" "}
<strong className="text-gray-300">cybersecurity</strong> can solve real-world
challenges through innovation and data-driven engineering.
        </motion.p>

        <motion.p
          className="text-gray-400 text-base md:text-lg leading-relaxed mb-10"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          Beyond coding, I enjoy designing intuitive user experiences, exploring emerging
technologies, and continuously sharpening my problem-solving skills through
hands-on projects. My goal is to create{" "}
<strong className="text-gray-300">secure</strong>,{" "}
<strong className="text-gray-300">high-performance</strong> solutions that not
only solve meaningful problems—but also inspire innovation and make a lasting
impact.
        </motion.p>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <h3 className="text-xl md:text-2xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Education
          </h3>

          <div className="space-y-4">
            {education.map((edu, idx) => (
              <motion.div
                key={idx}
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 0 25px rgba(0, 180, 255, 0.15)",
                }}
                transition={{ duration: 0.3 }}
                className="bg-white/[0.03] rounded-xl p-5 md:p-6 border border-white/5 hover:border-cyan-500/20 flex items-start gap-4 md:gap-5 transition-all"
              >
                <div className="flex-shrink-0 text-cyan-400">
                  <edu.icon size={36} strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="text-cyan-400 font-semibold text-base md:text-lg mb-1">
                    {edu.title}
                  </h4>
                  <p className="text-gray-300 text-sm md:text-base">
                    <strong>{edu.institution}</strong> — {edu.location}
                  </p>
                  <p className="text-gray-500 text-sm mt-1">{edu.details}</p>
                  <p className="text-gray-500 text-sm">{edu.year}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default AboutMe;
