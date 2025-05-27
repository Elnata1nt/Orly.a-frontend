"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function Pricing() {
  return (
    <section id="pricing" className="w-full py-20 md:py-32 bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_40%,transparent_100%)]"></div>

      <div className="container px-4 md:px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
        >
          <Badge className="rounded-full border-indigo-500 px-4 py-1.5 text-sm font-medium" variant="secondary">
            Preços
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Preços Simples e Transparentes</h2>
          <p className="max-w-[800px] text-muted-foreground md:text-lg">
            Escolha o plano ideal para o seu negócio. Todos os planos incluem um teste gratuito de 14 dias.
          </p>
        </motion.div>

        <div className="mx-auto max-w-5xl">
          <Tabs defaultValue="monthly" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="rounded-full p-1">
                <TabsTrigger value="monthly" className="rounded-full px-6">
                  Mensal
                </TabsTrigger>
                <TabsTrigger value="annually" className="rounded-full px-6">
                  Anual (Economize 20%)
                </TabsTrigger>
              </TabsList>
            </div>
            <TabsContent value="monthly">
              <div className="grid gap-6 lg:grid-cols-3 lg:gap-8">
                {[
                  {
                    name: "Pessoal",
                    price: "R$65",
                    description: "Perfeito para indivíduos que querem organizar suas finanças.",
                    features: [
                      "Acompanhamento de gastos e ganhos",
                      "Categorização automática",
                      "Relatórios básicos",
                      "Suporte por e-mail",
                    ],
                    cta: "Iniciar Teste Grátis",
                  },
                  {
                    name: "Familiar",
                    price: "R$95",
                    description: "Ideal para famílias que desejam controle financeiro conjunto.",
                    features: [
                      "Até 5 usuários",
                      "Análises avançadas",
                      "Metas financeiras compartilhadas",
                      "Sugestões de economia personalizadas",
                      "Integração com WhatsApp",
                    ],
                    cta: "Iniciar Teste Grátis",
                    popular: true,
                  },
                  {
                    name: "Premium",
                    price: "R$199",
                    description: "Para quem busca o máximo em planejamento financeiro.",
                    features: [
                      "Usuários ilimitados",
                      "Consultoria financeira mensal",
                      "Planejamento de aposentadoria",
                      "Suporte 24/7 por telefone e e-mail",
                      "Integração com investimentos",
                      "Recursos avançados de IA",
                    ],
                    cta: "Fale com Vendas",
                  },
                ].map((plan, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                  >
                    <Card
                      className={`relative overflow-hidden h-full ${plan.popular ? "border-indigo-500 shadow-lg" : "border-indigo-300 shadow-md"} bg-gradient-to-b from-background to-blue-500/40 backdrop-blur`}
                    >
                      {plan.popular && (
                        <div className="absolute top-0 right-0 bg-indigo-500 text-white px-3 py-1 text-xs font-medium rounded-bl-lg">
                          Mais Popular
                        </div>
                      )}
                      <CardContent className="p-6 flex flex-col h-full">
                        <h3 className="text-2xl font-bold">{plan.name}</h3>
                        <div className="flex items-baseline mt-4">
                          <span className="text-4xl font-bold">{plan.price}</span>
                          <span className="text-muted-foreground ml-1">/mês</span>
                        </div>
                        <p className="text-muted-foreground mt-2">{plan.description}</p>
                        <ul className="space-y-3 my-6 flex-grow">
                          {plan.features.map((feature, j) => (
                            <li key={j} className="flex items-center">
                              <Check className="mr-2 size-4 text-primary" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                        <Button
                          className={`w-full text-primary mt-auto rounded-2xl ${plan.popular ? "bg-indigo-500 text-white hover:bg-indigo-500/90" : "bg-muted hover:bg-muted/80"}`}
                          variant={plan.popular ? "default" : "outline"}
                        >
                          {plan.cta}
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="annually">
              <div className="grid gap-6 lg:grid-cols-3 lg:gap-8">
                {[
                  {
                    name: "Pessoal",
                    price: "R$52",
                    description: "Perfeito para indivíduos que querem organizar suas finanças.",
                    features: [
                      "Acompanhamento de gastos e ganhos",
                      "Categorização automática",
                      "Relatórios básicos",
                      "Suporte por e-mail",
                    ],
                    cta: "Iniciar Teste Grátis",
                  },
                  {
                    name: "Familiar",
                    price: "R$76",
                    description: "Ideal para famílias que desejam controle financeiro conjunto.",
                    features: [
                      "Até 5 usuários",
                      "Análises avançadas",
                      "Metas financeiras compartilhadas",
                      "Sugestões de economia personalizadas",
                      "Integração com WhatsApp",
                    ],
                    cta: "Iniciar Teste Grátis",
                    popular: true,
                  },
                  {
                    name: "Premium",
                    price: "R$159",
                    description: "Para quem busca o máximo em planejamento financeiro.",
                    features: [
                      "Usuários ilimitados",
                      "Consultoria financeira mensal",
                      "Planejamento de aposentadoria",
                      "Suporte 24/7 por telefone e e-mail",
                      "Integração com investimentos",
                      "Recursos avançados de IA",
                    ],
                    cta: "Fale com Vendas",
                  },
                ].map((plan, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                  >
                    <Card
                      className={`relative overflow-hidden h-full ${plan.popular ? "border-indigo-500 shadow-lg" : "border-border/40 shadow-md"} bg-gradient-to-b from-background to-indigo-500/40 backdrop-blur`}
                    >
                      {plan.popular && (
                        <div className="absolute top-0 right-0 bg-indigo-500 text-white px-3 py-1 text-xs font-medium rounded-bl-lg">
                          Mais Popular
                        </div>
                      )}
                      <CardContent className="p-6 flex flex-col h-full">
                        <h3 className="text-2xl font-bold">{plan.name}</h3>
                        <div className="flex items-baseline mt-4">
                          <span className="text-4xl font-bold">{plan.price}</span>
                          <span className="text-muted-foreground ml-1">/mês</span>
                        </div>
                        <p className="text-muted-foreground mt-2">{plan.description}</p>
                        <ul className="space-y-3 my-6 flex-grow">
                          {plan.features.map((feature, j) => (
                            <li key={j} className="flex items-center">
                              <Check className="mr-2 size-4 text-primary" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                        <Button
                          className={`w-full mt-auto rounded-2xl ${plan.popular ? "bg-indigo-500 text-white hover:bg-indigo-500/90" : "bg-muted text-primary hover:bg-muted/80"}`}
                          variant={plan.popular ? "default" : "outline"}
                        >
                          {plan.cta}
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  )
}
