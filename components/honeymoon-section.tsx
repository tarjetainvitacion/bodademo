import { Plane, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { JSX } from "react"

export function HoneymoonSection(): JSX.Element {
  return (
    <section className="w-full py-16 bg-[#EAE4D9] text-center px-4 font-lato">
      <div className="flex flex-col items-center space-y-4">
        <div className="relative">
          <Plane className="h-12 w-12 text-gray-500 animate-pulse" />
          <Heart className="h-6 w-6 text-gray-500 absolute bottom-0 right-0 -mb-1 -mr-1" />
        </div>
        <h2 className="text-2xl font-cormorant-garamond font-semibold text-gray-700">LUNA DE MIEL</h2>
        <p className="text-lg text-gray-600 max-w-md mx-auto">
          SI DESEAN HACERNOS UN OBSEQUIO, PUEDEN CONTRIBUIR A NUESTRA LUNA DE MIEL
        </p>
        <Button variant="outline" className="mt-4 border-gray-300 text-gray-600 hover:bg-gray-50 bg-transparent">
          CONTRIBUIR
        </Button>
      </div>
    </section>
  )
}
