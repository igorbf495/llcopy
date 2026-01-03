"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ShoppingCart, Heart, Sparkles } from "lucide-react"
import { useState } from "react"
import Image from "next/image"

const products = [
  {
    id: 1,
    name: "Agendas Personalizadas",
    description: "Agendas customizadas com sua marca, diversos tamanhos e acabamentos",
    price: "A partir de R$ 35,00",
    image: "/images/product-custom-agenda.jpg",
    badge: "Mais Vendido",
  },
  {
    id: 2,
    name: "Cartões de Visita",
    description: "Impressão de alta qualidade, papel especial, verniz UV disponível",
    price: "A partir de R$ 50,00",
    image: "/images/product-business-cards-set.jpg",
    badge: "Entrega 24h",
  },
  {
    id: 3,
    name: "Convites & Papelaria",
    description: "Convites para casamento, 15 anos, aniversários com acabamento premium",
    price: "A partir de R$ 3,50/un",
    image: "/images/product-elegant-invitations.jpg",
    badge: "Premium",
  },
  {
    id: 4,
    name: "Adesivos Personalizados",
    description: "Adesivos em diversos formatos, corte especial, alta durabilidade",
    price: "A partir de R$ 1,20/un",
    image: "/images/product-custom-vinyl-stickers.jpg",
    badge: "Promoção",
  },
  {
    id: 5,
    name: "Blocos & Cadernos",
    description: "Blocos personalizados, cadernos corporativos e escolares",
    price: "A partir de R$ 25,00",
    image: "/images/product-custom-notepads.jpg",
    badge: "Corporativo",
  },
  {
    id: 6,
    name: "Material Promocional",
    description: "Flyers, folders, banners, cardápios e muito mais",
    price: "Sob consulta",
    image: "/images/product-promotional-flyers.jpg",
    badge: "Personalizado",
  },
]

export default function ProductsSection() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  const openWhatsApp = (productName: string) => {
    window.open(`https://wa.me/5511987654321?text=Olá! Gostaria de um orçamento para: ${productName}`, "_blank")
  }

  return (
    <section id="produtos" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <span className="inline-block px-4 py-2 bg-secondary/20 text-secondary-foreground rounded-full text-sm font-bold">
            Nossos Produtos
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-balance">
            Soluções <span className="text-primary">Gráficas</span> para Todos os{" "}
            <span className="text-secondary">Projetos</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Da impressão simples aos projetos mais elaborados, temos a solução perfeita para você com qualidade e preço
            justo.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card
              key={product.id}
              className="group relative overflow-hidden border-2 border-border hover:border-primary transition-all duration-300 cursor-pointer bg-card"
              style={{
                transform: hoveredId === product.id ? "translateY(-8px)" : "translateY(0)",
                boxShadow:
                  hoveredId === product.id
                    ? "0 20px 40px rgba(0,0,0,0.15), 0 0 0 2px rgba(255, 230, 0, 0.3)"
                    : "0 4px 6px rgba(0,0,0,0.05)",
              }}
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="relative h-64 overflow-hidden bg-muted">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <button
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-card/90 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-secondary hover:text-secondary-foreground"
                  aria-label="Adicionar aos favoritos"
                >
                  <Heart className="w-5 h-5" />
                </button>

                <div className="absolute top-4 left-4 px-3 py-1 bg-primary text-primary-foreground text-xs font-bold rounded-full flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  {product.badge}
                </div>
              </div>

              <CardContent className="p-6 space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-1">{product.name}</h3>
                  <p className="text-sm text-muted-foreground">{product.description}</p>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <span className="text-xl font-bold text-primary">{product.price}</span>
                  <Button
                    className="bg-secondary text-secondary-foreground hover:bg-secondary/90 transition-all duration-300 hover:scale-105 font-semibold"
                    size="sm"
                    onClick={() => openWhatsApp(product.name)}
                  >
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Orçar
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:scale-105 bg-transparent font-semibold"
            onClick={() =>
              window.open(
                "https://wa.me/5511987654321?text=Olá! Gostaria de ver todos os produtos disponíveis",
                "_blank",
              )
            }
          >
            Ver Todos os Produtos
          </Button>
        </div>
      </div>
    </section>
  )
}
