"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"

interface ContactFormModalProps {
  isOpen: boolean
  onClose: () => void
}

export function ContactFormModal({ isOpen, onClose }: ContactFormModalProps) {
  const [isMounted, setIsMounted] = useState(false)
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [now, setNow] = useState(null)

  useEffect(() => {
    setIsMounted(true)

    if (isOpen) {
      document.body.style.overflow = "hidden"
    }

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isOpen])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form submission logic would go here
    console.log("Form submitted:", formState)
    alert("Thank you for your message! We will get back to you soon.")
    setFormState({ name: "", email: "", message: "" })
    onClose()
  }

  if (!isMounted) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-2 bg-black/80 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className={`relative w-full max-w-2xl rounded-lg border border-orange-500/20 backdrop-blur-md mx-auto
              ${typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? 'bg-[#0a0a14]/90' : 'bg-white/90'}
            `}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 20 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-[#1a1a2e] flex items-center justify-center text-white hover:text-orange-500 transition-colors"
              aria-label="Close modal"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="p-6">
              <h2 className={`text-2xl font-bold mb-6 ${typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? 'text-white' : 'text-neutral-900'}`}>Send us a message</h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className={`block text-sm font-medium ${typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? 'text-white/70' : 'text-neutral-700'}`}>
                    Your Name
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      className={`shadow-sm block w-full sm:text-sm rounded-md h-12 focus:ring-orange-500/30 focus:border-orange-500/30 
                        ${typeof window !== 'undefined' && document.documentElement.classList.contains('dark') 
                          ? 'bg-[#1a1a2e] border-[#2a2a40] text-white' 
                          : 'bg-white border-neutral-200 text-neutral-900'}`}
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className={`block text-sm font-medium ${typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? 'text-white/70' : 'text-neutral-700'}`}>
                    Email Address
                  </label>
                  <div className="mt-1">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      className={`shadow-sm block w-full sm:text-sm rounded-md h-12 focus:ring-orange-500/30 focus:border-orange-500/30 
                        ${typeof window !== 'undefined' && document.documentElement.classList.contains('dark') 
                          ? 'bg-[#1a1a2e] border-[#2a2a40] text-white' 
                          : 'bg-white border-neutral-200 text-neutral-900'}`}
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className={`block text-sm font-medium ${typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? 'text-white/70' : 'text-neutral-700'}`}>
                    Your Message
                  </label>
                  <div className="mt-1">
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formState.message}
                      onChange={handleChange}
                      className={`shadow-sm block w-full sm:text-sm rounded-md focus:ring-orange-500/30 focus:border-orange-500/30 
                        ${typeof window !== 'undefined' && document.documentElement.classList.contains('dark') 
                          ? 'bg-[#1a1a2e] border-[#2a2a40] text-white' 
                          : 'bg-white border-neutral-200 text-neutral-900'}`}
                      required
                    />
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium
                      ${typeof window !== 'undefined' && document.documentElement.classList.contains('dark')
                        ? 'text-orange-400 bg-transparent hover:bg-orange-500/10'
                        : 'text-neutral-900 bg-transparent hover:bg-orange-100'}
                    `}
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
