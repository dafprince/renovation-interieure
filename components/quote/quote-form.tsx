"use client"

import type React from "react"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowRight, ArrowLeft, CheckCircle2 } from "lucide-react"
import { QuoteEstimate } from "./quote-estimate"

const services = [
  { id: "design", label: "Design d'intérieur", basePrice: 1500 },
  { id: "peinture", label: "Peinture & Décoration", basePrice: 25 },
  { id: "carrelage", label: "Carrelage & Revêtements", basePrice: 45 },
  { id: "menuiserie", label: "Menuiserie sur mesure", basePrice: 0 },
  { id: "amenagement", label: "Aménagement complet", basePrice: 800 },
  { id: "cuisine", label: "Cuisine & Salle de bain", basePrice: 15000 },
]

export function QuoteForm() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    // Step 1: Project Type
    selectedServices: [] as string[],
    projectType: "",

    // Step 2: Project Details
    surface: "",
    budget: "",
    timeline: "",
    description: "",

    // Step 3: Contact Info
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postalCode: "",
  })

  const [showEstimate, setShowEstimate] = useState(false)

  const handleServiceToggle = (serviceId: string) => {
    setFormData((prev) => ({
      ...prev,
      selectedServices: prev.selectedServices.includes(serviceId)
        ? prev.selectedServices.filter((id) => id !== serviceId)
        : [...prev.selectedServices, serviceId],
    }))
  }

  const handleNext = () => {
    if (step < 3) setStep(step + 1)
  }

  const handleBack = () => {
    if (step > 1) setStep(step - 1)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setShowEstimate(true)
  }

  const calculateEstimate = () => {
    let total = 0
    const surface = Number.parseFloat(formData.surface) || 0

    formData.selectedServices.forEach((serviceId) => {
      const service = services.find((s) => s.id === serviceId)
      if (service) {
        if (service.id === "peinture" || service.id === "carrelage" || service.id === "amenagement") {
          total += service.basePrice * surface
        } else {
          total += service.basePrice
        }
      }
    })

    return total
  }

  if (showEstimate) {
    return (
      <QuoteEstimate
        formData={formData}
        services={services}
        estimate={calculateEstimate()}
        onBack={() => setShowEstimate(false)}
      />
    )
  }

  return (
    <div className="max-w-4xl mx-auto">
      {/* Progress Bar */}
      <div className="mb-12">
        <div className="flex items-center justify-between mb-4">
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex items-center flex-1">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                  s <= step ? "bg-accent text-accent-foreground" : "bg-secondary text-muted-foreground"
                }`}
              >
                {s < step ? <CheckCircle2 size={20} /> : s}
              </div>
              {s < 3 && <div className={`flex-1 h-1 mx-2 ${s < step ? "bg-accent" : "bg-secondary"}`} />}
            </div>
          ))}
        </div>
        <div className="flex justify-between text-sm">
          <span className={step === 1 ? "text-foreground font-semibold" : "text-muted-foreground"}>Type de projet</span>
          <span className={step === 2 ? "text-foreground font-semibold" : "text-muted-foreground"}>Détails</span>
          <span className={step === 3 ? "text-foreground font-semibold" : "text-muted-foreground"}>Coordonnées</span>
        </div>
      </div>

      <Card className="p-8">
        <form onSubmit={handleSubmit}>
          {/* Step 1: Project Type */}
          {step === 1 && (
            <div className="space-y-8">
              <div>
                <h2 className="font-serif text-2xl font-bold mb-2">Quel type de projet souhaitez-vous réaliser ?</h2>
                <p className="text-muted-foreground mb-6">Sélectionnez un ou plusieurs services</p>

                <div className="grid md:grid-cols-2 gap-4">
                  {services.map((service) => (
                    <div
                      key={service.id}
                      className={`border rounded-lg p-4 cursor-pointer transition-all ${
                        formData.selectedServices.includes(service.id)
                          ? "border-accent bg-accent/5"
                          : "border-border hover:border-accent/50"
                      }`}
                      onClick={() => handleServiceToggle(service.id)}
                    >
                      <div className="flex items-start gap-3">
                        <Checkbox
                          checked={formData.selectedServices.includes(service.id)}
                          onCheckedChange={() => handleServiceToggle(service.id)}
                        />
                        <div className="flex-1">
                          <div className="font-semibold mb-1">{service.label}</div>
                          <div className="text-sm text-muted-foreground">
                            {service.basePrice === 0
                              ? "Sur devis"
                              : service.id === "cuisine"
                                ? `À partir de ${service.basePrice.toLocaleString()}€`
                                : service.id === "design"
                                  ? `À partir de ${service.basePrice.toLocaleString()}€`
                                  : `À partir de ${service.basePrice}€/m²`}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <Label htmlFor="projectType">Type de bien</Label>
                <RadioGroup
                  value={formData.projectType}
                  onValueChange={(value) => setFormData({ ...formData, projectType: value })}
                  className="grid md:grid-cols-3 gap-4 mt-2"
                >
                  {["Appartement", "Maison", "Local commercial"].map((type) => (
                    <div key={type}>
                      <RadioGroupItem value={type} id={type} className="peer sr-only" />
                      <Label
                        htmlFor={type}
                        className="flex items-center justify-center rounded-lg border-2 border-border bg-background p-4 hover:bg-accent/5 peer-data-[state=checked]:border-accent cursor-pointer"
                      >
                        {type}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>
            </div>
          )}

          {/* Step 2: Project Details */}
          {step === 2 && (
            <div className="space-y-6">
              <div>
                <h2 className="font-serif text-2xl font-bold mb-2">Détails de votre projet</h2>
                <p className="text-muted-foreground mb-6">Aidez-nous à mieux comprendre vos besoins</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="surface">Surface à rénover (m²)</Label>
                  <Input
                    id="surface"
                    type="number"
                    placeholder="Ex: 50"
                    value={formData.surface}
                    onChange={(e) => setFormData({ ...formData, surface: e.target.value })}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="budget">Budget estimatif</Label>
                  <Select
                    value={formData.budget}
                    onValueChange={(value) => setFormData({ ...formData, budget: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Sélectionnez votre budget" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="5000-10000">5 000€ - 10 000€</SelectItem>
                      <SelectItem value="10000-20000">10 000€ - 20 000€</SelectItem>
                      <SelectItem value="20000-50000">20 000€ - 50 000€</SelectItem>
                      <SelectItem value="50000+">Plus de 50 000€</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <Label htmlFor="timeline">Délai souhaité</Label>
                <Select
                  value={formData.timeline}
                  onValueChange={(value) => setFormData({ ...formData, timeline: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Quand souhaitez-vous démarrer ?" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="urgent">Le plus tôt possible</SelectItem>
                    <SelectItem value="1-3months">Dans 1 à 3 mois</SelectItem>
                    <SelectItem value="3-6months">Dans 3 à 6 mois</SelectItem>
                    <SelectItem value="6months+">Dans plus de 6 mois</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="description">Description de votre projet</Label>
                <Textarea
                  id="description"
                  rows={6}
                  placeholder="Décrivez votre projet, vos attentes, vos contraintes..."
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  required
                />
              </div>
            </div>
          )}

          {/* Step 3: Contact Info */}
          {step === 3 && (
            <div className="space-y-6">
              <div>
                <h2 className="font-serif text-2xl font-bold mb-2">Vos coordonnées</h2>
                <p className="text-muted-foreground mb-6">Pour vous envoyer votre devis personnalisé</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="firstName">Prénom</Label>
                  <Input
                    id="firstName"
                    placeholder="Jean"
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="lastName">Nom</Label>
                  <Input
                    id="lastName"
                    placeholder="Dupont"
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="jean.dupont@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Téléphone</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+33 6 12 34 56 78"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="address">Adresse du projet</Label>
                <Input
                  id="address"
                  placeholder="123 rue de la Rénovation"
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  required
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="city">Ville</Label>
                  <Input
                    id="city"
                    placeholder="Paris"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="postalCode">Code postal</Label>
                  <Input
                    id="postalCode"
                    placeholder="75001"
                    value={formData.postalCode}
                    onChange={(e) => setFormData({ ...formData, postalCode: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div className="bg-secondary/50 rounded-lg p-4 text-sm text-muted-foreground">
                En soumettant ce formulaire, vous acceptez d'être contacté par notre équipe pour discuter de votre
                projet. Vos données sont protégées et ne seront jamais partagées avec des tiers.
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8 pt-6 border-t border-border">
            {step > 1 && (
              <Button type="button" variant="outline" onClick={handleBack}>
                <ArrowLeft className="mr-2" size={18} />
                Retour
              </Button>
            )}
            {step < 3 ? (
              <Button
                type="button"
                onClick={handleNext}
                disabled={step === 1 && formData.selectedServices.length === 0}
                className="ml-auto bg-accent hover:bg-accent/90 text-accent-foreground"
              >
                Continuer
                <ArrowRight className="ml-2" size={18} />
              </Button>
            ) : (
              <Button type="submit" className="ml-auto bg-accent hover:bg-accent/90 text-accent-foreground">
                Obtenir mon estimation
                <ArrowRight className="ml-2" size={18} />
              </Button>
            )}
          </div>
        </form>
      </Card>
    </div>
  )
}
