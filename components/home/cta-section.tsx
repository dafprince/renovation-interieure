import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Phone } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{ backgroundImage: "url('/placeholder.svg?height=100&width=100')" }} />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-balance">
            Prêt à transformer votre intérieur ?
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-12 leading-relaxed max-w-2xl mx-auto">
            Contactez-nous dès aujourd'hui pour une consultation gratuite et un devis personnalisé. Notre équipe
            d'experts est à votre écoute pour donner vie à vos projets.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/devis">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground text-base px-8 h-14 shadow-lg"
              >
                Demander un devis gratuit
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
            <Link href="tel:+33123456789">
              <Button
                size="lg"
                variant="outline"
                className="bg-primary-foreground/10 backdrop-blur-sm border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20 text-base px-8 h-14"
              >
                <Phone className="mr-2" size={20} />
                +33 1 23 45 67 89
              </Button>
            </Link>
          </div>

          <div className="mt-12 pt-12 border-t border-primary-foreground/20">
            <p className="text-sm text-primary-foreground/70 mb-4">Nos horaires d'ouverture</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm">
              <span>Lundi - Vendredi : 8h00 - 18h00</span>
              <span className="hidden sm:inline">•</span>
              <span>Samedi : 9h00 - 17h00</span>
              <span className="hidden sm:inline">•</span>
              <span>Dimanche : Fermé</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
