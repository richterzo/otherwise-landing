"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Gallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Gallery images - Real Otherwise gym photos (3 photos)
  const images = [
    {
      id: 1,
      url: "/images/Box0.webp",
      title: "Training Area",
      category: "BOX"
    },
    {
      id: 2,
      url: "/images/Box1.webp",
      title: "Main Box",
      category: "BOX"
    },
    {
      id: 3,
      url: "/images/Box2.webp",
      title: "Equipment Zone",
      category: "BOX"
    }
  ];

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section id="gallery" className="relative py-32 bg-nero-tattico overflow-hidden" ref={ref}>
      {/* Background accent */}
      <motion.div 
        className="absolute top-0 right-0 w-1/3 h-[1px] bg-gradient-to-l from-rosso-controllo to-transparent opacity-50"
        initial={{ width: 0 }}
        animate={isInView ? { width: '33%' } : {}}
        transition={{ duration: 1, delay: 0.3 }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
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

        {/* Gallery Carousel */}
        <div className="relative">
          {/* Carousel Container */}
          <div className="relative overflow-hidden rounded-sm">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -300 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="relative aspect-[16/10] md:aspect-[21/9] lg:aspect-[3/1] overflow-hidden cursor-pointer group"
                onClick={() => setSelectedImage(images[currentIndex].id)}
              >
                {/* Image */}
                <motion.div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${images[currentIndex].url})`,
                    filter: 'grayscale(100%) contrast(1.2)',
                  }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.8 }}
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-nero-tattico via-nero-tattico/40 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />

                {/* Border Frame */}
                <div className="absolute inset-0 border-2 border-grigio-acciaio border-opacity-30 group-hover:border-rosso-controllo group-hover:border-opacity-60 transition-all duration-300">
                  {/* Corner Brackets */}
                  <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-rosso-controllo opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-rosso-controllo opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-rosso-controllo opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-rosso-controllo opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Content */}
                <div className="absolute inset-0 p-6 md:p-12 flex flex-col justify-end">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <span className="text-rosso-controllo font-mono text-xs md:text-sm tracking-widest uppercase mb-2 block">
                      {images[currentIndex].category}
                    </span>
                    <h3 className="text-bianco-luce font-mono font-bold text-2xl md:text-4xl lg:text-5xl">
                      {images[currentIndex].title}
                    </h3>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons - Desktop */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 bg-nero-tattico/80 hover:bg-rosso-controllo border-2 border-grigio-acciaio hover:border-rosso-controllo transition-all duration-300 flex items-center justify-center z-10 opacity-0 group-hover:opacity-100"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6 md:w-7 md:h-7 text-bianco-luce" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 bg-nero-tattico/80 hover:bg-rosso-controllo border-2 border-grigio-acciaio hover:border-rosso-controllo transition-all duration-300 flex items-center justify-center z-10 opacity-0 group-hover:opacity-100"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6 md:w-7 md:h-7 text-bianco-luce" />
            </button>
          </div>

          {/* Dots Indicator - Mobile & Desktop */}
          <div className="flex justify-center gap-3 mt-6">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'w-8 bg-rosso-controllo'
                    : 'w-2 bg-grigio-acciaio hover:bg-grigio-acciaio/50'
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
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
              alt={images.find(img => img.id === selectedImage)?.title || "Gallery"}
              className="w-full h-auto max-h-[90vh] object-contain"
              style={{ filter: 'grayscale(100%) contrast(1.2)' }}
            />
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}

