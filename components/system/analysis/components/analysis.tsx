import type { Metadata } from "next";
import { BarChart, LineChart, PieChart, Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AnalysisOverview } from "./analysis-overview";
import { AnalysisReports } from "./analysis-reports";
import { AnalysisCharts } from "./analysis-charts";
import { AnalysisTransactions } from "./analysis-transactions";

export const metadata: Metadata = {
  title: "Dashboard de Relatórios Financeiros",
  description: "Dashboard para análise e relatórios financeiros da empresa",
};

export default function AnalisisComponents() {
  return (
    <div className="min-h-screen">
      <main className="flex flex-1 flex-col gap-4 md:gap-4 ">
        <div className="grid gap-4 md:grid-cols-3">
          <Card className="rounded-3xl">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Receita Total
              </CardTitle>
              <LineChart className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">R$ 1.429.862,92</div>
              <p className="text-xs text-green-500 flex items-center gap-1">
                <span className="text-green-500">▲</span> +24.92% em relação ao
                mês anterior
              </p>
            </CardContent>
          </Card>
          <Card className="bg-indigo-300 rounded-3xl">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Despesas Mensais
              </CardTitle>
              <BarChart className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl text-white font-bold">R$ 984.912,82</div>
              <p className="text-xs text-red-500 flex items-center gap-1">
                <span className="text-red-500">▼</span> -18.24% em relação ao
                mês anterior
              </p>
            </CardContent>
          </Card>
          <Card className="rounded-3xl">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Lucro Líquido
              </CardTitle>
              <PieChart className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">R$ 444.950,10</div>
              <p className="text-xs text-green-500 flex items-center gap-1">
                <span className="text-green-500">▲</span> +31.15% em relação ao
                mês anterior
              </p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList className="w-full rounded-2xl grid grid-cols-4 bg-indigo-500 text-white">
            <TabsTrigger
              value="overview"
              className="data-[state=active]:bg-white rounded-xl data-[state=active]:text-indigo-500"
            >
              Visão Geral
            </TabsTrigger>
            <TabsTrigger
              value="reports"
              className="data-[state=active]:bg-white rounded-xl data-[state=active]:text-indigo-500"
            >
              Relatórios
            </TabsTrigger>
            <TabsTrigger
              value="statements"
              className="data-[state=active]:bg-white rounded-xl data-[state=active]:text-indigo-500"
            >
              Demonstrações
            </TabsTrigger>
            <TabsTrigger
              value="analysis"
              className="data-[state=active]:bg-white rounded-xl data-[state=active]:text-indigo-500"
            >
              Análise Financeira
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-4">
            <AnalysisOverview />
          </TabsContent>
          <TabsContent value="reports" className="space-y-4">
            <AnalysisReports />
          </TabsContent>
          <TabsContent value="statements" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2">
              <Card className="rounded-2xl">
                <CardHeader>
                  <CardTitle>Balanço Patrimonial</CardTitle>
                  <CardDescription>
                    Ativos, passivos e patrimônio líquido
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full">
                    Ver Balanço Patrimonial
                  </Button>
                </CardContent>
              </Card>
              <Card className="rounded-2xl">
                <CardHeader>
                  <CardTitle>DRE</CardTitle>
                  <CardDescription>
                    Demonstração de Resultado do Exercício
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full">
                    Ver DRE
                  </Button>
                </CardContent>
              </Card>
              {/* <Card className="rounded-2xl">
                <CardHeader>
                  <CardTitle>Fluxo de Caixa</CardTitle>
                  <CardDescription>
                    Demonstração de Fluxo de Caixa
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full">
                    Ver Fluxo de Caixa
                  </Button>
                </CardContent>
              </Card> */}
              {/* <Card className="rounded-2xl">
                <CardHeader>
                  <CardTitle>DMPL</CardTitle>
                  <CardDescription>
                    Demonstração de Mutações do Patrimônio Líquido
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full">
                    Ver DMPL
                  </Button>
                </CardContent>
              </Card> */}
              <Card className="rounded-2xl">
                <CardHeader>
                  <CardTitle>Notas Explicativas</CardTitle>
                  <CardDescription>
                    Detalhes sobre critérios contábeis
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full">
                    Ver Notas Explicativas
                  </Button>
                </CardContent>
              </Card>
              <Card className="rounded-2xl">
                <CardHeader>
                  <CardTitle>Parecer da Auditoria</CardTitle>
                  <CardDescription>
                    Confirmação de conformidade contábil
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full">
                    Ver Parecer
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="analysis" className="space-y-4">
            <AnalysisCharts />
          </TabsContent>
        </Tabs>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
          <Card className="lg:col-span-4 rounded-3xl">
            <CardHeader>
              <CardTitle>Transações Recentes</CardTitle>
              <CardDescription>
                Últimas movimentações financeiras
              </CardDescription>
            </CardHeader>
            <CardContent>
              <AnalysisTransactions />
            </CardContent>
          </Card>
          <Card className="lg:col-span-3 rounded-3xl">
            <CardHeader>
              <CardTitle>Gerar Relatório</CardTitle>
              <CardDescription>
                Analise seus relatórios financeiros com nosso assistente virtual
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <div className="rounded-full bg-indigo-100 p-2">
                  <LineChart className="h-6 w-6 text-indigo-600" />
                </div>
                <div>
                  <p className="text-sm font-medium">Relatório Financeiro</p>
                  <p className="text-xs text-muted-foreground">
                    Análise completa dos dados financeiros
                  </p>
                </div>
              </div>
              <Button className="bg-indigo-600 hover:bg-indigo-700">
                Gerar Relatório
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
