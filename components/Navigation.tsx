"use client";

import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { useState, useEffect } from "react";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const { scrollY } = useScroll();
  
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(10, 10, 10, 0)", "rgba(10, 10, 10, 0.98)"]
  );

  const borderOpacity = useTransform(
    scrollY,
    [0, 100],
    [0, 0.3]
  );

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "training", "mindset", "gallery", "contact"];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      setActiveSection(current || "");
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "MISSIONE", href: "#about", id: "about" },
    { label: "TRAINING", href: "#training", id: "training" },
    { label: "MINDSET", href: "#mindset", id: "mindset" },
    { label: "GALLERY", href: "#gallery", id: "gallery" },
    { label: "CONTATTI", href: "#contact", id: "contact" },
  ];

  return (
    <motion.nav
      role="navigation"
      aria-label="Main navigation"
      style={{ 
        backgroundColor,
      }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "backdrop-blur-md shadow-lg" : ""
      }`}
    >
      <motion.div 
        className="absolute bottom-0 left-0 right-0 h-[1px] bg-grigio-cemento"
        style={{ opacity: borderOpacity }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#"
            aria-label="Otherwise Athletics Evolved - Home"
            className="relative group"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
          >
            <img 
              src="/logo-final.png" 
              alt="Otherwise CrossFit" 
              className="h-12 w-auto"
              style={{ filter: 'brightness(0) invert(1)' }}
            />
          </motion.a>

          {/* Navigation Items */}
          <motion.div
            className="hidden lg:flex items-center gap-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {navItems.map((item, index) => (
              <motion.a
                key={item.href}
                href={item.href}
                aria-label={`Vai a ${item.label}`}
                aria-current={activeSection === item.id ? 'page' : undefined}
                className={`relative text-sm font-mono transition-colors group focus:outline-none focus:ring-2 focus:ring-rosso-controllo focus:ring-offset-2 focus:ring-offset-nero-tattico ${
                  activeSection === item.id 
                    ? 'text-bianco-luce' 
                    : 'text-grigio-acciaio hover:text-bianco-luce'
                }`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                whileHover={{ y: -2 }}
              >
                {item.label}
                
                {/* Active indicator */}
                <motion.span
                  className="absolute -bottom-1 left-0 h-[2px] bg-rosso-controllo"
                  initial={{ width: 0 }}
                  animate={{ width: activeSection === item.id ? '100%' : 0 }}
                  transition={{ duration: 0.3 }}
                />
                
                {/* Hover underline */}
                <motion.span
                  className="absolute -bottom-1 left-0 h-[1px] bg-bianco-luce opacity-0 group-hover:opacity-50"
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            ))}
            
            {/* CTA Button with advanced hover */}
            <motion.a
              href="#contact"
              aria-label="Inizia ora - Contattaci"
              className="group relative px-5 py-2.5 bg-rosso-controllo text-bianco-luce text-sm font-mono font-bold overflow-hidden focus:outline-none focus:ring-2 focus:ring-bianco-luce focus:ring-offset-2 focus:ring-offset-nero-tattico"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.5 }}
            >
              <span className="relative z-10">INIZIA ORA</span>
              
              {/* Hover shine effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-bianco-luce to-transparent opacity-0 group-hover:opacity-30"
                initial={{ x: "-100%" }}
                whileHover={{ x: "200%" }}
                transition={{ duration: 0.6 }}
              />
              
              {/* Corner accent */}
              <motion.div
                className="absolute top-0 right-0 w-0 h-0 border-t-8 border-r-8 border-bianco-luce opacity-0 group-hover:opacity-30"
                whileHover={{ opacity: 0.3 }}
                transition={{ duration: 0.2 }}
              />
            </motion.a>
          </motion.div>

          {/* Mobile CTA */}
          <motion.a
            href="#contact"
            className="lg:hidden px-5 py-2.5 bg-rosso-controllo text-bianco-luce text-sm font-mono font-bold"
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            INIZIA
          </motion.a>
        </div>
      </div>

      {/* Scan line effect on nav */}
      {isScrolled && (
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-[1px] bg-rosso-controllo"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6 }}
          style={{ transformOrigin: "left" }}
        />
      )}
    </motion.nav>
  );
}
