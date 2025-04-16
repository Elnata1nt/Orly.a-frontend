"use client"

import { motion } from "framer-motion"
import { Zap, BarChart, Users, Shield, Layers, Star } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

export function Features() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  const features = [
    {
      title: "Acompanhamento de Gastos",
      description: "Registre e monitore seus gastos e ganhos de forma prática e intuitiva, mantendo tudo organizado.",
      icon: <BarChart className="size-5" />,
    },
    {
      title: "Identificação de Padrões",
      description: "Descubra padrões e saídas de dinheiro que passam despercebidas com análises inteligentes.",
      icon: <Zap className="size-5" />,
    },
    {
      title: "Sugestões de Economia",
      description: "Receba dicas personalizadas para economizar e otimizar seus gastos com base no seu perfil.",
      icon: <Star className="size-5" />,
    },
    {
      title: "Visão Geral Organizada",
      description: "Tenha uma visão completa e organizada das suas finanças com dashboards intuitivos.",
      icon: <Layers className="size-5" />,
    },
    {
      title: "Integração com WhatsApp",
      description: "Acesse suas informações financeiras e receba dicas diretamente pelo WhatsApp com nossa IA pessoal.",
      icon: <Users className="size-5" />,
    },
    {
      title: "Segurança Avançada",
      description:
        "Seus dados financeiros protegidos com criptografia de ponta a ponta e medidas de segurança robustas.",
      icon: <Shield className="size-5" />,
    },
  ]

  return (
    <section id="features" className="w-full py-20 md:py-32">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
        >
          <Badge className="rounded-full border-indigo-200 px-4 py-1.5 text-sm font-medium" variant="secondary">
            Recursos
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Tudo o que Você Precisa para Ter Sucesso</h2>
          <p className="max-w-[800px] text-muted-foreground md:text-lg">
            Nossa plataforma abrangente fornece todas as ferramentas necessárias para otimizar seu fluxo de trabalho,
            aumentar a produtividade e alcançar seus objetivos.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((feature, i) => (
            <motion.div key={i} variants={item}>
              <Card className="h-full overflow-hidden border-border/40 bg-gradient-to-b from-background to-muted/10 backdrop-blur transition-all hover:shadow-md">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="size-10 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-primary mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
