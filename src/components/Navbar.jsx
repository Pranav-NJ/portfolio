import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Home", to: "home" },
  { label: "Projects", to: "projects" },
  { label: "Skills", to: "skills" },
  { label: "Certificates", to: "certificates" },
  { label: "Blog", to: "blog" },
  { label: "Resume", to: "resume" },
  { label: "About me", to: "about" },
  { label: "Contact", to: "contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = links.map(l => document.getElementById(l.to));
      const scrollPos = window.scrollY + 150;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPos) {
          setActiveSection(links[i].to);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-4 md:px-6 py-3 border-b border-white/10 bg-black/85 backdrop-blur-lg">
        {/* Logo + Name */}
        <div className="flex items-center gap-3">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="font-bold text-2xl text-cyan-400"
          >
            PJ
          </motion.div>
          <div className="flex flex-col">
            <h1 className="text-sm font-medium text-white">Pranav N J</h1>
            <span className="text-xs text-gray-500">Full Stack Developer</span>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex justify-center items-center gap-6 flex-grow">
          {links.map((l) => {
            const isActive = activeSection === l.to;
            return (
              <div
                key={l.to}
                onClick={() => scrollToSection(l.to)}
                className="relative cursor-pointer"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col items-center"
                >
                  <motion.span
                    className={`text-sm font-medium transition-colors ${
                      isActive ? "text-cyan-400" : "text-white hover:text-cyan-400"
                    }`}
                    whileHover={{ textShadow: "0 0 8px #00b4ff" }}
                  >
                    {l.label}
                  </motion.span>
                  {isActive && (
                    <motion.div
                      layoutId="underline"
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className="w-[70%] h-0.5 mt-1 rounded-full bg-cyan-400 shadow-[0_0_6px_#00b4ff]"
                    />
                  )}
                </motion.div>
              </div>
            );
          })}
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden bg-transparent border-none text-cyan-400 cursor-pointer p-2"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-[60px] inset-x-0 bottom-0 bg-black/95 backdrop-blur-lg z-40 flex flex-col items-center justify-center gap-5"
          >
            {links.map((l, idx) => {
              const isActive = activeSection === l.to;
              return (
                <motion.div
                  key={l.to}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  onClick={() => scrollToSection(l.to)}
                  className={`text-xl font-semibold cursor-pointer px-6 py-3 rounded-lg transition-all ${
                    isActive
                      ? "text-cyan-400 bg-cyan-500/10"
                      : "text-white hover:text-cyan-400"
                  }`}
                >
                  {l.label}
                </motion.div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
