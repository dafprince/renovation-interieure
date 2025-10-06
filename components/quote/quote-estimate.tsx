"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle2, Download, Mail, ArrowLeft } from "lucide-react"

interface QuoteEstimateProps {
  formData: {
    selectedServices: string[]
    projectType: string
    surface: string
    budget: string
    timeline: string
    description: string
    firstName: string
    lastName: string
    email: string
    phone: string
    address: string
    city: string
    postalCode: string
  }
  services: Array<{ id: string; label: string; basePrice: number }>
  estimate: number
  onBack: () => void
}

export function QuoteEstimate({ formData, services, estimate, onBack }: QuoteEstimateProps) {
  const selectedServiceDetails = formData.selectedServices.map((serviceId) => services.find((s) => s.id === serviceId))

  const handleDownload = () => {
    // In a real app, this would generate a PDF
    alert("Fonctionnalité de téléchargement PDF à venir")
  }

  const handleSendEmail = () => {
    // In a real app, this would send the quote via email
    alert("Votre devis a été envoyé par email !")
  }

  return (
    <div className="max-w-4xl mx-auto">
      {/* Success Message */}
      <div className="text-center mb-12">
        <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="text-accent" size={48} />
        </div>
        <h1 className="font-serif text-4xl font-bold mb-4">Votre estimation est prête !</h1>
        <p className="text-lg text-muted-foreground">
          Merci {formData.firstName} ! Voici une estimation pour votre projet de rénovation.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Estimate Details */}
        <div className="lg:col-span-2 space-y-6">
          <Card className="p-8">
            <h2 className="font-serif text-2xl font-bold mb-6">Détails de l'estimation</h2>

            <div className="space-y-4 mb-6">
              <div className="flex justify-between py-3 border-b border-border">
                <span className="text-muted-foreground">Type de bien</span>
                <span className="font-semibold">{formData.projectType}</span>
              </div>
              <div className="flex justify-between py-3 border-b border-border">
                <span className="text-muted-foreground">Surface</span>
                <span className="font-semibold">{formData.surface} m²</span>
              </div>
              <div className="flex justify-between py-3 border-b border-border">
                <span className="text-muted-foreground">Délai souhaité</span>
                <span className="font-semibold">
                  {formData.timeline === "urgent"
                    ? "Le plus tôt possible"
                    : formData.timeline === "1-3months"
                      ? "1 à 3 mois"
                      : formData.timeline === "3-6months"
                        ? "3 à 6 mois"
                        : "Plus de 6 mois"}
                </span>
              </div>
            </div>

            <h3 className="font-serif text-xl font-semibold mb-4">Services sélectionnés</h3>
            <div className="space-y-3 mb-6">
              {selectedServiceDetails.map((service) => (
                <div key={service?.id} className="flex items-center gap-3 p-3 bg-secondary/30 rounded-lg">
                  <CheckCircle2 className="text-accent flex-shrink-0" size={20} />
                  <span className="font-medium">{service?.label}</span>
                </div>
              ))}
            </div>

            <div className="bg-accent/10 rounded-lg p-6 mt-6">
              <div className="flex justify-between items-center">
                <div>
                  <div className="text-sm text-muted-foreground mb-1">Estimation totale</div>
                  <div className="font-serif text-4xl font-bold text-accent">
                    {estimate > 0 ? `${estimate.toLocaleString()}€` : "Sur devis"}
                  </div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                Cette estimation est indicative et peut varier selon les spécificités de votre projet. Un devis détaillé
                vous sera envoyé après notre visite sur site.
              </p>
            </div>
          </Card>

          <Card className="p-6 bg-secondary/30">
            <h3 className="font-semibold mb-3">Prochaines étapes</h3>
            <ol className="space-y-3 text-sm">
              <li className="flex gap-3">
                <span className="font-semibold text-accent">1.</span>
                <span>Notre équipe vous contactera sous 24h pour planifier une visite sur site</span>
              </li>
              <li className="flex gap-3">
                <span className="font-semibold text-accent">2.</span>
                <span>Nous établirons un devis détaillé et personnalisé</span>
              </li>
              <li className="flex gap-3">
                <span className="font-semibold text-accent">3.</span>
                <span>Après validation, nous planifierons le début des travaux</span>
              </li>
            </ol>
          </Card>
        </div>

        {/* Actions Sidebar */}
        <div className="space-y-6">
          <Card className="p-6">
            <h3 className="font-semibold mb-4">Actions</h3>
            <div className="space-y-3">
              <Button onClick={handleSendEmail} className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                <Mail className="mr-2" size={18} />
                Envoyer par email
              </Button>
              <Button onClick={handleDownload} variant="outline" className="w-full bg-transparent">
                <Download className="mr-2" size={18} />
                Télécharger PDF
              </Button>
              <Button onClick={onBack} variant="ghost" className="w-full">
                <ArrowLeft className="mr-2" size={18} />
                Modifier ma demande
              </Button>
            </div>
          </Card>

          <Card className="p-6 bg-primary text-primary-foreground">
            <h3 className="font-semibold mb-3">Besoin d'aide ?</h3>
            <p className="text-sm text-primary-foreground/90 mb-4">
              Notre équipe est disponible pour répondre à toutes vos questions.
            </p>
            <div className="space-y-2 text-sm">
              <div>
                <div className="text-primary-foreground/70 text-xs">Téléphone</div>
                <a href="tel:+33123456789" className="font-semibold hover:underline">
                  +33 1 23 45 67 89
                </a>
              </div>
              <div>
                <div className="text-primary-foreground/70 text-xs">Email</div>
                <a href="mailto:contact@renovation-premium.fr" className="font-semibold hover:underline">
                  contact@renovation-premium.fr
                </a>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="font-semibold mb-3">Vos informations</h3>
            <div className="space-y-2 text-sm">
              <div>
                <div className="text-muted-foreground text-xs">Nom</div>
                <div className="font-medium">
                  {formData.firstName} {formData.lastName}
                </div>
              </div>
              <div>
                <div className="text-muted-foreground text-xs">Email</div>
                <div className="font-medium">{formData.email}</div>
              </div>
              <div>
                <div className="text-muted-foreground text-xs">Téléphone</div>
                <div className="font-medium">{formData.phone}</div>
              </div>
              <div>
                <div className="text-muted-foreground text-xs">Adresse</div>
                <div className="font-medium">
                  {formData.address}
                  <br />
                  {formData.postalCode} {formData.city}
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
