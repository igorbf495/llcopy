"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, MessageCircle } from "lucide-react"
import Image from "next/image"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const openWhatsApp = () => {
    window.open("https://wa.me/5511987654321?text=Olá! Gostaria de fazer um orçamento na LL Copy", "_blank")
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-card/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image src="/logo-ll-copy.jpg" alt="LL Copy" width={60} height={60} className="rounded-full" />
            <div>
              <h1 className="text-2xl font-bold text-foreground">LL Copy</h1>
              <p className="text-xs text-muted-foreground">Gráfica Rápida & Personalizados</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#produtos" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Produtos
            </a>
            <a
              href="#como-funciona"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Como Funciona
            </a>
            <a href="#depoimentos" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Depoimentos
            </a>
            <a href="#contato" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Contato
            </a>
          </nav>

          <div className="hidden md:block">
            <Button
              className="bg-green-500 text-white hover:bg-green-600 transition-all duration-300 hover:scale-105 shadow-lg"
              onClick={openWhatsApp}
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Solicitar Orçamento
            </Button>
          </div>

          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col gap-4 border-t border-border pt-4">
            <a
              href="#produtos"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Produtos
            </a>
            <a
              href="#como-funciona"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Como Funciona
            </a>
            <a
              href="#depoimentos"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Depoimentos
            </a>
            <a
              href="#contato"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contato
            </a>
            <Button
              className="bg-green-500 text-white hover:bg-green-600 w-full"
              onClick={() => {
                setIsMobileMenuOpen(false)
                openWhatsApp()
              }}
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Solicitar Orçamento
            </Button>
          </nav>
        )}
      </div>
    </header>
  )
}
