import { Instagram, PhoneIcon as Whatsapp } from "lucide-react"
import type { JSX } from "react"

export function Footer(): JSX.Element {
  return (
    <footer className="w-full py-12 bg-[#EAE4D9] text-center px-4 font-lato">
      <div className="flex flex-col items-center space-y-6">
        {/* Logo */}
        <div className="text-xl font-cormorant-garamond font-serif text-gray-700 opacity-70">la tarjeta digital</div>

        {/* Social Icons */}
        <div className="flex space-x-6">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <Instagram className="h-8 w-8 text-gray-700 hover:text-gray-900" />
          </a>
          <a href="https://wa.me/yourphonenumber" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
            <Whatsapp className="h-8 w-8 text-gray-700 hover:text-gray-900" />
          </a>
        </div>

        {/* Copyright or additional info */}
        <p className="text-sm text-gray-600">© 2024 Martina & Marcos. Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}
