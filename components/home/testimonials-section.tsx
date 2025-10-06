"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    name: "Sophie Martin",
    project: "Rénovation cuisine",
    rating: 5,
    text: "Une équipe exceptionnelle ! Notre cuisine a été transformée au-delà de nos espérances. Le professionnalisme et l'attention aux détails sont remarquables. Nous recommandons vivement.",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    name: "Jean Dupont",
    project: "Aménagement complet appartement",
    rating: 5,
    text: "Du design initial à la livraison finale, tout était parfait. Les délais ont été respectés et la qualité du travail est irréprochable. Notre appartement est maintenant magnifique.",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    name: "Marie Laurent",
    project: "Salle de bain spa",
    rating: 5,
    text: "Nous avons fait appel à eux pour notre salle de bain et le résultat est spectaculaire. L'équipe a su comprendre nos besoins et créer un véritable espace de détente.",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    name: "Pierre Dubois",
    project: "Bureau sur mesure",
    rating: 5,
    text: "Excellent travail sur notre bureau à domicile. Les menuiseries sur mesure sont d'une qualité exceptionnelle. Un grand merci pour votre expertise et votre écoute.",
    image: "/placeholder.svg?height=80&width=80",
  },
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-balance">Ce que disent nos clients</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            La satisfaction de nos clients est notre plus belle récompense. Découvrez leurs témoignages.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="p-8 md:p-12 relative">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <img
                src={testimonials[currentIndex].image || "/placeholder.svg"}
                alt={testimonials[currentIndex].name}
                className="w-20 h-20 rounded-full object-cover flex-shrink-0"
              />
              <div className="flex-1">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonials[currentIndex].rating }).map((_, i) => (
                    <Star key={i} className="fill-accent text-accent" size={20} />
                  ))}
                </div>
                <p className="text-lg leading-relaxed mb-6 text-foreground/90">"{testimonials[currentIndex].text}"</p>
                <div>
                  <div className="font-semibold text-foreground">{testimonials[currentIndex].name}</div>
                  <div className="text-sm text-muted-foreground">{testimonials[currentIndex].project}</div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex gap-2 justify-center mt-8">
              <Button variant="outline" size="icon" onClick={prev} className="rounded-full bg-transparent">
                <ChevronLeft size={20} />
              </Button>
              <div className="flex gap-2 items-center px-4">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-2 rounded-full transition-all ${
                      index === currentIndex ? "w-8 bg-accent" : "w-2 bg-border"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              <Button variant="outline" size="icon" onClick={next} className="rounded-full bg-transparent">
                <ChevronRight size={20} />
              </Button>
            </div>
          </Card>
        </div>

        {/* Trust Badges */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center opacity-60">
          <div className="text-center">
            <div className="font-serif text-2xl font-bold mb-1">RGE</div>
            <div className="text-xs text-muted-foreground">Reconnu Garant Environnement</div>
          </div>
          <div className="text-center">
            <div className="font-serif text-2xl font-bold mb-1">Qualibat</div>
            <div className="text-xs text-muted-foreground">Certification qualité</div>
          </div>
          <div className="text-center">
            <div className="font-serif text-2xl font-bold mb-1">Garantie</div>
            <div className="text-xs text-muted-foreground">Décennale</div>
          </div>
          <div className="text-center">
            <div className="font-serif text-2xl font-bold mb-1">Assurance</div>
            <div className="text-xs text-muted-foreground">Tous risques chantier</div>
          </div>
        </div>
      </div>
    </section>
  )
}
