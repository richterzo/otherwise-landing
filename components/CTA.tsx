'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { MapPin, Mail, Phone, ChevronDown, ChevronUp } from 'lucide-react'

export default function CTA() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [showFullSchedule, setShowFullSchedule] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section
      id="contact"
      className="relative py-16 sm:py-24 lg:py-32 bg-nero-tattico overflow-hidden"
      ref={ref}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(255, 107, 53, 0.3) 1px, transparent 1px)`,
            backgroundSize: '30px 30px',
          }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="text-arancione-brand font-mono text-xs sm:text-sm tracking-[0.3em] uppercase">
            [CONTATTI]
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-airborne text-bianco-luce mt-4 mb-4 sm:mb-6 tracking-tight">
            INIZIA
            <br />
            <span className="text-bianco-luce/80">OGGI</span>
          </h2>

          <p className="text-sm sm:text-base text-bianco-luce/85 leading-relaxed max-w-2xl mx-auto px-4">
            Vieni a vedere il box, parla con i coach, prova i nostri corsi. Poi
            scegli il programma che fa per te.
          </p>
        </motion.div>

        {/* 2. Image and Schedule Together - Above Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
          className="mb-12 sm:mb-16 max-w-4xl mx-auto"
        >
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex justify-center"
            >
              <div className="relative w-full max-w-xs sm:max-w-sm aspect-square border-2 border-grigio-acciaio border-opacity-30 overflow-hidden group">
                <img
                  src="/images/contact-small.webp"
                  alt="Otherwise Athletics"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Corner brackets */}
                <div className="absolute top-2 left-2 w-4 h-4 sm:w-6 sm:h-6 border-t-2 border-l-2 border-arancione-brand opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-2 right-2 w-4 h-4 sm:w-6 sm:h-6 border-t-2 border-r-2 border-arancione-brand opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-2 left-2 w-4 h-4 sm:w-6 sm:h-6 border-b-2 border-l-2 border-arancione-brand opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-2 right-2 w-4 h-4 sm:w-6 sm:h-6 border-b-2 border-r-2 border-arancione-brand opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>

            {/* ORARI WOD-FIT */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="text-xs sm:text-sm font-mono text-bianco-luce/70 uppercase tracking-wider">
                  ORARI WOD-FIT
                </div>
                <button
                  onClick={() => setShowFullSchedule(!showFullSchedule)}
                  className="flex items-center gap-1 text-xs font-mono text-arancione-brand hover:text-arancione-brand/80 transition-colors"
                >
                  {showFullSchedule ? (
                    <>
                      <span>Nascondi</span>
                      <ChevronUp size={14} />
                    </>
                  ) : (
                    <>
                      <span>Vedi dettaglio</span>
                      <ChevronDown size={14} />
                    </>
                  )}
                </button>
              </div>

              {/* Simplified Schedule */}
              {!showFullSchedule && (
                <div className="bg-nero-tattico border border-grigio-acciaio border-opacity-30 p-4 sm:p-6">
                  <div className="space-y-4 font-mono text-sm sm:text-base">
                    <div>
                      <div className="text-bianco-luce/70 mb-2 text-xs sm:text-sm uppercase tracking-wider">
                        Giorni feriali (lun–ven)
                      </div>
                      <div className="text-bianco-luce/85 space-y-1">
                        <div>
                          Mattina:{' '}
                          <span className="text-arancione-brand">
                            06:30 – 14:00
                          </span>
                        </div>
                        <div>
                          Pomeriggio / sera:{' '}
                          <span className="text-arancione-brand">
                            17:00 – 20:00
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="pt-3 border-t border-grigio-acciaio border-opacity-30">
                      <div className="text-bianco-luce/70 mb-2 text-xs sm:text-sm uppercase tracking-wider">
                        Weekend
                      </div>
                      <div className="text-bianco-luce/85 space-y-1">
                        <div>
                          Sabato:{' '}
                          <span className="text-arancione-brand">
                            09:00 – 10:00
                          </span>
                        </div>
                        <div>
                          Domenica:{' '}
                          <span className="text-arancione-brand">
                            10:00 – 11:00
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Full Schedule Table - Expanded */}
              {showFullSchedule && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-3 overflow-x-auto"
                >
                  <div className="inline-block min-w-full">
                    <table className="w-full border-collapse bg-nero-tattico border border-grigio-acciaio border-opacity-30 text-[10px] sm:text-xs">
                      <thead>
                        <tr className="bg-grigio-cemento">
                          <th className="border border-grigio-acciaio border-opacity-30 px-2 py-1.5 text-left font-mono text-bianco-luce/70 uppercase tracking-wider">
                            Ora
                          </th>
                          <th className="border border-grigio-acciaio border-opacity-30 px-1 py-1.5 text-center font-mono text-bianco-luce/70 uppercase tracking-wider">
                            Lun
                          </th>
                          <th className="border border-grigio-acciaio border-opacity-30 px-1 py-1.5 text-center font-mono text-bianco-luce/70 uppercase tracking-wider">
                            Mar
                          </th>
                          <th className="border border-grigio-acciaio border-opacity-30 px-1 py-1.5 text-center font-mono text-bianco-luce/70 uppercase tracking-wider">
                            Mer
                          </th>
                          <th className="border border-grigio-acciaio border-opacity-30 px-1 py-1.5 text-center font-mono text-bianco-luce/70 uppercase tracking-wider">
                            Gio
                          </th>
                          <th className="border border-grigio-acciaio border-opacity-30 px-1 py-1.5 text-center font-mono text-bianco-luce/70 uppercase tracking-wider">
                            Ven
                          </th>
                          <th className="border border-grigio-acciaio border-opacity-30 px-1 py-1.5 text-center font-mono text-bianco-luce/70 uppercase tracking-wider">
                            Sab
                          </th>
                          <th className="border border-grigio-acciaio border-opacity-30 px-1 py-1.5 text-center font-mono text-bianco-luce/70 uppercase tracking-wider">
                            Dom
                          </th>
                        </tr>
                      </thead>
                      <tbody className="font-mono">
                        <tr>
                          <td className="border border-grigio-acciaio border-opacity-30 px-2 py-1.5 text-bianco-luce/80">
                            06:30
                          </td>
                          <td className="border border-grigio-acciaio border-opacity-30 px-1 py-1.5 text-center text-arancione-brand">
                            WOD-FIT
                          </td>
                          <td className="border border-grigio-acciaio border-opacity-30 px-1 py-1.5 text-center"></td>
                          <td className="border border-grigio-acciaio border-opacity-30 px-1 py-1.5 text-center text-arancione-brand">
                            WOD-FIT
                          </td>
                          <td className="border border-grigio-acciaio border-opacity-30 px-1 py-1.5 text-center"></td>
                          <td className="border border-grigio-acciaio border-opacity-30 px-1 py-1.5 text-center text-arancione-brand">
                            WOD-FIT
                          </td>
                          <td className="border border-grigio-acciaio border-opacity-30 px-1 py-1.5 text-center"></td>
                          <td className="border border-grigio-acciaio border-opacity-30 px-1 py-1.5 text-center"></td>
                        </tr>
                        <tr>
                          <td className="border border-grigio-acciaio border-opacity-30 px-2 py-1.5 text-bianco-luce/80">
                            09:00
                          </td>
                          <td className="border border-grigio-acciaio border-opacity-30 px-1 py-1.5 text-center"></td>
                          <td className="border border-grigio-acciaio border-opacity-30 px-1 py-1.5 text-center"></td>
                          <td className="border border-grigio-acciaio border-opacity-30 px-1 py-1.5 text-center"></td>
                          <td className="border border-grigio-acciaio border-opacity-30 px-1 py-1.5 text-center"></td>
                          <td className="border border-grigio-acciaio border-opacity-30 px-1 py-1.5 text-center"></td>
                          <td className="border border-grigio-acciaio border-opacity-30 px-1 py-1.5 text-center text-arancione-brand">
                            WOD-FIT
                          </td>
                          <td className="border border-grigio-acciaio border-opacity-30 px-1 py-1.5 text-center"></td>
                        </tr>
                        <tr>
                          <td className="border border-grigio-acciaio border-opacity-30 px-2 py-1.5 text-bianco-luce/80">
                            10:00
                          </td>
                          <td className="border border-grigio-acciaio border-opacity-30 px-1 py-1.5 text-center text-arancione-brand">
                            WOD-FIT
                          </td>
                          <td className="border border-grigio-acciaio border-opacity-30 px-1 py-1.5 text-center text-arancione-brand">
                            WOD-FIT
                          </td>
                          <td className="border border-grigio-acciaio border-opacity-30 px-1 py-1.5 text-center text-arancione-brand">
                            WOD-FIT
                          </td>
                          <td className="border border-grigio-acciaio border-opacity-30 px-1 py-1.5 text-center text-arancione-brand">
                            WOD-FIT
                          </td>
                          <td className="border border-grigio-acciaio border-opacity-30 px-1 py-1.5 text-center text-arancione-brand">
                            WOD-FIT
                          </td>
                          <td className="border border-grigio-acciaio border-opacity-30 px-1 py-1.5 text-center"></td>
                          <td className="border border-grigio-acciaio border-opacity-30 px-1 py-1.5 text-center text-arancione-brand">
                            WOD-FIT
                          </td>
                        </tr>
                        <tr>
                          <td className="border border-grigio-acciaio border-opacity-30 px-2 py-1.5 text-bianco-luce/80">
                            11:00
                          </td>
                          <td className="border border-grigio-acciaio border-opacity-30 px-1 py-1.5 text-center"></td>
                          <td className="border border-grigio-acciaio border-opacity-30 px-1 py-1.5 text-center"></td>
                          <td className="border border-grigio-acciaio border-opacity-30 px-1 py-1.5 text-center"></td>
                          <td className="border border-grigio-acciaio border-opacity-30 px-1 py-1.5 text-center"></td>
                          <td className="border border-grigio-acciaio border-opacity-30 px-1 py-1.5 text-center"></td>
                          <td className="border border-grigio-acciaio border-opacity-30 px-1 py-1.5 text-center"></td>
                          <td className="border border-grigio-acciaio border-opacity-30 px-1 py-1.5 text-center"></td>
                        </tr>
                        <tr>
                          <td className="border border-grigio-acciaio border-opacity-30 px-2 py-1.5 text-bianco-luce/80">
                            12:00
                          </td>
                          <td className="border border-grigio-acciaio border-opacity-30 px-1 py-1.5 text-center"></td>
                          <td className="border border-grigio-acciaio border-opacity-30 px-1 py-1.5 text-center"></td>
                          <td className="border border-grigio-acciaio border-opacity-30 px-1 py-1.5 text-center"></td>
                          <td className="border border-grigio-acciaio border-opacity-30 px-1 py-1.5 text-center"></td>
                          <td className="border border-grigio-acciaio border-opacity-30 px-1 py-1.5 text-center"></td>
                          <td className="border border-grigio-acciaio border-opacity-30 px-1 py-1.5 text-center"></td>
                          <td className="border border-grigio-acciaio border-opacity-30 px-1 py-1.5 text-center"></td>
                        </tr>
                        <tr>
                          <td className="border border-grigio-acciaio border-opacity-30 px-2 py-1.5 text-bianco-luce/80">
                            13:00
                          </td>
                          <td className="border border-grigio-acciaio border-opacity-30 px-1 py-1.5 text-center text-arancione-brand">
                            WOD-FIT
                          </td>
                          <td className="border border-grigio-acciaio border-opacity-30 px-1 py-1.5 text-center text-arancione-brand">
                            WOD-FIT
                          </td>
                          <td className="border border-grigio-acciaio border-opacity-30 px-1 py-1.5 text-center text-arancione-brand">
                            WOD-FIT
                          </td>
                          <td className="border border-grigio-acciaio border-opacity-30 px-1 py-1.5 text-center text-arancione-brand">
                            WOD-FIT
                          </td>
                          <td className="border border-grigio-acciaio border-opacity-30 px-1 py-1.5 text-center text-arancione-brand">
                            WOD-FIT
                          </td>
                          <td className="border border-grigio-acciaio border-opacity-30 px-1 py-1.5 text-center"></td>
                          <td className="border border-grigio-acciaio border-opacity-30 px-1 py-1.5 text-center"></td>
                        </tr>
                        <tr>
                          <td className="border border-grigio-acciaio border-opacity-30 px-2 py-1.5 text-bianco-luce/80">
                            14:00
                          </td>
                          <td className="border border-grigio-acciaio border-opacity-30 px-1 py-1.5 text-center"></td>
                          <td className="border border-grigio-acciaio border-opacity-30 px-1 py-1.5 text-center"></td>
                          <td className="border border-grigio-acciaio border-opacity-30 px-1 py-1.5 text-center"></td>
                          <td className="border border-grigio-acciaio border-opacity-30 px-1 py-1.5 text-center"></td>
                          <td className="border border-grigio-acciaio border-opacity-30 px-1 py-1.5 text-center"></td>
                          <td className="border border-grigio-acciaio border-opacity-30 px-1 py-1.5 text-center"></td>
                          <td className="border border-grigio-acciaio border-opacity-30 px-1 py-1.5 text-center"></td>
                        </tr>
                        <tr>
                          <td className="border border-grigio-acciaio border-opacity-30 px-2 py-1.5 text-bianco-luce/80">
                            15:00
                          </td>
                          <td className="border border-grigio-acciaio border-opacity-30 px-1 py-1.5 text-center"></td>
                          <td className="border border-grigio-acciaio border-opacity-30 px-1 py-1.5 text-center"></td>
                          <td className="border border-grigio-acciaio border-opacity-30 px-1 py-1.5 text-center"></td>
                          <td className="border border-grigio-acciaio border-opacity-30 px-1 py-1.5 text-center"></td>
                          <td className="border border-grigio-acciaio border-opacity-30 px-1 py-1.5 text-center"></td>
                          <td className="border border-grigio-acciaio border-opacity-30 px-1 py-1.5 text-center"></td>
                          <td className="border border-grigio-acciaio border-opacity-30 px-1 py-1.5 text-center"></td>
                        </tr>
                        <tr>
                          <td className="border border-grigio-acciaio border-opacity-30 px-2 py-1.5 text-bianco-luce/80">
                            16:00
                          </td>
                          <td className="border border-grigio-acciaio border-opacity-30 px-1 py-1.5 text-center"></td>
                          <td className="border border-grigio-acciaio border-opacity-30 px-1 py-1.5 text-center"></td>
                          <td className="border border-grigio-acciaio border-opacity-30 px-1 py-1.5 text-center"></td>
                          <td className="border border-grigio-acciaio border-opacity-30 px-1 py-1.5 text-center"></td>
                          <td className="border border-grigio-acciaio border-opacity-30 px-1 py-1.5 text-center"></td>
                          <td className="border border-grigio-acciaio border-opacity-30 px-1 py-1.5 text-center"></td>
                          <td className="border border-grigio-acciaio border-opacity-30 px-1 py-1.5 text-center"></td>
                        </tr>
                        <tr>
                          <td className="border border-grigio-acciaio border-opacity-30 px-2 py-1.5 text-bianco-luce/80">
                            17:00
                          </td>
                          <td className="border border-grigio-acciaio border-opacity-30 px-1 py-1.5 text-center text-arancione-brand">
                            WOD-FIT
                          </td>
                          <td className="border border-grigio-acciaio border-opacity-30 px-1 py-1.5 text-center text-arancione-brand">
                            WOD-FIT
                          </td>
                          <td className="border border-grigio-acciaio border-opacity-30 px-1 py-1.5 text-center text-arancione-brand">
                            WOD-FIT
                          </td>
                          <td className="border border-grigio-acciaio border-opacity-30 px-1 py-1.5 text-center text-arancione-brand">
                            WOD-FIT
                          </td>
                          <td className="border border-grigio-acciaio border-opacity-30 px-1 py-1.5 text-center text-arancione-brand">
                            WOD-FIT
                          </td>
                          <td className="border border-grigio-acciaio border-opacity-30 px-1 py-1.5 text-center"></td>
                          <td className="border border-grigio-acciaio border-opacity-30 px-1 py-1.5 text-center"></td>
                        </tr>
                        <tr>
                          <td className="border border-grigio-acciaio border-opacity-30 px-2 py-1.5 text-bianco-luce/80">
                            18:00
                          </td>
                          <td className="border border-grigio-acciaio border-opacity-30 px-1 py-1.5 text-center text-arancione-brand">
                            WOD-FIT
                          </td>
                          <td className="border border-grigio-acciaio border-opacity-30 px-1 py-1.5 text-center text-arancione-brand">
                            WOD-FIT
                          </td>
                          <td className="border border-grigio-acciaio border-opacity-30 px-1 py-1.5 text-center text-arancione-brand">
                            WOD-FIT
                          </td>
                          <td className="border border-grigio-acciaio border-opacity-30 px-1 py-1.5 text-center text-arancione-brand">
                            WOD-FIT
                          </td>
                          <td className="border border-grigio-acciaio border-opacity-30 px-1 py-1.5 text-center text-arancione-brand">
                            WOD-FIT
                          </td>
                          <td className="border border-grigio-acciaio border-opacity-30 px-1 py-1.5 text-center"></td>
                          <td className="border border-grigio-acciaio border-opacity-30 px-1 py-1.5 text-center"></td>
                        </tr>
                        <tr>
                          <td className="border border-grigio-acciaio border-opacity-30 px-2 py-1.5 text-bianco-luce/80">
                            19:00
                          </td>
                          <td className="border border-grigio-acciaio border-opacity-30 px-1 py-1.5 text-center text-arancione-brand">
                            WOD-FIT
                          </td>
                          <td className="border border-grigio-acciaio border-opacity-30 px-1 py-1.5 text-center text-arancione-brand">
                            WOD-FIT
                          </td>
                          <td className="border border-grigio-acciaio border-opacity-30 px-1 py-1.5 text-center text-arancione-brand">
                            WOD-FIT
                          </td>
                          <td className="border border-grigio-acciaio border-opacity-30 px-1 py-1.5 text-center text-arancione-brand">
                            WOD-FIT
                          </td>
                          <td className="border border-grigio-acciaio border-opacity-30 px-1 py-1.5 text-center text-arancione-brand">
                            WOD-FIT
                          </td>
                          <td className="border border-grigio-acciaio border-opacity-30 px-1 py-1.5 text-center"></td>
                          <td className="border border-grigio-acciaio border-opacity-30 px-1 py-1.5 text-center"></td>
                        </tr>
                        <tr>
                          <td className="border border-grigio-acciaio border-opacity-30 px-2 py-1.5 text-bianco-luce/80">
                            20:00
                          </td>
                          <td className="border border-grigio-acciaio border-opacity-30 px-1 py-1.5 text-center text-arancione-brand">
                            WOD-FIT
                          </td>
                          <td className="border border-grigio-acciaio border-opacity-30 px-1 py-1.5 text-center text-arancione-brand">
                            WOD-FIT
                          </td>
                          <td className="border border-grigio-acciaio border-opacity-30 px-1 py-1.5 text-center text-arancione-brand">
                            WOD-FIT
                          </td>
                          <td className="border border-grigio-acciaio border-opacity-30 px-1 py-1.5 text-center text-arancione-brand">
                            WOD-FIT
                          </td>
                          <td className="border border-grigio-acciaio border-opacity-30 px-1 py-1.5 text-center text-arancione-brand">
                            WOD-FIT
                          </td>
                          <td className="border border-grigio-acciaio border-opacity-30 px-1 py-1.5 text-center"></td>
                          <td className="border border-grigio-acciaio border-opacity-30 px-1 py-1.5 text-center"></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </motion.div>

        {/* 3. Form 1x2 - Outside Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5, ease: 'easeOut' }}
          className="mb-12 sm:mb-16"
        >
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
            <form
              onSubmit={handleSubmit}
              className="space-y-4 sm:space-y-6"
              aria-label="Form di contatto"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-xs sm:text-sm font-mono text-bianco-luce/85 mb-2 tracking-wider"
                >
                  NOME COMPLETO *
                </label>
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-nero-tattico border border-grigio-acciaio border-opacity-30 focus:border-arancione-brand focus:border-opacity-100 text-sm sm:text-base text-bianco-luce outline-none transition-all font-mono"
                  placeholder="Mario Rossi"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-xs sm:text-sm font-mono text-bianco-luce/85 mb-2 tracking-wider"
                >
                  EMAIL *
                </label>
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-nero-tattico border border-grigio-acciaio border-opacity-30 focus:border-arancione-brand focus:border-opacity-100 text-sm sm:text-base text-bianco-luce outline-none transition-all font-mono"
                  placeholder="mario@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-xs sm:text-sm font-mono text-bianco-luce/85 mb-2 tracking-wider"
                >
                  TELEFONO
                </label>
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-nero-tattico border border-grigio-acciaio border-opacity-30 focus:border-arancione-brand focus:border-opacity-100 text-sm sm:text-base text-bianco-luce outline-none transition-all font-mono"
                  placeholder="+39 333 1234567"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-xs sm:text-sm font-mono text-bianco-luce/85 mb-2 tracking-wider"
                >
                  MESSAGGIO
                </label>
                <motion.textarea
                  whileFocus={{ scale: 1.02 }}
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-nero-tattico border border-grigio-acciaio border-opacity-30 focus:border-rosso-controllo focus:border-opacity-100 text-sm sm:text-base text-bianco-luce outline-none transition-all font-mono resize-none"
                  placeholder="Raccontaci i tuoi obiettivi..."
                />
              </div>

              <motion.button
                type="submit"
                aria-label="Invia la richiesta di contatto"
                className="w-full px-6 sm:px-8 py-3 sm:py-4 bg-rosso-controllo text-bianco-luce font-mono text-xs sm:text-sm tracking-wider hover:bg-rosso-battito transition-colors relative overflow-hidden group focus:outline-none focus:ring-4 focus:ring-bianco-luce focus:ring-offset-2 focus:ring-offset-nero-tattico"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10">INVIA RICHIESTA</span>
                <motion.div
                  className="absolute inset-0 bg-bianco-luce"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.5 }}
                  style={{ opacity: 0.1 }}
                />
              </motion.button>

              <p className="text-xs text-bianco-luce/75 font-mono text-center">
                Ti risponderemo entro 24 ore operative
              </p>
            </form>

            {/* Contact Info - Second Column */}
            <div className="space-y-4 sm:space-y-6">
              {/* Location with Map */}
              <div>
                <motion.div
                  className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4"
                  whileHover={{ x: 5 }}
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 border border-arancione-brand flex items-center justify-center text-arancione-brand flex-shrink-0 opacity-80 hover:opacity-100 transition-opacity">
                    <MapPin
                      size={20}
                      strokeWidth={1.5}
                      className="sm:w-6 sm:h-6"
                    />
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm font-mono text-bianco-luce/70 mb-1">
                      LOCATION
                    </div>
                    <div className="text-sm sm:text-base text-bianco-luce">
                      Via Giorgio Caselli, 13/E
                      <br />
                      44124 Ferrara FE
                    </div>
                  </div>
                </motion.div>
                {/* Small Map */}
                <div className="border border-grigio-acciaio border-opacity-30 overflow-hidden rounded-sm">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2819.8544784476826!2d11.616634376537856!3d44.83628117107043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477e4e4e4e4e4e4f%3A0x4e4e4e4e4e4e4e4e!2sVia%20Giorgio%20Caselli%2C%2013%2FE%2C%2044124%20Ferrara%20FE!5e0!3m2!1sen!2sit!4v1234567890"
                    width="100%"
                    height="200"
                    className="sm:h-[220px]"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Otherwise Athletics Evolved - Ferrara Location"
                  />
                </div>
              </div>

              <motion.div
                className="flex items-start gap-3 sm:gap-4"
                whileHover={{ x: 5 }}
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 border border-arancione-brand flex items-center justify-center text-arancione-brand flex-shrink-0 opacity-80 hover:opacity-100 transition-opacity">
                  <Mail size={20} strokeWidth={1.5} className="sm:w-6 sm:h-6" />
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-mono text-bianco-luce/70 mb-1">
                    EMAIL
                  </div>
                  <a
                    href="mailto:info@otherwise.it"
                    className="text-sm sm:text-base text-bianco-luce hover:text-arancione-brand transition-colors break-all"
                  >
                    info@otherwise.it
                  </a>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start gap-3 sm:gap-4"
                whileHover={{ x: 5 }}
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 border border-arancione-brand flex items-center justify-center text-arancione-brand flex-shrink-0 opacity-80 hover:opacity-100 transition-opacity">
                  <Phone
                    size={20}
                    strokeWidth={1.5}
                    className="sm:w-6 sm:h-6"
                  />
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-mono text-bianco-luce/70 mb-1">
                    TELEFONO
                  </div>
                  <a
                    href="tel:+390532687123"
                    className="text-sm sm:text-base text-bianco-luce hover:text-arancione-brand transition-colors"
                  >
                    0532 687123
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
