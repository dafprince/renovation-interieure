"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useGalleryStore } from "@/lib/gallery-store"
import { ImageModal } from "./image-modal"
import { BeforeAfterSlider } from "./before-after-slider"
import { Eye, ZoomIn } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Cuisine moderne épurée",
    category: "cuisine",
    location: "Paris 16ème",
    surface: "25m²",
    duration: "3 semaines",
    year: "2024",
    image: "/modern-white-luxury-kitchen-with-marble-countertop.jpg",
    beforeImage: "/lixil-before.png",
    afterImage: "/modern-white-luxury-kitchen-with-marble-countertop.jpg",
    hasBeforeAfter: true,
  },
  {
    id: 2,
    title: "Salle de bain spa luxe",
    category: "salle-de-bain",
    location: "Neuilly-sur-Seine",
    surface: "15m²",
    duration: "2 semaines",
    year: "2024",
    image: "/luxury-spa-bathroom-with-marble-tiles-and-freestan.jpg",
    beforeImage: "/old-bathroom-before-renovation.png",
    afterImage: "/luxury-spa-bathroom-with-marble-tiles-after-renova.jpg",
    hasBeforeAfter: true,
  },
  {
    id: 3,
    title: "Salon contemporain",
    category: "salon",
    location: "Paris 8ème",
    surface: "45m²",
    duration: "4 semaines",
    year: "2024",
    image: "/contemporary-living-room-with-modern-furniture-and.jpg",
    beforeImage: "/old-living-room-before-renovation.jpg",
    afterImage: "/contemporary-living-room-with-modern-furniture-aft.jpg",
    hasBeforeAfter: true,
  },
  {
    id: 4,
    title: "Suite parentale élégante",
    category: "chambre",
    location: "Versailles",
    surface: "30m²",
    duration: "3 semaines",
    year: "2024",
    image: "/elegant-master-bedroom-with-luxury-bedding-and-wal.jpg",
    beforeImage: "/old-bedroom-before-renovation.jpg",
    afterImage: "/elegant-master-bedroom-with-luxury-bedding-after-r.jpg",
    hasBeforeAfter: true,
  },
  {
    id: 5,
    title: "Bureau design minimaliste",
    category: "bureau",
    location: "Boulogne-Billancourt",
    surface: "18m²",
    duration: "2 semaines",
    year: "2024",
    image: "/minimalist-home-office-with-modern-desk-and-shelvi.jpg",
    beforeImage: "/old-office-space-before-renovation.jpg",
    afterImage: "/minimalist-home-office-with-modern-desk-after-reno.jpg",
    hasBeforeAfter: true,
  },
  {
    id: 6,
    title: "Appartement haussmannien",
    category: "amenagement-complet",
    location: "Paris 17ème",
    surface: "120m²",
    duration: "8 semaines",
    year: "2024",
    image: "/renovated-haussmann-apartment-with-parquet-floors-.jpg",
    beforeImage: "/old-haussmann-apartment-before-renovation.jpg",
    afterImage: "/placeholder.svg?height=600&width=800",
    hasBeforeAfter: true,
  },
  {
    id: 7,
    title: "Cuisine ouverte industrielle",
    category: "cuisine",
    location: "Montreuil",
    surface: "30m²",
    duration: "4 semaines",
    year: "2023",
    image: "modern-white-luxury-kitchen-with-marble-countertop.jpg",
    beforeImage: "lixil-before.png",
    afterImage: "modern-white-luxury-kitchen-with-marble-countertop.jpg",
    hasBeforeAfter: true,
  },
  {
    id: 8,
    title: "Salle de bain marbre",
    category: "salle-de-bain",
    location: "Saint-Cloud",
    surface: "12m²",
    duration: "2 semaines",
    year: "2023",
    image: "luxury-spa-bathroom-with-marble-tiles-after-renova.jpg",
    beforeImage: "old-bathroom-before-renovation.png",
    afterImage: "luxury-spa-bathroom-with-marble-tiles-after-renova.jpg",
    hasBeforeAfter: true,
  },
  {
    id: 9,
    title: "Salon scandinave",
    category: "salon",
    location: "Levallois-Perret",
    surface: "35m²",
    duration: "3 semaines",
    year: "2023",
    image: "old-living-room-before-renovation.jpg",
    beforeImage: "old-haussmann-apartment-before-renovation.jpg",
    afterImage: "old-living-room-before-renovation.jpg",
    hasBeforeAfter: true,
  },
]

export function GalleryGrid() {
  const { activeCategory } = useGalleryStore()
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null)
  const [showBeforeAfter, setShowBeforeAfter] = useState(false)

  const filteredProjects = activeCategory === "all" ? projects : projects.filter((p) => p.category === activeCategory)

  const handleProjectClick = (project: (typeof projects)[0]) => {
    setSelectedProject(project)
    setShowBeforeAfter(false)
  }

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <Card
            key={project.id}
            className="group overflow-hidden border-border hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-2"
            onClick={() => handleProjectClick(project)}
          >
            <div className="relative h-80 overflow-hidden bg-secondary/20">
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                <div className="flex gap-4">
                  <div className="w-14 h-14 bg-accent rounded-full flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-500 shadow-xl">
                    <ZoomIn className="text-accent-foreground" size={24} />
                  </div>
                  {project.hasBeforeAfter && (
                    <div className="w-14 h-14 bg-accent-foreground rounded-full flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-500 delay-75 shadow-xl">
                      <Eye className="text-accent" size={24} />
                    </div>
                  )}
                </div>
              </div>

              {/* Before/After Badge */}
              {project.hasBeforeAfter && (
                <div className="absolute top-4 right-4 transform group-hover:scale-110 transition-transform duration-300">
                  <Badge className="bg-accent text-accent-foreground shadow-lg">Avant/Après</Badge>
                </div>
              )}

              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-gradient-to-t from-black/95 to-transparent">
                <div className="flex gap-3 text-white text-sm mb-2 font-medium">
                  <span>{project.surface}</span>
                  <span>•</span>
                  <span>{project.duration}</span>
                  <span>•</span>
                  <span>{project.year}</span>
                </div>
              </div>
            </div>

            <div className="p-6 bg-background">
              <div className="flex items-center justify-between mb-3">
                <Badge variant="outline" className="text-xs font-medium">
                  {project.category.replace("-", " ")}
                </Badge>
                <span className="text-xs text-muted-foreground font-medium">{project.location}</span>
              </div>
              <h3 className="font-serif text-xl font-semibold group-hover:text-accent transition-colors duration-300">
                {project.title}
              </h3>
            </div>
          </Card>
        ))}
      </div>

      {/* Image Modal */}
      {selectedProject && (
        <ImageModal
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
          project={selectedProject}
          onShowBeforeAfter={() => setShowBeforeAfter(true)}
        />
      )}

      {/* Before/After Modal */}
      {selectedProject && showBeforeAfter && (
        <BeforeAfterSlider
          isOpen={showBeforeAfter}
          onClose={() => setShowBeforeAfter(false)}
          beforeImage={selectedProject.beforeImage}
          afterImage={selectedProject.afterImage}
          title={selectedProject.title}
        />
      )}
    </>
  )
}
