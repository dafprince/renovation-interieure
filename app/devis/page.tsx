import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { QuoteForm } from "@/components/quote/quote-form"
import { CheckCircle2 } from "lucide-react"

export default function DevisPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6 text-balance">
              Demandez votre devis gratuit
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Recevez une estimation personnalisée pour votre projet de rénovation en quelques minutes. Notre équipe
              vous contactera sous 24h pour affiner votre devis.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="text-accent flex-shrink-0 mt-1" size={24} />
              <div>
                <h3 className="font-semibold mb-1">Devis gratuit et sans engagement</h3>
                <p className="text-sm text-muted-foreground">Aucun frais, aucune obligation</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="text-accent flex-shrink-0 mt-1" size={24} />
              <div>
                <h3 className="font-semibold mb-1">Réponse sous 24h</h3>
                <p className="text-sm text-muted-foreground">Notre équipe vous contacte rapidement</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="text-accent flex-shrink-0 mt-1" size={24} />
              <div>
                <h3 className="font-semibold mb-1">Estimation précise</h3>
                <p className="text-sm text-muted-foreground">Tarifs transparents et détaillés</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <QuoteForm />
        </div>
      </section>

      <Footer />
    </main>
  )
}
