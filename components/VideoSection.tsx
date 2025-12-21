"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Play, Pause } from "lucide-react";

export default function VideoSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [playingVideo, setPlayingVideo] = useState<number | null>(null);
  const videoRefs = useRef<{ [key: number]: HTMLVideoElement | null }>({});

  const videos = [
    {
      id: 1,
      src: "/video-01.mp4",
      title: "Training Session",
      category: "WORKOUT"
    },
    {
      id: 2,
      src: "/video-02.mp4",
      title: "Box Life",
      category: "COMMUNITY"
    },
    {
      id: 3,
      src: "/video-03.mp4",
      title: "Intensity",
      category: "TRAINING"
    }
  ];

  const toggleVideo = (id: number) => {
    const video = videoRefs.current[id];
    if (playingVideo === id) {
      // Pause current video
      if (video) {
        video.pause();
      }
      setPlayingVideo(null);
    } else {
      // Pause all other videos
      Object.values(videoRefs.current).forEach((v) => {
        if (v && v !== video) {
          v.pause();
        }
      });
      // Play selected video
      if (video) {
        video.play();
      }
      setPlayingVideo(id);
    }
  };

  return (
    <section id="videos" className="relative py-32 bg-nero-tattico overflow-hidden" ref={ref}>
      {/* Background accent */}
      <motion.div 
        className="absolute top-0 left-0 w-1/3 h-[1px] bg-viola-brand opacity-50"
        initial={{ width: 0 }}
        animate={isInView ? { width: '33%' } : {}}
        transition={{ duration: 1, delay: 0.3 }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <motion.span 
            className="text-viola-brand font-mono text-sm tracking-[0.3em] uppercase inline-flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
          >
            [ VIDEO ]
            <motion.span
              className="inline-block w-1.5 h-1.5 bg-viola-brand"
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </motion.span>
          
          <h2 className="font-airborne text-5xl md:text-7xl text-bianco-luce mt-6 mb-6">
            IN AZIONE
          </h2>

          <p className="text-grigio-acciaio text-lg max-w-2xl mx-auto">
            Guarda l'intensità, la disciplina e la community che rendono Otherwise unico.
          </p>
        </motion.div>

        {/* Videos Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              className="relative group cursor-pointer"
              onClick={() => toggleVideo(video.id)}
            >
              <div className="relative aspect-video overflow-hidden border-2 border-grigio-acciaio border-opacity-30 group-hover:border-viola-brand group-hover:border-opacity-60 transition-all duration-300">
                <video
                  ref={(el) => {
                    videoRefs.current[video.id] = el;
                  }}
                  src={video.src}
                  className="w-full h-full object-cover"
                  loop
                  muted
                  playsInline
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-nero-tattico/40 group-hover:bg-nero-tattico/20 transition-all duration-300 flex items-center justify-center">
                  {playingVideo !== video.id && (
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileHover={{ scale: 1.1 }}
                      className="w-16 h-16 bg-viola-brand/80 rounded-full flex items-center justify-center"
                    >
                      <Play className="w-8 h-8 text-bianco-luce ml-1" fill="currentColor" />
                    </motion.div>
                  )}
                  {playingVideo === video.id && (
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="w-16 h-16 bg-viola-brand/80 rounded-full flex items-center justify-center"
                    >
                      <Pause className="w-8 h-8 text-bianco-luce" fill="currentColor" />
                    </motion.div>
                  )}
                </div>

                {/* Corner Brackets */}
                <div className="absolute top-2 left-2 w-6 h-6 border-t-2 border-l-2 border-viola-brand opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-2 right-2 w-6 h-6 border-t-2 border-r-2 border-viola-brand opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-2 left-2 w-6 h-6 border-b-2 border-l-2 border-viola-brand opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-2 right-2 w-6 h-6 border-b-2 border-r-2 border-viola-brand opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Video Info */}
              <div className="mt-4">
                <span className="text-viola-brand font-mono text-xs tracking-widest uppercase mb-2 block">
                  {video.category}
                </span>
                <h3 className="text-bianco-luce font-mono font-bold text-lg">
                  {video.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

