"use client"

import { useState } from "react"
import { BarChartIcon, ChevronDownIcon, LineChartIcon, PieChartIcon, RefreshCwIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function AnalysisCharts() {
  const [period, setPeriod] = useState("Último Ano")

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Análise Financeira</h2>
        <div className="flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="gap-1">
                {period} <ChevronDownIcon className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setPeriod("Último Mês")}>Último Mês</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setPeriod("Último Trimestre")}>Último Trimestre</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setPeriod("Último Semestre")}>Último Semestre</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setPeriod("Último Ano")}>Último Ano</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button variant="outline" size="icon">
            <RefreshCwIcon className="h-4 w-4" />
            <span className="sr-only">Atualizar</span>
          </Button>
        </div>
      </div>

      <Tabs defaultValue="receitas-despesas">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="receitas-despesas">Receitas e Despesas</TabsTrigger>
          <TabsTrigger value="indicadores">Indicadores</TabsTrigger>
          <TabsTrigger value="comparativos">Comparativos</TabsTrigger>
        </TabsList>
        <TabsContent value="receitas-despesas" className="space-y-4 pt-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Receitas x Despesas</CardTitle>
                <CardDescription>Comparativo mensal de receitas e despesas</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] w-full rounded-md border">
                  <div className="flex h-full flex-col items-center justify-center gap-2 p-8">
                    <BarChartIcon className="h-10 w-10 text-muted-foreground" />
                    <div className="text-xl font-medium">Gráfico de Barras</div>
                    <div className="text-sm text-muted-foreground">Mostrando dados de {period.toLowerCase()}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Evolução do Lucro</CardTitle>
                <CardDescription>Tendência de lucro ao longo do tempo</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] w-full rounded-md border">
                  <div className="flex h-full flex-col items-center justify-center gap-2 p-8">
                    <LineChartIcon className="h-10 w-10 text-muted-foreground" />
                    <div className="text-xl font-medium">Gráfico de Linha</div>
                    <div className="text-sm text-muted-foreground">Mostrando dados de {period.toLowerCase()}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          <Card>
            <CardHeader>
              <CardTitle>Composição das Receitas</CardTitle>
              <CardDescription>Distribuição das fontes de receita</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] w-full rounded-md border">
                <div className="flex h-full flex-col items-center justify-center gap-2 p-8">
                  <PieChartIcon className="h-10 w-10 text-muted-foreground" />
                  <div className="text-xl font-medium">Gráfico de Pizza</div>
                  <div className="text-sm text-muted-foreground">Mostrando dados de {period.toLowerCase()}</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="indicadores" className="space-y-4 pt-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Índices de Liquidez</CardTitle>
                <CardDescription>Evolução dos índices de liquidez</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] w-full rounded-md border">
                  <div className="flex h-full flex-col items-center justify-center gap-2 p-8">
                    <LineChartIcon className="h-10 w-10 text-muted-foreground" />
                    <div className="text-xl font-medium">Gráfico de Linha</div>
                    <div className="text-sm text-muted-foreground">Mostrando dados de {period.toLowerCase()}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Índices de Rentabilidade</CardTitle>
                <CardDescription>Evolução dos índices de rentabilidade</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] w-full rounded-md border">
                  <div className="flex h-full flex-col items-center justify-center gap-2 p-8">
                    <LineChartIcon className="h-10 w-10 text-muted-foreground" />
                    <div className="text-xl font-medium">Gráfico de Linha</div>
                    <div className="text-sm text-muted-foreground">Mostrando dados de {period.toLowerCase()}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          <Card>
            <CardHeader>
              <CardTitle>Composição do Endividamento</CardTitle>
              <CardDescription>Distribuição dos tipos de dívidas</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] w-full rounded-md border">
                <div className="flex h-full flex-col items-center justify-center gap-2 p-8">
                  <PieChartIcon className="h-10 w-10 text-muted-foreground" />
                  <div className="text-xl font-medium">Gráfico de Pizza</div>
                  <div className="text-sm text-muted-foreground">Mostrando dados de {period.toLowerCase()}</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="comparativos" className="space-y-4 pt-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Comparativo Anual</CardTitle>
                <CardDescription>Comparação com o ano anterior</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] w-full rounded-md border">
                  <div className="flex h-full flex-col items-center justify-center gap-2 p-8">
                    <BarChartIcon className="h-10 w-10 text-muted-foreground" />
                    <div className="text-xl font-medium">Gráfico de Barras</div>
                    <div className="text-sm text-muted-foreground">Comparativo anual</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Orçado vs Realizado</CardTitle>
                <CardDescription>Comparação entre valores orçados e realizados</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] w-full rounded-md border">
                  <div className="flex h-full flex-col items-center justify-center gap-2 p-8">
                    <BarChartIcon className="h-10 w-10 text-muted-foreground" />
                    <div className="text-xl font-medium">Gráfico de Barras</div>
                    <div className="text-sm text-muted-foreground">Orçado vs Realizado</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          <Card>
            <CardHeader>
              <CardTitle>Análise de Tendências</CardTitle>
              <CardDescription>Projeção de tendências financeiras</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] w-full rounded-md border">
                <div className="flex h-full flex-col items-center justify-center gap-2 p-8">
                  <LineChartIcon className="h-10 w-10 text-muted-foreground" />
                  <div className="text-xl font-medium">Gráfico de Linha</div>
                  <div className="text-sm text-muted-foreground">Projeção para os próximos 12 meses</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
