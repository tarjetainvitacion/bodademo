"use client"

import { useEffect, useState } from "react"
import type { JSX } from "react"

interface CountdownProps {
  targetDate: string // ISO 8601 string, e.g., "2025-12-25T10:00:00"
}

export function Countdown({ targetDate }: CountdownProps) {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date()
    let timeLeft = {}

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      }
    } else {
      timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 }
    }
    return timeLeft
  }

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(timer)
  }, [targetDate])

  const timerComponents: JSX.Element[] = []

  Object.entries(timeLeft).forEach(([unit, value]) => {
    timerComponents.push(
      <div key={unit} className="flex flex-col items-center">
        <span className="text-5xl font-lato font-light text-white">{String(value).padStart(2, "0")}</span>
        <span className="text-xs uppercase text-gray-200 mt-1 font-lato">
          {unit === "days" && "DÍAS"}
          {unit === "hours" && "HORAS"}
          {unit === "minutes" && "MINUTOS"}
          {unit === "seconds" && "SEGUNDOS"}
        </span>
      </div>,
    )
  })

  return (
    <div className="flex flex-col items-center space-y-4">
      <p className="text-lg font-cormorant-garamond font-light text-white">¡NOS CASAMOS!</p>
      <div className="flex items-center space-x-4">
        {timerComponents.map((component, index) => (
          <div key={index} className="flex items-center">
            {component}
            {index < timerComponents.length - 1 && <span className="text-5xl font-lato font-light text-white">:</span>}
          </div>
        ))}
      </div>
    </div>
  )
}
