"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"
import { useState, useEffect } from "react"

const testimonials = [
  {
    id: 1,
    name: "Maria Silva",
    role: "Cliente desde 2023",
    content:
      "Flores maravilhosas! Chegaram fresquinhas e o arranjo estava ainda mais lindo que nas fotos. Minha mãe adorou o presente!",
    rating: 5,
    image: "/happy-woman-portrait.png",
  },
  {
    id: 2,
    name: "João Santos",
    role: "Cliente desde 2022",
    content:
      "Excelente atendimento e flores de primeira qualidade. Sempre uso para surpreender minha esposa em datas especiais.",
    rating: 5,
    image: "/professional-man-portrait.png",
  },
  {
    id: 3,
    name: "Ana Costa",
    role: "Cliente desde 2024",
    content:
      "Compro todas as semanas para decorar minha casa. As flores duram muito tempo e os preços são justos. Recomendo!",
    rating: 5,
    image: "/elegant-woman-smiling-portrait.jpg",
  },
  {
    id: 4,
    name: "Pedro Oliveira",
    role: "Cliente desde 2023",
    content: "Salvou meu aniversário de casamento! Entrega rápida e flores lindíssimas. Vocês são incríveis!",
    rating: 5,
    image: "/happy-man-portrait-smiling.jpg",
  },
]

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  const handleDotClick = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <section id="depoimentos" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <span className="inline-block px-4 py-2 bg-accent/20 text-accent-foreground rounded-full text-sm font-medium">
            Depoimentos
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-balance">
            O que Nossos <span className="text-accent">Clientes</span> Dizem
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Mais de 500 clientes satisfeitos com flores frescas e entregas impecáveis
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <Card className="border-2 border-border bg-card shadow-xl">
                    <CardContent className="p-8 md:p-12">
                      <div className="flex flex-col items-center text-center space-y-6">
                        <div className="relative">
                          <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-primary/20">
                            <img
                              src={testimonial.image || "/placeholder.svg"}
                              alt={testimonial.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-primary rounded-full flex items-center justify-center shadow-lg">
                            <span className="text-primary-foreground text-xl">✓</span>
                          </div>
                        </div>

                        <div className="flex gap-1">
                          {Array.from({ length: testimonial.rating }).map((_, i) => (
                            <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                          ))}
                        </div>

                        <blockquote className="text-lg md:text-xl text-foreground text-balance leading-relaxed">
                          {`"${testimonial.content}"`}
                        </blockquote>

                        <div>
                          <p className="font-bold text-foreground text-lg">{testimonial.name}</p>
                          <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-primary w-8" : "bg-border hover:bg-primary/50"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
