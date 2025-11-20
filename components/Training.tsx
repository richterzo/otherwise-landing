"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Training() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const programs = [
    {
      code: "PROG_01",
      name: "ATHLETIC GRID",
      description: "Il punto di partenza per chi è alle prime armi ma vuole mettersi in gioco. Un percorso accessibile, guidato passo dopo passo, per imparare i movimenti e costruire le basi di una forma fisica solida e duratura.",
      duration: "Base",
      level: "Principianti",
      intensity: 60
    },
    {
      code: "PROG_02",
      name: "WODFIT",
      description: "Allenamento funzionale completo, ad alta intensità, basato su esercizi variati e stimolanti. Ideale per chi vuole allenarsi con metodo, senza routine noiose. Per chi cerca risultati concreti.",
      duration: "Variabile",
      level: "Tutti i livelli",
      intensity: 80
    },
    {
      code: "PROG_03",
      name: "ADVANCED RX",
      description: "Dedicato a chi ha già esperienza con l'allenamento funzionale e vuole lavorare in modo tecnico, preciso, con progressioni avanzate e obiettivi concreti. Un programma pensato per gli atleti che vogliono il massimo.",
      duration: "Avanzato",
      level: "Esperti",
      intensity: 95
    }
  ];

  return (
    <section id="training" className="relative py-32 bg-grigio-cemento overflow-hidden" ref={ref}>
      {/* Background Image - Training */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1920&q=80)',
            filter: 'grayscale(100%) contrast(1.2)',
            opacity: 0.08
          }}
        />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mb-16"
        >
          <motion.span 
            className="text-rosso-controllo font-mono text-sm tracking-[0.3em] uppercase inline-flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
          >
            [ PROGRAMMI ]
            <motion.span
              className="inline-block w-1.5 h-1.5 bg-rosso-controllo"
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </motion.span>
          
          <h2 className="text-4xl md:text-5xl font-mono font-bold text-bianco-luce mt-4 mb-6">
            NUOVI CORSI<br />
            <span className="text-grigio-acciaio">NUOVI STIMOLI</span>
          </h2>

          <p className="text-grigio-acciaio leading-relaxed">
            Tre programmi pensati per ogni livello di allenamento, con un solo obiettivo: 
            farti evolvere, a modo tuo. Scegli il corso che fa per te.
          </p>
        </motion.div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program, index) => (
            <motion.div
              key={program.code}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative bg-nero-tattico p-8 border border-grigio-acciaio border-opacity-30 hover:border-rosso-controllo hover:border-opacity-50 transition-all duration-300 cursor-pointer"
            >
              {/* Intensity Bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-grigio-acciaio bg-opacity-20 overflow-hidden">
                <motion.div
                  className="h-full bg-rosso-controllo"
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${program.intensity}%` } : {}}
                  transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                />
              </div>

              {/* Code */}
              <div className="flex items-center justify-between mb-6">
                <motion.span 
                  className="text-xs font-airborne text-grigio-acciaio tracking-wider"
                  whileHover={{ color: '#B31010' }}
                >
                  {program.code}
                </motion.span>
                <motion.div
                  className="w-2 h-2 bg-rosso-controllo rounded-full"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.3
                  }}
                />
              </div>

              {/* Name */}
              <motion.h3 
                className="text-2xl font-mono font-bold text-bianco-luce mb-4 group-hover:text-shadow-glow transition-all"
                whileHover={{ x: 5 }}
              >
                {program.name}
              </motion.h3>

              {/* Description */}
              <p className="text-sm text-grigio-acciaio leading-relaxed mb-6 group-hover:text-bianco-luce transition-colors">
                {program.description}
              </p>

              {/* Meta Info */}
              <div className="space-y-2 text-xs font-mono">
                <motion.div 
                  className="flex justify-between"
                  whileHover={{ x: 2 }}
                >
                  <span className="text-grigio-acciaio">DURATA:</span>
                  <span className="text-bianco-luce">{program.duration}</span>
                </motion.div>
                <motion.div 
                  className="flex justify-between"
                  whileHover={{ x: 2 }}
                >
                  <span className="text-grigio-acciaio">LIVELLO:</span>
                  <span className="text-bianco-luce">{program.level}</span>
                </motion.div>
                <motion.div 
                  className="flex justify-between"
                  whileHover={{ x: 2 }}
                >
                  <span className="text-grigio-acciaio">INTENSITÀ:</span>
                  <span className="text-rosso-controllo font-airborne">{program.intensity}%</span>
                </motion.div>
              </div>

              {/* Hover CTA */}
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                whileHover={{ opacity: 1, height: "auto" }}
                className="mt-6 pt-6 border-t border-grigio-acciaio border-opacity-30 overflow-hidden"
              >
                <motion.a
                  href="#contact"
                  className="text-sm font-airborne text-rosso-controllo hover:text-bianco-luce transition-colors flex items-center gap-2 group"
                  whileHover={{ x: 5 }}
                >
                  <span>INIZIA</span>
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </motion.a>
              </motion.div>

              {/* Corner brackets */}
              <motion.div
                className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-rosso-controllo opacity-0 group-hover:opacity-100"
                initial={{ x: 5, y: 5 }}
                whileHover={{ x: 0, y: 0 }}
                transition={{ duration: 0.2 }}
              />
              <motion.div
                className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-rosso-controllo opacity-0 group-hover:opacity-100"
                initial={{ x: -5, y: -5 }}
                whileHover={{ x: 0, y: 0 }}
                transition={{ duration: 0.2 }}
              />
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
          <div className="inline-block p-8 border border-grigio-acciaio border-opacity-30 hover:border-rosso-controllo hover:border-opacity-50 transition-all duration-300 group">
            <p className="text-grigio-acciaio mb-4 group-hover:text-bianco-luce transition-colors">
              Prima volta? Parti con una lezione di prova gratuita
            </p>
            <motion.a
              href="#contact"
              className="inline-block px-6 py-3 bg-rosso-controllo text-bianco-luce font-mono text-sm hover:bg-rosso-battito transition-colors relative overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">PRENOTA PROVA GRATUITA</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-bianco-luce to-transparent opacity-0 group-hover:opacity-20"
                initial={{ x: "-100%" }}
                whileHover={{ x: "200%" }}
                transition={{ duration: 0.6 }}
              />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
