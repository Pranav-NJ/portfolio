import React from 'react'
import { motion } from 'framer-motion'

import photo from '../../public/photo.jpg'
import githubLogo from '../../public/github.png'
import linkedinLogo from '../../public/linkedin.png'
import gmailLogo from '../../public/gmail.png'
import whatsappLogo from '../../public/whatsapp.png'
import instagramLogo from '../../public/insta.png'

export default function Home() {
  const professions = [
    'Full Stack Developer',
    'AI Enthusiast',
    'Machine Learning ',
  ]

  const quickLinks = [
    { img: githubLogo, title: 'GitHub', link: 'https://github.com/Pranav-NJ' },
    { img: linkedinLogo, title: 'LinkedIn', link: 'https://www.linkedin.com/in/pranav-n-j-2928932a0/' },
    { img: gmailLogo, title: 'Email', link: 'mailto:pranav984530@gmail.com' },
    { img: whatsappLogo, title: 'WhatsApp', link: 'https://wa.me/+919481578981' },
    { img: instagramLogo, title: 'Instagram', link: 'https://www.instagram.com/pranav_nj_/' },
  ]

  return (
    <section
      className="min-h-screen w-full flex flex-col justify-center items-center gap-12 px-6 py-12 md:px-[5%] lg:px-[8%]"
      style={{ background: 'radial-gradient(circle at 30% 30%, rgba(0,255,200,0.06), transparent 70%), radial-gradient(circle at 80% 70%, rgba(124,58,237,0.05), transparent 60%)' }}
    >
      <style>
        {`
          @keyframes typing { from { width: 0 } to { width: 100% } }
          @keyframes blink { 50% { border-color: transparent } }
          .typing-effect {
            display: inline-block; overflow: hidden; white-space: nowrap;
            border-right: .15em solid var(--accent); width: 0;
            animation: typing 3.5s steps(40, end) forwards, blink .8s infinite;
          }
        `}
      </style>

      <div className="flex flex-col md:flex-row items-center justify-evenly w-full gap-10">
        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="relative shrink-0 flex justify-center items-center"
        >
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
            className="absolute w-[280px] h-[280px] md:w-[330px] md:h-[330px] rounded-full border-2 border-dashed opacity-20"
            style={{ borderColor: 'var(--accent)' }}
          />
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="relative w-[240px] h-[240px] md:w-[300px] md:h-[300px] rounded-full overflow-hidden z-10 border-[3px] shadow-[0_0_50px_rgba(0,255,200,0.2)]"
            style={{ borderColor: 'var(--accent)' }}
          >
            <motion.img
              src={photo}
              alt="Pranav N J"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
              className="w-full h-full object-cover rounded-full"
            />
          </motion.div>
        </motion.div>

        {/* Info */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex-1 min-w-0 max-w-2xl flex flex-col justify-center text-center md:text-left"
        >
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-2 text-white">
            I'm{' '}
            <motion.span
              animate={{ backgroundPositionX: ['0%', '200%'] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: 'linear-gradient(90deg, #fff, var(--accent), #00b4ff, var(--accent), #fff)',
                backgroundSize: '200%',
              }}
            >
              Pranav N J
            </motion.span>
          </h1>

          <p className="typing-effect text-base md:text-lg text-white/80 mt-2 max-w-full">
            Information Science and Engineering | Full Stack Developer | Tech Enthusiast
          </p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap gap-3 mt-6 justify-center md:justify-start"
          >
            {professions.map((role, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05, y: -2, background: 'linear-gradient(90deg,var(--accent),#00b4ff)', boxShadow: '0 0 20px rgba(0,255,200,0.3)' }}
                transition={{ type: 'spring', stiffness: 200 }}
                className="border border-white/20 px-5 py-2 rounded-full text-sm text-white/85 cursor-default bg-white/10 backdrop-blur-sm hover:border-transparent transition-all"
              >
                {role}
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8"
          >
            {[
              { label: 'Location', value: 'Tumkur, India' },
              { label: 'Expertise', value: 'Full Stack & AI/ML' },
              { label: 'Contact', value: 'pranav984530@gmail.com\n+91 9481578981' },
            ].map((info, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5, scale: 1.03, boxShadow: '0 10px 30px rgba(0,0,0,0.2)' }}
                transition={{ type: 'spring', stiffness: 250 }}
                className="bg-white/5 backdrop-blur-md rounded-lg sm:rounded-xl p-4 text-center shadow-lg border border-white/10 hover:border-cyan-500/50 transition-all"
              >
                <strong className="text-sm text-cyan-400 font-semibold">{info.label}</strong>
                <p className="text-sm text-white/70 mt-1 whitespace-pre-line">{info.value}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Quick Links */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
        className="text-center mt-12"
      >
        <h2 className="text-xl font-semibold mb-5 text-white/90">Let's Connect</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {quickLinks.map((item, i) => (
            <motion.a
              key={i}
              href={item.link}
              title={item.title}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 0, y: -5 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <motion.img
                src={item.img}
                alt={item.title}
                whileHover={{ filter: 'drop-shadow(0 0 15px var(--accent)) brightness(1.3)' }}
                className="w-14 h-14 rounded-full object-cover bg-white/10 p-2 backdrop-blur-sm border border-white/10 brightness-90 transition-all duration-300"
              />
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
