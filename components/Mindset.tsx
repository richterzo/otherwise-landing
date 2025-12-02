"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Mindset() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const principles = [
    {
      title: "CONSISTENZA",
      description: "Presentarsi ogni giorno. Non aspettare la motivazione, costruisci l'abitudine. Ogni ripetizione, ogni secondo nel box è un passo avanti verso il tuo obiettivo.",
      quote: "\"Non si tratta di un giorno. Si tratta di ogni giorno.\""
    },
    {
      title: "PROGRESSIONE",
      description: "Traccia i tuoi risultati, misura i progressi, supera te stesso. Ogni settimana un peso in più, un secondo in meno, un movimento più pulito.",
      quote: "\"Migliorare è una scelta. Costante.\""
    },
    {
      title: "COMMUNITY",
      description: "Quando sei in un gruppo che suda quanto te, è più facile non mollare. Qui ti alleni con persone che hanno i tuoi stessi obiettivi e la tua stessa voglia di crescere.",
      quote: "\"La community giusta rende tutto più forte.\""
    }
  ];

  return (
    <section id="mindset" className="relative py-32 bg-nero-tattico overflow-hidden" ref={ref}>
      {/* Decorative Grid */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(255, 107, 53, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 107, 53, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px'
        }} />
      </div>

      {/* Large Background Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-5 pointer-events-none">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 0.05 } : {}}
          transition={{ duration: 1.5 }}
          className="text-[15rem] font-bold text-bianco-luce whitespace-nowrap font-mono"
        >
          MINDSET
        </motion.div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="text-arancione-brand font-mono text-sm tracking-[0.3em] uppercase">
            [MINDSET]
          </span>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-airborne text-bianco-luce mt-4 mb-6 tracking-tight">
            LA DISCIPLINA<br />
            <span className="text-grigio-acciaio">BATTE TUTTO</span>
          </h2>

          <p className="text-grigio-acciaio leading-relaxed text-lg">
            Nel mondo del Functional Fitness, ciò che fa davvero la differenza non è solo la voglia 
            di mettersi alla prova, ma la costanza con cui lo fai. La disciplina nell'allenamento 
            trasforma la fatica in risultati, l'abitudine in identità, il movimento in potenza.
          </p>
        </motion.div>

        {/* Principles */}
        <div className="space-y-12">
          {principles.map((principle, index) => (
            <motion.div
              key={principle.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.2 }}
              className="relative"
            >
              <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Left: Title and Number (alternates) */}
                <div className={`${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                  <div className="relative">
                    {/* Large Number Background */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={isInView ? { opacity: 0.1, scale: 1 } : {}}
                      transition={{ duration: 1, delay: 0.3 + index * 0.2 }}
                      className="absolute -top-8 -left-4 text-[10rem] font-bold text-arancione-brand leading-none pointer-events-none opacity-10"
                    >
                      0{index + 1}
                    </motion.div>

                    <div className="relative z-10">
                      <h3 className="text-4xl md:text-5xl font-mono font-bold text-bianco-luce mb-6">
                        {principle.title}
                      </h3>
                      
                      <motion.div
                        className="w-20 h-1 bg-gradient-to-r from-arancione-brand to-viola-brand mb-6"
                        initial={{ width: 0 }}
                        animate={isInView ? { width: 80 } : {}}
                        transition={{ duration: 0.8, delay: 0.5 + index * 0.2 }}
                      />

                      <p className="text-grigio-acciaio leading-relaxed mb-6">
                        {principle.description}
                      </p>

                      <blockquote className="border-l-2 border-arancione-brand pl-4 italic text-bianco-luce">
                        {principle.quote}
                      </blockquote>
                    </div>
                  </div>
                </div>

                {/* Right: Visual Element */}
                <div className={`${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
                  <motion.div
                    className="relative aspect-square group"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Background Image */}
                    <div className="absolute inset-0 overflow-hidden">
                      <div 
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                        style={{
                          backgroundImage: index === 0 
                            ? 'url(/images/hero-bg.webp)'
                            : index === 1
                            ? 'url(/images/training-2.webp)'
                            : 'url(/images/Box3.webp)',
                          filter: 'grayscale(100%) contrast(1.2)',
                        }}
                      />
                    </div>
                    
                    {/* Crosshair Box */}
                    <div className="absolute inset-0 border-2 border-grigio-acciaio border-opacity-30 p-8 hover:border-arancione-brand hover:border-opacity-50 transition-all duration-300 group">
                      {/* Corner Brackets */}
                      <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-arancione-brand opacity-50" />
                      <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-arancione-brand opacity-50" />
                      <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-arancione-brand opacity-50" />
                      <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-arancione-brand opacity-50" />
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-24 text-center"
        >
          <div className="inline-block max-w-2xl p-12 border-2 border-grigio-acciaio border-opacity-30">
            <p className="text-2xl md:text-3xl font-mono text-bianco-luce leading-relaxed">
              Oggi più forte<br />
              <span className="text-viola-brand">di ieri</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

