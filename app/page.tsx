import Image from "next/image"
import { Countdown } from "@/components/countdown"
import { AudioPlayer } from "@/components/audio-player"
import { ImageCarousel } from "@/components/image-carousel"
import { EventDetails } from "@/components/event-details"
import { QuoteSection } from "@/components/quote-section"
import { DressCodeSection } from "@/components/dress-code-section"
import { HoneymoonSection } from "@/components/honeymoon-section"
import { RsvpForm } from "@/components/rsvp-form"
import { Footer } from "@/components/footer"

export default function WeddingPage() {
  // Set your wedding date here (Year, Month (0-11), Day, Hour, Minute, Second)
  const weddingDate = "2025-12-25T10:00:00"

  const carouselImages = [
    { src: "/images/wedding-carousel-1.png", alt: "Happy wedding couple laughing outdoors" },
    { src: "/images/wedding-carousel-2.png", alt: "Wedding couple dancing at reception" },
    { src: "/images/wedding-carousel-3.png", alt: "Wedding rings on a bouquet" },
  ]

  return (
    <div className="relative w-full bg-white dark:bg-gray-900 font-lato">
      {/* Hero Section (Full screen) */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/wedding-couple.png"
            alt="Happy couple holding hands and laughing"
            fill
            style={{ objectFit: "cover" }}
            priority
            sizes="100vw"
          />
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-black opacity-30" aria-hidden="true" />
        </div>

        {/* Content */}
        <main className="relative z-10 flex h-full flex-col items-center justify-between p-8">
          {/* Top Left Names */}
          <div className="absolute left-8 top-8">
            <h1 className="text-3xl font-cormorant-garamond font-light tracking-widest text-white md:text-4xl lg:text-5xl">
              MARTINA & MARCOS
            </h1>
          </div>

          {/* Countdown Timer - Centered vertically */}
          <div className="flex flex-col items-center justify-center flex-grow">
            {/* This div helps center the countdown vertically */}
          </div>
          <div className="mb-16">
            <Countdown targetDate={weddingDate} />
          </div>
        </main>

        {/* Audio Player */}
        <AudioPlayer src="/audio/wedding-music.mp3" />
      </section>

      {/* Image Carousel Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <ImageCarousel images={carouselImages} />
      </section>

      {/* Event Details Section */}
      <EventDetails
        date="19 DE JULIO 2025"
        locationName="JANO'S LOS NARANJOS"
        mapLink="https://maps.app.goo.gl/your-map-link-here" // Replace with actual map link
        ceremonyTime="20:00 HS"
      />

      {/* Quote Section */}
      <QuoteSection />

      {/* Dress Code Section */}
      <DressCodeSection />

      {/* Honeymoon Section */}
      <HoneymoonSection />

      {/* Image: Couple Kissing */}
      <section className="w-full h-[500px] relative overflow-hidden">
        <Image
          src="/images/couple-kissing.png"
          alt="Couple kissing"
          fill
          style={{ objectFit: "cover" }}
          sizes="100vw"
        />
      </section>

      {/* RSVP Form Section */}
      <RsvpForm />

      {/* Image: Couple Holding Up */}
      <section className="w-full h-[500px] relative overflow-hidden">
        <Image
          src="/images/couple-holding-up.png"
          alt="Couple holding each other up"
          fill
          style={{ objectFit: "cover" }}
          sizes="100vw"
        />
      </section>

      {/* Footer Section */}
      <Footer />
    </div>
  )
}
