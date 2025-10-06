"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronDown } from "lucide-react"

const heroImages = [
  {
    url: "/modern-luxury-living-room-interior-design-with-ele.jpg",
    title: "Design d'intérieur sur mesure",
  },
  {
    url: "/beautiful-modern-kitchen-renovation-with-marble-co.jpg",
    title: "Rénovation cuisine haut de gamme",
  },
  {
    url: "/elegant-bathroom-renovation-with-luxury-finishes.jpg",
    title: "Salle de bain premium",
  },
]

export function HeroSection() {
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Images */}
      {heroImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentImage ? "opacity-100" : "opacity-0"
          }`}
        >
          <img src={image.url || "/placeholder.svg"} alt={image.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
        </div>
      ))}

      {/* Content */}
      <div className="relative h-full flex items-center justify-center">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 text-balance">
            Transformez votre espace
            <br />
            en œuvre d'art
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">
            Expert en rénovation intérieure haut de gamme. Design, peinture, carrelage, menuiserie. Nous créons des
            espaces qui vous ressemblent.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/devis">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground text-base px-8 h-14">
                Demander un devis gratuit
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
            <Link href="/realisations">
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 text-base px-8 h-14"
              >
                Découvrir nos réalisations
              </Button>
            </Link>
          </div>

          {/* Image Indicators */}
          <div className="flex gap-2 justify-center mt-12">
            {heroImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImage(index)}
                className={`h-1 transition-all ${index === currentImage ? "w-12 bg-accent" : "w-8 bg-white/40"}`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown size={32} className="text-white/60" />
      </div>
    </section>
  )
}
