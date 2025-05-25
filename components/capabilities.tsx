"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Newspaper, Palette, MessageSquare, Handshake, Calendar, Users, Code } from "lucide-react"

export function Capabilities() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [activeService, setActiveService] = useState<string | null>(null)

  // Revert to original color scheme with multiple colors
  const services = [
    {
      icon: <Newspaper className="h-10 w-10" />,
      title: "Media advisory",
      description: "Customized and modular PR solutions for purposeful media engagements and crisis resilience.",
      color: "from-blue-500/20 to-blue-600/10",
      borderColor: "border-blue-500/30",
      hoverColor: "group-hover:border-blue-400/50",
      shadowColor: "group-hover:shadow-blue-500/20",
      logoColor: "#3b82f6", // blue-500
    },
    {
      icon: <Palette className="h-10 w-10" />,
      title: "Branding & Communication",
      description:
        "Amplifying 'who you are' and 'what you stand for' by crafting a brand identity that resonates and reaches the last mile.",
      color: "from-purple-500/20 to-purple-600/10",
      borderColor: "border-purple-500/30",
      hoverColor: "group-hover:border-purple-400/50",
      shadowColor: "group-hover:shadow-purple-500/20",
      logoColor: "#8b5cf6", // purple-500
    },
    {
      icon: <MessageSquare className="h-10 w-10" />,
      title: "Social Media Management",
      description:
        "Digital storytelling meets business goals - creative initiatives that lead with insight and land with impact.",
      color: "from-green-500/20 to-green-600/10",
      borderColor: "border-green-500/30",
      hoverColor: "group-hover:border-green-400/50",
      shadowColor: "group-hover:shadow-green-500/20",
      logoColor: "#22c55e", // green-500
    },
    {
      icon: <Handshake className="h-10 w-10" />,
      title: "Strategic Partnerships",
      description:
        "Guiding partners through inflection points with astute collaborations across media, events, speakerships, and sponsorships.",
      color: "from-yellow-500/20 to-yellow-600/10",
      borderColor: "border-yellow-500/30",
      hoverColor: "group-hover:border-yellow-400/50",
      shadowColor: "group-hover:shadow-yellow-500/20",
      logoColor: "#eab308", // yellow-500
    },
    {
      icon: <Calendar className="h-10 w-10" />,
      title: "Event Marketing",
      description:
        "Curating immersive event experiences that captivate audiences, amplify celebrations, and etch a lasting recall.",
      color: "from-red-500/20 to-red-600/10",
      borderColor: "border-red-500/30",
      hoverColor: "group-hover:border-red-400/50",
      shadowColor: "group-hover:shadow-red-500/20",
      logoColor: "#ef4444", // red-500
    },
    {
      icon: <Users className="h-10 w-10" />,
      title: "Influencer Engagement",
      description:
        "Influencer communities are the new marketplaces - we help your organization build a presence where your audience already belongs.",
      color: "from-pink-500/20 to-pink-600/10",
      borderColor: "border-pink-500/30",
      hoverColor: "group-hover:border-pink-400/50",
      shadowColor: "group-hover:shadow-pink-500/20",
      logoColor: "#ec4899", // pink-500
    },
    {
      icon: <Code className="h-10 w-10" />,
      title: "Digital Transformation",
      description:
        "Helping businesses navigate the digital landscape with strategic guidance and implementation support for technology adoption.",
      color: "from-cyan-500/20 to-cyan-600/10",
      borderColor: "border-cyan-500/30",
      hoverColor: "group-hover:border-cyan-400/50",
      shadowColor: "group-hover:shadow-cyan-500/20",
      logoColor: "#06b6d4", // cyan-500
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 },
    },
  }

  const handleMouseEnter = (title: string, color: string) => {
    setActiveService(title)
    // Dispatch custom event to change navbar triangle color
    const event = new CustomEvent("serviceHover", {
      detail: { color: color },
    })
    window.dispatchEvent(event)
  }

  const handleMouseLeave = () => {
    setActiveService(null)
    // Reset navbar triangle color
    const event = new CustomEvent("serviceHover", {
      detail: { color: "#f97316" }, // orange-500
    })
    window.dispatchEvent(event)
  }

  return (
    <section id="expertise" ref={ref} className="py-24 bg-[#f8f7f4] dark:bg-[#0a0a14] relative overflow-hidden w-full">
      <div className="w-full px-4 relative z-10 max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="text-sm font-medium tracking-wider uppercase flex items-center justify-center text-foreground dark:text-white/60">
            <span className="text-orange-500/70 mr-1">{"<"}</span>
            Services
            <span className="text-orange-500/70 ml-1">{">"}</span>
          </span>
          <h2 className="mt-2 text-4xl md:text-5xl font-bold text-foreground dark:text-white">Purposeful Solutions that Move the Needle</h2>
        </motion.div>

        {/* Later in the JSX, update the grid layout and add colored borders */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {services.slice(0, 4).map((service, index) => (
            <motion.div
              key={index}
              className={`relative glass-panel p-8 rounded-lg group transition-all duration-300 border shadow-[0_4px_24px_rgba(0,0,0,0.08)] dark:shadow-[0_4px_32px_rgba(0,0,0,0.32)] ${service.borderColor} ${service.hoverColor} hover:shadow-xl ${service.shadowColor}`}
              variants={itemVariants}
              whileHover={{
                y: -10,
                transition: { duration: 0.3 },
              }}
              onMouseEnter={() => handleMouseEnter(service.title, service.logoColor)}
              onMouseLeave={handleMouseLeave}
            >
              {/* Neon border effect */}
              <div
                className={`absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-gradient-to-br ${service.color}`}
              ></div>

              <div
                className="mb-6 group-hover:text-white transition-colors duration-300"
                style={{ color: service.logoColor }}
              >
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4 text-foreground dark:text-white">{service.title}</h3>
              <p className="text-muted-foreground dark:text-white/70 group-hover:dark:text-white/90 transition-colors duration-300">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-8 flex justify-center">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {services.slice(4).map((service, index) => (
              <motion.div
                key={index + 4}
                className={`relative glass-panel p-8 rounded-lg group transition-all duration-300 border shadow-[0_4px_24px_rgba(0,0,0,0.08)] dark:shadow-[0_4px_32px_rgba(0,0,0,0.32)] ${service.borderColor} ${service.hoverColor} hover:shadow-xl ${service.shadowColor}`}
                variants={itemVariants}
                whileHover={{
                  y: -10,
                  transition: { duration: 0.3 },
                }}
                onMouseEnter={() => handleMouseEnter(service.title, service.logoColor)}
                onMouseLeave={handleMouseLeave}
              >
                {/* Neon border effect */}
                <div
                  className={`absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-gradient-to-br ${service.color}`}
                ></div>

                <div
                  className="mb-6 group-hover:text-white transition-colors duration-300"
                  style={{ color: service.logoColor }}
                >
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-foreground dark:text-white">{service.title}</h3>
                <p className="text-muted-foreground dark:text-white/70 group-hover:dark:text-white/90 transition-colors duration-300">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
