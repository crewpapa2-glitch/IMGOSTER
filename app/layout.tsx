import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono, Crimson_Pro } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })
const _crimsonPro = Crimson_Pro({ subsets: ["latin"], variable: "--font-serif" })

export const metadata: Metadata = {
  title: "Zara - A Place to Explore Your Feelings",
  description: "An AI-powered mental wellness companion that helps you explore your feelings and grow emotionally",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased ${_crimsonPro.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
