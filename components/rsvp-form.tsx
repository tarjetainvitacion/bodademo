"use client"

import type React from "react"

import { useState } from "react"
import { Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import type { JSX } from "react"

export function RsvpForm(): JSX.Element {
  const [numGuests, setNumGuests] = useState("1")
  const [dietaryReq, setDietaryReq] = useState("Ninguno")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log("Form submitted!")
  }

  return (
    <section className="w-full py-16 bg-white text-center px-4 font-lato">
      <div className="max-w-xl mx-auto">
        <Mail className="h-12 w-12 text-gray-500 mx-auto mb-4 animate-pulse" />
        <h2 className="text-2xl font-cormorant-garamond font-semibold text-gray-700 mb-2">CONFIRMÁ TU ASISTENCIA</h2>
        <p className="text-lg text-gray-600 mb-6">ANTES DEL 1 DE JULIO</p>
        <Button variant="outline" className="mb-8 border-gray-300 text-gray-600 hover:bg-gray-50 bg-transparent">
          VER VALOR TARJETA
        </Button>

        <form onSubmit={handleSubmit} className="space-y-6 text-left">
          {/* ¿Por cuántas personas confirmarás? */}
          <div>
            <label htmlFor="num-guests" className="block text-gray-700 text-sm font-medium mb-2">
              ¿Por cuántas personas confirmarás?
            </label>
            <Select value={numGuests} onValueChange={setNumGuests}>
              <SelectTrigger className="w-full bg-[#F5F5F5] border-gray-300 text-gray-700">
                <SelectValue placeholder="Selecciona" />
              </SelectTrigger>
              <SelectContent className="bg-white">
                <SelectItem value="1">1 persona</SelectItem>
                <SelectItem value="2">2 personas</SelectItem>
                <SelectItem value="3">3 personas</SelectItem>
                <SelectItem value="4">4 personas</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Persona 1 */}
          <div className="bg-[#F5F5F5] p-6 rounded-lg space-y-4 border border-gray-200">
            <h3 className="text-lg font-cormorant-garamond font-semibold text-gray-700 mb-4">Persona 1</h3>
            <div>
              <label htmlFor="name-1" className="sr-only">
                Nombre
              </label>
              <Input id="name-1" placeholder="Nombre *" className="bg-white border-gray-300 text-gray-700" required />
            </div>
            <div>
              <label htmlFor="lastname-1" className="sr-only">
                Apellido
              </label>
              <Input
                id="lastname-1"
                placeholder="Apellido *"
                className="bg-white border-gray-300 text-gray-700"
                required
              />
            </div>
            <div>
              <label htmlFor="dietary-req" className="block text-gray-700 text-sm font-medium mb-2">
                ¿Algún requerimiento en la alimentación?
              </label>
              <Select value={dietaryReq} onValueChange={setDietaryReq}>
                <SelectTrigger className="w-full bg-white border-gray-300 text-gray-700">
                  <SelectValue placeholder="Selecciona" />
                </SelectTrigger>
                <SelectContent className="bg-white">
                  <SelectItem value="Ninguno">Ninguno</SelectItem>
                  <SelectItem value="Vegetariano">Vegetariano</SelectItem>
                  <SelectItem value="Vegano">Vegano</SelectItem>
                  <SelectItem value="Sin Gluten">Sin Gluten</SelectItem>
                  <SelectItem value="Otros">Otros</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Recomendar música */}
          <div>
            <label htmlFor="music-recommendation" className="block text-gray-700 text-sm font-medium mb-2">
              Recomendar música
            </label>
            <Textarea
              id="music-recommendation"
              placeholder="Escribe aquí tu recomendación de música..."
              className="bg-[#F5F5F5] border-gray-300 text-gray-700"
            />
          </div>

          <Button type="submit" className="w-full py-3 bg-[#EAE4D9] text-gray-700 hover:bg-[#D9D0C0] font-semibold">
            Confirmar
          </Button>
        </form>
      </div>
    </section>
  )
}
