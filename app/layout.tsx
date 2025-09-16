import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "GMBF Global - Digital Conference Of The Year",
  description: "Come participate in a virtual conference with us",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`font-sans ${inter.className}`}
        style={{
          background: "linear-gradient(135deg, #3755A5 0%, #3755A5 50%, #3755A5 100%)",
          minHeight: "100vh",
          margin: 0,
          padding: 0,
        }}
      >
        {children}
        <Analytics />
      </body>
    </html>
  )
}
