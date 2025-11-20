"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image B&W with Parallax */}
      <motion.div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=80)',
          filter: 'grayscale(100%) contrast(1.3)',
          opacity: 0.25,
          y
        }}
      />

      {/* Gradient Overlays for Depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-nero-tattico/80 via-nero-tattico/60 to-nero-tattico" />
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-nero-tattico/40 to-nero-tattico" />
      
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)`,
          backgroundSize: '100px 100px'
        }} />
      </div>

      {/* Content */}
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "15%"]), opacity }}
        className="relative z-10 max-w-5xl mx-auto px-6 text-center"
      >
        {/* Location with Lines */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8 flex items-center justify-center gap-4"
        >
          <motion.div 
            className="h-[1px] bg-rosso-controllo w-12"
            initial={{ width: 0 }}
            animate={{ width: 48 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
          <span className="text-rosso-controllo font-mono text-sm tracking-[0.3em] uppercase">
            Ferrara
          </span>
          <motion.div 
            className="h-[1px] bg-rosso-controllo w-12"
            initial={{ width: 0 }}
            animate={{ width: 48 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
        </motion.div>

        {/* Main Title - Stunning */}
        <motion.h1
          className="text-6xl md:text-8xl lg:text-[10rem] font-bold tracking-tighter leading-none mb-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <motion.span 
            className="block text-bianco-luce mb-4"
            whileHover={{ 
              textShadow: "0 0 40px rgba(179, 16, 16, 0.4)",
              transition: { duration: 0.3 }
            }}
          >
            OTHERWISE
          </motion.span>
        </motion.h1>

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-4"
        >
          <span className="text-xl md:text-3xl text-grigio-acciaio font-mono tracking-wider uppercase">
            Athletics Evolved
          </span>
        </motion.div>

        {/* Red Line Separator */}
        <motion.div
          className="w-32 h-[2px] bg-gradient-to-r from-transparent via-rosso-controllo to-transparent mx-auto mb-10"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        />

        {/* Tagline - Bold */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-14 max-w-3xl mx-auto space-y-3"
        >
          <p className="text-xl md:text-3xl text-bianco-luce font-mono font-bold tracking-tight uppercase">
            La Palestra CrossFit Che Cercavi
          </p>
          <p className="text-sm md:text-base text-grigio-acciaio font-mono">
            Allenamento serio, risultati veri, community forte
          </p>
        </motion.div>

        {/* CTA Buttons - Large and Stunning */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col sm:flex-row gap-5 justify-center items-center"
        >
          {/* Primary CTA - Stunning Red */}
          <motion.a
            href="#contact"
            className="group relative w-full sm:w-auto px-12 py-6 bg-rosso-controllo text-bianco-luce font-mono font-bold text-base tracking-wider uppercase overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            <span className="relative z-10">Prova Gratuita</span>
            {/* Shine effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-bianco-luce to-transparent opacity-0 group-hover:opacity-20"
              initial={{ x: "-100%" }}
              whileHover={{ x: "200%" }}
              transition={{ duration: 0.6 }}
            />
            {/* Glow effect */}
            <motion.div
              className="absolute inset-0 shadow-lg shadow-rosso-controllo/0 group-hover:shadow-rosso-controllo/50"
              transition={{ duration: 0.3 }}
            />
          </motion.a>

          {/* Secondary CTA - Clean White */}
          <motion.a
            href="#training"
            className="group w-full sm:w-auto px-12 py-6 border-2 border-bianco-luce text-bianco-luce font-mono font-bold text-base tracking-wider uppercase hover:bg-bianco-luce hover:text-nero-tattico transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            Programmi
          </motion.a>
        </motion.div>

        {/* Scroll Hint - Subtle */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2 opacity-40 hover:opacity-100 transition-opacity"
          >
            <div className="w-[1px] h-12 bg-gradient-to-b from-bianco-luce to-transparent" />
            <svg className="w-5 h-5 text-bianco-luce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
