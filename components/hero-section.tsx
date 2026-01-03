"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useState, useEffect } from "react"
import { Zap, Award, Clock } from "lucide-react"

export default function HeroSection() {
  const [currentImage, setCurrentImage] = useState(0)

  const images = [
    "/images/graphic-agendas-notebooks.jpg",
    "/images/graphic-business-cards.jpg",
    "/images/graphic-custom-stickers.jpg",
    "/images/graphic-wedding-invitations.jpg",
    "/images/graphic-promotional-materials.jpg",
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [images.length])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10" />

      {/* Elementos decorativos com cores da logo */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-secondary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-accent/20 rounded-full blur-3xl animate-pulse" />

      <div className="container mx-auto px-4 z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left space-y-6">
            <div className="inline-block">
              <span className="inline-block px-4 py-2 bg-primary text-primary-foreground rounded-full text-sm font-bold mb-4 shadow-lg">
                ⚡ Entrega Rápida • Qualidade Premium
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-balance leading-tight">
              Sua <span className="text-primary">Gráfica Rápida</span> e{" "}
              <span className="text-secondary">Personalizada</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl text-pretty">
              Da ideia ao produto final em tempo recorde! Agendas personalizadas, cartões, convites, adesivos e muito
              mais com acabamento profissional e preços competitivos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 hover:scale-105 shadow-lg text-lg px-8 py-6 font-bold"
                onClick={() => document.getElementById("produtos")?.scrollIntoView({ behavior: "smooth" })}
              >
                Ver Produtos
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:scale-105 text-lg px-8 py-6 bg-transparent font-semibold"
                onClick={() =>
                  window.open(
                    "https://wa.me/5511987654321?text=Olá! Gostaria de fazer um orçamento na LL Copy",
                    "_blank",
                  )
                }
              >
                Solicitar Orçamento
              </Button>
            </div>

            <div className="flex items-center gap-6 justify-center lg:justify-start pt-6 flex-wrap">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <Zap className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-bold text-foreground">Entrega Rápida</p>
                  <p className="text-xs text-muted-foreground">A partir de 24h</p>
                </div>
              </div>
              <div className="w-px h-12 bg-border" />
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center">
                  <Award className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <p className="text-sm font-bold text-foreground">Qualidade Premium</p>
                  <p className="text-xs text-muted-foreground">Acabamento perfeito</p>
                </div>
              </div>
              <div className="w-px h-12 bg-border" />
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm font-bold text-foreground">Atendimento Ágil</p>
                  <p className="text-xs text-muted-foreground">Resposta imediata</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative h-[500px] md:h-[600px] rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-muted to-muted/50 border-4 border-primary/20">
            {images.map((img, index) => (
              <div
                key={img}
                className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
                style={{ opacity: currentImage === index ? 1 : 0 }}
              >
                <Image
                  src={img || "/placeholder.svg"}
                  alt={`Produto gráfico ${index + 1}`}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
              </div>
            ))}

            {/* Indicadores do carrossel */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    currentImage === index ? "bg-primary w-8" : "bg-card/50 w-2"
                  }`}
                  aria-label={`Ir para imagem ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
