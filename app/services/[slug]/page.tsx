"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight, CheckCircle2, Star } from "lucide-react"
import { notFound } from "next/navigation"
import { useEffect } from "react"

const servicesData = {
  "design-interieur": {
    title: "Design d'intérieur",
    subtitle: "Conception sur mesure de vos espaces avec plans 3D",
    heroImage: "/interior-design-service-hero.jpg",
    description:
      "Notre équipe de designers d'intérieur passionnés transforme vos espaces en lieux de vie uniques qui reflètent votre personnalité. Nous combinons esthétique, fonctionnalité et confort pour créer des intérieurs qui vous ressemblent.",
    longDescription:
      "Que vous souhaitiez réaménager un salon, créer un bureau à domicile ou repenser entièrement votre intérieur, nos designers vous accompagnent à chaque étape. Nous commençons par une consultation approfondie pour comprendre vos goûts, votre style de vie et vos besoins. Ensuite, nous créons des plans détaillés et des rendus 3D photoréalistes pour vous permettre de visualiser votre futur espace avant le début des travaux.",
    features: [
      "Consultation personnalisée à domicile",
      "Analyse de l'espace et des contraintes",
      "Plans 2D détaillés avec cotations",
      "Rendus 3D photoréalistes",
      "Sélection de matériaux et mobilier",
      "Palette de couleurs personnalisée",
      "Accompagnement shopping",
      "Suivi de la réalisation",
    ],
    process: [
      {
        title: "Consultation initiale",
        description: "Rencontre à domicile pour comprendre vos besoins et prendre les mesures.",
      },
      {
        title: "Conception",
        description: "Création de plans 2D/3D et sélection des matériaux et couleurs.",
      },
      {
        title: "Présentation",
        description: "Présentation du projet avec rendus 3D et ajustements selon vos retours.",
      },
      {
        title: "Réalisation",
        description: "Accompagnement pendant les travaux et livraison finale.",
      },
    ],
    pricing: {
      base: "À partir de 1 500€",
      details: [
        "Consultation + plans 2D : 1 500€",
        "Projet complet avec 3D : 3 000€",
        "Accompagnement shopping : 500€/jour",
        "Suivi de chantier : 800€/mois",
      ],
    },
    testimonials: [
      {
        name: "Claire Dubois",
        text: "Une designer à l'écoute qui a su transformer notre salon en un espace chaleureux et moderne. Les rendus 3D nous ont permis de visualiser le résultat final, c'est parfait !",
        rating: 5,
      },
      {
        name: "Marc Laurent",
        text: "Excellent travail sur notre bureau à domicile. L'espace est maintenant fonctionnel et inspirant. Je recommande vivement !",
        rating: 5,
      },
    ],
    gallery: [
      "/design-project-1-modern-living-room.jpg",
      "/design-project-2-elegant-bedroom.jpg",
      "/design-project-3-home-office.jpg",
    ],
  },
  "peinture-decoration": {
    title: "Peinture & Décoration",
    subtitle: "Peinture décorative et enduits haut de gamme",
    heroImage: "/painting-service-hero.jpg",
    description:
      "Nos artisans peintres maîtrisent toutes les techniques de peinture décorative pour sublimer vos murs et plafonds. De la peinture classique aux effets spéciaux, nous apportons une touche d'élégance à votre intérieur.",
    longDescription:
      "La peinture est bien plus qu'une simple couche de couleur sur vos murs. C'est un art qui transforme l'atmosphère de votre intérieur. Notre équipe de peintres qualifiés maîtrise les techniques traditionnelles et contemporaines : peinture à effets, enduits décoratifs, béton ciré, chaux, stucco vénitien, et bien plus encore. Nous travaillons avec des peintures haut de gamme, écologiques et durables.",
    features: [
      "Peinture décorative et effets spéciaux",
      "Enduits à la chaux et tadelakt",
      "Béton ciré murs et sols",
      "Stucco vénitien",
      "Papiers peints haut de gamme",
      "Préparation soignée des supports",
      "Peintures écologiques",
      "Finitions impeccables",
    ],
    process: [
      {
        title: "Diagnostic",
        description: "Évaluation de l'état des supports et conseil sur les techniques adaptées.",
      },
      {
        title: "Préparation",
        description: "Rebouchage, ponçage et protection des surfaces pour un résultat parfait.",
      },
      {
        title: "Application",
        description: "Mise en œuvre des techniques de peinture avec un soin méticuleux.",
      },
      {
        title: "Finitions",
        description: "Retouches finales et nettoyage complet du chantier.",
      },
    ],
    pricing: {
      base: "À partir de 25€/m²",
      details: [
        "Peinture standard : 25€/m²",
        "Peinture décorative : 45€/m²",
        "Enduits décoratifs : 60€/m²",
        "Béton ciré : 80€/m²",
      ],
    },
    testimonials: [
      {
        name: "Sophie Martin",
        text: "Le béton ciré dans notre salle de bain est magnifique. Les artisans sont très professionnels et soigneux. Excellent travail !",
        rating: 5,
      },
    ],
    gallery: [
      "/painting-project-1-decorative-wall.jpg",
      "/painting-project-2-concrete-bathroom.jpg",
      "/painting-project-3-venetian-stucco.jpg",
    ],
  },
  "carrelage-revetements": {
    title: "Carrelage & Revêtements",
    subtitle: "Pose de carrelage et revêtements de sol premium",
    heroImage: "/tile-service-hero.jpg",
    description:
      "Expertise en pose de carrelage, parquet, et tous types de revêtements de sol avec des finitions impeccables. Nous travaillons avec les meilleurs matériaux pour un résultat durable et esthétique.",
    longDescription:
      "Le choix et la pose du revêtement de sol sont essentiels pour l'esthétique et la durabilité de votre intérieur. Nos carreleurs et parqueteurs expérimentés maîtrisent toutes les techniques de pose, du carrelage grand format à la mosaïque, en passant par le parquet massif et les pierres naturelles. Nous assurons une préparation minutieuse des supports pour garantir une pose parfaite et durable.",
    features: [
      "Carrelage grand format et mosaïque",
      "Parquet massif et contrecollé",
      "Pierre naturelle et marbre",
      "Faïence salle de bain",
      "Ragréage et préparation des sols",
      "Pose droite, diagonale, chevron",
      "Joints invisibles",
      "Garantie étanchéité",
    ],
    process: [
      {
        title: "Étude technique",
        description: "Analyse du support et choix de la technique de pose adaptée.",
      },
      {
        title: "Préparation",
        description: "Ragréage, étanchéité et préparation du support.",
      },
      {
        title: "Pose",
        description: "Pose du carrelage ou parquet avec précision et expertise.",
      },
      {
        title: "Finitions",
        description: "Joints, plinthes et nettoyage final.",
      },
    ],
    pricing: {
      base: "À partir de 45€/m²",
      details: [
        "Carrelage standard : 45€/m²",
        "Carrelage grand format : 65€/m²",
        "Parquet contrecollé : 55€/m²",
        "Parquet massif : 75€/m²",
      ],
    },
    testimonials: [
      {
        name: "Jean Dupont",
        text: "Pose de carrelage grand format dans notre salon. Le résultat est impeccable, les joints sont invisibles. Très satisfait !",
        rating: 5,
      },
    ],
    gallery: [
      "/tile-project-1-large-format.jpg",
      "/tile-project-2-herringbone-parquet.jpg",
      "/tile-project-3-marble-bathroom.jpg",
    ],
  },
  menuiserie: {
    title: "Menuiserie sur mesure",
    subtitle: "Création de meubles et aménagements personnalisés",
    heroImage: "/carpentry-service-hero.jpg",
    description:
      "Nos menuisiers créent des meubles sur mesure parfaitement adaptés à vos espaces et à vos besoins. Chaque pièce est unique et fabriquée avec des matériaux de qualité.",
    longDescription:
      "La menuiserie sur mesure permet d'optimiser chaque centimètre de votre espace tout en créant des meubles uniques qui correspondent exactement à vos besoins. Nos menuisiers qualifiés travaillent avec des bois nobles et des matériaux durables pour créer des pièces qui traverseront le temps. Du dressing sur mesure à la bibliothèque murale, nous réalisons tous vos projets d'aménagement.",
    features: [
      "Placards et dressings sur mesure",
      "Bibliothèques et étagères",
      "Meubles TV et rangements",
      "Boiseries et lambris",
      "Portes coulissantes",
      "Aménagement sous escalier",
      "Meubles de salle de bain",
      "Finitions haut de gamme",
    ],
    process: [
      {
        title: "Prise de mesures",
        description: "Relevé précis des dimensions et analyse de vos besoins.",
      },
      {
        title: "Conception",
        description: "Création de plans détaillés et choix des matériaux.",
      },
      {
        title: "Fabrication",
        description: "Réalisation en atelier avec un soin artisanal.",
      },
      {
        title: "Installation",
        description: "Pose et ajustements finaux pour un résultat parfait.",
      },
    ],
    pricing: {
      base: "Sur devis",
      details: [
        "Placard sur mesure : à partir de 800€/ml",
        "Bibliothèque murale : à partir de 1 200€",
        "Dressing complet : à partir de 3 000€",
        "Meuble TV : à partir de 1 500€",
      ],
    },
    testimonials: [
      {
        name: "Marie Laurent",
        text: "Notre dressing sur mesure est magnifique et parfaitement optimisé. La qualité de fabrication est exceptionnelle !",
        rating: 5,
      },
    ],
    gallery: [
      "/carpentry-project-1-custom-closet.jpg",
      "/carpentry-project-2-library-wall.jpg",
      "/carpentry-project-3-tv-unit.jpg",
    ],
  },
  "amenagement-complet": {
    title: "Aménagement complet",
    subtitle: "Rénovation globale clé en main",
    heroImage: "/complete-renovation-service-hero.jpg",
    description:
      "Prise en charge complète de votre projet de rénovation, de la conception à la livraison finale. Nous coordonnons tous les corps de métier pour un résultat harmonieux et dans les délais.",
    longDescription:
      "Un projet de rénovation complète nécessite une coordination parfaite entre tous les corps de métier. Notre équipe prend en charge l'intégralité de votre projet : conception, démarches administratives, coordination des artisans, suivi de chantier et livraison finale. Vous avez un interlocuteur unique qui vous accompagne du début à la fin, pour une rénovation sans stress.",
    features: [
      "Gestion de projet complète",
      "Coordination des corps de métier",
      "Suivi de chantier quotidien",
      "Planning détaillé",
      "Démarches administratives",
      "Garantie décennale",
      "Assurance tous risques",
      "Livraison clé en main",
    ],
    process: [
      {
        title: "Étude de faisabilité",
        description: "Analyse complète du projet et définition du budget.",
      },
      {
        title: "Conception globale",
        description: "Plans, 3D et sélection de tous les matériaux et équipements.",
      },
      {
        title: "Réalisation",
        description: "Coordination de tous les artisans avec suivi quotidien.",
      },
      {
        title: "Livraison",
        description: "Réception des travaux et remise des garanties.",
      },
    ],
    pricing: {
      base: "À partir de 800€/m²",
      details: [
        "Rénovation standard : 800€/m²",
        "Rénovation premium : 1 200€/m²",
        "Rénovation luxe : 1 800€/m²",
        "Devis personnalisé selon projet",
      ],
    },
    testimonials: [
      {
        name: "Pierre Dubois",
        text: "Rénovation complète de notre appartement. Tout était parfaitement coordonné, les délais respectés. Un grand merci à toute l'équipe !",
        rating: 5,
      },
    ],
    gallery: [
      "/complete-renovation-1-before-after.jpg",
      "/complete-renovation-2-living-space.jpg",
      "/complete-renovation-3-modern-interior.jpg",
    ],
  },
  "cuisine-salle-de-bain": {
    title: "Cuisine & Salle de bain",
    subtitle: "Rénovation complète avec équipements premium",
    heroImage: "/kitchen-bathroom-service-hero.jpg",
    description:
      "Transformation complète de vos cuisines et salles de bain avec des équipements haut de gamme. Nous créons des espaces fonctionnels, esthétiques et durables.",
    longDescription:
      "La cuisine et la salle de bain sont les pièces les plus techniques de votre intérieur. Leur rénovation nécessite une expertise particulière en plomberie, électricité et aménagement. Notre équipe spécialisée conçoit et réalise des cuisines et salles de bain sur mesure, alliant design, fonctionnalité et qualité. Nous travaillons avec les meilleures marques d'équipements pour vous garantir confort et durabilité.",
    features: [
      "Conception 3D personnalisée",
      "Plomberie et électricité",
      "Équipements haut de gamme",
      "Meubles sur mesure",
      "Électroménager intégré",
      "Robinetterie design",
      "Garantie sur tous les travaux",
      "Service après-vente",
    ],
    process: [
      {
        title: "Conception",
        description: "Plans 3D et sélection des équipements et matériaux.",
      },
      {
        title: "Démolition",
        description: "Dépose de l'existant et préparation des supports.",
      },
      {
        title: "Installation",
        description: "Plomberie, électricité, pose des meubles et équipements.",
      },
      {
        title: "Finitions",
        description: "Carrelage, peinture et mise en service.",
      },
    ],
    pricing: {
      base: "À partir de 15 000€",
      details: [
        "Cuisine équipée : à partir de 15 000€",
        "Cuisine haut de gamme : à partir de 30 000€",
        "Salle de bain complète : à partir de 12 000€",
        "Salle de bain luxe : à partir de 25 000€",
      ],
    },
    testimonials: [
      {
        name: "Anne Petit",
        text: "Notre nouvelle cuisine est un rêve devenu réalité. Tout est parfaitement pensé et la qualité des équipements est exceptionnelle !",
        rating: 5,
      },
    ],
    gallery: [
      "/kitchen-bathroom-1-modern-kitchen.jpg",
      "/kitchen-bathroom-2-luxury-bathroom.jpg",
      "/kitchen-bathroom-3-kitchen-island.jpg",
    ],
  },
}

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = servicesData[params.slug as keyof typeof servicesData]

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [params.slug])

  if (!service) {
    notFound()
  }

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-primary text-primary-foreground">
        <div className="absolute inset-0 opacity-10">
          <img
            src={service.heroImage || "/placeholder.svg"}
            alt={service.title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6 text-balance">{service.title}</h1>
            <p className="text-xl leading-relaxed mb-8">{service.subtitle}</p>
            <Link href="/devis">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                Demander un devis gratuit
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-muted-foreground leading-relaxed mb-6">{service.description}</p>
            <p className="text-lg text-muted-foreground leading-relaxed">{service.longDescription}</p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl font-bold mb-12 text-center">Ce qui est inclus</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {service.features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="text-accent flex-shrink-0 mt-1" size={20} />
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl font-bold mb-12 text-center">Notre processus</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {service.process.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="font-serif text-2xl font-bold text-accent">{index + 1}</span>
                  </div>
                  <h3 className="font-serif text-lg font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-serif text-3xl font-bold mb-8 text-center">Tarifs</h2>
            <Card className="p-8">
              <div className="text-center mb-6">
                <div className="text-4xl font-serif font-bold text-accent mb-2">{service.pricing.base}</div>
              </div>
              <ul className="space-y-3">
                {service.pricing.details.map((detail, index) => (
                  <li
                    key={index}
                    className="flex items-center justify-between py-2 border-b border-border last:border-0"
                  >
                    <span className="text-muted-foreground">{detail.split(":")[0]}</span>
                    <span className="font-semibold">{detail.split(":")[1]}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 text-center">
                <Link href="/devis">
                  <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground w-full">
                    Obtenir un devis personnalisé
                  </Button>
                </Link>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl font-bold mb-12 text-center">Témoignages clients</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {service.testimonials.map((testimonial, index) => (
                <Card key={index} className="p-6">
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="fill-accent text-accent" size={18} />
                    ))}
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-4">"{testimonial.text}"</p>
                  <div className="font-semibold">{testimonial.name}</div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-4xl font-bold mb-6">Intéressé par ce service ?</h2>
            <p className="text-lg mb-8 leading-relaxed">
              Contactez-nous pour discuter de votre projet et recevoir un devis gratuit personnalisé.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/devis">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  Demander un devis
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
              <Link href="/services">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20"
                >
                  Voir tous les services
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
