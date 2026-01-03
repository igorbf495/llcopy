import { MessageCircle, Instagram } from "lucide-react"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-foreground/5 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Image src="/logo-uma.jpg" alt="Uma Flores" width={50} height={50} className="rounded-full" />
              <div>
                <h3 className="text-xl font-bold text-foreground">Uma</h3>
                <p className="text-xs text-muted-foreground">Flores Artesanais</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground text-pretty">
              Flores artesanais feitas com limpadores de cachimbo que duram para sempre. Transformando momentos
              especiais em memórias eternas.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-foreground mb-4">Links Rápidos</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#produtos" className="text-muted-foreground hover:text-primary transition-colors">
                  Produtos
                </a>
              </li>
              <li>
                <a href="#como-funciona" className="text-muted-foreground hover:text-primary transition-colors">
                  Como Funciona
                </a>
              </li>
              <li>
                <a href="#depoimentos" className="text-muted-foreground hover:text-primary transition-colors">
                  Depoimentos
                </a>
              </li>
              <li>
                <a href="#contato" className="text-muted-foreground hover:text-primary transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-foreground mb-4">Atendimento</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-muted-foreground">Segunda a Sexta: 8h-18h</li>
              <li className="text-muted-foreground">Sábado: 8h-14h</li>
              <li className="text-muted-foreground">Domingo: Fechado</li>
              <li className="mt-4">
                <a href="tel:5511987654321" className="text-primary hover:underline">
                  (11) 98765-4321
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-foreground mb-4">Faça seu Pedido</h4>
            <div className="flex gap-3 mb-4">
              <a
                href="https://wa.me/5511987654321"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-green-500/10 hover:bg-green-500 flex items-center justify-center text-green-600 hover:text-white transition-all duration-300"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-6 h-6" />
              </a>
              <a
                href="https://instagram.com/umafloralia"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-pink-500/10 hover:bg-gradient-to-br hover:from-purple-500 hover:to-pink-500 flex items-center justify-center text-pink-600 hover:text-white transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
            </div>
            <p className="text-sm text-muted-foreground text-pretty">
              Envie uma mensagem e descubra como nossas flores podem tornar sua ocasião ainda mais especial!
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Uma Flores Artesanais. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
