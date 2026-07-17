import React from 'react'
import { motion } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'

const PROJECTS = [
  {
    title: 'AI-powered phishing detection system using Cybersecurity',
    desc: 'Built an AI-powered phishing detection platform that achieves 93.89% accuracy in identifying malicious URLs in under 30 milliseconds, using a full-stack architecture with FastAPI, React, and a Chrome browser extension for real-time protection.',
    ss: '/phishing.png',
    tech: ['MERN', 'ML', 'Python', 'FastAPI', 'Scikit-learn', 'Pandas'],
    live: '#',
    code: 'https://github.com/Pranav-NJ/phishing-detector-ai'
  },
  {
    title: 'Sakhi Suraksha - AI-Powered Women Safety Application',
    desc: 'An AI-powered women safety app that listens for distress keywords in real-time and instantly alerts emergency contacts with live location via SMS, WhatsApp, and video streaming—using React, Node.js, and a 3-stage NLP pipeline.',
    ss: '/suraksha.png',
    tech: ['TypeScript', 'React', 'Node.js', 'Express.js', 'PostgreSQL', 'WebSocket', 'WebRTC', 'AssemblyAI', 'Llama 2'],
    live: '#',
    code: 'https://github.com/Pranav-NJ/suraksha'
  },
  {
    title: 'Finbank',
    desc: 'A full-stack mobile banking application built with React, Node.js, Express, and MongoDB, featuring JWT authentication and multilingual support.',
    ss: '/finbank.png',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Axios'],
    live: '#',
    code: 'https://github.com/Pranav-NJ/Finbank'
  },
  {
    title: 'Portfolio Website',
    desc: 'A modern and responsive portfolio built with React and Framer Motion, showcasing projects, skills, and achievements with smooth animations and interactive UI.',
    ss: '/portfolio.jpg',
    tech: ['React', 'Framer Motion', 'Tailwind CSS'],
    live: 'https://pranavnj-portfolio.vercel.app/',
    code: 'https://github.com/Pranav-NJ/portfolio'
  },
  {
    title:'Server-Monitor',
    desc: 'A database-centric server monitoring system where MySQL triggers, stored procedures, and rule-based logic drive real-time anomaly detection and automated SMS alerting for critical infrastructure events.',
    ss: '/server-monitor.png',
    tech: ['MySQL', 'Python (FastAPI)', 'React', 'WebSocket', 'Recharts', 'psutil'],
    live: '#',
    code: 'https://github.com/Pranav-NJ/server-monitor'
  }
]

export default function Projects() {
  return (
    <motion.section
      className="w-full px-4 md:px-[5%] lg:px-[8%] py-16"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="bg-white/[0.02] backdrop-blur-sm rounded-2xl p-6 md:p-10 border border-white/5">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Projects
        </motion.h2>
        <p className="text-gray-400 mb-10 text-base">
          A collection of my major works — blending research, AI innovation, and modern UI design.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-5">
          {PROJECTS.map((p, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.4, delay: idx * 0.12 }}
              whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(0,255,255,0.1)' }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-white/[0.04] to-black/40 border border-cyan-500/10 rounded-lg sm:rounded-xl p-3 sm:p-4 overflow-hidden hover:border-cyan-500/25 transition-all duration-300"
            >
              <motion.div whileHover={{ scale: 1.03 }} className="rounded-md sm:rounded-lg overflow-hidden">
                <img
                  src={p.ss}
                  alt={p.title}
                  className="w-full h-[140px] sm:h-[180px] object-cover rounded-md sm:rounded-lg"
                />
              </motion.div>

              <div className="mt-2.5 sm:mt-3">
                <h3 className="text-sm sm:text-base font-semibold text-cyan-400 mb-1 sm:mb-1.5 line-clamp-2">{p.title}</h3>
                <p className="text-xs sm:text-sm text-gray-400 mb-2 sm:mb-2 leading-relaxed line-clamp-3">{p.desc}</p>

                <div className="flex flex-wrap gap-1 md:gap-1.5 mb-2 md:mb-4">
                  {p.tech.slice(0, 3).map((t) => (
                    <span
                      key={t}
                      className="bg-cyan-500/5 border border-cyan-500/15 px-1.5 md:px-2.5 py-0.5 md:py-1 rounded text-[8px] md:text-[11px] text-indigo-300 font-medium"
                    >
                      {t}
                    </span>
                  ))}
                  <span className="hidden md:inline-flex flex-wrap gap-1.5">
                    {p.tech.slice(3).map((t) => (
                      <span
                        key={t}
                        className="bg-cyan-500/5 border border-cyan-500/15 px-2.5 py-1 rounded-md text-[11px] text-indigo-300 font-medium"
                      >
                        {t}
                      </span>
                    ))}
                  </span>
                </div>

                <div className="flex justify-end gap-2 md:gap-3">
                  <motion.a
                    href={p.code}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ scale: 1.08 }}
                    className="flex items-center gap-1.5 bg-white/5 text-cyan-400 px-3 py-1.5 rounded-lg text-xs font-medium border border-cyan-500/15 no-underline hover:bg-white/10 transition-colors"
                  >
                    <Github size={14} /> Code
                  </motion.a>
                  <motion.a
                    href={p.live}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ scale: 1.08 }}
                    className="flex items-center gap-1.5 bg-gradient-to-r from-cyan-500 to-cyan-700 text-white px-3 py-1.5 rounded-lg text-xs font-medium no-underline hover:from-cyan-400 hover:to-cyan-600 transition-all"
                  >
                    <ExternalLink size={14} /> Live
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
