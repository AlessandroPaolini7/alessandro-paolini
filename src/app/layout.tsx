import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Alessandro Paolini",
  description:
    "Website of Alessandro Paolini, AI Engineer focused on intelligent automation and data-driven solutions.",
  keywords: ["AI Engineer", "Data Engineering", "Machine Learning", "LangChain", "LangGraph", "Automation"],
  authors: [{ name: "Alessandro Paolini" }],
  creator: "Alessandro Paolini",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
