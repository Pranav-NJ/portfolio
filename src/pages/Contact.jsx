import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { Send, Github, Linkedin, Mail, MessageCircle } from "lucide-react";

import githubLogo from "../../public/github.png";
import linkedinLogo from "../../public/linkedin.png";
import gmailLogo from "../../public/gmail.png";
import whatsappLogo from "../../public/whatsapp.png";
import instagramLogo from "../../public/insta.png";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    contact: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.contact || !form.subject || !form.message) {
      setStatus("Please fill in all fields.");
      return;
    }

    const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    const isEmail = emailPattern.test(form.contact);
    if (!isEmail && isNaN(form.contact)) {
      setStatus("Please enter a valid email or phone number.");
      return;
    }

    setStatus("Sending...");

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          contact_info: form.contact,
          subject: form.subject,
          message: form.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setStatus("Message sent successfully!");
          setForm({ name: "", contact: "", subject: "", message: "" });
        },
        (error) => {
          console.error("FAILED...", error);
          setStatus("Failed to send. Try again later.");
        }
      );
  };

  const quickLinks = [
    { img: githubLogo, title: "GitHub", link: "https://github.com/Pranav-NJ" },
    { img: linkedinLogo, title: "LinkedIn", link: "https://www.linkedin.com/in/pranav-n-j-2928932a0/" },
    { img: gmailLogo, title: "Email", link: "mailto:pranav984530@gmail.com" },
    { img: whatsappLogo, title: "WhatsApp", link: "https://wa.me/+919481578981" },
    { img: instagramLogo, title: "Instagram", link: "https://www.instagram.com/pranav_nj_/" },
  ];

  return (
    <motion.section
      className="w-full min-h-screen px-4 md:px-[8%] py-16 flex flex-col items-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {/* Header */}
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
          Let's Connect & Collaborate
        </motion.span>
      </motion.h2>
      <p className="text-gray-400 text-center max-w-xl mb-8">
        Whether it's a new project, a collaboration, or just to say hi — I'd love to hear from you!
      </p>

      {/* Quick Links */}
      <motion.div
        className="flex flex-wrap justify-center gap-6 mb-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
      >
        {quickLinks.map((item, i) => (
          <motion.a
            key={i}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.15, rotate: 5 }}
            transition={{ type: "spring", stiffness: 250 }}
            className="group"
          >
            <motion.img
              src={item.img}
              alt={item.title}
              animate={{ y: [0, -6, 0] }}
              transition={{
                duration: 3 + i * 0.3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-14 h-14 md:w-16 md:h-16 rounded-full object-cover border-2 border-cyan-500/50 bg-white/5 p-2 group-hover:border-cyan-400 group-hover:shadow-[0_0_20px_rgba(0,180,255,0.4)] transition-all"
            />
          </motion.a>
        ))}
      </motion.div>

      {/* Contact Form */}
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="w-full max-w-lg bg-white/[0.02] backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/5"
      >
        <div className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-cyan-500/50 focus:outline-none focus:ring-1 focus:ring-cyan-500/30 transition-all"
          />
          <input
            type="text"
            name="contact"
            placeholder="Your Email or Phone"
            value={form.contact}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-cyan-500/50 focus:outline-none focus:ring-1 focus:ring-cyan-500/30 transition-all"
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={form.subject}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-cyan-500/50 focus:outline-none focus:ring-1 focus:ring-cyan-500/30 transition-all"
          />
          <textarea
            name="message"
            placeholder="Your Message..."
            value={form.message}
            onChange={handleChange}
            required
            rows="5"
            className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-cyan-500/50 focus:outline-none focus:ring-1 focus:ring-cyan-500/30 transition-all resize-none"
          />
        </div>

        <motion.button
          type="submit"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full mt-5 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg flex items-center justify-center gap-2 hover:shadow-[0_0_25px_rgba(0,180,255,0.4)] transition-shadow"
        >
          <Send size={18} />
          Send Message
        </motion.button>

        {/* Status Message */}
        {status && (
          <motion.p
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className={`mt-4 text-center font-medium ${
              status.includes("success") ? "text-green-400" : 
              status.includes("Failed") || status.includes("valid") || status.includes("fill") ? "text-red-400" : 
              "text-cyan-400"
            }`}
          >
            {status}
          </motion.p>
        )}
      </motion.form>
    </motion.section>
  );
}
