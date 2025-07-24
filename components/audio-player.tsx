"use client"

import { useRef, useState } from "react"
import { Play, Pause } from "lucide-react"
import { Button } from "@/components/ui/button"

interface AudioPlayerProps {
  src: string
}

export function AudioPlayer({ src }: AudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play().catch((e) => console.error("Error playing audio:", e))
      }
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <div className="fixed bottom-8 right-8 z-50">
      {/* Audio element */}
      <audio
        ref={audioRef}
        loop
        preload="auto"
        onError={(e) => {
          // Logs helpful info if the file is missing or the codec isn’t supported
          console.error("Audio error:", (e.target as HTMLAudioElement).error)
        }}
        className="sr-only" /* keeps it accessible but invisible */
      >
        {/* Explicit MIME type prevents “no supported sources” errors in some browsers */}
        <source src={src} type="audio/mpeg" />
        {/* Fallback text for very old browsers */}
        Tu navegador no admite la reproducción de audio.
      </audio>
      <Button
        variant="outline"
        size="icon"
        className="rounded-full w-14 h-14 shadow-lg bg-white/80 backdrop-blur-sm hover:bg-white dark:bg-gray-800/80 dark:hover:bg-gray-800"
        onClick={togglePlayPause}
        aria-label={isPlaying ? "Pause music" : "Play music"}
      >
        {isPlaying ? (
          <Pause className="h-6 w-6 text-gray-700 dark:text-gray-300" />
        ) : (
          <Play className="h-6 w-6 text-gray-700 dark:text-gray-300" />
        )}
      </Button>
    </div>
  )
}
