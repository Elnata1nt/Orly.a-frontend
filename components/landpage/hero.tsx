"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowRight, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function Hero() {
  return (
    <section className="w-full overflow-hidden">
      <div className=" px-4 pb-20 md:px-6 relative">
        <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12 pt-10"
        >
          <Badge className="mb-4 mt-4 border-indigo-200 rounded-full px-4 py-1.5 text-sm font-medium" variant="secondary">
            Em Breve
          </Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-indigo-500 font-bold tracking-tight mb-2 bg-clip-text bg-gradient-to-r from-foreground to-foreground/70">
            Controle Financeiro Inteligente com Orly.a
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            A plataforma completa que te ajuda a acompanhar gastos, identificar padrões e economizar com sugestões
            inteligentes. Tenha o controle total das suas finanças pessoais.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button  className="rounded-xl text-white bg-gradient-to-r from-indigo-500 to-indigo-800 h-12 px-8 text-base">
              Iniciar Teste Grátis
              <ArrowRight className="ml-2 size-4" />
            </Button>
            <Button  variant="outline" className="rounded-xl border-indigo-500 h-12 px-8 text-base">
              Agendar uma Demo
            </Button>
          </div>
          <div className="flex items-center justify-center gap-4 mt-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Check className="size-4 text-primary" />
              <span>Sem cartão de crédito</span>
            </div>
            <div className="flex items-center gap-1">
              <Check className="size-4 text-primary" />
              <span>Teste de 14 dias</span>
            </div>
            <div className="flex items-center gap-1">
              <Check className="size-4 text-primary" />
              <span>Cancele quando quiser</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative mx-auto max-w-5xl"
        >
          <div className="rounded-xl overflow-hidden shadow-2xl border border-border/40 bg-gradient-to-b from-background to-muted/20">
            <Image
              src="https://cdn.dribbble.com/userupload/12302729/file/original-fa372845e394ee85bebe0389b9d86871.png?resize=1504x1128&vertical=center"
              width={1280}
              height={720}
              alt="SaaSify dashboard"
              className="w-full h-auto"
              priority
            />
            <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-black/10 dark:ring-white/10"></div>
          </div>
          <div className="absolute -bottom-6 -right-6 -z-10 h-[300px] w-[300px] rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 blur-3xl opacity-70"></div>
          <div className="absolute -top-6 -left-6 -z-10 h-[300px] w-[300px] rounded-full bg-gradient-to-br from-secondary/30 to-primary/30 blur-3xl opacity-70"></div>
        </motion.div>
      </div>
    </section>
  )
}
