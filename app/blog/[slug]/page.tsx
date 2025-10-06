import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Calendar, Clock, ArrowLeft, Share2 } from "lucide-react"

// Ajoutez cette fonction pour générer les paramètres statiques
export async function generateStaticParams() {
  // Retournez tous les slugs d'articles que vous avez
  return [
    { slug: 'tendances-design-2024' },
    // Ajoutez d'autres slugs si vous avez d'autres articles
  ]
}

export default function BlogPostPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      <article className="pt-32 pb-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Back Button */}
            <Link href="/blog">
              <Button variant="ghost" className="mb-8">
                <ArrowLeft className="mr-2" size={18} />
                Retour au blog
              </Button>
            </Link>

            {/* Article Header */}
            <div className="mb-8">
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                <span className="px-3 py-1 bg-accent/10 text-accent rounded-full font-medium">Tendances</span>
                <div className="flex items-center gap-1">
                  <Calendar size={16} />
                  15 janvier 2024
                </div>
                <div className="flex items-center gap-1">
                  <Clock size={16} />5 min de lecture
                </div>
              </div>

              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
                Les tendances design d'intérieur 2024
              </h1>

              <p className="text-xl text-muted-foreground leading-relaxed">
                Découvrez les couleurs, matériaux et styles qui vont dominer la décoration intérieure cette année et
                comment les intégrer dans votre projet de rénovation.
              </p>
            </div>

            {/* Featured Image */}
            <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden mb-12">
              <img
                src="/blog-interior-design-trends-2024.jpg"
                alt="Tendances design intérieur 2024"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              <h2 className="font-serif text-3xl font-bold mt-12 mb-6">1. Le retour des tons naturels</h2>
              <p className="leading-relaxed text-muted-foreground mb-6">
                Les couleurs inspirées de la nature dominent les tendances 2024. Les tons terre, beige, terracotta et
                vert sauge créent des ambiances apaisantes et chaleureuses. Ces teintes s'intègrent parfaitement dans
                tous les styles, du moderne au rustique chic.
              </p>

              <h2 className="font-serif text-3xl font-bold mt-12 mb-6">2. Matériaux durables et authentiques</h2>
              <p className="leading-relaxed text-muted-foreground mb-6">
                L'éco-responsabilité n'est plus une option mais une nécessité. Le bois recyclé, la pierre naturelle, le
                lin et le rotin sont plébiscités pour leur authenticité et leur faible impact environnemental. Ces
                matériaux apportent texture et caractère à vos intérieurs.
              </p>

              <h2 className="font-serif text-3xl font-bold mt-12 mb-6">3. Le minimalisme chaleureux</h2>
              <p className="leading-relaxed text-muted-foreground mb-6">
                Exit le minimalisme froid et austère. 2024 voit l'émergence d'un minimalisme plus chaleureux, où les
                espaces épurés sont adoucis par des textiles douillets, des éclairages tamisés et des touches de bois
                naturel. L'objectif : créer des espaces zen sans sacrifier le confort.
              </p>

              <h2 className="font-serif text-3xl font-bold mt-12 mb-6">4. Les courbes et formes organiques</h2>
              <p className="leading-relaxed text-muted-foreground mb-6">
                Les lignes droites cèdent la place aux courbes douces et aux formes organiques. Mobilier arrondi, arches
                architecturales et miroirs aux formes fluides apportent une touche de douceur et de modernité à vos
                intérieurs.
              </p>

              <h2 className="font-serif text-3xl font-bold mt-12 mb-6">5. L'éclairage sculptural</h2>
              <p className="leading-relaxed text-muted-foreground mb-6">
                Les luminaires deviennent de véritables œuvres d'art. Suspensions XXL, lampadaires design et appliques
                murales sculpturales transforment l'éclairage en élément décoratif majeur. Privilégiez les matériaux
                nobles comme le laiton, le verre soufflé ou le rotin tressé.
              </p>

              <h2 className="font-serif text-3xl font-bold mt-12 mb-6">Comment intégrer ces tendances ?</h2>
              <p className="leading-relaxed text-muted-foreground mb-6">
                Nos experts en design d'intérieur peuvent vous accompagner pour intégrer harmonieusement ces tendances
                dans votre projet de rénovation. Que vous souhaitiez une transformation complète ou simplement
                rafraîchir votre décoration, nous créons des espaces qui vous ressemblent tout en restant dans l'air du
                temps.
              </p>
            </div>

            {/* Share & CTA */}
            <div className="mt-16 pt-8 border-t border-border">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <h3 className="font-serif text-2xl font-bold mb-2">Envie de transformer votre intérieur ?</h3>
                  <p className="text-muted-foreground">Nos experts sont là pour vous accompagner</p>
                </div>
                <div className="flex gap-3">
                  <Button variant="outline">
                    <Share2 className="mr-2" size={18} />
                    Partager
                  </Button>
                  <Link href="/devis">
                    <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">Demander un devis</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  )
}