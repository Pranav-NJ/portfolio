import React from "react";
import { motion } from "framer-motion";
import { Download, ExternalLink } from "lucide-react";

export default function Resume() {
  const links = [
    { name: "LeetCode", link: "https://leetcode.com/u/pranav-nj/" },
    { name: "GitHub", link: "https://github.com/Pranav-NJ" },
    { name: "LinkedIn", link: "https://www.linkedin.com/in/pranav-n-j-2928932a0/" },
  ];

  return (
    <motion.section
      className="w-full px-4 md:px-[8%] py-16"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        className="max-w-4xl mx-auto bg-white/[0.02] backdrop-blur-sm rounded-2xl p-6 md:p-10 border border-white/5"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {/* Header */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-2"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.span
            animate={{ backgroundPositionX: ['0%', '200%'] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage: "linear-gradient(90deg, #fff, var(--accent), #00b4ff, var(--accent), #fff)",
              backgroundSize: "200%",
            }}
          >
            Resume
          </motion.span>
        </motion.h2>
        <p className="text-gray-400 mb-8">A quick glance at my journey.</p>

        {/* Profile Header */}
        <motion.div
          className="bg-white/[0.03] rounded-xl p-5 md:p-6 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <h3 className="text-xl md:text-2xl font-semibold text-cyan-400 mb-2">PRANAV N J</h3>
          <p className="text-gray-300 text-sm md:text-base">
            3rd Year B.Tech — Information Science and Engineering | VTU
          </p>
          <p className="text-gray-400 text-sm mt-1">Tumkur, Karnataka</p>
          <p className="text-gray-400 text-sm">pranav984530@gmail.com | +91 9481578981</p>
        </motion.div>

        {/* Profile Links */}
        <motion.div
          className="flex justify-center gap-8 mb-10"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          {links.map((site) => (
            <motion.a
              key={site.name}
              href={site.link}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.1 }}
              className="text-gray-400 hover:text-cyan-400 transition-colors font-medium flex items-center gap-1"
            >
              {site.name}
              <ExternalLink size={14} />
            </motion.a>
          ))}
        </motion.div>

        {/* PDF Viewer */}
        <motion.div
          className="rounded-xl overflow-hidden border border-white/10 mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7 }}
        >
          <iframe
            src="/resume.pdf"
            title="Pranav N J Resume"
            className="w-full h-[500px] md:h-[650px] bg-black/50"
          />
        </motion.div>

        {/* Download Button */}
        <motion.a
          href="/resume.pdf"
          download
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-[0_0_20px_rgba(0,180,255,0.4)] transition-shadow"
        >
          <Download size={18} />
          Download Resume
        </motion.a>
      </motion.div>
    </motion.section>
  );
}
