"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Triangle } from "lucide-react";

export function KeyPeople() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [activePersonId, setActivePersonId] = useState<number>(1);

  const people = [
    {
      id: 1,
      name: "Ridhima Bhasin",
      role: "Founder",
      image: "/IMG_2506.JPG",
      bio: "To Ridhima, communication isn’t just a business function — it’s the force that drives impact. She has led strategic communication for global teams and high-stakes initiatives, from EU-funded innovation programs and diplomatic forums to fast-growing tech ecosystems. She founded Ampliverse to help businesses earn credibility through clarity, creativity, and meaningful collaboration.",
      linkedin: "#",
    },
    {
      id: 2,
      name: "Tatiana Kazmina",
      role: "Creative Consultant",
      image: "/Tatiana.jpg",
      bio: "With 16+ years of experience across production, marketing, and creative leadership, Tatiana Kazmina has helmed large-scale international projects across sport, media, and other sectors. She helps organizations find their voice through compelling narratives and design. Tatiana firmly believes in the power of storytelling to spark connections, drive impact, and inspire meaningful change.",
      linkedin: "#",
    },
    {
      id: 3,
      name: "Sristhi Verma",
      role: "Business Strategy Consultant",
      image: "/Srishti Verma.png",
      bio: "With a diverse entrepreneurial journey across ITES, wellness, and hospitality sectors, Sristhi brings deep cross-sector expertise and a relentless drive for impact. While building operational efficiencies across green technology businesses, she also actively contributes to community initiatives, organizing daily blood donation drives. For her, meaningful impact lies in the simplest of ideas that are designed thoughtfully and scaled smartly.",
      linkedin: "#",
    },
    {
      id: 4,
      name: "Emily Boral",
      role: "Head Consultant Brand & Strategy",
      image: "/Ejmily Boral.jpg",
      bio: "With over 18 years in media and marketing, she blends strategic insight with creative execution to build brands that resonate and grow. Her work spans inbound marketing, brand positioning, and impactful campaigns across sectors. An entrepreneur and storyteller at heart, she helps businesses drive meaningful engagement and lasting impact through strategy and communication.",
      linkedin: "#",
    },
  ];

  const activePerson = people[activePersonId - 1];

  return (
    <section
      id="people"
      ref={ref}
      className="py-24 bg-[#0a0a14] relative overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="text-sm font-medium tracking-wider text-white/60 uppercase flex items-center justify-center">
            <span className="text-orange-500/70 mr-1">{"<"}</span>
            Our Team
            <span className="text-orange-500/70 ml-1">{">"}</span>
          </span>
          <h2 className="mt-2 text-4xl md:text-5xl font-bold text-white">
            Key People
          </h2>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Zigzag Row Layout */}
          <div className="hidden lg:flex justify-center gap-12 mb-12">
            {people.map((person, idx) => (
              <motion.div
                key={person.id}
                className={`relative cursor-pointer group flex flex-col items-center ${
                  idx % 2 === 0 ? "lg:-translate-y-8" : "lg:translate-y-8"
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                onClick={() => setActivePersonId(person.id)}
              >
                <div className="aspect-square w-40 md:w-48 lg:w-52 rounded-full overflow-hidden relative border-4 border-white/10 shadow-xl">
                  <Image
                    src={person.image || "/placeholder.svg"}
                    alt={person.name}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="mt-4 text-center flex flex-col items-center">
                  <h3 className="text-xl font-semibold text-white">
                    {person.name}
                  </h3>
                  <p className="text-orange-500/80 font-mono text-sm mt-1">
                    {person.role}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
          {/* Mobile/Tablet: Stack vertically */}
          <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
            {people.map((person, idx) => (
              <motion.div
                key={person.id}
                className="relative cursor-pointer group flex flex-col items-center"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                onClick={() => setActivePersonId(person.id)}
              >
                <div className="aspect-square w-40 md:w-48 rounded-full overflow-hidden relative border-4 border-white/10 shadow-xl">
                  <Image
                    src={person.image || "/placeholder.svg"}
                    alt={person.name}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="mt-4 text-center flex flex-col items-center">
                  <h3 className="text-xl font-semibold text-white">
                    {person.name}
                  </h3>
                  <p className="text-orange-500/80 font-mono text-sm mt-1">
                    {person.role}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bio Section */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activePersonId}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="mt-8 bg-[#0f0f1a]/80 backdrop-blur-md p-10 rounded-lg border border-orange-500/20 relative ml-12 mr-12"
            >
              {/* LinkedIn icon in top-right */}
              <a
                href={activePerson.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-4 right-4 w-9 h-9  rounded-lg flex items-center justify-center group"
                aria-label={`LinkedIn profile of ${activePerson.name}`}
              >
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.667 13.333h3.333v10h-3.333v-10zm1.667-1.667a1.667 1.667 0 1 1 0-3.333 1.667 1.667 0 0 1 0 3.333zm4.167 1.667h3.2v1.367h.047c.445-.843 1.533-1.733 3.153-1.733 3.373 0 4 2.22 4 5.107v5.259h-3.333v-4.667c0-1.113-.02-2.547-1.553-2.547-1.553 0-1.793 1.213-1.793 2.467v4.747h-3.333v-10z"
                    fill="white"
                    className="transition-colors duration-200 group-hover:fill-[#f97316]"
                  />
                </svg>
              </a>
              <div className="flex items-center gap-2 mb-1">
                <h3 className="text-2xl font-bold text-white">
                  <span className="text-orange-500/60 mr-1 font-mono">
                    {"<"}
                  </span>
                  {activePerson.name}
                  <span className="text-orange-500/60 ml-1 font-mono">
                    {">"}
                  </span>
                </h3>
              </div>
              <p className="text-white/60 mb-4 font-mono">
                {"// "}
                {activePerson.role}
              </p>
              <p className="text-justify text-white/80">{activePerson.bio}</p>
              <div className="font-mono text-orange-500/40 mt-4">
                {"</"}
                {activePerson.name}
                {">"}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Indicators */}
          <div className="flex justify-center items-center gap-2 mt-8">
            {people.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActivePersonId(idx + 1)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  activePersonId === idx + 1
                    ? "bg-orange-500 w-4"
                    : "bg-white/20"
                }`}
                aria-label={`View ${people[idx].name}'s bio`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
