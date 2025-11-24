"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

export default function CTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="relative py-32 bg-nero-tattico overflow-hidden" ref={ref}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle, rgba(179, 16, 16, 0.3) 1px, transparent 1px)`,
          backgroundSize: '30px 30px'
        }} />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="text-rosso-controllo font-mono text-sm tracking-[0.3em] uppercase">
              [CONTATTI]
            </span>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-airborne text-bianco-luce mt-4 mb-6 tracking-tight">
              INIZIA<br />
              <span className="text-grigio-acciaio">OGGI</span>
            </h2>

            <p className="text-grigio-acciaio leading-relaxed mb-8">
              Settimana prova a 20 euro riservata ai nuovi iscritti. Vieni a vedere la box, 
              parla con i coach, prova i nostri corsi. Poi scegli il programma che fa per te.
            </p>

            {/* Pricing Highlights */}
            <div className="space-y-3 mb-8 p-5 bg-nero-tattico border-l-2 border-rosso-controllo">
              <div className="text-sm font-mono text-grigio-acciaio mb-2">ABBONAMENTI</div>
              <div className="space-y-2 text-bianco-luce text-sm">
                <div>Trimestrale Open → <span className="text-rosso-controllo font-bold">99€/mese</span></div>
                <div>Semestrale 2x week → <span className="text-rosso-controllo font-bold">75€/mese</span></div>
                <div className="text-grigio-acciaio text-xs pt-2">Porta 3 amici = 1 mese gratis</div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-6 mb-12">
              <motion.div
                className="flex items-start gap-4"
                whileHover={{ x: 5 }}
              >
                <div className="w-12 h-12 border border-rosso-controllo flex items-center justify-center text-rosso-controllo font-mono flex-shrink-0">
                  📍
                </div>
                <div>
                  <div className="text-sm font-mono text-grigio-acciaio mb-1">LOCATION</div>
                  <div className="text-bianco-luce">Via Giorgio Caselli, 13/E<br />44124 Ferrara FE</div>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start gap-4"
                whileHover={{ x: 5 }}
              >
                <div className="w-12 h-12 border border-rosso-controllo flex items-center justify-center text-rosso-controllo font-mono flex-shrink-0">
                  📧
                </div>
                <div>
                  <div className="text-sm font-mono text-grigio-acciaio mb-1">EMAIL</div>
                  <a href="mailto:info@otherwise.it" className="text-bianco-luce hover:text-rosso-controllo transition-colors">
                    info@otherwise.it
                  </a>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start gap-4"
                whileHover={{ x: 5 }}
              >
                <div className="w-12 h-12 border border-rosso-controllo flex items-center justify-center text-rosso-controllo font-mono flex-shrink-0">
                  📱
                </div>
                <div>
                  <div className="text-sm font-mono text-grigio-acciaio mb-1">TELEFONO</div>
                  <a href="tel:+390532687123" className="text-bianco-luce hover:text-rosso-controllo transition-colors">
                    0532 687123
                  </a>
                </div>
              </motion.div>
            </div>

            {/* Hours */}
            <div className="p-6 bg-nero-tattico border-l-2 border-rosso-controllo">
              <div className="text-sm font-mono text-grigio-acciaio mb-3">ORARI</div>
              <div className="space-y-2 text-bianco-luce text-sm">
                <div className="flex justify-between">
                  <span>Lunedì - Venerdì</span>
                  <span className="font-mono">09:30 - 21:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Sabato</span>
                  <span className="font-mono">08:30 - 12:30</span>
                </div>
                <div className="flex justify-between">
                  <span>Domenica</span>
                  <span className="font-mono text-grigio-acciaio">Chiuso</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6" aria-label="Form di contatto">
              <div>
                <label htmlFor="name" className="block text-sm font-mono text-grigio-acciaio mb-2 tracking-wider">
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
                  className="w-full px-4 py-3 bg-nero-tattico border border-grigio-acciaio border-opacity-30 focus:border-rosso-controllo focus:border-opacity-100 text-bianco-luce outline-none transition-all font-mono"
                  placeholder="Mario Rossi"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-mono text-grigio-acciaio mb-2 tracking-wider">
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
                  className="w-full px-4 py-3 bg-nero-tattico border border-grigio-acciaio border-opacity-30 focus:border-rosso-controllo focus:border-opacity-100 text-bianco-luce outline-none transition-all font-mono"
                  placeholder="mario@email.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-mono text-grigio-acciaio mb-2 tracking-wider">
                  TELEFONO
                </label>
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-nero-tattico border border-grigio-acciaio border-opacity-30 focus:border-rosso-controllo focus:border-opacity-100 text-bianco-luce outline-none transition-all font-mono"
                  placeholder="+39 333 1234567"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-mono text-grigio-acciaio mb-2 tracking-wider">
                  MESSAGGIO
                </label>
                <motion.textarea
                  whileFocus={{ scale: 1.02 }}
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 bg-nero-tattico border border-grigio-acciaio border-opacity-30 focus:border-rosso-controllo focus:border-opacity-100 text-bianco-luce outline-none transition-all font-mono resize-none"
                  placeholder="Raccontaci i tuoi obiettivi..."
                />
              </div>

              <motion.button
                type="submit"
                aria-label="Invia la richiesta di contatto"
                className="w-full px-8 py-4 bg-rosso-controllo text-bianco-luce font-mono text-sm tracking-wider hover:bg-rosso-battito transition-colors relative overflow-hidden group focus:outline-none focus:ring-4 focus:ring-bianco-luce focus:ring-offset-2 focus:ring-offset-nero-tattico"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10">INVIA RICHIESTA</span>
                <motion.div
                  className="absolute inset-0 bg-bianco-luce"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.5 }}
                  style={{ opacity: 0.1 }}
                />
              </motion.button>

              <p className="text-xs text-grigio-acciaio font-mono text-center">
                Ti risponderemo entro 24 ore operative
              </p>
            </form>
          </motion.div>
        </div>

        {/* Google Maps */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16"
        >
          <div className="border-2 border-grigio-acciaio border-opacity-30 overflow-hidden" style={{ filter: 'grayscale(100%) contrast(1.2)' }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2819.8544784476826!2d11.616634376537856!3d44.83628117107043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477e4e4e4e4e4e4f%3A0x4e4e4e4e4e4e4e4e!2sVia%20Giorgio%20Caselli%2C%2013%2FE%2C%2044124%20Ferrara%20FE!5e0!3m2!1sen!2sit!4v1234567890"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Otherwise Athletics Evolved - Ferrara Location"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

