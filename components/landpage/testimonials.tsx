"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { useIsMobile } from "../ui/use-mobile";

export function Testimonials() {
  const isMobile = useIsMobile();

  return (
    <section id="testimonials" className="w-full py-20 md:py-32 bg-background">
      <div className="container px-4 md:px-6 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
        >
          <Badge
            className="rounded-full px-4 border-indigo-500 py-1.5 text-sm font-medium"
            variant="secondary"
          >
            Depoimentos
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Amado por Equipes em Todo o Mundo
          </h2>
          <p className="max-w-[800px] text-muted-foreground md:text-lg">
            Não acredite apenas em nossa palavra. Veja o que nossos clientes têm
            a dizer sobre sua experiência.
          </p>
        </motion.div>

        {/* Layout com cards independentes */}
        <div className="relative">
          {isMobile ? (
            <div className="space-y-6">
              <TestimonialCard
                quote="A Orly.a nos proporcionou uma visão clara das finanças do nosso negócio. Com a automação de relatórios e categorização de despesas, conseguimos"
                highlightedText="reduzir 30% dos custos operacionais"
                highlightColor="text-blue-600"
                afterText="em apenas dois meses."
                author="Ana Beatriz"
                role="CFO, Loja Virtual Maxxi"
                delay={0.05}
                imageSrc="/Logos/logo-icon.png?height=48&width=48&text=AB"
              />

              <TestimonialCard
                quote="Com a Orly.a conseguimos"
                highlightedText="centralizar toda a gestão financeira"
                highlightColor="text-green-600"
                afterText="em uma plataforma intuitiva e poderosa."
                author="Carlos Eduardo"
                role="Fundador, EduPay"
                delay={0.1}
                imageSrc="/placeholder.svg?height=48&width=48&text=CE"
              />

              <TestimonialCard
                quote="A integração com o WhatsApp nos permitiu"
                highlightedText="acompanhar nossas finanças em tempo real"
                highlightColor="text-red-600"
                afterText="sem depender de planilhas."
                author="Fernanda Lima"
                role="Empreendedora, Café Flor"
                delay={0.15}
                imageSrc="/placeholder.svg?height=48&width=48&text=FL"
              />

              <TestimonialCard
                quote=""
                highlightedText="Em poucas horas"
                highlightColor="text-orange-500"
                afterText="já tínhamos toda nossa operação integrada e funcionando."
                author="João Pedro"
                role="Analista Financeiro, StartTech"
                delay={0.2}
                imageSrc="/placeholder.svg?height=48&width=48&text=JP"
              />

              <TestimonialCard
                quote=""
                highlightedText="Simplicidade e eficiência"
                highlightColor="text-blue-600"
                afterText="definem a Orly.a. Nossa equipe inteira adotou em tempo recorde."
                author="Larissa Gomes"
                role="Gestora Administrativa, Viva Saúde"
                delay={0.25}
                imageSrc="/placeholder.svg?height=48&width=48&text=LG"
              />

              <TestimonialCard
                quote="Orly.a é mais do que uma plataforma — é nossa aliada estratégica. A clareza e os insights oferecidos nos ajudam a tomar decisões melhores todos os dias."
                author="Rodrigo Mesquita"
                role="CEO, OnFly"
                isDark={true}
                delay={0.3}
                imageSrc="/placeholder.svg?height=48&width=48&text=RM"
              />
            </div>
          ) : (
            <>
              <div className="md:absolute md:left-0 md:top-0 md:w-[calc(50%-16px)]">
                <TestimonialCard
                  quote="A Orly.a nos proporcionou uma visão clara das finanças do nosso negócio. Com a automação de relatórios e categorização de despesas, conseguimos"
                  highlightedText="reduzir 30% dos custos operacionais"
                  highlightColor="text-blue-600"
                  afterText="em apenas dois meses."
                  author="Ana Beatriz"
                  role="CFO, Loja Virtual Maxxi"
                  delay={0.05}
                  imageSrc="/Logos/logo-icon.png?height=48&width=48&text=AB"
                />
              </div>

              <div className="md:absolute md:right-0 md:top-0 md:w-[calc(50%-16px)]">
                <TestimonialCard
                  quote="Com a Orly.a conseguimos"
                  highlightedText="centralizar toda a gestão financeira"
                  highlightColor="text-green-600"
                  afterText="em uma plataforma intuitiva e poderosa."
                  author="Carlos Eduardo"
                  role="Fundador, EduPay"
                  delay={0.1}
                  imageSrc="/placeholder.svg?height=48&width=48&text=CE"
                />
              </div>

              <div className="md:absolute md:left-0 md:top-[245px] md:w-[calc(50%-16px)]">
                <TestimonialCard
                  quote="A integração com o WhatsApp nos permitiu"
                  highlightedText="acompanhar nossas finanças em tempo real"
                  highlightColor="text-red-600"
                  afterText="sem depender de planilhas."
                  author="Fernanda Lima"
                  role="Empreendedora, Café Flor"
                  delay={0.15}
                  imageSrc="/placeholder.svg?height=48&width=48&text=FL"
                />
              </div>

              <div className="md:absolute md:right-0 md:top-[190px] md:w-[calc(50%-16px)]">
                <TestimonialCard
                  quote=""
                  highlightedText="Em poucas horas"
                  highlightColor="text-orange-500"
                  afterText="já tínhamos toda nossa operação integrada e funcionando, e entendo melhor nosso financeiro com um bom direcionamento"
                  author="João Pedro"
                  role="Analista Financeiro, StartTech"
                  delay={0.2}
                  imageSrc="/placeholder.svg?height=48&width=48&text=JP"
                />
              </div>

              <div className="md:absolute md:left-0 md:top-[435px] md:w-[calc(50%-16px)]">
                <TestimonialCard
                  quote=""
                  highlightedText="Organização e praticidade"
                  highlightColor="text-blue-600"
                  afterText="transformaram minha rotina. Agora consigo ter controle dos gastos de casa e da família com mais organização."
                  author="Larissa Gomes"
                  role="Mãe e organizadora do lar"
                  delay={0.25}
                  imageSrc="/placeholder.svg?height=48&width=48&text=LG"
                />
              </div>

              <div className="md:absolute md:right-0 md:top-[405px] md:w-[calc(50%-16px)]">
                <TestimonialCard
                  quote="Orly.a é mais do que uma plataforma é nossa aliada estratégica. A clareza e os insights oferecidos nos ajudam a tomar decisões melhores todos os dias, sem esforço, sem complicação e sem dor de cabeça."
                  author="Rodrigo Mesquita"
                  role="CEO, OnFly"
                  isDark={true}
                  delay={0.3}
                  imageSrc="/placeholder.svg?height=48&width=48&text=RM"
                />
              </div>

              <div
                className="hidden md:block"
                style={{ height: "700px" }}
              ></div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

interface TestimonialCardProps {
  quote: string;
  highlightedText?: string;
  highlightColor?: string;
  afterText?: string;
  author: string;
  role: string;
  isDark?: boolean;
  delay: number;
  imageSrc?: string;
}

function TestimonialCard({
  quote,
  highlightedText,
  highlightColor,
  afterText,
  author,
  role,
  isDark = false,
  delay,
  imageSrc = "/Logos/logo-icon.png?height=48&width=48",
}: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={`rounded-xl border ${
        isDark ? "border bg-indigo-500 text-white" : "border-accent bg-card"
      } p-6 shadow-sm transition-all duration-200 hover:shadow-md`}
    >
      <div className="flex flex-col h-full justify-between">
        <div>
          <p
            className={`${
              isDark ? "text-bg-card" : "text-card-foreground"
            } text-lg`}
          >
            {quote}{" "}
            {highlightedText && (
              <span className={`${highlightColor} font-medium`}>
                {highlightedText}
              </span>
            )}{" "}
            {afterText}
          </p>
        </div>
        <div className="flex items-center justify-between mt-4">
          <div>
            <p
              className={`font-medium ${
                isDark ? "text-bg-card" : "text-card-foreground/70"
              }`}
            >
              {author}
            </p>
            <p className={`text-sm ${isDark ? "text-card" : "text-gray-500"}`}>
              {role}
            </p>
          </div>
          <div className="h-12 w-12 border overflow-hidden rounded-full">
            <Image
              src={imageSrc || "/placeholder.svg"}
              alt={author}
              width={48}
              height={48}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
