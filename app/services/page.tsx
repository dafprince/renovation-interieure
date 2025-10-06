import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Paintbrush, Hammer, Ruler, Sofa, Wrench, Sparkles, ArrowRight, CheckCircle2 } from "lucide-react"

const services = [
  {
    slug: "design-interieur",
    icon: Ruler,
    title: "Design d'intérieur",
    shortDescription: "Conception sur mesure de vos espaces avec plans 3D",
    description:
      "Notre équipe de designers d'intérieur crée des espaces uniques qui reflètent votre personnalité et répondent à vos besoins fonctionnels.",
    image: "old-living-room-before-renovation.jpg",
    features: [
      "Consultation personnalisée à domicile",
      "Plans 2D et rendus 3D photoréalistes",
      "Sélection de matériaux et mobilier",
      "Accompagnement tout au long du projet",
    ],
    price: "À partir de 1 500€",
  },
  {
    slug: "peinture-decoration",
    icon: Paintbrush,
    title: "Peinture & Décoration",
    shortDescription: "Peinture décorative et enduits haut de gamme",
    description:
      "Nos artisans peintres maîtrisent toutes les techniques de peinture décorative pour sublimer vos murs et plafonds.",
    image: "professional-painting-luxury-home-interior.jpg",
    features: [
      "Peinture décorative et effets spéciaux",
      "Enduits à la chaux et béton ciré",
      "Papiers peints haut de gamme",
      "Préparation soignée des supports",
    ],
    price: "À partir de 25€/m²",
  },
  {
    slug: "carrelage-revetements",
    icon: Hammer,
    title: "Carrelage & Revêtements",
    shortDescription: "Pose de carrelage et revêtements de sol premium",
    description:
      "Expertise en pose de carrelage, parquet, et tous types de revêtements de sol avec des finitions impeccables.",
    image: "luxury-tile-flooring-installation-marble.jpg",
    features: [
      "Carrelage grand format et mosaïque",
      "Parquet massif et contrecollé",
      "Pierre naturelle et marbre",
      "Ragréage et préparation des sols",
    ],
    price: "À partir de 45€/m²",
  },
  {
    slug: "menuiserie",
    icon: Wrench,
    title: "Menuiserie sur mesure",
    shortDescription: "Création de meubles et aménagements personnalisés",
    description: "Nos menuisiers créent des meubles sur mesure parfaitement adaptés à vos espaces et à vos besoins.",
    image: "custom-carpentry-built-in-furniture.jpg",
    features: [
      "Placards et dressings sur mesure",
      "Bibliothèques et étagères",
      "Meubles TV et rangements",
      "Boiseries et lambris",
    ],
    price: "Sur devis",
  },
  {
    slug: "amenagement-complet",
    icon: Sofa,
    title: "Aménagement complet",
    shortDescription: "Rénovation globale clé en main",
    description: "Prise en charge complète de votre projet de rénovation, de la conception à la livraison finale.",
    image: "complete-home-renovation-before-after.jpg",
    features: [
      "Gestion de projet complète",
      "Coordination des corps de métier",
      "Suivi de chantier quotidien",
      "Garantie décennale",
    ],
    price: "À partir de 800€/m²",
  },
  {
    slug: "cuisine-salle-de-bain",
    icon: Sparkles,
    title: "Cuisine & Salle de bain",
    shortDescription: "Rénovation complète avec équipements premium",
    description: "Transformation complète de vos cuisines et salles de bain avec des équipements haut de gamme.",
    image: "luxury-spa-bathroom-renovation.jpg",
    features: [
      "Conception 3D personnalisée",
      "Plomberie et électricité",
      "Équipements haut de gamme",
      "Garantie sur tous les travaux",
    ],
    price: "À partir de 15 000€",
  },
]

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6 text-balance">Nos services d'excellence</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Une expertise complète pour tous vos projets de rénovation intérieure, du design à la réalisation finale
              avec des artisans qualifiés.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <Card
                  key={index}
                  className="group overflow-hidden border-border hover:shadow-xl transition-all duration-300"
                >
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="relative h-64 md:h-full overflow-hidden">
                      <img
                        src={service.image || "/placeholder.svg"}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4">
                        <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                          <Icon className="text-accent-foreground" size={24} />
                        </div>
                      </div>
                    </div>
                    <div className="p-6 flex flex-col">
                      <h3 className="font-serif text-2xl font-semibold mb-3">{service.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4">{service.description}</p>
                      <ul className="space-y-2 mb-6 flex-1">
                        {service.features.slice(0, 3).map((feature, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm">
                            <CheckCircle2 className="text-accent flex-shrink-0 mt-0.5" size={16} />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="flex items-center justify-between pt-4 border-t border-border">
                        <span className="font-semibold text-accent">{service.price}</span>
                        <Link href={`/services/${service.slug}`}>
                          <Button variant="ghost" className="text-accent hover:text-accent/80">
                            En savoir plus
                            <ArrowRight className="ml-2" size={16} />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-4xl font-bold mb-12 text-center">Pourquoi nous choisir ?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="text-accent-foreground" size={32} />
                </div>
                <h3 className="font-serif text-xl font-semibold mb-3">Expertise reconnue</h3>
                <p className="text-primary-foreground/80 text-sm leading-relaxed">
                  Plus de 15 ans d'expérience et des artisans qualifiés certifiés RGE et Qualibat.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="text-accent-foreground" size={32} />
                </div>
                <h3 className="font-serif text-xl font-semibold mb-3">Garanties complètes</h3>
                <p className="text-primary-foreground/80 text-sm leading-relaxed">
                  Garantie décennale, assurance tous risques chantier et satisfaction client garantie.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="text-accent-foreground" size={32} />
                </div>
                <h3 className="font-serif text-xl font-semibold mb-3">Suivi personnalisé</h3>
                <p className="text-primary-foreground/80 text-sm leading-relaxed">
                  Un chef de projet dédié et une communication transparente tout au long du chantier.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-4xl font-bold mb-6">Prêt à démarrer votre projet ?</h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Contactez-nous pour une consultation gratuite et un devis personnalisé adapté à vos besoins.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/devis">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  Demander un devis gratuit
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline">
                  Nous contacter
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
