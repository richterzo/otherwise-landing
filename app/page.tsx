"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Training from "@/components/Training";
import Mindset from "@/components/Mindset";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
// import Loader from "@/components/Loader"; // Uncomment per abilitare il preloader

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);

  return (
    <main ref={containerRef} className="relative">
      {/* <Loader /> */}
      <Navigation />
      
      {/* Crosshair overlay - sottile elemento decorativo */}
      <motion.div 
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-50"
        style={{ opacity }}
      >
        <div className="relative w-8 h-8">
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-rosso-controllo opacity-20" />
          <div className="absolute left-1/2 top-0 h-full w-[1px] bg-rosso-controllo opacity-20" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-rosso-controllo rounded-full shadow-[0_0_10px_rgba(179,16,16,0.8)]" />
        </div>
      </motion.div>

      <Hero />
      <About />
      <Training />
      <Mindset />
      <CTA />
      <Footer />
    </main>
  );
}

