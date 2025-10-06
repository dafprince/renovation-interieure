import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Calendar, Clock, ArrowRight } from "lucide-react"

const blogPosts = [
  {
    slug: "tendances-design-interieur-2024",
    title: "Les tendances design d'intérieur 2024",
    excerpt: "Découvrez les couleurs, matériaux et styles qui vont dominer la décoration intérieure cette année.",
    image: "modern-luxury-living-room-interior-design-with-ele.jpg",
    category: "Tendances",
    date: "15 janvier 2024",
    readTime: "5 min",
  },
  {
    slug: "renover-cuisine-budget-optimise",
    title: "Rénover sa cuisine avec un budget optimisé",
    excerpt: "Nos conseils d'experts pour transformer votre cuisine sans exploser votre budget.",
    image: "modern-kitchen-renovation-white-marble.jpg",
    category: "Conseils",
    date: "10 janvier 2024",
    readTime: "7 min",
  },
  {
    slug: "choisir-carrelage-salle-bain",
    title: "Comment choisir le carrelage de sa salle de bain",
    excerpt: "Guide complet pour sélectionner le carrelage parfait : matériaux, formats, couleurs et finitions.",
    image: "luxury-spa-bathroom-with-marble-tiles-and-freestan.jpg",
    category: "Guide",
    date: "5 janvier 2024",
    readTime: "6 min",
  },
  {
    slug: "amenagement-petit-espace",
    title: "Aménager un petit espace : astuces et solutions",
    excerpt: "Maximisez chaque mètre carré avec nos solutions d'aménagement intelligentes pour petits espaces.",
    image: "renovated-haussmann-apartment-with-parquet-floors-.jpg",
    category: "Astuces",
    date: "28 décembre 2023",
    readTime: "5 min",
  },
  {
    slug: "peinture-murale-techniques-pro",
    title: "Techniques de peinture murale professionnelle",
    excerpt: "Les secrets des professionnels pour obtenir une finition parfaite sur vos murs.",
    image: "professional-painting-luxury-home-interior.jpg",
    category: "Tutoriel",
    date: "20 décembre 2023",
    readTime: "8 min",
  },
  {
    slug: "materiaux-durables-renovation",
    title: "Matériaux durables pour une rénovation éco-responsable",
    excerpt: "Optez pour des matériaux écologiques et durables pour votre projet de rénovation.",
    image: "lixil-before.png",
    category: "Écologie",
    date: "15 décembre 2023",
    readTime: "6 min",
  },
]

export default function BlogPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6 text-balance">Blog & Actualités</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Conseils d'experts, tendances design et guides pratiques pour réussir votre projet de rénovation
              intérieure
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <Card className="overflow-hidden border-border hover:shadow-xl transition-shadow">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative h-80 lg:h-auto">
                <img
                  src={blogPosts[0].image || "/placeholder.svg"}
                  alt={blogPosts[0].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-accent text-accent-foreground text-sm font-medium rounded-full">
                    À la une
                  </span>
                </div>
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <span className="px-3 py-1 bg-accent/10 text-accent rounded-full font-medium">
                    {blogPosts[0].category}
                  </span>
                  <div className="flex items-center gap-1">
                    <Calendar size={16} />
                    {blogPosts[0].date}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={16} />
                    {blogPosts[0].readTime}
                  </div>
                </div>
                <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-balance">{blogPosts[0].title}</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">{blogPosts[0].excerpt}</p>
                <Link href={`/blog/${blogPosts[0].slug}`}>
                  <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
                    Lire l'article
                    <ArrowRight className="ml-2" size={18} />
                  </Button>
                </Link>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-12 text-center">Derniers articles</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post) => (
              <Card key={post.slug} className="group overflow-hidden border-border hover:shadow-xl transition-all">
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-accent/90 text-accent-foreground text-xs font-medium rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={14} />
                      {post.readTime}
                    </div>
                  </div>
                  <h3 className="font-serif text-xl font-semibold mb-3 text-balance group-hover:text-accent transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{post.excerpt}</p>
                  <Link href={`/blog/${post.slug}`}>
                    <Button variant="link" className="p-0 h-auto text-accent hover:text-accent/80">
                      Lire la suite →
                    </Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Restez informé</h2>
            <p className="text-primary-foreground/80 mb-8 leading-relaxed">
              Recevez nos derniers articles, conseils et tendances directement dans votre boîte mail
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Votre adresse email"
                className="flex-1 px-4 py-3 rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground px-8">S'abonner</Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
