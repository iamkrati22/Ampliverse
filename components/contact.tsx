"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Mail, Phone } from "lucide-react"
import { WorldMap } from "@/components/world-map"
import { ContactFormModal } from "@/components/contact-form-modal"

export function Contact() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <section id="contact" ref={ref} className="py-24 bg-[#0a0a14] relative">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="text-sm font-medium tracking-wider text-white/60 uppercase flex items-center justify-center">
            <span className="text-orange-500/70 mr-1">{"<"}</span>
            Get in Touch
            <span className="text-orange-500/70 ml-1">{">"}</span>
          </span>
          <h2 className="mt-2 text-4xl md:text-5xl font-bold text-white">Request a Proposal</h2>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <p className="text-lg text-white/80 mb-12">
                You've built something remarkable. Now, let's make sure the world notices it.
              </p>

              <div className="space-y-6 mb-12">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-[#1a1a2e] flex items-center justify-center flex-shrink-0 border border-orange-500/20">
                    <Mail className="h-5 w-5 text-orange-500" />
                  </div>
                  <div className="ml-4">
                    <p className="text-white/60 text-sm">Email</p>
                    <a
                      href="mailto:hello@ampliverse.com"
                      className="text-white font-medium hover:text-orange-500 transition-colors"
                    >
                      hello@ampliverse.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-[#1a1a2e] flex items-center justify-center flex-shrink-0 border border-orange-500/20">
                    <Phone className="h-5 w-5 text-orange-500" />
                  </div>
                  <div className="ml-4">
                    <p className="text-white/60 text-sm">Phone</p>
                    <a
                      href="tel:+919876543210"
                      className="text-white font-medium hover:text-orange-500 transition-colors"
                    >
                      +91 98765 43210
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <motion.a
                  href="#contact"
                  className="px-8 py-3 bg-orange-500 text-white font-medium rounded-full hover:bg-orange-600 transition-colors text-center relative overflow-hidden group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-white/0 via-white/30 to-white/0 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
                  Book a Call
                </motion.a>
                <motion.button
                  onClick={openModal}
                  className="px-8 py-3 bg-transparent border border-orange-500/30 text-white font-medium rounded-full hover:bg-orange-500/10 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Send Us a Message
                </motion.button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-8 h-8 border-t-2 border-l-2 border-orange-500/30"></div>
                <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b-2 border-r-2 border-orange-500/30"></div>
                <WorldMap />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <ContactFormModal isOpen={isModalOpen} onClose={closeModal} />
    </section>
  )
}
