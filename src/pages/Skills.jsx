import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const SKILLS = [
  { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "C", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
  { name: "C++", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
  { name: "HTML", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "Typescript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Express.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
  { name: "Tailwind CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "Pandas", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" },
  { name: "NumPy", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" },
];

const ROWS = [
  [
    { title: "Programming Languages", items: ["Python", "C", "C++"] },
    { title: "Web Technologies", items: ["HTML", "CSS", "JavaScript", "Typescript", "React", "Node.js", "Express.js"] },
    { title: "Databases & Tools", items: ["MySQL", "PostgreSQL", "MongoDB", "Git"] },
    { title: "Frameworks & Libraries", items: ["TensorFlow", "Pandas", "NumPy", "Express.js"] },
  ],
  [
    {
      title: "Core Concepts",
      items: ["Data Structures & Algorithms", "OOPS", "DBMS"],
    },
    {
      title: "Soft Skills",
      items: ["Teamwork", "Problem Solving", "Creativity", "Communication"],
    },
  ],
];

export default function Skills() {
  const stageRef = useRef();

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;
    const circles = Array.from(stage.querySelectorAll(".skill-circle"));
    const rect = stage.getBoundingClientRect();
    const placed = [];

    const isOverlapping = (x, y, size) =>
      placed.some((p) => {
        const dx = p.x - x;
        const dy = p.y - y;
        return Math.sqrt(dx * dx + dy * dy) < p.size / 2 + size / 2 + 40;
      });

    circles.forEach((circle) => {
      const size = circle.offsetWidth;
      let x, y, tries = 0;
      do {
        x = Math.random() * (rect.width - size - 20);
        y = Math.random() * (rect.height - size - 20);
        tries++;
      } while (isOverlapping(x, y, size) && tries < 150);

      placed.push({ x, y, size });
      circle.style.left = `${x}px`;
      circle.style.top = `${y}px`;

      const dx = (Math.random() - 0.5) * 100;
      const dy = (Math.random() - 0.5) * 100;
      circle.animate(
        [{ transform: "translate(0, 0)" }, { transform: `translate(${dx}px, ${dy}px)` }],
        {
          duration: 5000 + Math.random() * 2000,
          direction: "alternate",
          iterations: Infinity,
          easing: "ease-in-out",
        }
      );
    });
  }, []);

  return (
    <section className="w-full px-4 md:px-[5%] lg:px-[8%] py-16" id="skills">
      {/* Header */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-3">
          <motion.span
            animate={{ backgroundPositionX: ['0%', '200%'] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage: "linear-gradient(90deg, #fff, var(--accent), #00b4ff, var(--accent), #fff)",
              backgroundSize: "200%",
            }}
          >
            My Skills
          </motion.span>
        </h2>
        <div className="w-24 h-0.5 bg-cyan-400 mx-auto mb-4"></div>
        <p className="text-gray-400 text-lg max-w-xl mx-auto">
          Technical expertise blended with creativity — explore my core competencies below.
        </p>
      </motion.div>

      {/* Floating Orbs */}
      <motion.div
        ref={stageRef}
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative w-full h-[450px] md:h-[550px] mx-auto mb-16 rounded-3xl overflow-hidden"
        style={{
          background: "radial-gradient(circle at 50% 50%, #0a0a0a, #101010)",
          boxShadow: "inset 0 0 60px rgba(0,255,255,0.07)",
        }}
      >
        {SKILLS.map((s, i) => (
          <motion.div
            key={s.name}
            className="skill-circle absolute w-24 h-24 md:w-28 md:h-28 rounded-full flex flex-col items-center justify-center cursor-pointer backdrop-blur-sm transition-all duration-400"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.08, duration: 0.6, ease: "easeOut" }}
            whileHover={{
              scale: 1.3,
              boxShadow: "0 0 35px 10px rgba(0,255,255,0.6)",
              background: "rgba(0,255,255,0.12)",
            }}
            style={{
              background: "rgba(0,255,255,0.06)",
              border: "1px solid rgba(0,255,255,0.25)",
            }}
          >
            <motion.img
              src={s.logo}
              alt={s.name}
              className="w-10 h-10 md:w-12 md:h-12 object-contain mb-1"
              style={{
                filter: "drop-shadow(0 0 8px rgba(0,255,255,0.4)) brightness(1.2)",
              }}
              whileHover={{
                filter: "drop-shadow(0 0 12px rgba(0,255,255,0.9)) brightness(1.6)",
                rotate: [0, 6, -6, 0],
                transition: { duration: 0.5 },
              }}
            />
            <span className="text-cyan-200/90 text-xs md:text-sm font-medium tracking-wide">
              {s.name}
            </span>
          </motion.div>
        ))}
      </motion.div>

      {/* Skills Table */}
      <div className="space-y-4">
        {ROWS.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className={`grid gap-3 sm:gap-4 ${row.length === 2 ? "grid-cols-1 sm:grid-cols-2" : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"}`}
          >
            {row.map((col, colIndex) => (
              <motion.div
                key={col.title}
                className="bg-white/[0.03] backdrop-blur-sm rounded-lg sm:rounded-xl p-3 sm:p-4 border border-white/5 hover:border-cyan-500/20 transition-all"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03, boxShadow: "0 0 20px rgba(0,180,255,0.15)" }}
                transition={{
                  duration: 0.6,
                  delay: (rowIndex + colIndex) * 0.1,
                }}
              >
                <h3 className="text-cyan-400 font-semibold text-sm sm:text-base mb-2">
                  {col.title}
                </h3>
                <ul className="space-y-1">
                  {col.items.map((item, i) => (
                    <motion.li
                      key={i}
                      className="text-gray-400 text-xs sm:text-sm cursor-default"
                      whileHover={{ x: 6, color: "#00ffc8" }}
                    >
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
