"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { WorkModal } from "@/components/work-modal"
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel"
import { useTheme } from "next-themes"

// Use this variable for all light mode backgrounds (navbar, footer, testimonials, etc.)
const LIGHT_BG = '#faf9f6';

export function OurWork() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [selectedProject, setSelectedProject] = useState<number | null>(null)
  const { resolvedTheme } = useTheme();

  const projects = [
    {
      id: 1,
      title: "Introducing Masses to the Web3 Revolution",
      subtitle: "Tech Conference & Event PR",
      image: "/India Blockchain Week.png",
      overview:
        "For India Blockchain Week 2024 by Hashed Emergent—India's largest Web3 gathering—we led a focused media outreach that secured 300+ stories and 25+ speaker features across 85+ top-tier publications. IBW became the first crypto event to trend across India's leading financial and mainline media during Bitcoin's record-breaking surge.",
      links: [
        { title: "Event Coverage", url: "#" },
        { title: "Media Kit", url: "#" },
      ],
      topStories: [
        {
          text: "Gadgets 360 by NDTV",
          url: "https://www.gadgets360.com/cryptocurrency/news/india-blockchain-week-second-edition-hashed-emergent-6811586"
        },
        {
          text: "The Economic Times",
          url: "https://economictimes.indiatimes.com/opinion/et-commentary/can-india-become-the-next-global-hub-for-web3-development/articleshow/115149867.cms?from=mdr"
        },
        {
          text: "The Hindu Business Line",
          url: "https://www.thehindubusinessline.com/info-tech/indias-web3-start-ups-surge-get-462-million-in-first-9-months-of-2024-report/article68969503.ece"
        },
        {
          text: "Cointelegraph",
          url: "https://cointelegraph.com/news/india-web3-startup-ecosystem-2024"
        },
        {
          text: "Moneycontrol",
          url: "https://www.moneycontrol.com/technology/web3-crypto-regulatory-proposals-take-centre-stage-at-india-blockchain-week-article-12883438.html"
        },
        {
          text: "Businessworld",
          url: "https://www.businessworld.in/article/top-leaders-hail-india-as-web3-powerhouse-but-urge-regulatory-clarity-541352"
        },
      ]
    },
    {
      id: 2,
      title: "Amplifying the Voice of Indian Grassroots Football Talent",
      subtitle: "Sports & Community Engagement",
      image: "/IKF -  India Khelo Football.png",
      overview:
        "For India Khelo Football—India's first phygital grassroots-to-global football platform—we've driven 200+ media stories nationwide over 3 years, consistently amplifying their trials and talent showcases. With an average reach of 300M+ per activation, IKF now commands recurring features in top Indian media.",
      links: [
        { title: "Media Coverage", url: "#" },
        { title: "Case Study", url: "#" },
      ],
      topStories: [
        {
          text: "ANI",
          url: "https://www.aninews.in/news/sports/football/india-khelo-football-starts-national-trials-to-enhance-grassroots-of-indian-football-in-100-cities20240723181344/"
        },
        {
          text: "The Hindu",
          url: "https://www.thehindu.com/sport/football/india-khelo-football-hosts-premier-league-scouts-in-india-via-prosoccer-globals-workshop/article66039903.ece"
        },
        {
          text: "Times Now",
          url: "https://www.timesnownews.com/sports/football/where-talent-meets-opportunity-ikf-set-to-bridge-the-gap-between-grassroots-professional-football-in-india-article-94652665"
        },
        {
          text: "First Post",
          url: "https://www.firstpost.com/sports/football-news/india-khelo-football-hosts-premier-league-scouts-in-india-11525211.html"
        },
        {
          text: "SportsKeeda",
          url: "https://www.sportskeeda.com/indian-football/news-from-ladakh-andaman-india-khelo-football-s-crusade-democratize-grassroots-structure-country"
        },
        {
          text: "SportStar",
          url: "https://sportstar.thehindu.com/other-sports/indian-sports-news-wrap-october-13-results-highlights-scores-updates/article66005276.ece"
        },
      ]
    },
   
    {
      id: 3,
      title: "Spotlighting Eupropen Technologies in India",
      subtitle: "International Innovation Hub",
      image: "/EU-India Innocenter.png",
      overview:
        "For the EU-India Innocenter, funded by the European Union's Horizon 2020 programme, we drove 450+ stories over 3 years—spotlighting European tech in India. Our strategic media outreach made its flagship Blue Carpet Night a PR success, securing front-page coverage in top national business and technology outlets.",
      links: [
        { title: "Project Overview", url: "#" },
        { title: "Media Coverage", url: "#" },
      ],
      topStories: [
        {
          text: "The Times of India",
          url: "https://timesofindia.indiatimes.com/business/india-business/eu-india-innocentres-8th-cohort-showcases-cutting-edge-technologies-in-bengaluru/articleshow/105239470.cms"
        },
        {
          text: "The Economic Times",
          url: "https://m.economictimes.com/news/india/eu-india-innocenter-joins-european-and-indian-startup-stakeholders-india-key-for-global-expansion/articleshow/105181111.cms"
        },
        {
          text: "The New Indian Express",
          url: "https://www.newindianexpress.com/nation/2023/Mar/09/european-startups-enthused-by-indias-sustainability-pusheu-india-innocenter-project-head-2554489.html"
        },
        {
          text: "The Hindu",
          url: "https://www.thehindu.com/news/cities/bangalore/eu-india-innocenter-extends-market-entry-services-for-indian-start-ups-looking-to-explore-the-european-market/article67517014.ece"
        },
        {
          text: "Entrepreneur India",
          url: "https://www.entrepreneur.com/en-in/news-and-trends/european-startups-to-display-tech-innovation-in-bengaluru/439183"
        },
        {
          text: "Telangana Today",
          url: "https://telanganatoday.com/eu-india-innocenter-hosts-8-high-impact-european-tech-startups-at-t-hub"
        },
        {
          text: "Tech Circle",
          url: "https://www.techcircle.in/2023/05/17/how-this-eu-funded-initiative-is-helping-european-startups-enter-india/"
        },
      ]
    },
  ]

  const openModal = (id: number) => {
    setSelectedProject(id)
  }

  const closeModal = () => {
    setSelectedProject(null)
  }

  const selectedProjectData =
    selectedProject !== null ? projects.find((project) => project.id === selectedProject) || null : null

  return (
    <section id="work" ref={ref} className={`py-12 md:py-24 w-full relative overflow-hidden transition-colors duration-500 ${resolvedTheme === 'light' ? `bg-[${LIGHT_BG}]` : 'dark:bg-[#0f0f1a]'}`}
      style={resolvedTheme === 'light' ? { backgroundColor: LIGHT_BG } : {}}>
      <div className="container mx-auto px-4">
        <div className="relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className={`text-sm font-medium tracking-wider uppercase flex items-center justify-center ${resolvedTheme === 'light' ? 'text-neutral-900' : 'text-white/60'}`}>
              <span className="text-orange-500/70 mr-1">{"<"}</span>
              Portfolio
              <span className="text-orange-500/70 ml-1">{" >"}</span>
            </span>
            <h2 className={`mt-2 text-4xl md:text-5xl font-bold ${resolvedTheme === 'light' ? 'text-neutral-900' : 'text-white'}`}>Media Corner</h2>
            <motion.div
              className="h-1 w-24 bg-orange-500 mx-auto mt-4 rounded origin-left"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              style={{ transformOrigin: 'left' }}
            />
          </motion.div>

          <div className="px-4 md:px-8 lg:px-16 xl:px-24 max-w-screen-2xl mx-auto">
            {/* Mobile carousel */}
            <div className="block md:hidden">
              <Carousel opts={{ loop: true }}>
                <CarouselContent>
                  {projects.map((project, index) => (
                    <CarouselItem key={project.id}>
                      <motion.div
                        className="group relative h-80 overflow-hidden rounded-lg cursor-pointer border border-white/10 hover:border-orange-500/50 transition-all duration-300 shadow-lg"
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.1 * index }}
                        onClick={() => openModal(project.id)}
                        whileHover={{ y: -5 }}
                      >
                        {resolvedTheme === 'light' ? (
                          <div className="absolute inset-0 z-10 rounded-lg" style={{background: 'linear-gradient(to top, rgba(255,255,255,0.96) 70%, rgba(255,255,255,0.0) 100%)'}}></div>
                        ) : (
                          <>
                            <div className="absolute inset-0 bg-black/60 z-10"></div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/80 to-black/40 z-20 pointer-events-none"></div>
                          </>
                        )}
                        <Image
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 flex flex-col justify-end p-6 z-30">
                          <div className="transform transition-transform duration-300 group-hover:translate-y-0">
                            <p className={`text-sm mb-1 font-mono ${resolvedTheme === 'light' ? 'text-orange-500' : 'text-orange-400'}`}>{"// "}{project.subtitle}</p>
                            <h3 className={`text-2xl font-semibold mb-2 ${resolvedTheme === 'light' ? 'text-neutral-900' : 'text-white'}`}>{project.title}</h3>
                            {/* Show a preview of top stories */}
                            <ul className="mb-4">
                              {project.topStories.slice(0, 2).map((story, i) => (
                                <li key={i} className={`text-sm leading-snug ${resolvedTheme === 'light' ? 'text-neutral-700' : 'text-white/80'} truncate`}>• {story.text}</li>
                              ))}
                            </ul>
                            <motion.button
                              className="text-white text-sm font-medium inline-flex items-center bg-orange-500 px-3 py-1 rounded-full hover:bg-orange-600 transition-colors"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              Read More <span className="ml-1">→</span>
                            </motion.button>
                          </div>
                        </div>
                      </motion.div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-[-7vw] top-1/2 -translate-y-1/2 z-30" />
                <CarouselNext className="right-[-7vw] top-1/2 -translate-y-1/2 z-30" />
              </Carousel>
            </div>
            {/* Desktop grid */}
            <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  className={`group relative h-80 overflow-hidden rounded-lg cursor-pointer transition-all duration-300 shadow-lg
                    ${resolvedTheme === 'light' ? 'bg-white border border-neutral-200' : 'border border-white/10 hover:border-orange-500/50'}`}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  onClick={() => openModal(project.id)}
                  whileHover={{ y: -5 }}
                >
                  {resolvedTheme === 'light' ? (
                    <div className="absolute inset-0 z-10 rounded-lg" style={{background: 'linear-gradient(to top, rgba(255,255,255,0.96) 70%, rgba(255,255,255,0.0) 100%)'}}></div>
                  ) : (
                    <>
                      <div className="absolute inset-0 bg-black/60 z-10"></div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/80 to-black/40 z-20 pointer-events-none"></div>
                    </>
                  )}
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 flex flex-col justify-end p-6 z-30">
                    <div className="transform transition-transform duration-300 group-hover:translate-y-0">
                      <p className={`text-sm mb-1 font-mono ${resolvedTheme === 'light' ? 'text-orange-500' : 'text-orange-400'}`}>{"// "}{project.subtitle}</p>
                      <h3 className={`text-2xl font-semibold mb-2 ${resolvedTheme === 'light' ? 'text-neutral-900' : 'text-white'}`}>{project.title}</h3>
                      {/* Show a preview of top stories */}
                      <ul className="mb-4">
                        {project.topStories.slice(0, 2).map((story, i) => (
                          <li key={i} className={`text-sm leading-snug ${resolvedTheme === 'light' ? 'text-neutral-700' : 'text-white/80'} truncate`}>• {story.text}</li>
                        ))}
                      </ul>
                      <motion.button
                        className="text-white text-sm font-medium inline-flex items-center bg-orange-500 px-3 py-1 rounded-full hover:bg-orange-600 transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Read More <span className="ml-1">→</span>
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <WorkModal isOpen={selectedProject !== null} onClose={closeModal} project={selectedProjectData} />
    </section>
  )
}
