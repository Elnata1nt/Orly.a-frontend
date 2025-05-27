"use client";

import { useState } from "react";
import {
  ArrowDownIcon,
  ArrowUpIcon,
  ChevronDownIcon,
  DollarSignIcon,
  LineChartIcon,
  PieChartIcon,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function AnalysisOverview() {
  const [period, setPeriod] = useState("Este Mês");

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <Card className="col-span-full rounded-3xl">
        <CardHeader className="flex flex-row items-center">
          <div className="grid gap-1">
            <CardTitle>Visão Geral Financeira</CardTitle>
            <CardDescription>
              Análise de receitas, despesas e lucro
            </CardDescription>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="ml-auto gap-1">
                {period} <ChevronDownIcon className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setPeriod("Este Mês")}>
                Este Mês
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setPeriod("Último Trimestre")}>
                Último Trimestre
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setPeriod("Este Ano")}>
                Este Ano
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setPeriod("Ano Anterior")}>
                Ano Anterior
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </CardHeader>
        <CardContent>
          <div className="h-[300px] w-full rounded-2xl border">
            <div className="flex h-full flex-col items-center justify-center gap-2 p-8">
              <LineChartIcon className="h-10 w-10 text-muted-foreground" />
              <div className="text-xl font-medium">
                Gráfico de Desempenho Financeiro
              </div>
              <div className="text-sm text-muted-foreground">
                Mostrando dados de {period.toLowerCase()}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="rounded-3xl">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Ativos Totais</CardTitle>
          <DollarSignIcon className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">R$ 3.245.678,90</div>
          <p className="text-xs text-green-500 flex items-center gap-1">
            <ArrowUpIcon className="h-3 w-3" /> +8.2% em relação ao período
            anterior
          </p>
          <div className="mt-4 h-[80px] w-full rounded-md border">
            <div className="flex h-full flex-col items-center justify-center gap-1 p-2">
              <LineChartIcon className="h-5 w-5 text-muted-foreground" />
              <div className="text-xs text-muted-foreground">
                Gráfico de tendência
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="rounded-3xl">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Passivos Totais</CardTitle>
          <DollarSignIcon className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">R$ 1.876.543,21</div>
          <p className="text-xs text-red-500 flex items-center gap-1">
            <ArrowDownIcon className="h-3 w-3" /> -3.5% em relação ao período
            anterior
          </p>
          <div className="mt-4 h-[80px] w-full rounded-md border">
            <div className="flex h-full flex-col items-center justify-center gap-1 p-2">
              <LineChartIcon className="h-5 w-5 text-muted-foreground" />
              <div className="text-xs text-muted-foreground">
                Gráfico de tendência
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="rounded-3xl">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            Patrimônio Líquido
          </CardTitle>
          <DollarSignIcon className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">R$ 1.369.135,69</div>
          <p className="text-xs text-green-500 flex items-center gap-1">
            <ArrowUpIcon className="h-3 w-3" /> +12.7% em relação ao período
            anterior
          </p>
          <div className="mt-4 h-[80px] w-full rounded-md border">
            <div className="flex h-full flex-col items-center justify-center gap-1 p-2">
              <PieChartIcon className="h-5 w-5 text-muted-foreground" />
              <div className="text-xs text-muted-foreground">
                Composição do patrimônio
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
