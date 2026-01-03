import { Sparkles, ShoppingBag, Truck } from "lucide-react"

const steps = [
  {
    icon: Sparkles,
    title: "Escolha",
    description: "Navegue por nossa coleção exclusiva e selecione o arranjo perfeito para sua ocasião especial.",
    number: "01",
  },
  {
    icon: ShoppingBag,
    title: "Personalize",
    description: "Adicione uma mensagem especial e escolha a data de entrega que melhor se adequa a você.",
    number: "02",
  },
  {
    icon: Truck,
    title: "Receba",
    description: "Flores frescas entregues com cuidado na sua porta em até 24 horas. Garantia de frescor!",
    number: "03",
  },
]

export default function HowItWorksSection() {
  return (
    <section id="como-funciona" className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <span className="inline-block px-4 py-2 bg-secondary/10 text-secondary-foreground rounded-full text-sm font-medium">
            Processo Simples
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-balance">
            Como <span className="text-secondary">Funciona</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Em apenas 3 passos simples, você terá flores lindas e frescas na sua casa
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12 relative">
          {/* Linha conectora (desktop) */}
          <div className="hidden md:block absolute top-20 left-1/6 right-1/6 h-0.5 bg-border" />

          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={index} className="relative group">
                <div className="text-center space-y-6">
                  <div className="relative inline-block">
                    <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl group-hover:blur-3xl transition-all duration-300" />
                    <div className="relative w-24 h-24 mx-auto rounded-full bg-card border-4 border-primary/20 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:border-primary/40 transition-all duration-300">
                      <Icon className="w-10 h-10 text-primary" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm shadow-lg">
                      {step.number}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-foreground">{step.title}</h3>
                    <p className="text-muted-foreground text-pretty">{step.description}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block p-8 bg-secondary/10 rounded-3xl">
            <p className="text-lg font-medium text-foreground mb-2">
              <span className="text-2xl">🌸</span> Garantia de Frescor
            </p>
            <p className="text-muted-foreground">Se você não ficar 100% satisfeito, devolvemos seu dinheiro!</p>
          </div>
        </div>
      </div>
    </section>
  )
}
