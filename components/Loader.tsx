"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function Loader() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsLoading(false), 500);
          return 100;
        }
        return prev + 10;
      });
    }, 150);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[9999] bg-nero-tattico flex items-center justify-center"
        >
          <div className="relative">
            {/* Crosshair Loader */}
            <motion.div
              className="relative w-32 h-32"
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              {/* Outer circle */}
              <div className="absolute inset-0 border-2 border-grigio-acciaio border-opacity-30 rounded-full" />
              
              {/* Crosshair lines */}
              <div className="absolute top-1/2 left-0 w-full h-[2px] bg-grigio-acciaio opacity-30" />
              <div className="absolute left-1/2 top-0 h-full w-[2px] bg-grigio-acciaio opacity-30" />
              
              {/* Center dot */}
              <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-rosso-controllo rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [1, 0.5, 1],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />

              {/* Progress arc */}
              <svg className="absolute inset-0 -rotate-90">
                <circle
                  cx="64"
                  cy="64"
                  r="60"
                  fill="none"
                  stroke="#B31010"
                  strokeWidth="2"
                  strokeDasharray={`${2 * Math.PI * 60}`}
                  strokeDashoffset={`${2 * Math.PI * 60 * (1 - progress / 100)}`}
                  className="transition-all duration-300"
                />
              </svg>
            </motion.div>

            {/* Brand Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="absolute -bottom-16 left-1/2 -translate-x-1/2 text-center whitespace-nowrap"
            >
              <div className="text-xl font-mono font-bold tracking-wider mb-2">
                <span className="text-bianco-luce">OTHERWISE</span>
                <span className="text-rosso-controllo ml-1">_</span>
              </div>
              <div className="text-xs font-mono text-grigio-acciaio tracking-[0.3em]">
                ATHLETICS EVOLVED
              </div>
            </motion.div>

            {/* Progress percentage */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-28 left-1/2 -translate-x-1/2 text-xs font-mono text-grigio-acciaio"
            >
              {progress}%
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

