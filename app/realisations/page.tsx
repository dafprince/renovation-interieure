import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { GalleryGrid } from "@/components/gallery/gallery-grid"
import { GalleryFilters } from "@/components/gallery/gallery-filters"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function RealisationsPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6 text-balance">Nos réalisations</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Découvrez nos projets de rénovation intérieure haut de gamme. Chaque projet est unique et reflète notre
              engagement envers l'excellence et le souci du détail.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <GalleryFilters />
          <GalleryGrid />
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-serif font-bold mb-2">500+</div>
              <div className="text-primary-foreground/80">Projets réalisés</div>
            </div>
            <div>
              <div className="text-5xl font-serif font-bold mb-2">15+</div>
              <div className="text-primary-foreground/80">Années d'expérience</div>
            </div>
            <div>
              <div className="text-5xl font-serif font-bold mb-2">98%</div>
              <div className="text-primary-foreground/80">Clients satisfaits</div>
            </div>
            <div>
              <div className="text-5xl font-serif font-bold mb-2">50+</div>
              <div className="text-primary-foreground/80">Artisans qualifiés</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-balance">
            Prêt à transformer votre intérieur ?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Nos experts sont à votre écoute pour donner vie à votre projet de rénovation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/devis">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                Demander un devis gratuit
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline">
                Nous contacter
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
