"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQ() {
  return (
    <section id="faq" className="w-full py-20 md:py-32">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
        >
          <Badge className="rounded-full px-4 py-1.5 text-sm font-medium" variant="secondary">
            FAQ
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Perguntas Frequentes</h2>
          <p className="max-w-[800px] text-muted-foreground md:text-lg">
            Encontre respostas para perguntas comuns sobre nossa plataforma.
          </p>
        </motion.div>

        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {[
              {
                question: "Como funciona a integração com meus bancos?",
                answer:
                  "Nossa plataforma se conecta de forma segura com as principais instituições financeiras do Brasil. Basta fornecer suas credenciais uma vez, e o sistema importará automaticamente suas transações. Também oferecemos a opção de inserção manual para quem preferir.",
              },
              {
                question: "Meus dados financeiros estão seguros?",
                answer:
                  "Absolutamente. Utilizamos criptografia de nível bancário para proteger seus dados. Não armazenamos senhas de bancos e seguimos rigorosos protocolos de segurança. Nossa plataforma está em conformidade com todas as regulamentações de proteção de dados.",
              },
              {
                question: "Como funciona a IA no WhatsApp?",
                answer:
                  "Após configurar sua conta, você pode interagir com nossa IA pelo WhatsApp. Ela responde a perguntas sobre seu saldo, gastos recentes, orçamento e oferece dicas personalizadas. Basta enviar mensagens como 'Qual meu saldo atual?' ou 'Quanto gastei com alimentação este mês?'",
              },
              {
                question: "Posso usar o sistema para gerenciar finanças da minha pequena empresa?",
                answer:
                  "Sim, nosso plano Premium inclui recursos específicos para pequenos negócios, como separação entre finanças pessoais e empresariais, relatórios fiscais básicos e categorização específica para despesas comerciais.",
              },
              {
                question: "É possível estabelecer metas financeiras?",
                answer:
                  "Sim, você pode criar metas financeiras personalizadas como fundo de emergência, viagens, compra de imóvel ou aposentadoria. O sistema acompanha seu progresso e oferece sugestões para ajudá-lo a atingir essas metas mais rapidamente.",
              },
              {
                question: "Vocês oferecem orientação financeira personalizada?",
                answer:
                  "Sim, especialmente nos planos Familiar e Premium. Nossa IA analisa seus padrões financeiros e oferece recomendações personalizadas. No plano Premium, você também tem acesso a consultas mensais com especialistas financeiros reais para orientação mais aprofundada.",
              },
            ].map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
              >
                <AccordionItem value={`item-${i}`} className="border-b border-border/40 py-2">
                  <AccordionTrigger className="text-left font-medium hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
