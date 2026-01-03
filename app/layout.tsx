import type React from "react"
import type { Metadata } from "next"
import { Inter, Montserrat } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-montserrat",
})

export const metadata: Metadata = {
  title: "LL Copy - Gráfica Rápida e Personalizados",
  description:
    "Impressão rápida, produtos personalizados e acabamento de qualidade. Agendas, blocos, cartões, convites e muito mais. Seu projeto gráfico pronto em tempo recorde!",
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
    <html lang="pt-BR">
      <body className={`${inter.variable} ${montserrat.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
