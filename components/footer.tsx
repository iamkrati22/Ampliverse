"use client";

import { Triangle } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useTheme } from "next-themes"

// Use this variable for all light mode backgrounds (navbar, footer, testimonials, etc.)
const LIGHT_BG = '#faf9f6';

export function Footer() {
  const { resolvedTheme } = useTheme()
  const currentYear = new Date().getFullYear()

  return (
    <footer
      className={`w-full mt-4 md:mt-0 pt-12 pb-8 px-4 -mt-8
        bg-[${LIGHT_BG}] dark:bg-[#0a0a14]
        text-neutral-800 dark:text-white
      `}
      style={{ backgroundColor: resolvedTheme === "light" ? LIGHT_BG : "#0a0a14", color: resolvedTheme === "light" ? "#232323" : "#fff" }}
    >
      <div className="container mx-auto px-4 text-xl md:text-base">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              {/* Show black logo in light mode */}
              <Image
                src="/logo_black.png"
                alt="Ampliverse Logo"
                width={260}
                height={80}
                className="block dark:hidden"
                priority
              />
              {/* Show white logo in dark mode */}
              <Image
                src="/logo_white.png"
                alt="Ampliverse Logo"
                width={260}
                height={80}
                className="hidden dark:block"
                priority
              />
            </div>

            <p className="text-neutral-700 dark:text-white/60 mb-6 max-w-md md:text-justify">
            We are a global communications advisory, fueling purposeful visibility for tomorrow's innovators. We are bridging the gap between purpose and performance through collaborative solutions that transform intent into impact and reach into results.
            </p>
            <div className="flex space-x-4">
              {/* Social icons - Facebook */}
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-neutral-200 dark:bg-[#1a1a2e] flex items-center justify-center hover:bg-neutral-300 dark:hover:bg-[#2a2a40] transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-neutral-800 dark:text-white"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              {/* LinkedIn */}
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-neutral-200 dark:bg-[#1a1a2e] flex items-center justify-center hover:bg-neutral-300 dark:hover:bg-[#2a2a40] transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-neutral-800 dark:text-white"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              {/* Instagram */}
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-neutral-200 dark:bg-[#1a1a2e] flex items-center justify-center hover:bg-neutral-300 dark:hover:bg-[#2a2a40] transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-neutral-800 dark:text-white"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              {/* Twitter */}
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-neutral-200 dark:bg-[#1a1a2e] flex items-center justify-center hover:bg-neutral-300 dark:hover:bg-[#2a2a40] transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-neutral-800 dark:text-white"
                >
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </a>
              {/* Telegram */}
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-neutral-200 dark:bg-[#1a1a2e] flex items-center justify-center hover:bg-neutral-300 dark:hover:bg-[#2a2a40] transition-colors"
                aria-label="Telegram"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-neutral-800 dark:text-white"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M23.1117 4.49449C23.4296 2.94472 21.9074 1.65683 20.4317 2.227L2.3425 9.2161C1.694517 9.85273 1.62187 12.1572 2.22518 12.8975L6.1645 14.7157L8.3849 21.2746C8.13583 21.6153 8.4618 21.8791 8.74917 21.968C9.9216 22.568 9.45658 21.9576 9.7712 21.77L12.5938 18.823L16.6375 21.8531C17.8113 22.7334 19.5019 22.922 19.7967 20.6549L23.1117 4.49449ZM3.633 11.816L21.1525 4.926L17.8375 20.2531L13.1 16.6999C12.719 16.413 12.1448 16.449 11.7929 16.7928L10.5565 18.292L10.928 15.9861L18.271 8.773C18.5614 8.35278 18.5988 7.7916 18.2947 7.39293C17.996 6.99479 17.4389 6.88312 17.039 7.13168L6.95124 12.876L3.633 11.816ZM8.17695 14.4791L8.78333 16.615L9.1614 15.321C9.5253 15.129 9.1498 14.9366 9.29291 14.7928L11.5128 12.573L8.17695 14.4791Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-neutral-900 dark:text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#expertise" className="text-neutral-700 dark:text-white/60 hover:text-neutral-900 dark:hover:text-white transition-colors">
                  Our Expertise
                </Link>
              </li>
              <li>
                <Link href="#work" className="text-neutral-700 dark:text-white/60 hover:text-neutral-900 dark:hover:text-white transition-colors">
                  Our Work
                </Link>
              </li>
              <li>
                <Link href="#people" className="text-neutral-700 dark:text-white/60 hover:text-neutral-900 dark:hover:text-white transition-colors">
                  Key People
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-neutral-700 dark:text-white/60 hover:text-neutral-900 dark:hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-neutral-900 dark:text-white">Contact</h3>
            <ul className="space-y-2">
              <li>
                <a href="mailto:pr@ampliverse.com" className="text-neutral-700 dark:text-white/60 hover:text-neutral-900 dark:hover:text-white transition-colors">
                 pr@ampliverse.in 
                </a>
              </li>
              <li>
                <a href="tel:+919717009947" className="text-neutral-700 dark:text-white/60 hover:text-neutral-900 dark:hover:text-white transition-colors">
                  +91 9717009947
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-[#1a1a2e] text-center md:flex md:justify-between md:text-left text-base">
          <p className="text-neutral-500 dark:text-white/40 mb-4 md:mb-0">&copy; {currentYear} Ampliverse. All rights reserved.</p>
          <div className="flex justify-center md:justify-end space-x-6">
            <a href="#" className="text-neutral-500 dark:text-white/40 hover:text-neutral-900 dark:hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-neutral-500 dark:text-white/40 hover:text-neutral-900 dark:hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
