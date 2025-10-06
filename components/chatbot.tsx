"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { MessageCircle, X, Send } from "lucide-react"

interface Message {
  id: string
  text: string
  sender: "user" | "bot"
  timestamp: Date
}

const quickReplies = ["Demander un devis", "Voir les réalisations", "Nos services", "Prendre rendez-vous"]

const botResponses: Record<string, string> = {
  default: "Bonjour ! Je suis votre assistant virtuel. Comment puis-je vous aider aujourd'hui ?",
  devis:
    "Excellent ! Pour obtenir un devis personnalisé, je vous invite à remplir notre formulaire en ligne. Cliquez sur 'Demander un devis' dans le menu ou visitez notre page dédiée. Vous recevrez une estimation sous 24h.",
  realisations:
    "Nous avons réalisé plus de 500 projets de rénovation intérieure ! Découvrez notre galerie de réalisations avec des transformations avant/après impressionnantes. Visitez notre page 'Réalisations' pour voir nos projets.",
  services:
    "Nous proposons une gamme complète de services : Design d'intérieur, Peinture & Décoration, Carrelage & Revêtements, Menuiserie sur mesure, Aménagement complet, et Rénovation cuisine & salle de bain. Quel service vous intéresse ?",
  contact:
    "Vous pouvez nous contacter au 01 23 45 67 89 ou par email à contact@renovation-interieur.fr. Nous sommes disponibles du lundi au vendredi de 9h à 18h. Vous préférez un rendez-vous ? Je peux vous orienter vers notre formulaire de prise de rendez-vous.",
  prix: "Nos tarifs varient selon la nature et l'ampleur de votre projet. Pour obtenir une estimation précise, je vous recommande de demander un devis gratuit. Nous proposons des solutions adaptées à tous les budgets, avec un excellent rapport qualité-prix.",
  delai:
    "Les délais dépendent de la complexité du projet. En moyenne : cuisine (3-4 semaines), salle de bain (2-3 semaines), pièce à vivre (2-4 semaines). Nous nous engageons à respecter les délais convenus et à vous tenir informé tout au long du projet.",
}

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Bonjour ! Je suis votre assistant virtuel pour la rénovation intérieure. Comment puis-je vous aider aujourd'hui ?",
      sender: "bot",
      timestamp: new Date(),
    },
  ])
  const [inputValue, setInputValue] = useState("")
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const getBotResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase()

    if (
      lowerMessage.includes("devis") ||
      lowerMessage.includes("prix") ||
      lowerMessage.includes("tarif") ||
      lowerMessage.includes("coût")
    ) {
      return botResponses.devis
    }
    if (
      lowerMessage.includes("réalisation") ||
      lowerMessage.includes("projet") ||
      lowerMessage.includes("galerie") ||
      lowerMessage.includes("avant")
    ) {
      return botResponses.realisations
    }
    if (
      lowerMessage.includes("service") ||
      lowerMessage.includes("peinture") ||
      lowerMessage.includes("carrelage") ||
      lowerMessage.includes("menuiserie")
    ) {
      return botResponses.services
    }
    if (
      lowerMessage.includes("contact") ||
      lowerMessage.includes("téléphone") ||
      lowerMessage.includes("email") ||
      lowerMessage.includes("rendez-vous")
    ) {
      return botResponses.contact
    }
    if (
      lowerMessage.includes("délai") ||
      lowerMessage.includes("temps") ||
      lowerMessage.includes("durée") ||
      lowerMessage.includes("combien de temps")
    ) {
      return botResponses.delai
    }
    if (lowerMessage.includes("bonjour") || lowerMessage.includes("salut") || lowerMessage.includes("hello")) {
      return "Bonjour ! Ravi de vous accueillir. Je suis là pour répondre à toutes vos questions sur nos services de rénovation intérieure. Que souhaitez-vous savoir ?"
    }

    return "Je comprends votre question. Pour une réponse personnalisée, je vous invite à nous contacter directement au 01 23 45 67 89 ou à demander un devis en ligne. Notre équipe se fera un plaisir de vous accompagner dans votre projet !"
  }

  const handleSendMessage = (text?: string) => {
    const messageText = text || inputValue.trim()
    if (!messageText) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: messageText,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue("")

    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: getBotResponse(messageText),
        sender: "bot",
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, botMessage])
    }, 800)
  }

  const handleQuickReply = (reply: string) => {
    handleSendMessage(reply)
  }

  return (
    <>
      {/* Chatbot Button */}
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          size="lg"
          className="fixed bottom-6 right-6 h-16 w-16 rounded-full shadow-2xl bg-accent hover:bg-accent/90 text-accent-foreground z-50 hover:scale-110 transition-transform"
        >
          <MessageCircle size={28} />
        </Button>
      )}

      {/* Chatbot Window */}
      {isOpen && (
        <Card className="fixed bottom-6 right-6 w-[380px] h-[600px] shadow-2xl z-50 flex flex-col overflow-hidden border-2">
          {/* Header */}
          <div className="bg-accent text-accent-foreground p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-accent-foreground/20 rounded-full flex items-center justify-center">
                <MessageCircle size={20} />
              </div>
              <div>
                <h3 className="font-semibold">Assistant Rénovation</h3>
                <p className="text-xs opacity-90">En ligne</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="hover:bg-accent-foreground/20 text-accent-foreground"
            >
              <X size={20} />
            </Button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-secondary/10">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                    message.sender === "user"
                      ? "bg-accent text-accent-foreground"
                      : "bg-background border border-border"
                  }`}
                >
                  <p className="text-sm leading-relaxed">{message.text}</p>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Replies */}
          {messages.length <= 2 && (
            <div className="px-4 py-2 border-t border-border bg-background">
              <p className="text-xs text-muted-foreground mb-2">Suggestions :</p>
              <div className="flex flex-wrap gap-2">
                {quickReplies.map((reply) => (
                  <Button
                    key={reply}
                    variant="outline"
                    size="sm"
                    onClick={() => handleQuickReply(reply)}
                    className="text-xs hover:bg-accent hover:text-accent-foreground"
                  >
                    {reply}
                  </Button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <div className="p-4 border-t border-border bg-background">
            <div className="flex gap-2">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                placeholder="Posez votre question..."
                className="flex-1"
              />
              <Button
                onClick={() => handleSendMessage()}
                size="icon"
                className="bg-accent hover:bg-accent/90 text-accent-foreground"
              >
                <Send size={18} />
              </Button>
            </div>
          </div>
        </Card>
      )}
    </>
  )
}
