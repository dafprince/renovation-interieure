import { CheckCircle2 } from "lucide-react"

const steps = [
  {
    number: "01",
    title: "Consultation gratuite",
    description:
      "Rencontre initiale pour comprendre vos besoins, vos envies et votre budget. Visite de votre espace et premiers conseils.",
  },
  {
    number: "02",
    title: "Conception & Devis",
    description:
      "Élaboration de plans détaillés, rendus 3D et devis transparent. Nous affinons ensemble chaque détail de votre projet.",
  },
  {
    number: "03",
    title: "Réalisation",
    description:
      "Nos artisans qualifiés donnent vie à votre projet avec un suivi quotidien et une communication transparente.",
  },
  {
    number: "04",
    title: "Livraison & Garantie",
    description:
      "Réception des travaux, nettoyage complet et garantie décennale. Votre satisfaction est notre priorité absolue.",
  },
]

export function ProcessSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-balance">Notre processus en 4 étapes</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Un accompagnement personnalisé de A à Z pour garantir la réussite de votre projet de rénovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-border -translate-x-1/2 z-0" />
              )}

              <div className="relative z-10">
                <div className="mb-6">
                  <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                    <span className="font-serif text-2xl font-bold text-accent">{step.number}</span>
                  </div>
                  <CheckCircle2 className="text-accent" size={24} />
                </div>
                <h3 className="font-serif text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-secondary/50 rounded-lg p-8 md:p-12">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-serif font-bold text-accent mb-2">15+</div>
              <div className="text-muted-foreground">Années d'expérience</div>
            </div>
            <div>
              <div className="text-4xl font-serif font-bold text-accent mb-2">500+</div>
              <div className="text-muted-foreground">Projets réalisés</div>
            </div>
            <div>
              <div className="text-4xl font-serif font-bold text-accent mb-2">98%</div>
              <div className="text-muted-foreground">Clients satisfaits</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
