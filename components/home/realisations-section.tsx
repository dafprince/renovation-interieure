"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

const categories = ["Tous", "Cuisine", "Salle de bain", "Salon", "Chambre", "Bureau"]

const realisations = [
  {
    title: "Rénovation cuisine moderne",
    category: "Cuisine",
    image: "beautiful-modern-kitchen-renovation-with-marble-co.jpg",
    surface: "25m²",
    duration: "3 semaines",
  },
  {
    title: "Salle de bain spa",
    category: "Salle de bain",
    image: "luxury-spa-bathroom-with-marble-tiles-and-freestan.jpg",
    surface: "12m²",
    duration: "2 semaines",
  },
  {
    title: "Salon contemporain",
    category: "Salon",
    image: "contemporary-living-room-with-modern-furniture-aft.jpg",
    surface: "40m²",
    duration: "4 semaines",
  },
  {
    title: "Suite parentale élégante",
    category: "Chambre",
    image: "elegant-master-bedroom-with-luxury-bedding-after-r.jpg",
    surface: "30m²",
    duration: "3 semaines",
  },
  {
    title: "Bureau design",
    category: "Bureau",
    image: "modern-home-office-design.jpg",
    surface: "15m²",
    duration: "2 semaines",
  },
  {
    title: "Cuisine ouverte luxe",
    category: "Cuisine",
    image: "beautiful-modern-kitchen-renovation-with-marble-co.jpg",
    surface: "35m²",
    duration: "4 semaines",
  },
]

export function RealisationsSection() {
  const [activeCategory, setActiveCategory] = useState("Tous")

  const filteredRealisations =
    activeCategory === "Tous" ? realisations : realisations.filter((r) => r.category === activeCategory)

  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-balance">Nos réalisations</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Découvrez nos projets de rénovation intérieure haut de gamme réalisés avec passion et expertise.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => setActiveCategory(category)}
              className={
                activeCategory === category
                  ? "bg-accent hover:bg-accent/90 text-accent-foreground"
                  : "hover:bg-accent/10 hover:text-accent hover:border-accent"
              }
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredRealisations.map((realisation, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-border hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={realisation.image || "/placeholder.svg"}
                  alt={realisation.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex gap-4 text-white/90 text-sm mb-2">
                    <span>{realisation.surface}</span>
                    <span>•</span>
                    <span>{realisation.duration}</span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <span className="text-xs font-medium text-accent uppercase tracking-wider">{realisation.category}</span>
                <h3 className="font-serif text-xl font-semibold mt-2">{realisation.title}</h3>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/realisations">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              Voir toutes nos réalisations
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
