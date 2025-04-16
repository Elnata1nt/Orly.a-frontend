"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

export function Testimonials() {
  return (
    <section id="testimonials" className="w-full py-20 md:py-32">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
        >
          <Badge className="rounded-full px-4 py-1.5 text-sm font-medium" variant="secondary">
            Depoimentos
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Amado por Equipes em Todo o Mundo</h2>
          <p className="max-w-[800px] text-muted-foreground md:text-lg">
            Não acredite apenas em nossa palavra. Veja o que nossos clientes têm a dizer sobre sua experiência.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              quote:
                "O Orly.a transformou a forma como gerencio minhas finanças. Consegui identificar gastos desnecessários que nem percebia que estava fazendo.",
              author: "Sarah Johnson",
              role: "Profissional Autônoma",
              rating: 5,
            },
            {
              quote:
                "O painel de análise financeira me deu insights que nunca tive antes. Em apenas 3 meses, consegui economizar o suficiente para começar meu fundo de emergência.",
              author: "Michael Chen",
              role: "Engenheiro de Software",
              rating: 5,
            },
            {
              quote:
                "A integração com WhatsApp é fantástica! Recebo alertas sobre gastos e dicas de economia diretamente no meu celular, o que torna tudo muito mais prático.",
              author: "Emily Rodriguez",
              role: "Professora",
              rating: 5,
            },
            {
              quote:
                "Experimentei vários aplicativos de finanças, mas nenhum se compara à facilidade de uso e aos recursos do Orly.a. Finalmente tenho controle sobre meu dinheiro.",
              author: "David Kim",
              role: "Médico",
              rating: 5,
            },
            {
              quote:
                "As sugestões de economia são surpreendentemente precisas. Seguindo as dicas do app, consegui reduzir meus gastos mensais em quase 20%.",
              author: "Lisa Patel",
              role: "Gerente de Marketing",
              rating: 5,
            },
            {
              quote:
                "A visualização clara dos meus padrões de gastos me ajudou a tomar decisões financeiras melhores. Agora consigo planejar meu futuro com mais confiança.",
              author: "James Wilson",
              role: "Analista Financeiro",
              rating: 5,
            },
          ].map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
            >
              <Card className="h-full overflow-hidden border-border/40 bg-gradient-to-b from-background to-muted/10 backdrop-blur transition-all hover:shadow-md">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="flex mb-4">
                    {Array(testimonial.rating)
                      .fill(0)
                      .map((_, j) => (
                        <Star key={j} className="size-4 text-yellow-500 fill-yellow-500" />
                      ))}
                  </div>
                  <p className="text-lg mb-6 flex-grow">{testimonial.quote}</p>
                  <div className="flex items-center gap-4 mt-auto pt-4 border-t border-border/40">
                    <div className="size-10 rounded-full bg-muted flex items-center justify-center text-foreground font-medium">
                      {testimonial.author.charAt(0)}
                    </div>
                    <div>
                      <p className="font-medium">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
