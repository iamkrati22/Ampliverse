"use client";

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Mail, Phone } from "lucide-react"
import { WorldMap } from "@/components/world-map"
import { ContactFormModal } from "@/components/contact-form-modal"
import { useTheme } from "next-themes"

export function Contact() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { resolvedTheme } = useTheme()

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log("Form submitted:", formState);
    alert("Thank you for your message! We will get back to you soon.");
    setFormState({ name: "", email: "", message: "" });
  };

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  return (
    <section id="contact" ref={ref} className={`py-24 relative transition-colors duration-300 ${resolvedTheme === 'light' ? 'bg-[#fcfcfa] text-neutral-900' : 'bg-[#0a0a14] text-white'}`}>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className={`text-sm font-medium tracking-wider uppercase flex items-center justify-center ${resolvedTheme === 'light' ? 'text-neutral-500' : 'text-white/60'}`}>
            <span className="text-orange-500/70 mr-1">{"<"}</span>
            Get in Touch
            <span className="text-orange-500/70 ml-1">{">"}</span>
          </span>
          <h2 className={`mt-2 text-4xl md:text-5xl font-bold ${resolvedTheme === 'light' ? 'text-neutral-900' : 'text-white'}`}>Request a Proposal</h2>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <p className={`text-lg mb-12 ${resolvedTheme === 'light' ? 'text-neutral-900' : 'text-white/80'}`}>
                You've built something remarkable. Now, let's make sure the world notices it.
              </p>

              <div className="space-y-6 mb-12">
                <div className="flex items-center">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 border ${resolvedTheme === 'light' ? 'bg-orange-500 border-orange-100' : 'bg-[#1a1a2e] border-orange-500/20'}`}>
                    <Mail className={`h-5 w-5 ${resolvedTheme === 'light' ? 'text-white' : 'text-orange-500'}`} />
                  </div>
                  <div className="ml-4">
                    <p className={`text-sm ${resolvedTheme === 'light' ? 'text-neutral-500' : 'text-white/60'}`}>Email</p>
                    <a
                      href="mailto:pr@ampliverse.com"
                      className={`font-medium transition-colors ${resolvedTheme === 'light' ? 'text-neutral-900 hover:text-orange-500' : 'text-white hover:text-orange-500'}`}
                    >
                      pr@ampliverse.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 border ${resolvedTheme === 'light' ? 'bg-orange-500 border-orange-100' : 'bg-[#1a1a2e] border-orange-500/20'}`}>
                    <Phone className={`h-5 w-5 ${resolvedTheme === 'light' ? 'text-white' : 'text-orange-500'}`} />
                  </div>
                  <div className="ml-4">
                    <p className={`text-sm ${resolvedTheme === 'light' ? 'text-neutral-500' : 'text-white/60'}`}>Phone</p>
                    <a
                      href="tel:+919717009947"
                      className={`font-medium transition-colors ${resolvedTheme === 'light' ? 'text-neutral-900 hover:text-orange-500' : 'text-white hover:text-orange-500'}`}
                    >
                      +91 9717009947
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
                  Let's Talk
                </motion.a>
                <motion.button
                  onClick={openModal}
                  className={`px-8 py-3 border font-medium rounded-full transition-colors flex items-center justify-center gap-2 ${resolvedTheme === 'light' ? 'bg-white border-orange-500/30 text-orange-500 hover:bg-orange-50' : 'bg-transparent border-orange-500/30 text-white hover:bg-orange-500/10'}`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    className="h-5 w-5"
                    fill="currentColor"
                  >
                    <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.8z" />
                  </svg>
                  Connect on Whatsapp
                </motion.button>
              </div>
            </motion.div>
            {/* <ContactFormModal isOpen={isModalOpen} onClose={closeModal} /> */}
            {/* <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="relative w-full max-w-2xl "
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: "spring", damping: 20 }}
                onClick={(e) => e.stopPropagation()}
              > */}
            <div className={`${resolvedTheme === 'light' ? 'p-6 bg-white border border-neutral-200 shadow-xl rounded-lg' : 'p-6 bg-[#0a0a14]/90 backdrop-blur-md rounded-lg border border-orange-500/20'}`}>
              {/* <h2 className="text-2xl font-bold mb-6 text-white">
                Send us a message
              </h2> */}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className={`block text-sm font-medium ${resolvedTheme === 'light' ? 'text-neutral-900' : 'text-white/70'}`}
                  >
                    Your Name
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      className={`shadow-sm block w-full sm:text-sm rounded-md h-12 ${resolvedTheme === 'light' ? 'bg-neutral-100 border-neutral-200 text-neutral-900 focus:ring-orange-500/30 focus:border-orange-500/30' : 'bg-[#1a1a2e] border-[#2a2a40] text-white focus:ring-orange-500/30 focus:border-orange-500/30'}`}
                      required
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className={`block text-sm font-medium ${resolvedTheme === 'light' ? 'text-neutral-900' : 'text-white/70'}`}
                  >
                    Email Address
                  </label>
                  <div className="mt-1">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      className={`shadow-sm block w-full sm:text-sm rounded-md h-12 ${resolvedTheme === 'light' ? 'bg-neutral-100 border-neutral-200 text-neutral-900 focus:ring-orange-500/30 focus:border-orange-500/30' : 'bg-[#1a1a2e] border-[#2a2a40] text-white focus:ring-orange-500/30 focus:border-orange-500/30'}`}
                      required
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className={`block text-sm font-medium ${resolvedTheme === 'light' ? 'text-neutral-900' : 'text-white/70'}`}
                  >
                    Your Message
                  </label>
                  <div className="mt-1">
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formState.message}
                      onChange={handleChange}
                      className={`shadow-sm block w-full sm:text-sm rounded-md h-12 ${resolvedTheme === 'light' ? 'bg-neutral-100 border-neutral-200 text-neutral-900 focus:ring-orange-500/30 focus:border-orange-500/30' : 'bg-[#1a1a2e] border-[#2a2a40] text-white focus:ring-orange-500/30 focus:border-orange-500/30'}`}
                      required
                    />
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className={`w-full py-3 rounded-md font-semibold transition-colors ${resolvedTheme === 'light' ? 'bg-orange-500 text-white hover:bg-orange-600' : 'bg-orange-500 text-white hover:bg-orange-600'}`}
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>

            {/* <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-8 h-8 border-t-2 border-l-2 border-orange-500/30"></div>
                <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b-2 border-r-2 border-orange-500/30"></div>
                <WorldMap />
              </div>
            </motion.div> */}
          </div>
        </div>
      </div>
      <div className="mt-[5%]">
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="relative">
            <div className="absolute -top-[1vh] left-[2vw] md:-top-4 md:-left-4 w-8 h-8 border-t-2 border-l-2 border-orange-500/30"></div>
            <div className="absolute -bottom-[1vh] right-[2vw] md:-bottom-4 md:-right-4 w-8 h-8 border-b-2 border-r-2 border-orange-500/30"></div>
            <WorldMap />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
