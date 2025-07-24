import { Gem } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { JSX } from "react"

export function DressCodeSection(): JSX.Element {
  return (
    <section className="w-full py-16 bg-white text-center px-4 font-lato">
      <div className="flex flex-col items-center space-y-4">
        <Gem className="h-12 w-12 text-gray-500 animate-pulse" />
        <h2 className="text-2xl font-cormorant-garamond font-semibold text-gray-700">DRESS CODE</h2>
        <p className="text-lg text-gray-600">ELEGANTE</p>
        <Button variant="outline" className="mt-4 border-gray-300 text-gray-600 hover:bg-gray-50 bg-transparent">
          CONSEJOS
        </Button>
      </div>
    </section>
  )
}
