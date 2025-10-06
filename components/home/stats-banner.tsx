export function StatsBanner() {
  return (
    <section className="py-16 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-5xl md:text-6xl font-serif font-bold">500+</div>
            <div className="text-primary-foreground/80 text-sm md:text-base">Projets réalisés</div>
          </div>
          <div className="space-y-2">
            <div className="text-5xl md:text-6xl font-serif font-bold">15+</div>
            <div className="text-primary-foreground/80 text-sm md:text-base">Années d'expérience</div>
          </div>
          <div className="space-y-2">
            <div className="text-5xl md:text-6xl font-serif font-bold">98%</div>
            <div className="text-primary-foreground/80 text-sm md:text-base">Clients satisfaits</div>
          </div>
          <div className="space-y-2">
            <div className="text-5xl md:text-6xl font-serif font-bold">50+</div>
            <div className="text-primary-foreground/80 text-sm md:text-base">Artisans qualifiés</div>
          </div>
        </div>
      </div>
    </section>
  )
}
