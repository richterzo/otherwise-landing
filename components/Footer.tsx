"use client";

import { motion } from "framer-motion";

export default function Footer() {
  const socialLinks = [
    { name: "Instagram", href: "https://www.instagram.com/otherwiseathletics_evolved/", icon: "IG" },
    { name: "Facebook", href: "https://facebook.com/otherwiseferrara", icon: "FB" },
    { name: "YouTube", href: "https://youtube.com/@otherwiseferrara", icon: "YT" },
  ];

  const quickLinks = [
    { name: "Chi Siamo", href: "#about" },
    { name: "Training", href: "#training" },
    { name: "Mindset", href: "#mindset" },
    { name: "Contatti", href: "#contact" },
  ];

  return (
    <footer className="relative bg-nero-tattico border-t border-grigio-cemento border-opacity-30 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {/* Logo */}
              <div className="mb-6">
                <img 
                  src="/Logo-Colore.webp" 
                  alt="Otherwise CrossFit Logo" 
                  className="h-24 w-auto"
                />
              </div>
              <p className="text-sm text-grigio-acciaio leading-relaxed mb-4">
                Athletics Evolved
              </p>
              <p className="text-xs text-grigio-acciaio leading-relaxed">
                Disciplina. Controllo. Lucidità.<br />
                La palestra CrossFit che allena corpo e mente.
              </p>
            </motion.div>
          </div>

          {/* Quick Links */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-sm font-mono text-grigio-acciaio tracking-wider mb-4 uppercase">
                Quick Links
              </h4>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-grigio-acciaio hover:text-bianco-luce transition-colors text-sm inline-flex items-center gap-2 group"
                    >
                      <span className="text-viola-brand opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Social & Newsletter */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-sm font-mono text-grigio-acciaio tracking-wider mb-4 uppercase">
                Seguici
              </h4>
              <div className="flex gap-4 mb-6">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    className="w-12 h-12 border border-grigio-acciaio border-opacity-30 hover:border-viola-brand hover:border-opacity-100 flex items-center justify-center text-grigio-acciaio hover:text-bianco-luce transition-all text-xs font-mono"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>

              {/* Newsletter */}
              <div className="mt-6">
                <p className="text-xs text-grigio-acciaio mb-3">
                  Iscriviti alla newsletter per eventi APX
                </p>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="La tua email"
                    className="flex-1 px-3 py-2 bg-grigio-cemento border border-grigio-acciaio border-opacity-30 focus:border-rosso-controllo text-bianco-luce text-sm outline-none font-mono"
                  />
                  <motion.button
                    className="px-4 py-2 bg-rosso-controllo text-bianco-luce text-xs font-mono hover:bg-rosso-battito transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    OK
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* APX Connection */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="py-6 border-t border-b border-grigio-cemento border-opacity-20 mb-8"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <motion.div
                className="w-3 h-3 bg-viola-brand rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [1, 0.5, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <span className="text-sm font-mono text-grigio-acciaio">
                PROSSIMAMENTE: <span className="text-bianco-luce">APX BOLOGNA</span>
              </span>
            </div>
            <a
              href="#"
                    className="text-sm font-mono text-viola-brand hover:text-bianco-luce transition-colors"
            >
              SCOPRI DI PIÙ →
            </a>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-grigio-acciaio font-mono"
        >
          <div className="flex items-center gap-3">
            <span>© 2025 Otherwise Athletics Evolved.</span>
            <span className="text-grigio-acciaio">•</span>
            <span className="font-mono tracking-wider">EST. 2018</span>
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-bianco-luce transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-bianco-luce transition-colors">
              Cookie Policy
            </a>
            <a href="#" className="hover:text-bianco-luce transition-colors">
              Terms of Service
            </a>
          </div>
        </motion.div>

        {/* Coordinates - Easter Egg */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-8 text-center"
        >
          <p className="text-[10px] text-grigio-acciaio font-mono opacity-50">
            44.8381° N, 11.6198° E
          </p>
        </motion.div>
      </div>

      {/* Purple accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-viola-brand to-transparent opacity-50" />
    </footer>
  );
}

