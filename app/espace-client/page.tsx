"use client"

import type React from "react"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  FileText,
  Download,
  MessageSquare,
  CheckCircle2,
  Clock,
  AlertCircle,
  User,
  Mail,
  Phone,
  MapPin,
} from "lucide-react"

export default function EspaceClientPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulation de connexion
    if (email && password) {
      setIsLoggedIn(true)
    }
  }

  if (!isLoggedIn) {
    return (
      <main className="min-h-screen">
        <Navigation />

        <section className="pt-32 pb-20 min-h-screen flex items-center bg-secondary/30">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-md mx-auto">
              <Card className="p-8">
                <div className="text-center mb-8">
                  <h1 className="font-serif text-3xl font-bold mb-2">Espace Client</h1>
                  <p className="text-muted-foreground">Connectez-vous pour accéder à votre espace</p>
                </div>

                <form onSubmit={handleLogin} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="votre@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="password">Mot de passe</Label>
                    <Input
                      id="password"
                      type="password"
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                    Se connecter
                  </Button>

                  <div className="text-center text-sm">
                    <a href="#" className="text-accent hover:underline">
                      Mot de passe oublié ?
                    </a>
                  </div>
                </form>

                <div className="mt-8 pt-6 border-t border-border text-center text-sm text-muted-foreground">
                  <p>Pas encore de compte ?</p>
                  <p className="mt-2">
                    Contactez-nous au <span className="text-accent font-medium">01 23 45 67 89</span>
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    )
  }

  return (
    <main className="min-h-screen">
      <Navigation />

      <section className="pt-32 pb-20 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-8">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-2">Bienvenue, Jean Dupont</h1>
            <p className="text-muted-foreground">Gérez vos projets et suivez l'avancement de vos travaux</p>
          </div>

          <Tabs defaultValue="projets" className="space-y-8">
            <TabsList className="grid w-full grid-cols-4 max-w-2xl">
              <TabsTrigger value="projets">Mes Projets</TabsTrigger>
              <TabsTrigger value="documents">Documents</TabsTrigger>
              <TabsTrigger value="messages">Messages</TabsTrigger>
              <TabsTrigger value="profil">Mon Profil</TabsTrigger>
            </TabsList>

            {/* Projets Tab */}
            <TabsContent value="projets" className="space-y-6">
              <Card className="p-6">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h2 className="font-serif text-2xl font-bold mb-2">Rénovation Cuisine</h2>
                    <p className="text-muted-foreground">Projet #2024-001</p>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium">
                    <Clock size={16} />
                    En cours
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Progression globale</span>
                    <span className="text-sm font-medium">65%</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2">
                    <div className="bg-accent h-2 rounded-full" style={{ width: "65%" }} />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="p-4 bg-secondary/50 rounded-lg">
                    <div className="text-sm text-muted-foreground mb-1">Date de début</div>
                    <div className="font-medium">15 janvier 2024</div>
                  </div>
                  <div className="p-4 bg-secondary/50 rounded-lg">
                    <div className="text-sm text-muted-foreground mb-1">Date de fin prévue</div>
                    <div className="font-medium">28 février 2024</div>
                  </div>
                  <div className="p-4 bg-secondary/50 rounded-lg">
                    <div className="text-sm text-muted-foreground mb-1">Chef de projet</div>
                    <div className="font-medium">Marie Laurent</div>
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="font-semibold mb-3">Étapes du projet</h3>

                  <div className="flex items-start gap-3 p-3 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-900">
                    <CheckCircle2 className="text-green-600 mt-0.5" size={20} />
                    <div className="flex-1">
                      <div className="font-medium">Démolition et préparation</div>
                      <div className="text-sm text-muted-foreground">Terminé le 22 janvier 2024</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-900">
                    <CheckCircle2 className="text-green-600 mt-0.5" size={20} />
                    <div className="flex-1">
                      <div className="font-medium">Plomberie et électricité</div>
                      <div className="text-sm text-muted-foreground">Terminé le 5 février 2024</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 bg-accent/10 rounded-lg border border-accent/30">
                    <Clock className="text-accent mt-0.5" size={20} />
                    <div className="flex-1">
                      <div className="font-medium">Pose du carrelage</div>
                      <div className="text-sm text-muted-foreground">En cours - 70% complété</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 bg-secondary/50 rounded-lg">
                    <AlertCircle className="text-muted-foreground mt-0.5" size={20} />
                    <div className="flex-1">
                      <div className="font-medium">Installation de la cuisine</div>
                      <div className="text-sm text-muted-foreground">Prévu à partir du 20 février</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 bg-secondary/50 rounded-lg">
                    <AlertCircle className="text-muted-foreground mt-0.5" size={20} />
                    <div className="flex-1">
                      <div className="font-medium">Finitions et peinture</div>
                      <div className="text-sm text-muted-foreground">Prévu à partir du 25 février</div>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h2 className="font-serif text-2xl font-bold mb-2">Rénovation Salle de bain</h2>
                    <p className="text-muted-foreground">Projet #2023-045</p>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1 bg-green-100 dark:bg-green-950 text-green-700 dark:text-green-400 rounded-full text-sm font-medium">
                    <CheckCircle2 size={16} />
                    Terminé
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">Projet terminé le 15 décembre 2023</p>
                <Button variant="outline" size="sm">
                  Voir les détails
                </Button>
              </Card>
            </TabsContent>

            {/* Documents Tab */}
            <TabsContent value="documents" className="space-y-4">
              <Card className="p-6">
                <h2 className="font-serif text-2xl font-bold mb-6">Mes Documents</h2>

                <div className="space-y-3">
                  <div className="flex items-center justify-between p-4 bg-secondary/50 rounded-lg hover:bg-secondary transition-colors">
                    <div className="flex items-center gap-3">
                      <FileText className="text-accent" size={24} />
                      <div>
                        <div className="font-medium">Devis Rénovation Cuisine</div>
                        <div className="text-sm text-muted-foreground">PDF • 245 KB • 10 janvier 2024</div>
                      </div>
                    </div>
                    <Button variant="ghost" size="icon">
                      <Download size={20} />
                    </Button>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-secondary/50 rounded-lg hover:bg-secondary transition-colors">
                    <div className="flex items-center gap-3">
                      <FileText className="text-accent" size={24} />
                      <div>
                        <div className="font-medium">Facture Acompte</div>
                        <div className="text-sm text-muted-foreground">PDF • 180 KB • 15 janvier 2024</div>
                      </div>
                    </div>
                    <Button variant="ghost" size="icon">
                      <Download size={20} />
                    </Button>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-secondary/50 rounded-lg hover:bg-secondary transition-colors">
                    <div className="flex items-center gap-3">
                      <FileText className="text-accent" size={24} />
                      <div>
                        <div className="font-medium">Plans 3D Cuisine</div>
                        <div className="text-sm text-muted-foreground">PDF • 1.2 MB • 8 janvier 2024</div>
                      </div>
                    </div>
                    <Button variant="ghost" size="icon">
                      <Download size={20} />
                    </Button>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-secondary/50 rounded-lg hover:bg-secondary transition-colors">
                    <div className="flex items-center gap-3">
                      <FileText className="text-accent" size={24} />
                      <div>
                        <div className="font-medium">Garantie Décennale</div>
                        <div className="text-sm text-muted-foreground">PDF • 320 KB • 15 décembre 2023</div>
                      </div>
                    </div>
                    <Button variant="ghost" size="icon">
                      <Download size={20} />
                    </Button>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-secondary/50 rounded-lg hover:bg-secondary transition-colors">
                    <div className="flex items-center gap-3">
                      <FileText className="text-accent" size={24} />
                      <div>
                        <div className="font-medium">Facture Finale Salle de bain</div>
                        <div className="text-sm text-muted-foreground">PDF • 195 KB • 15 décembre 2023</div>
                      </div>
                    </div>
                    <Button variant="ghost" size="icon">
                      <Download size={20} />
                    </Button>
                  </div>
                </div>
              </Card>
            </TabsContent>

            {/* Messages Tab */}
            <TabsContent value="messages" className="space-y-4">
              <Card className="p-6">
                <h2 className="font-serif text-2xl font-bold mb-6">Messagerie</h2>

                <div className="space-y-4">
                  <Card className="p-4 bg-accent/5 border-accent/20">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center text-accent-foreground font-semibold">
                        ML
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <div className="font-semibold">Marie Laurent</div>
                          <div className="text-sm text-muted-foreground">Il y a 2 heures</div>
                        </div>
                        <p className="text-sm leading-relaxed">
                          Bonjour Jean, je voulais vous informer que la pose du carrelage avance bien. Nous devrions
                          terminer cette étape d'ici vendredi. Je vous enverrai des photos de l'avancement en fin de
                          journée.
                        </p>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-4">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-foreground font-semibold">
                        JD
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <div className="font-semibold">Vous</div>
                          <div className="text-sm text-muted-foreground">Hier à 14:30</div>
                        </div>
                        <p className="text-sm leading-relaxed">
                          Parfait, merci pour le suivi ! J'ai hâte de voir le résultat. Est-ce que la livraison des
                          meubles de cuisine est toujours prévue pour le 20 février ?
                        </p>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-4">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center text-accent-foreground font-semibold">
                        ML
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <div className="font-semibold">Marie Laurent</div>
                          <div className="text-sm text-muted-foreground">Hier à 15:45</div>
                        </div>
                        <p className="text-sm leading-relaxed">
                          Oui, tout est confirmé avec le fournisseur. La livraison aura lieu le 20 février entre 9h et
                          12h. Je serai présente pour réceptionner et superviser l'installation.
                        </p>
                      </div>
                    </div>
                  </Card>

                  <div className="pt-4">
                    <div className="flex gap-2">
                      <Input placeholder="Écrivez votre message..." className="flex-1" />
                      <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
                        <MessageSquare size={20} />
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            </TabsContent>

            {/* Profil Tab */}
            <TabsContent value="profil" className="space-y-4">
              <Card className="p-6">
                <h2 className="font-serif text-2xl font-bold mb-6">Mon Profil</h2>

                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center text-accent-foreground text-2xl font-bold">
                      JD
                    </div>
                    <div>
                      <h3 className="font-semibold text-xl">Jean Dupont</h3>
                      <p className="text-muted-foreground">Client depuis janvier 2023</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label className="flex items-center gap-2">
                        <User size={16} />
                        Nom complet
                      </Label>
                      <Input value="Jean Dupont" readOnly />
                    </div>

                    <div className="space-y-2">
                      <Label className="flex items-center gap-2">
                        <Mail size={16} />
                        Email
                      </Label>
                      <Input value="jean.dupont@email.com" readOnly />
                    </div>

                    <div className="space-y-2">
                      <Label className="flex items-center gap-2">
                        <Phone size={16} />
                        Téléphone
                      </Label>
                      <Input value="06 12 34 56 78" readOnly />
                    </div>

                    <div className="space-y-2">
                      <Label className="flex items-center gap-2">
                        <MapPin size={16} />
                        Adresse
                      </Label>
                      <Input value="15 rue de la Paix, 75002 Paris" readOnly />
                    </div>
                  </div>

                  <div className="pt-4 flex gap-3">
                    <Button variant="outline">Modifier mes informations</Button>
                    <Button variant="outline">Changer mon mot de passe</Button>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="font-serif text-xl font-bold mb-4">Historique des projets</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-secondary/50 rounded-lg">
                    <div>
                      <div className="font-medium">Rénovation Cuisine</div>
                      <div className="text-sm text-muted-foreground">En cours depuis janvier 2024</div>
                    </div>
                    <div className="text-accent font-medium">65%</div>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-secondary/50 rounded-lg">
                    <div>
                      <div className="font-medium">Rénovation Salle de bain</div>
                      <div className="text-sm text-muted-foreground">Terminé en décembre 2023</div>
                    </div>
                    <CheckCircle2 className="text-green-600" size={20} />
                  </div>
                </div>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <Footer />
    </main>
  )
}
