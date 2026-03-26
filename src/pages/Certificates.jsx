import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Eye } from "lucide-react";

const CERTS = {
  tech: [
    {
      title: "Smart India Hackathon",
      org: "SIH",
      date: "2025",
      img: "/certs/sih.png",
    },
    {
      title: "National Space Hackathon",
      org: "IIT Delhi",
      date: "2024",
      img: "/certs/nsh.png",
    },
    {
      title: "HACKNITE",
      org: "MIT",
      date: "2025",
      img: "/certs/hacknite.png",
    },
    {
      title: "Smart India AI Agent Hackathon",
      org: "AshnaAI",
      date: "2025",
      img: "/certs/ashnaai.png",
    },
    {
      title: "Dev Heat Hackathon",
      org: "IIIT Surat",
      date: "2024",
      img: "/certs/dhh.png",
    }
  ],
  other: [
    {
      title: "National Cadet Corps (NCC) Certificate",
      org: "Ministry of Defence, GOI",
      date: "2023",
      img: "/certs/NCC_cert.png",
    },
  ],
};

export default function Certificates() {
  const [tab, setTab] = useState("tech");
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <motion.section
      className="w-full px-4 md:px-[5%] lg:px-[8%] py-16"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div>
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-2"
          initial={{ y: -15, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
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
            Certificates
          </motion.span>
        </motion.h2>
        <p className="text-gray-400 mb-6">Explore my certifications — technical & others.</p>

        {/* Tabs */}
        <div className="flex gap-3 mb-8">
          {["tech", "other"].map((t) => (
            <motion.button
              key={t}
              onClick={() => setTab(t)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-5 py-2 rounded-lg font-medium transition-all ${
                tab === t
                  ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-[0_0_15px_rgba(0,180,255,0.3)]"
                  : "bg-white/5 text-gray-400 hover:bg-white/10"
              }`}
            >
              {t === "tech" ? "Tech" : "Others"}
            </motion.button>
          ))}
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          <AnimatePresence mode="wait">
            {CERTS[tab].map((c, idx) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                whileHover={{ scale: 1.03, boxShadow: "0 0 20px rgba(0, 180, 255, 0.2)" }}
                className="bg-white/[0.03] backdrop-blur-sm rounded-lg sm:rounded-xl p-2.5 sm:p-4 border border-white/5 hover:border-cyan-500/30 transition-all"
              >
                <div className="aspect-[4/3] rounded-md sm:rounded-lg overflow-hidden bg-black/30 mb-2 sm:mb-3 flex items-center justify-center">
                  <img
                    src={c.img}
                    alt={c.title}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="font-semibold text-white text-[10px] sm:text-base line-clamp-1 sm:line-clamp-none">{c.title}</h3>
                <p className="text-gray-400 text-[9px] sm:text-xs mt-0.5 sm:mt-1 line-clamp-1">{c.org} • {c.date}</p>

                <motion.button
                  onClick={() => setSelectedCert(c)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-2 sm:mt-3 flex items-center gap-1 sm:gap-1.5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-2.5 sm:px-4 py-1 sm:py-1.5 rounded-md sm:rounded-lg text-[10px] sm:text-sm font-medium hover:shadow-[0_0_15px_rgba(0,180,255,0.3)] transition-shadow"
                >
                  <Eye size={14} />
                  View
                </motion.button>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Modal Preview */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
            className="fixed inset-0 bg-black/85 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full"
            >
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute -top-10 right-0 text-white/70 hover:text-white transition-colors"
              >
                <X size={28} />
              </button>
              <img
                src={selectedCert.img}
                alt={selectedCert.title}
                className="w-full max-h-[85vh] object-contain rounded-xl shadow-[0_0_30px_rgba(255,255,255,0.1)]"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
}
