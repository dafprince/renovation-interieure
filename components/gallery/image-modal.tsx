"use client"

import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { X, ArrowLeftRight, ZoomIn, ZoomOut } from "lucide-react"
import { useState } from "react"

interface ImageModalProps {
  isOpen: boolean
  onClose: () => void
  project: {
    title: string
    image: string
    location: string
    surface: string
    duration: string
    year: string
    hasBeforeAfter: boolean
  }
  onShowBeforeAfter: () => void
}

export function ImageModal({ isOpen, onClose, project, onShowBeforeAfter }: ImageModalProps) {
  const [isZoomed, setIsZoomed] = useState(false)

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-5xl p-0 overflow-hidden">
        <div className="relative">
          <div className={`overflow-auto ${isZoomed ? "cursor-zoom-out" : "cursor-zoom-in"}`}>
            <img
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              className={`w-full h-auto transition-transform duration-300 ${isZoomed ? "scale-150" : "scale-100"}`}
              onClick={() => setIsZoomed(!isZoomed)}
            />
          </div>

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors z-10"
          >
            <X size={20} />
          </button>

          <button
            onClick={() => setIsZoomed(!isZoomed)}
            className="absolute top-4 right-16 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors z-10"
          >
            {isZoomed ? <ZoomOut size={20} /> : <ZoomIn size={20} />}
          </button>

          {/* Before/After Button */}
          {project.hasBeforeAfter && (
            <div className="absolute bottom-4 right-4 z-10">
              <Button
                onClick={onShowBeforeAfter}
                className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg"
              >
                <ArrowLeftRight className="mr-2" size={18} />
                Voir Avant/Après
              </Button>
            </div>
          )}
        </div>

        {/* Project Info */}
        <div className="p-6 bg-background">
          <h2 className="font-serif text-2xl font-bold mb-4">{project.title}</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div>
              <div className="text-muted-foreground mb-1">Localisation</div>
              <div className="font-semibold">{project.location}</div>
            </div>
            <div>
              <div className="text-muted-foreground mb-1">Surface</div>
              <div className="font-semibold">{project.surface}</div>
            </div>
            <div>
              <div className="text-muted-foreground mb-1">Durée</div>
              <div className="font-semibold">{project.duration}</div>
            </div>
            <div>
              <div className="text-muted-foreground mb-1">Année</div>
              <div className="font-semibold">{project.year}</div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
