import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Paintbrush, Hammer, Ruler, Sofa, Wrench, Sparkles } from "lucide-react"

const services = [
  {
    icon: Ruler,
    title: "Design d'intérieur",
    description: "Conception sur mesure de vos espaces avec plans 3D et accompagnement personnalisé.",
    image: "/interior-design-3d-rendering-modern-living-room.jpg",
    slug: "design-interieur",
  },
  {
    icon: Paintbrush,
    title: "Peinture & Décoration",
    description: "Peinture décorative, enduits, papiers peints haut de gamme pour sublimer vos murs.",
    image: "/professional-painting-luxury-home-interior.jpg",
    slug: "peinture-decoration",
  },
  {
    icon: Hammer,
    title: "Carrelage & Revêtements",
    description: "Pose de carrelage, parquet, et revêtements de sol premium avec finitions impeccables.",
    image: "/luxury-tile-flooring-installation-marble.jpg",
    slug: "carrelage-revetements",
  },
  {
    icon: Wrench,
    title: "Menuiserie",
    description: "Création de meubles sur mesure, placards, bibliothèques et aménagements personnalisés.",
    image: "/custom-carpentry-built-in-furniture.jpg",
    slug: "menuiserie",
  },
  {
    icon: Sofa,
    title: "Aménagement complet",
    description: "Rénovation globale de votre intérieur, de la conception à la réalisation clé en main.",
    image: "/complete-home-renovation-before-after.jpg",
    slug: "amenagement-complet",
  },
  {
    icon: Sparkles,
    title: "Rénovation cuisine & SDB",
    description: "Transformation complète de vos cuisines et salles de bain avec équipements premium.",
    image: "/luxury-kitchen-and-bathroom-renovation.jpg",
    slug: "renovation-cuisine-sdb",
  },
]

export function ServicesSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-balance">Nos services d'excellence</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Une expertise complète pour tous vos projets de rénovation intérieure, du design à la réalisation finale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card
                key={index}
                className="group overflow-hidden border-border hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                      <Icon className="text-accent-foreground" size={24} />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{service.description}</p>
                  <Link href={`/services/${service.slug}`}>
                    <Button variant="link" className="p-0 h-auto text-accent hover:text-accent/80">
                      En savoir plus →
                    </Button>
                  </Link>
                </div>
              </Card>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <Link href="/services">
            <Button size="lg" variant="outline">
              Voir tous nos services
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
