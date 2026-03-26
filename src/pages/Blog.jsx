import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ThumbsUp, ThumbsDown } from "lucide-react";

export default function Blog() {
  const defaultPosts = [
    {
      id: 1,
      title: "Why I Love Building AI Projects",
      text: "Working on AI-based systems like mammogram cancer detection has taught me how impactful technology can be when applied to healthcare. Combining deep learning with real-world problems is my favorite way to innovate.",
    },
    {
      id: 2,
      title: "My Thoughts on Design & Aesthetics",
      text: "I believe design should be a balance between functionality and emotion. Dark themes with minimalist layouts always inspire me to create something that feels personal and futuristic.",
    },
    {
      id: 3,
      title: "Balancing Tech and Creativity",
      text: "As someone who codes and dances, I've realized creativity isn't limited to art — it also lives in algorithms. Each project is like choreography for the mind.",
    },
    {
      id: 4,
      title: "The Beauty of Simple Code",
      text: "Clean code isn't just about fewer lines — it's about clarity. Elegance in code feels like poetry to me — each function should have rhythm and purpose.",
    },
  ];

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const savedVotes = JSON.parse(localStorage.getItem("kd_blog_votes") || "{}");
    const votedByUser = JSON.parse(localStorage.getItem("kd_blog_voted") || "{}");
    const withVotes = defaultPosts.map((p) => ({
      ...p,
      agree: savedVotes[p.id]?.agree || 0,
      disagree: savedVotes[p.id]?.disagree || 0,
      userVote: votedByUser[p.id] || null,
    }));
    setPosts(withVotes);
  }, []);

  function vote(id, type) {
    const votedByUser = JSON.parse(localStorage.getItem("kd_blog_voted") || "{}");
    if (votedByUser[id] === type) return;

    const next = posts.map((p) => {
      if (p.id !== id) return p;
      if (votedByUser[id]) {
        const oldType = votedByUser[id];
        return { ...p, [oldType]: Math.max(0, p[oldType] - 1), [type]: p[type] + 1, userVote: type };
      }
      return { ...p, [type]: p[type] + 1, userVote: type };
    });

    setPosts(next);
    const votes = Object.fromEntries(next.map((p) => [p.id, { agree: p.agree, disagree: p.disagree }]));
    localStorage.setItem("kd_blog_votes", JSON.stringify(votes));
    localStorage.setItem("kd_blog_voted", JSON.stringify({ ...votedByUser, [id]: type }));
  }

  return (
    <motion.section
      className="w-full px-4 md:px-[8%] py-16"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-center mb-2"
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
          My Blog
        </motion.span>
      </motion.h2>
      <p className="text-gray-400 text-center mb-10">
        Personal thoughts, experiences, and reflections — feel free to react!
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-5">
        {posts.map((p, idx) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            whileHover={{ scale: 1.02, boxShadow: "0 0 25px rgba(255,255,255,0.08)" }}
            className="bg-white/[0.03] backdrop-blur-sm rounded-lg sm:rounded-xl p-3 sm:p-5 border border-white/5 hover:border-cyan-500/20 transition-all"
          >
            <h3 className="text-sm sm:text-lg font-semibold text-white mb-1.5 sm:mb-2">{p.title}</h3>
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4 line-clamp-3 sm:line-clamp-none">{p.text}</p>

            <div className="flex justify-center gap-4 sm:gap-5">
              <motion.button
                onClick={() => vote(p.id, "agree")}
                whileTap={{ scale: 0.85 }}
                whileHover={{ scale: 1.1 }}
                className={`relative flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full transition-all ${
                  p.userVote === "agree"
                    ? "bg-green-500/20 text-green-400 shadow-[0_0_15px_rgba(0,255,130,0.4)]"
                    : "bg-white/5 text-gray-400 hover:bg-white/10"
                }`}
              >
                <ThumbsUp className="w-4 h-4 sm:w-[18px] sm:h-[18px]" />
                <span className="absolute -bottom-4 sm:-bottom-5 text-[10px] sm:text-xs text-gray-500">{p.agree}</span>
              </motion.button>

              <motion.button
                onClick={() => vote(p.id, "disagree")}
                whileTap={{ scale: 0.85 }}
                whileHover={{ scale: 1.1 }}
                className={`relative flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full transition-all ${
                  p.userVote === "disagree"
                    ? "bg-red-500/20 text-red-400 shadow-[0_0_15px_rgba(255,0,70,0.4)]"
                    : "bg-white/5 text-gray-400 hover:bg-white/10"
                }`}
              >
                <ThumbsDown className="w-4 h-4 sm:w-[18px] sm:h-[18px]" />
                <span className="absolute -bottom-4 sm:-bottom-5 text-[10px] sm:text-xs text-gray-500">{p.disagree}</span>
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
