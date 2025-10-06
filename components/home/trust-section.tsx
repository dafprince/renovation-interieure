import { Award, Shield, Clock, Users } from "lucide-react"
import { Card } from "@/components/ui/card"

const features = [
  {
    icon: Award,
    title: "Excellence garantie",
    description: "Artisans certifiés et matériaux premium pour un résultat impeccable",
  },
  {
    icon: Shield,
    title: "Assurance décennale",
    description: "Tous nos travaux sont couverts par une garantie décennale complète",
  },
  {
    icon: Clock,
    title: "Respect des délais",
    description: "Engagement ferme sur les délais avec suivi en temps réel de votre projet",
  },
  {
    icon: Users,
    title: "Accompagnement personnalisé",
    description: "Un chef de projet dédié du début à la fin de votre rénovation",
  },
]

export function TrustSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-balance">Pourquoi nous choisir ?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Une expertise reconnue et un engagement sans faille pour la satisfaction de nos clients
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card key={index} className="p-6 text-center border-border hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="text-accent" size={32} />
                </div>
                <h3 className="font-serif text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
