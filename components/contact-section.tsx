"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Instagram, MessageCircle, Sparkles } from "lucide-react"
import { useState } from "react"

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulação de envio
    await new Promise((resolve) => setTimeout(resolve, 1500))

    alert("Mensagem enviada com sucesso! Entraremos em contato em breve.")
    setIsSubmitting(false)

    // Reset form
    const form = e.currentTarget
    form.reset()
  }

  const openWhatsApp = () => {
    window.open("https://wa.me/5511987654321?text=Olá! Gostaria de fazer um pedido de flores artesanais", "_blank")
  }

  const openInstagram = () => {
    window.open("https://instagram.com/umafloralia", "_blank")
  }

  return (
    <section id="contato" className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
            Faça Seu Pedido
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-balance">
            Entre em <span className="text-primary">Contato</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Faça seu pedido diretamente pelo WhatsApp ou Instagram. Estamos prontos para criar o arranjo perfeito para
            você!
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          <div className="grid md:grid-cols-2 gap-6">
            <Card
              className="border-2 border-border shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 cursor-pointer group"
              onClick={openWhatsApp}
            >
              <CardContent className="p-10 text-center space-y-6">
                <div className="w-20 h-20 mx-auto rounded-full bg-green-500/10 flex items-center justify-center group-hover:bg-green-500 transition-all duration-300">
                  <MessageCircle className="w-10 h-10 text-green-600 group-hover:text-white transition-all duration-300" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">WhatsApp</h3>
                  <p className="text-muted-foreground mb-4">Converse conosco em tempo real</p>
                  <p className="text-sm text-muted-foreground">(11) 98765-4321</p>
                </div>
                <Button
                  size="lg"
                  className="w-full bg-green-500 text-white hover:bg-green-600 transition-all duration-300 shadow-lg"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Abrir WhatsApp
                </Button>
              </CardContent>
            </Card>

            <Card
              className="border-2 border-border shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 cursor-pointer group"
              onClick={openInstagram}
            >
              <CardContent className="p-10 text-center space-y-6">
                <div className="w-20 h-20 mx-auto rounded-full bg-pink-500/10 flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-purple-500 group-hover:to-pink-500 transition-all duration-300">
                  <Instagram className="w-10 h-10 text-pink-600 group-hover:text-white transition-all duration-300" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">Instagram</h3>
                  <p className="text-muted-foreground mb-4">Veja nosso catálogo e peça por DM</p>
                  <p className="text-sm text-muted-foreground">@umafloralia</p>
                </div>
                <Button
                  size="lg"
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg"
                >
                  <Instagram className="w-5 h-5 mr-2" />
                  Abrir Instagram
                </Button>
              </CardContent>
            </Card>
          </div>

          <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
            <CardContent className="p-8 text-center space-y-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                <Sparkles className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Atendimento Personalizado</h3>
              <p className="text-muted-foreground text-pretty max-w-2xl mx-auto">
                Cada arranjo é feito especialmente para você! Entre em contato e conte-nos sobre a ocasião, cores
                favoritas e qualquer detalhe especial que deseja incluir.
              </p>
              <div className="flex flex-wrap justify-center gap-4 pt-4">
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary">100%</p>
                  <p className="text-sm text-muted-foreground">Artesanal</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary">∞</p>
                  <p className="text-sm text-muted-foreground">Durabilidade</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary">24h</p>
                  <p className="text-sm text-muted-foreground">Resposta</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-3 gap-4">
            <Card className="border border-border bg-card p-4">
              <p className="text-sm font-medium text-foreground mb-1">Segunda a Sexta</p>
              <p className="text-xs text-muted-foreground">8h às 18h</p>
            </Card>
            <Card className="border border-border bg-card p-4">
              <p className="text-sm font-medium text-foreground mb-1">Sábado</p>
              <p className="text-xs text-muted-foreground">8h às 14h</p>
            </Card>
            <Card className="border border-border bg-card p-4">
              <p className="text-sm font-medium text-foreground mb-1">Domingo</p>
              <p className="text-xs text-muted-foreground">Fechado</p>
            </Card>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <Card className="border-2 border-border shadow-2xl">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-foreground">
                    Nome Completo *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Seu nome"
                    required
                    className="border-2 focus:border-primary"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-foreground">
                      E-mail *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="seu@email.com"
                      required
                      className="border-2 focus:border-primary"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-foreground">
                      Telefone *
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="(11) 99999-9999"
                      required
                      className="border-2 focus:border-primary"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="occasion" className="text-sm font-medium text-foreground">
                    Ocasião
                  </label>
                  <Input
                    id="occasion"
                    name="occasion"
                    placeholder="Ex: Aniversário, Casamento, Dia das Mães..."
                    className="border-2 focus:border-primary"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-foreground">
                    Mensagem / Detalhes do Pedido *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Descreva o arranjo que você deseja ou deixe uma mensagem especial..."
                    rows={5}
                    required
                    className="border-2 focus:border-primary resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  {isSubmitting ? (
                    <>Enviando...</>
                  ) : (
                    <>
                      <MessageCircle className="w-5 h-5 mr-2" />
                      Enviar Pedido
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
