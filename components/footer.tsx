import Link from "next/link"
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-accent flex items-center justify-center">
                <span className="text-accent-foreground font-serif text-xl font-bold">R</span>
              </div>
              <span className="font-serif text-lg font-semibold"> Ls Rénovation </span>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed mb-6">
              Expert en rénovation intérieure haut de gamme depuis plus de 15 ans. Nous transformons vos espaces avec
              passion et expertise.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-accent transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-6">Navigation</h3>
            <ul className="space-y-3">
              {["Accueil", "Services", "Réalisations", "Devis", "Blog", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase()}`}
                    className="text-primary-foreground/80 hover:text-accent transition-colors text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-6">Nos Services</h3>
            <ul className="space-y-3">
              {[
                "Design d'intérieur",
                "Peinture & Décoration",
                "Carrelage & Sol",
                "Menuiserie",
                "Aménagement complet",
                "Rénovation cuisine",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="/services"
                    className="text-primary-foreground/80 hover:text-accent transition-colors text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-6">Contact</h3>
            <ul className="space-y-4 mb-6">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-1 flex-shrink-0" />
                <span className="text-primary-foreground/80 text-sm">
                  123 Rue d'Arras,
                  <br />
                  59155 Faches-Thumesnil, France
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="flex-shrink-0" />
                <a
                  href="tel:+33123456789"
                  className="text-primary-foreground/80 hover:text-accent transition-colors text-sm"
                >
                 +33 60 44 21 828
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="flex-shrink-0" />
                <a
                  href="mailto:contact@renovation-premium.fr"
                  className="text-primary-foreground/80 hover:text-accent transition-colors text-sm"
                >
                  contact@renovation-premium.fr
                </a>
              </li>
            </ul>

            <div>
              <h4 className="font-semibold mb-3 text-sm">Newsletter</h4>
              <form className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Votre email"
                  className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50"
                />
                <Button type="submit" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  OK
                </Button>
              </form>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/60 text-sm">© 2025 Rénovation Premium. Tous droits réservés.</p>
          <div className="flex gap-6 text-sm">
            <Link href="/mentions-legales" className="text-primary-foreground/60 hover:text-accent transition-colors">
              Mentions légales
            </Link>
            <Link href="/confidentialite" className="text-primary-foreground/60 hover:text-accent transition-colors">
              Confidentialité
            </Link>
            <Link href="/cgv" className="text-primary-foreground/60 hover:text-accent transition-colors">
              CGV
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
