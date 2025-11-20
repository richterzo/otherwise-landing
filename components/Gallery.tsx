"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

export default function Gallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  // Gallery images - Replace with real box photos
  const images = [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80",
      title: "Main Training Area",
      category: "BOX"
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80",
      title: "Olympic Lifting Zone",
      category: "EQUIPMENT"
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80",
      title: "Group Classes",
      category: "TRAINING"
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=800&q=80",
      title: "Cardio Equipment",
      category: "EQUIPMENT"
    },
    {
      id: 5,
      url: "https://images.unsplash.com/photo-1623874228601-f4193c7b1818?w=800&q=80",
      title: "Pull-up Rigs",
      category: "BOX"
    },
    {
      id: 6,
      url: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80",
      title: "Community Training",
      category: "TRAINING"
    }
  ];

  return (
    <section id="gallery" className="relative py-32 bg-nero-ombra overflow-hidden" ref={ref}>
      {/* Background accent */}
      <motion.div 
        className="absolute top-0 right-0 w-1/3 h-[1px] bg-gradient-to-l from-rosso-controllo to-transparent opacity-50"
        initial={{ width: 0 }}
        animate={isInView ? { width: '33%' } : {}}
        transition={{ duration: 1, delay: 0.3 }}
      />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.span 
            className="text-rosso-controllo font-mono text-sm tracking-[0.3em] uppercase inline-flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
          >
            [ GALLERY ]
            <motion.span
              className="inline-block w-1.5 h-1.5 bg-rosso-controllo"
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </motion.span>
          
          <h2 className="font-airborne text-5xl md:text-7xl text-bianco-luce mt-6 mb-6">
            LA BOX
          </h2>

          <p className="text-grigio-acciaio text-lg max-w-2xl mx-auto">
            300m² di spazio dedicato. Attrezzatura professionale. 
            L'ambiente perfetto per superare i tuoi limiti.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="group relative aspect-square overflow-hidden cursor-pointer"
              onClick={() => setSelectedImage(image.id)}
            >
              {/* Image */}
              <motion.div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${image.url})`,
                  filter: 'grayscale(100%) contrast(1.2)',
                }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.6 }}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-nero-tattico via-nero-tattico/60 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300" />

              {/* Border Frame */}
              <div className="absolute inset-0 border border-grigio-acciaio border-opacity-20 group-hover:border-rosso-controllo group-hover:border-opacity-60 transition-all duration-300">
                {/* Corner Brackets */}
                <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-rosso-controllo opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-rosso-controllo opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-rosso-controllo opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-rosso-controllo opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="text-rosso-controllo font-mono text-xs tracking-widest uppercase mb-2 block">
                    {image.category}
                  </span>
                  <h3 className="text-bianco-luce font-mono font-bold text-lg">
                    {image.title}
                  </h3>
                </motion.div>
              </div>

              {/* Hover Icon */}
              <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                whileHover={{ scale: 1.2 }}
              >
                <div className="w-12 h-12 border-2 border-rosso-controllo flex items-center justify-center">
                  <svg className="w-6 h-6 text-rosso-controllo" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="inline-block p-8 border border-grigio-acciaio border-opacity-30 hover:border-rosso-controllo hover:border-opacity-50 transition-all duration-300">
            <p className="text-grigio-acciaio mb-4 font-mono">
              Vieni a vedere la box di persona
            </p>
            <motion.a
              href="#contact"
              className="inline-block px-8 py-3 bg-rosso-controllo text-bianco-luce font-mono font-bold text-sm hover:bg-rosso-battito transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              PRENOTA VISITA
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Lightbox Modal (optional enhancement) */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-nero-tattico bg-opacity-95 flex items-center justify-center p-6"
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
            className="relative max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-bianco-luce hover:text-rosso-controllo transition-colors"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <img
              src={images.find(img => img.id === selectedImage)?.url}
              alt="Gallery"
              className="w-full h-auto"
              style={{ filter: 'grayscale(100%) contrast(1.2)' }}
            />
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}

