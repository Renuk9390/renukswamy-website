import "./globals.css"
import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
})

export const metadata = {
  title: "Renukswamy Chikkamath | AI Researcher & Information Retrieval Specialist",
  description:
    "AI Researcher, Information Retrieval Specialist and Patent Intelligence expert. PhD candidate at Hochschule München, building domain-specific AI systems for knowledge discovery.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable}`}
    >
      <body className="flex min-h-screen flex-col bg-paper font-sans text-ink antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
