"use client";

import { motion, useInView, useMotionValue, useTransform } from "framer-motion";
import { useRef } from "react";
import { ShieldCheck, Dumbbell, Users } from "lucide-react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      number: "1",
      title: "COACH CERTIFICATI",
      description: "Oltre 15 trainer qualificati CrossFit L1/L2. Tecnica prima di tutto, sicurezza sempre.",
      icon: ShieldCheck
    },
    {
      number: "2",
      title: "ATTREZZATURA ALL'AVANGUARDIA",
      description: "Rogue, Eleiko, Concept2. 300m² di spazio, tutto quello che serve per allenarti al meglio.",
      icon: Dumbbell
    },
    {
      number: "3",
      title: "COMMUNITY FORTE",
      description: "Non sei un numero. Qui ti alleni con persone che hanno i tuoi stessi obiettivi.",
      icon: Users
    }
  ];

  return (
    <section id="about" className="relative py-32 bg-nero-tattico overflow-hidden" ref={ref}>
      {/* Background accent line with animation */}
      <motion.div 
        className="absolute top-0 left-0 h-[1px] bg-gradient-to-r from-rosso-controllo to-transparent opacity-50"
        initial={{ width: 0 }}
        animate={isInView ? { width: '33%' } : {}}
        transition={{ duration: 1, delay: 0.3 }}
      />

      {/* Grid pattern background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(179, 16, 16, 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(179, 16, 16, 0.1) 1px, transparent 1px)`,
          backgroundSize: '100px 100px'
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Left Column - Text */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <motion.span 
                className="text-rosso-controllo font-mono text-sm tracking-[0.3em] uppercase inline-flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
              >
                [ MISSIONE ]
                <motion.span
                  className="inline-block w-1.5 h-1.5 bg-rosso-controllo"
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
              </motion.span>
              
              <motion.h2 
                className="text-4xl md:text-5xl lg:text-6xl font-airborne text-bianco-luce mt-4 mb-6 tracking-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                DOVE L'ALLENAMENTO<br />
                <span className="text-grigio-acciaio">È UN RITUALE</span>
              </motion.h2>

              <motion.div 
                className="space-y-4 text-grigio-acciaio leading-relaxed"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <p>
                  Nel cuore di Ferrara, Otherwise Athletics Evolved è il luogo dove il functional fitness 
                  incontra la disciplina, la determinazione e la voglia di superarsi. 
                  Ogni workout è progettato per spingerti oltre i tuoi limiti.
                </p>
                <p>
                  Bilancieri, corde, box jump, trazioni. Non importa il livello da cui parti: 
                  importa la costanza, l'impegno e il desiderio di migliorare. Coach certificati, 
                  programmazione strutturata, community vera.
                </p>
                <motion.p 
                  className="text-bianco-luce font-mono"
                  whileHover={{ x: 5, color: '#B31010' }}
                  transition={{ duration: 0.2 }}
                >
                  Obiettivi reali. Risultati misurabili. Trasformazioni concrete.
                </motion.p>
              </motion.div>

              <motion.div
                className="mt-8 flex items-center gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <motion.div 
                  className="h-[1px] bg-rosso-controllo"
                  initial={{ width: 0 }}
                  animate={isInView ? { width: 64 } : {}}
                  transition={{ duration: 0.8, delay: 0.7 }}
                />
                <span className="text-sm font-mono text-grigio-acciaio tracking-wider">
                  EST. 2025 / FERRARA
                </span>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Column - Features + Image */}
          <div className="space-y-6">
            {/* Gym Equipment Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8 }}
              className="relative h-64 mb-8 border-2 border-grigio-acciaio border-opacity-30 overflow-hidden group"
              whileHover={{ scale: 1.02 }}
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{
                  backgroundImage: 'url(https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&q=80)',
                  filter: 'grayscale(100%) contrast(1.3)',
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-nero-tattico via-transparent to-transparent opacity-80" />
              
              {/* Scan line on image */}
              <motion.div
                className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-rosso-controllo to-transparent opacity-50"
                animate={{ y: ['0%', '100%'] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              />
              
              <div className="absolute bottom-4 left-4 right-4">
                <div className="flex items-center gap-2">
                  <motion.div 
                    className="w-2 h-2 bg-rosso-controllo rounded-full"
                    animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <span className="text-xs font-mono text-bianco-luce tracking-wider">
                    FERRARA_FACILITY_001
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Features */}
            {features.map((feature, index) => (
              <motion.div
                key={feature.number}
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="group relative"
              >
                <motion.div
                  className="absolute left-0 top-0 bottom-0 w-[2px] bg-grigio-cemento group-hover:bg-rosso-controllo transition-colors duration-300"
                  whileHover={{ scaleY: 1.1 }}
                />
                
                <motion.div 
                  className="pl-8 py-6 pr-6 bg-grigio-cemento bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300 cursor-pointer"
                  whileHover={{ x: 10, backgroundColor: 'rgba(42, 42, 42, 0.4)' }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="flex items-start gap-4">
                    <div className="text-rosso-controllo opacity-30 group-hover:opacity-100 transition-all duration-300 flex-shrink-0">
                      <feature.icon size={32} strokeWidth={1.5} />
                    </div>
                    
                    <div className="flex-1">
                      <div className="mb-2">
                        <h3 className="text-base sm:text-lg font-mono font-bold text-bianco-luce tracking-wider break-words">
                          {feature.title}
                        </h3>
                      </div>
                      <p className="text-sm text-grigio-acciaio leading-relaxed group-hover:text-bianco-luce transition-colors">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Corner accent */}
                <motion.div
                  className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-rosso-controllo opacity-0 group-hover:opacity-100"
                  initial={{ x: -5, y: 5 }}
                  whileHover={{ x: 0, y: 0 }}
                  transition={{ duration: 0.2 }}
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats Bar with counter animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-grigio-cemento border-opacity-30"
        >
          {[
            { value: "24/7", label: "ACCESSO", delay: 0 },
            { value: "15+", label: "COACHES", delay: 0.1 },
            { value: "300m²", label: "FACILITY", delay: 0.2 },
            { value: "100%", label: "FOCUS", delay: 0.3 }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center group cursor-default"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.9 + stat.delay }}
              whileHover={{ scale: 1.05 }}
            >
              <motion.div 
                className="text-3xl md:text-4xl font-mono font-bold text-bianco-luce mb-2 group-hover:text-rosso-controllo transition-colors"
                whileHover={{ y: -5 }}
              >
                {stat.value}
              </motion.div>
              <div className="text-xs font-airborne text-grigio-acciaio tracking-wider group-hover:text-bianco-luce transition-colors">
                {stat.label}
              </div>
              
              {/* Underline on hover */}
              <motion.div
                className="mt-2 h-[2px] bg-rosso-controllo mx-auto"
                initial={{ width: 0 }}
                whileHover={{ width: '100%' }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
