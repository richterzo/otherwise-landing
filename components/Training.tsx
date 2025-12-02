"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { BicepsFlexed } from "lucide-react";

export default function Training() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const programs = [
    {
      code: "PROG_01",
      name: "WODFIT",
      description: "Allenamento funzionale completo, ad alta intensità, basato su esercizi variati e stimolanti. Ideale per chi vuole allenarsi con metodo, senza routine noiose. Per chi cerca risultati concreti.",
      duration: "Variabile",
      level: "Tutti i livelli",
      level_number: 2,
      intensity: 80
    }
  ];

  return (
    <section id="training" className="relative py-32 bg-grigio-cemento overflow-hidden" ref={ref}>
      {/* Background Image - Training */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/images/Box4.webp)',
            filter: 'grayscale(100%) contrast(1.2)',
            opacity: 0.08
          }}
        />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mb-16"
        >
          <motion.span 
            className="text-arancione-brand font-mono text-sm tracking-[0.3em] uppercase inline-flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
          >
            [ PROGRAMMI ]
            <motion.span
              className="inline-block w-1.5 h-1.5 bg-arancione-brand"
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </motion.span>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-mono font-bold text-bianco-luce mt-4 mb-6 tracking-tight">
            PROGRAMMI<br />
            <span className="text-grigio-acciaio">DI ALLENAMENTO</span>
          </h2>

          <p className="text-grigio-acciaio leading-relaxed">
            Un programma pensato per farti evolvere, a modo tuo. 
            Allenamento funzionale completo, ad alta intensità, risultati concreti.
          </p>
        </motion.div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-6 max-w-2xl mx-auto">
          {programs.map((program, index) => (
            <motion.div
              key={program.code}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative bg-nero-tattico p-8 border border-grigio-acciaio border-opacity-30 hover:border-arancione-brand hover:border-opacity-70 transition-all duration-300 cursor-pointer"
            >
              {/* Intensity Bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-grigio-acciaio bg-opacity-20 overflow-hidden">
                <motion.div
                  className="h-full bg-arancione-brand"
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${program.intensity}%` } : {}}
                  transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                />
              </div>

              {/* Level Indicator - Biceps */}
              <div className="flex items-center justify-end gap-1 mb-6">
                {Array.from({ length: program.level_number }).map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: 0.6 + index * 0.1 + i * 0.1 }}
                  >
                    <BicepsFlexed 
                      size={20} 
                      strokeWidth={2} 
                      className="text-arancione-brand opacity-80"
                    />
                  </motion.div>
                ))}
              </div>

              {/* Name */}
              <h3 className="text-2xl font-mono font-bold text-bianco-luce mb-4 transition-all">
                {program.name}
              </h3>

              {/* Description */}
              <p className="text-sm text-grigio-acciaio leading-relaxed mb-6 group-hover:text-bianco-luce transition-colors">
                {program.description}
              </p>

              {/* Meta Info */}
              <div className="space-y-2 text-xs font-mono">
                <div className="flex justify-between">
                  <span className="text-grigio-acciaio">DURATA:</span>
                  <span className="text-bianco-luce">{program.duration}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-grigio-acciaio">LIVELLO:</span>
                  <span className="text-bianco-luce">{program.level}</span>
                </div>
              </div>

              {/* Hover CTA */}
              <div className="mt-6 pt-6 border-t border-grigio-acciaio border-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <a
                  href="#contact"
                  className="text-sm font-mono font-bold text-viola-brand hover:text-bianco-luce transition-colors flex items-center gap-2 uppercase tracking-wider"
                >
                  <span>Inizia Ora</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </div>

              {/* Corner brackets */}
              <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-arancione-brand opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-arancione-brand opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <motion.a
            href="#contact"
            className="inline-block px-8 py-4 bg-rosso-controllo text-bianco-luce font-mono text-sm font-bold hover:bg-rosso-battito transition-colors relative overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">INIZIA OGGI</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-bianco-luce to-transparent opacity-0 hover:opacity-20"
              initial={{ x: "-100%" }}
              whileHover={{ x: "200%" }}
              transition={{ duration: 0.6 }}
            />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
