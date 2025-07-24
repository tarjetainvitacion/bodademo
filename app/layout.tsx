import "./globals.css"
import { Cormorant_Garamond, Lato } from "next/font/google"
import type { ReactNode } from "react"

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant-garamond",
})

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-lato",
})

export const metadata = {
  title: "Martina & Marcos - Nuestra Boda",
  description: "Invitación digital para la boda de Martina y Marcos",
    generator: 'v0.dev'
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body className={`${cormorantGaramond.variable} ${lato.variable} font-lato`}>{children}</body>
    </html>
  )
}
