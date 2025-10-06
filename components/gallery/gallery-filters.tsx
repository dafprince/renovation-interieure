"use client"

import { Button } from "@/components/ui/button"
import { useGalleryStore } from "@/lib/gallery-store"

const categories = [
  { id: "all", label: "Tous les projets" },
  { id: "cuisine", label: "Cuisine" },
  { id: "salle-de-bain", label: "Salle de bain" },
  { id: "salon", label: "Salon" },
  { id: "chambre", label: "Chambre" },
  { id: "bureau", label: "Bureau" },
  { id: "amenagement-complet", label: "Aménagement complet" },
]

export function GalleryFilters() {
  const { activeCategory, setActiveCategory } = useGalleryStore()

  return (
    <div className="mb-12">
      <div className="flex flex-wrap gap-3 justify-center">
        {categories.map((category) => (
          <Button
            key={category.id}
            variant={activeCategory === category.id ? "default" : "outline"}
            onClick={() => setActiveCategory(category.id)}
            className={
              activeCategory === category.id
                ? "bg-accent hover:bg-accent/90 text-accent-foreground"
                : "hover:bg-accent/10 hover:text-accent hover:border-accent"
            }
          >
            {category.label}
          </Button>
        ))}
      </div>
    </div>
  )
}
