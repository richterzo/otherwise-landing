"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      aria-label="Hero section - Otherwise Athletics Evolved"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image - Color */}
      <div 
        role="img"
        aria-label="CrossFit training background"
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(/images/hero.webp)',
          opacity: 0.5
        }}
      />

      {/* Large Logo Background */}
      <div 
        className="absolute inset-0 flex items-center justify-center opacity-15 pointer-events-none"
        style={{
          backgroundImage: 'url(/Logo-Colore.webp)',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
      />

      {/* Brand Accent Lines */}
      <div className="absolute top-20 left-0 w-32 h-[2px] bg-gradient-to-r from-arancione-brand to-transparent opacity-50" />
      <div className="absolute bottom-20 right-0 w-32 h-[2px] bg-gradient-to-l from-viola-brand to-transparent opacity-50" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
        {/* Location with Lines */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6 sm:mb-8 flex items-center justify-center gap-3 sm:gap-4"
        >
          <motion.div 
            className="h-[1px] bg-arancione-brand w-8 sm:w-12"
            initial={{ width: 0 }}
            animate={{ width: 48 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
          <span className="text-arancione-brand font-mono text-xs sm:text-sm tracking-[0.3em] uppercase">
            Ferrara
          </span>
          <motion.div 
            className="h-[1px] bg-arancione-brand w-8 sm:w-12"
            initial={{ width: 0 }}
            animate={{ width: 48 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
        </motion.div>

        {/* Main Title - OTHERWISE with Airborne font */}
        <motion.h1
          className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-airborne tracking-tighter leading-[0.9] mb-4 sm:mb-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <span className="block text-bianco-luce">
            OTHERWISE
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-3 sm:mb-4"
        >
          <span className="text-base sm:text-xl md:text-2xl lg:text-3xl text-grigio-acciaio font-mono tracking-wider uppercase">
            <span className="text-arancione-brand">ATHLETICS</span> <span className="text-viola-brand">EVOLVED</span>
          </span>
        </motion.div>

        {/* Color Line Separator */}
        <motion.div
          className="w-24 sm:w-32 h-[2px] bg-gradient-to-r from-arancione-brand via-viola-brand to-arancione-brand mx-auto mb-8 sm:mb-10"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        />

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-10 sm:mb-14 max-w-3xl mx-auto space-y-5 sm:space-y-6"
        >
          <p className="text-sm sm:text-base lg:text-lg text-bianco-luce font-mono leading-relaxed px-4">
            Functional Fitness nel cuore di Ferrara. Coach certificati, programmazione seria, risultati concreti.
          </p>
          
          {/* Quote */}
          <blockquote className="relative px-4 sm:px-6 py-3 sm:py-4">
            <p className="text-sm sm:text-base md:text-lg text-grigio-acciaio font-mono italic leading-relaxed">
              La <span className="text-arancione-brand font-bold not-italic">motivazione</span> ti fa iniziare.<br />
              La <span className="text-viola-brand font-bold not-italic">disciplina</span> ti fa restare.
            </p>
          </blockquote>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center items-stretch sm:items-center max-w-xl mx-auto"
        >
          {/* Primary CTA */}
          <motion.a
            href="#contact"
            aria-label="Inizia oggi"
            className="group relative w-full sm:flex-1 px-8 sm:px-10 py-4 sm:py-5 bg-rosso-controllo text-bianco-luce font-mono font-bold text-sm sm:text-base tracking-wider uppercase overflow-hidden focus:outline-none focus:ring-4 focus:ring-bianco-luce focus:ring-offset-2 focus:ring-offset-nero-tattico transition-all"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="relative z-10">Inizia Oggi</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-bianco-luce to-transparent opacity-0 group-hover:opacity-20"
              initial={{ x: "-100%" }}
              whileHover={{ x: "200%" }}
              transition={{ duration: 0.6 }}
            />
          </motion.a>

          {/* Secondary CTA */}
          <motion.a
            href="#training"
            aria-label="Scopri i nostri programmi di allenamento"
            className="group w-full sm:flex-1 px-8 sm:px-10 py-4 sm:py-5 border-2 border-bianco-luce text-bianco-luce font-mono font-bold text-sm sm:text-base tracking-wider uppercase hover:border-viola-brand hover:text-viola-brand transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-rosso-controllo focus:ring-offset-2 focus:ring-offset-nero-tattico"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Programmi
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
}

