"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

export default function Training() {
  const ref = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  
  // Detect mobile and reduced motion preference
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);
    const handleChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);
  
  // Adjust margin based on device
  const viewMargin = isMobile ? "0px" : "-50px";
  const isInView = useInView(ref, { once: true, margin: viewMargin });

  const programs = [
    {
      code: "PROG_01",
      name: "WOD-FIT",
      description: "L'allenamento che trasforma davvero, è il programma di allenamento pensato per chi vuole migliorare forza, resistenza e forma fisica attraverso sessioni dinamiche, intense e sempre diverse. Ispirato alla metodologia dei WOD (Workout of the Day), unisce esercizi funzionali, lavoro cardiovascolare e potenziamento muscolare in un percorso completo e adatto a ogni livello.",
      duration: "Variabile",
      level: "Tutti i livelli",
      level_number: 2,
      intensity: 80
    }
  ];

  const wodSteps = [
    {
      id: 1,
      name: "WARM UP",
      description: "Preparazione del corpo e attivazione muscolare. Fase fondamentale per prevenire infortuni e preparare il sistema nervoso all'allenamento.",
      borderColor: "border-arancione-brand",
      textColor: "text-arancione-brand"
    },
    {
      id: 2,
      name: "DAILY TOPIC",
      description: "È l'argomento del giorno, la parte centrale di WOD-FIT, ogni giorno un argomento diverso, alternato tra Forza, Ginnastica, Weightlifting, Potenza e Aerobic Consistency.",
      borderColor: "border-viola-brand",
      textColor: "text-viola-brand"
    },
    {
      id: 3,
      name: "WOD",
      description: "Workout of the Day. La concretizzazione dell'allenamento: alta intensità, varietà di movimenti, sfida completa che mette insieme tutto ciò che hai preparato.",
      borderColor: "border-rosso-controllo",
      textColor: "text-rosso-controllo"
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
            opacity: 0.15
          }}
        />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: isMobile ? 0 : 30 }}
          animate={reducedMotion || isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: isMobile ? 0 : 30 }}
          transition={reducedMotion ? { duration: 0 } : { 
            duration: isMobile ? 0.4 : 0.6, 
            ease: isMobile ? "easeOut" : [0.16, 1, 0.3, 1]
          }}
          className="max-w-3xl mb-16"
          style={isMobile ? { 
            transform: 'translateZ(0)',
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden'
          } : { willChange: 'opacity, transform' }}
        >
          <motion.span 
            className="text-arancione-brand font-mono text-sm tracking-[0.3em] uppercase inline-flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
          >
            [ WOD-FIT ]
            <motion.span
              className="inline-block w-1.5 h-1.5 bg-arancione-brand"
              animate={isMobile ? { opacity: 1 } : { opacity: [1, 0, 1] }}
              transition={isMobile ? {} : { duration: 1.5, repeat: Infinity }}
            />
          </motion.span>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-mono font-bold text-bianco-luce mt-4 mb-6 tracking-tight">
            PROGRAMMA<br />
            <span className="text-bianco-luce/80">DI ALLENAMENTO</span>
          </h2>

          <p className="text-bianco-luce/85 leading-relaxed mb-12">
            Un programma pensato per farti evolvere. Completo, ad alta intensità, costruito per portarti ai tuoi risultati.
          </p>
        </motion.div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-6 max-w-2xl mx-auto">
          {programs.map((program, index) => (
            <motion.div
              key={program.code}
              initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: isMobile ? 0 : 20 }}
              animate={reducedMotion || isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: isMobile ? 0 : 20 }}
              transition={reducedMotion ? { duration: 0 } : { 
                duration: isMobile ? 0.3 : 0.5, 
                delay: isMobile ? 0 : 0.1 + index * 0.05, 
                ease: isMobile ? "easeOut" : [0.16, 1, 0.3, 1]
              }}
              whileHover={isMobile ? {} : { y: -8 }}
              className="group relative bg-nero-tattico p-8 border border-grigio-acciaio border-opacity-30 hover:border-arancione-brand hover:border-opacity-70 cursor-pointer"
              style={isMobile ? {
                transform: 'translateZ(0)',
                backfaceVisibility: 'hidden',
                WebkitBackfaceVisibility: 'hidden'
              } : { willChange: 'opacity, transform' }}
            >
              {/* Intensity Bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-grigio-acciaio bg-opacity-20 overflow-hidden">
                <motion.div
                  className="h-full bg-arancione-brand"
                  initial={{ width: 0 }}
                  animate={reducedMotion || isInView ? { width: `${program.intensity}%` } : { width: 0 }}
                  transition={reducedMotion ? { duration: 0 } : { 
                    duration: isMobile ? 0.5 : 1, 
                    delay: isMobile ? 0 : 0.5 + index * 0.1,
                    ease: isMobile ? "easeOut" : [0.16, 1, 0.3, 1]
                  }}
                  style={isMobile ? {
                    transform: 'translateZ(0)',
                    willChange: 'width'
                  } : { willChange: 'width' }}
                />
              </div>


              {/* Name */}
              <h3 className="text-2xl font-mono font-bold text-bianco-luce mb-4">
                {program.name}
              </h3>

              {/* Description */}
              <p className="text-sm text-bianco-luce/85 leading-relaxed mb-6 group-hover:text-bianco-luce transition-colors">
                {program.description}
              </p>

              {/* Meta Info */}
              <div className="space-y-2 text-xs font-mono">
                <div className="flex justify-between">
                  <span className="text-bianco-luce/70">DURATA:</span>
                  <span className="text-bianco-luce">{program.duration}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-bianco-luce/70">LIVELLO:</span>
                  <span className="text-bianco-luce">{program.level}</span>
                </div>
              </div>

              {/* Corner brackets */}
              <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-arancione-brand opacity-0 group-hover:opacity-100" style={isMobile ? { transition: 'opacity 0.3s ease' } : { willChange: 'opacity', transition: 'opacity 0.3s ease' }} />
              <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-arancione-brand opacity-0 group-hover:opacity-100" style={isMobile ? { transition: 'opacity 0.3s ease' } : { willChange: 'opacity', transition: 'opacity 0.3s ease' }} />
            </motion.div>
          ))}
        </div>

        {/* WOD Structure Section */}
        <motion.div
          initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: isMobile ? 0 : 30 }}
          animate={reducedMotion || isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: isMobile ? 0 : 30 }}
          transition={reducedMotion ? { duration: 0 } : { 
            duration: isMobile ? 0.4 : 0.8, 
            delay: isMobile ? 0 : 0.6,
            ease: isMobile ? "easeOut" : [0.16, 1, 0.3, 1]
          }}
          className="mt-20 max-w-4xl mx-auto"
          style={isMobile ? {
            transform: 'translateZ(0)',
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden'
          } : { willChange: 'opacity, transform' }}
        >
          <div className="text-center mb-12">
            <motion.span 
              className="text-arancione-brand font-mono text-sm tracking-[0.3em] uppercase inline-flex items-center gap-2"
              whileHover={isMobile ? {} : { scale: 1.05 }}
            >
              [ STRUTTURA WOD ]
              <motion.span
                className="inline-block w-1.5 h-1.5 bg-arancione-brand"
                animate={isMobile ? { opacity: 1 } : { opacity: [1, 0, 1] }}
                transition={isMobile ? {} : { duration: 1.5, repeat: Infinity }}
              />
            </motion.span>
            
            <h3 className="text-3xl md:text-4xl font-mono font-bold text-bianco-luce mt-4 mb-4">
              COME FUNZIONA WOD-FIT
            </h3>
            
            <p className="text-bianco-luce/85 text-sm mb-8">
              Ogni allenamento è strutturato in tre step progressivi che ti portano dalla preparazione alla concretizzazione.
            </p>
          </div>

          {/* WOD Steps */}
          <div className="space-y-6">
            {wodSteps.map((step, index) => {
              const isGradient = step.id === 3;
              return (
                <motion.div
                  key={step.id}
                  initial={reducedMotion ? { opacity: 1 } : { opacity: 0, x: isMobile ? 0 : (index % 2 === 0 ? -30 : 30) }}
                  animate={reducedMotion || isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isMobile ? 0 : (index % 2 === 0 ? -30 : 30) }}
                  transition={reducedMotion ? { duration: 0 } : { 
                    duration: isMobile ? 0.3 : 0.5, 
                    delay: isMobile ? 0 : 0.7 + index * 0.1,
                    ease: isMobile ? "easeOut" : [0.16, 1, 0.3, 1]
                  }}
                  className={`bg-nero-tattico border-2 ${isGradient ? '' : step.borderColor} border-opacity-30 p-8 hover:border-opacity-60 group relative`}
                  style={isGradient ? {
                    borderImage: 'linear-gradient(135deg, #FF6B35, #7C3AED) 1',
                    borderImageSlice: 1,
                    ...(isMobile ? {
                      transform: 'translateZ(0)',
                      backfaceVisibility: 'hidden',
                      WebkitBackfaceVisibility: 'hidden'
                    } : { willChange: 'opacity, transform' }),
                  } : (isMobile ? {
                    transform: 'translateZ(0)',
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden'
                  } : { willChange: 'opacity, transform' })}
                >
                  <div className="flex items-start gap-6">
                    {/* Step Number */}
                    {isGradient ? (
                      <div 
                        className="flex-shrink-0 w-16 h-16 flex items-center justify-center group-hover:opacity-100 relative p-[2px]"
                        style={{
                          background: 'linear-gradient(135deg, #FF6B35, #7C3AED)',
                          borderRadius: '0',
                          ...(isMobile ? {} : { willChange: 'opacity' }),
                        }}
                      >
                        <div className="w-full h-full bg-nero-tattico flex items-center justify-center">
                          <span 
                            className="font-mono font-bold text-2xl bg-clip-text text-transparent"
                            style={{
                              backgroundImage: 'linear-gradient(135deg, #FF6B35, #7C3AED)',
                            }}
                          >
                            {step.id}
                          </span>
                        </div>
                      </div>
                    ) : (
                      <div className={`flex-shrink-0 w-16 h-16 border-2 ${step.borderColor} border-opacity-50 flex items-center justify-center group-hover:border-opacity-100`} style={isMobile ? {} : { willChange: 'border-opacity' }}>
                        <span className={`${step.textColor} font-mono font-bold text-2xl`}>
                          {step.id}
                        </span>
                      </div>
                    )}
                    
                    {/* Step Content */}
                    <div className="flex-1">
                      {isGradient ? (
                        <h4 
                          className="font-mono text-lg tracking-widest uppercase mb-3 font-bold bg-clip-text text-transparent"
                          style={{
                            backgroundImage: 'linear-gradient(135deg, #FF6B35, #7C3AED)',
                          }}
                        >
                          {step.name}
                        </h4>
                      ) : (
                        <h4 className={`${step.textColor} font-mono text-lg tracking-widest uppercase mb-3 font-bold`}>
                          {step.name}
                        </h4>
                      )}
                      <p className="text-bianco-luce font-mono text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Corner brackets */}
                  {isGradient ? (
                    <>
                      <div className="absolute top-2 left-2 w-4 h-4 opacity-0 group-hover:opacity-100" style={isMobile ? { transition: 'opacity 0.3s ease' } : { willChange: 'opacity', transition: 'opacity 0.3s ease' }}>
                        <div className="absolute top-0 left-0 w-4 h-[2px]" style={{ background: 'linear-gradient(90deg, #FF6B35, #7C3AED)' }} />
                        <div className="absolute top-0 left-0 w-[2px] h-4" style={{ background: 'linear-gradient(180deg, #FF6B35, #7C3AED)' }} />
                      </div>
                      <div className="absolute bottom-2 right-2 w-4 h-4 opacity-0 group-hover:opacity-100" style={isMobile ? { transition: 'opacity 0.3s ease' } : { willChange: 'opacity', transition: 'opacity 0.3s ease' }}>
                        <div className="absolute bottom-0 right-0 w-4 h-[2px]" style={{ background: 'linear-gradient(90deg, #7C3AED, #FF6B35)' }} />
                        <div className="absolute bottom-0 right-0 w-[2px] h-4" style={{ background: 'linear-gradient(180deg, #7C3AED, #FF6B35)' }} />
                      </div>
                    </>
                  ) : (
                    <>
                      <div className={`absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 ${step.borderColor} opacity-0 group-hover:opacity-100`} style={isMobile ? { transition: 'opacity 0.3s ease' } : { willChange: 'opacity', transition: 'opacity 0.3s ease' }} />
                      <div className={`absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 ${step.borderColor} opacity-0 group-hover:opacity-100`} style={isMobile ? { transition: 'opacity 0.3s ease' } : { willChange: 'opacity', transition: 'opacity 0.3s ease' }} />
                    </>
                  )}
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: isMobile ? 0 : 30 }}
          animate={reducedMotion || isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: isMobile ? 0 : 30 }}
          transition={reducedMotion ? { duration: 0 } : { 
            duration: isMobile ? 0.4 : 0.8, 
            delay: isMobile ? 0 : 0.8,
            ease: isMobile ? "easeOut" : [0.16, 1, 0.3, 1]
          }}
          className="mt-16 text-center"
          style={isMobile ? {
            transform: 'translateZ(0)',
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden'
          } : { willChange: 'opacity, transform' }}
        >
          <motion.a
            href="#contact"
            className="inline-block px-8 py-4 bg-rosso-controllo text-bianco-luce font-mono text-sm font-bold hover:bg-rosso-battito transition-colors relative overflow-hidden"
            whileHover={isMobile ? {} : { scale: 1.05 }}
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
