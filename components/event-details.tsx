import { Calendar, MapPin, Church } from "lucide-react"
import { Button } from "@/components/ui/button"

interface EventDetailsProps {
  date: string
  locationName: string
  mapLink: string
  ceremonyTime: string
}

export function EventDetails({ date, locationName, mapLink, ceremonyTime }: EventDetailsProps) {
  return (
    <section className="w-full max-w-3xl mx-auto py-16 px-4 text-center bg-white dark:bg-gray-900 font-lato">
      <div className="space-y-12">
        {/* ¿CUÁNDO? */}
        <div className="flex flex-col items-center space-y-2">
          <Calendar className="h-10 w-10 text-gray-500 dark:text-gray-400 animate-pulse" />
          <h2 className="text-xl font-cormorant-garamond font-semibold text-gray-700 dark:text-gray-300">¿CUÁNDO?</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">{date}</p>
        </div>

        {/* ¿DÓNDE? */}
        <div className="flex flex-col items-center space-y-2">
          <MapPin className="h-10 w-10 text-gray-500 dark:text-gray-400 animate-pulse" />
          <h2 className="text-xl font-cormorant-garamond font-semibold text-gray-700 dark:text-gray-300">¿DÓNDE?</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">{locationName}</p>
          <Button
            variant="outline"
            className="mt-4 border-gray-300 text-gray-600 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800 bg-transparent"
          >
            <a href={mapLink} target="_blank" rel="noopener noreferrer">
              VER MAPA
            </a>
          </Button>
        </div>

        {/* ITINERARIO */}
        <div className="space-y-6">
          <div className="relative flex items-center justify-center">
            <hr className="w-full border-t border-gray-300 dark:border-gray-700 absolute" />
            <h2 className="relative z-10 bg-white dark:bg-gray-900 px-4 text-xl font-cormorant-garamond font-semibold text-gray-700 dark:text-gray-300">
              ITINERARIO
            </h2>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <Church className="h-10 w-10 text-gray-500 dark:text-gray-400 animate-pulse" />
            <h3 className="text-lg font-cormorant-garamond font-medium text-gray-700 dark:text-gray-300">CEREMONIA</h3>
            <p className="text-base text-gray-600 dark:text-gray-400">{ceremonyTime}</p>
          </div>
          {/* Puedes añadir más eventos del itinerario aquí */}
        </div>
      </div>
    </section>
  )
}
