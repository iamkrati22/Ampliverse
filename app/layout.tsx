import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Loader } from "@/components/loader"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Ampliverse",
  description: "Making What's Next, Heard Today",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <link rel="icon" href="/24-Photoroom.png" sizes="any" />
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <Loader />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}