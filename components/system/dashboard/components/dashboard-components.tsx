"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import BudgetTrend from "./dashboard-trend";
import CategoryChart from "./category-chart";
import TransactionList from "./transaction-list";
import BudgetOverview from "./dashboard-overview";
import GoalsList from "./goals-list";
import AddTransactionDialog from "./modal/add-expenses-dialog";
import AddCategoryDialog from "./modal/add-category-dialog";
import AddBudgetDialog from "./modal/add-revenue-dialog";

export default function DashboardComponents() {
  const [isAddTransactionOpen, setIsAddTransactionOpen] = useState(false);
  const [isAddBudgetOpen, setIsAddBudgetOpen] = useState(false);
  const [isAddCategoryOpen, setIsAddCategoryOpen] = useState(false);

  const handleAddTransaction = () => {
    setIsAddTransactionOpen(true);
  };

  const handleAddBudget = () => {
    setIsAddBudgetOpen(true);
  };

  const handleAddCategory = () => {
    setIsAddCategoryOpen(true);
  };

  return (
    <div className="min-h-screen">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        {/* <div>
          <h1 className="text-3xl font-bold tracking-tight">
            Gerenciamento de Orçamento
          </h1>
          <p className="text-muted-foreground">
            Gerencie suas finanças de forma eficiente.
          </p>
        </div> */}
        <div className="flex gap-2">
          <Button
            className="bg-indigo-800 hover:bg-indigo-900 rounded-xl"
            onClick={handleAddBudget}
          >
            <Plus className="mr-2 h-4 w-4" />
            Novo Receita
          </Button>
          <Button
            className="bg-indigo-500 hover:bg-indigo-600 rounded-xl"
            onClick={handleAddTransaction}
          >
            <Plus className="mr-2 h-4 w-4" />
            Nova Despesa
          </Button>
          <Button
            className="bg-blue-600 hover:bg-blue-700 rounded-xl"
            onClick={handleAddCategory}
          >
            <Plus className="mr-2 h-4 w-4" />
            Nova Categoria
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mb-4">
        <Card className="rounded-3xl">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Receitas</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">
              R$ 18.000,00
            </div>
            <p className="text-xs text-muted-foreground">
              +5% em relação ao mês anterior
            </p>
          </CardContent>
        </Card>
        <Card className="rounded-3xl">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Despesas</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">R$ 5.500,00</div>
            <p className="text-xs text-muted-foreground">
              -8% em relação ao mês anterior
            </p>
          </CardContent>
        </Card>
        <Card className="rounded-3xl">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Saldo Total</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">R$ 12.500,00</div>
            <p className="text-xs text-muted-foreground">
              +20% em relação ao mês anterior
            </p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="visao-geral" className="space-y-4">
        <TabsList className="w-full rounded-2xl grid grid-cols-4 bg-indigo-500 text-white">
          <TabsTrigger
            value="visao-geral"
            className="data-[state=active]:bg-white rounded-xl data-[state=active]:text-indigo-500"
          >
            Visão Geral
          </TabsTrigger>
          <TabsTrigger
            value="transacoes"
            className="data-[state=active]:bg-white rounded-xl data-[state=active]:text-indigo-500"
          >
            Transações
          </TabsTrigger>
          <TabsTrigger
            value="orcamentos"
            className="data-[state=active]:bg-white rounded-xl data-[state=active]:text-indigo-500"
          >
            Orçamentos
          </TabsTrigger>
          <TabsTrigger
            value="metas"
            className="data-[state=active]:bg-white rounded-xl data-[state=active]:text-indigo-500"
          >
            Metas
          </TabsTrigger>
          <TabsTrigger
            value="alertas"
            className="data-[state=active]:bg-white rounded-xl data-[state=active]:text-indigo-500"
          >
            Alertas
          </TabsTrigger>
        </TabsList>
        <TabsContent value="visao-geral" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card className="col-span-2 rounded-3xl">
              <CardHeader>
                <CardTitle>Evolução do Orçamento</CardTitle>
                <CardDescription>
                  Acompanhe a evolução do seu orçamento ao longo do mês
                </CardDescription>
              </CardHeader>
              <CardContent className="pl-2">
                <BudgetTrend />
              </CardContent>
            </Card>
            <Card className="rounded-3xl">
              <CardHeader>
                <CardTitle>Gastos por Categoria</CardTitle>
                <CardDescription>
                  Distribuição dos seus gastos por categoria
                </CardDescription>
              </CardHeader>
              <CardContent>
                <CategoryChart />
              </CardContent>
            </Card>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card className="col-span-2 rounded-3xl">
              <CardHeader>
                <CardTitle>Últimas Transações</CardTitle>
                <CardDescription>Suas transações mais recentes</CardDescription>
              </CardHeader>
              <CardContent>
                <TransactionList limit={5} />
              </CardContent>
            </Card>
            <Card className="rounded-3xl">
              <CardHeader>
                <CardTitle>Alertas</CardTitle>
                <CardDescription>
                  Alertas e notificações importantes
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center p-3 bg-red-50 border border-red-200 rounded-lg">
                    <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                    <div>
                      <p className="text-sm font-medium">Alerta de Orçamento</p>
                      <p className="text-xs text-muted-foreground">
                        Você usou 90% do orçamento de Lazer
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center p-3 bg-amber-50 border border-amber-200 rounded-lg">
                    <div className="w-2 h-2 bg-amber-500 rounded-full mr-3"></div>
                    <div>
                      <p className="text-sm font-medium">
                        Pagamento Recorrente
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Aluguel vence em 3 dias
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center p-3 bg-blue-50 border border-blue-200 rounded-lg">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    <div>
                      <p className="text-sm font-medium">Parcela Pendente</p>
                      <p className="text-xs text-muted-foreground">
                        Celular - 3/10 parcelas
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="transacoes">
          <Card className="rounded-3xl">
            <CardHeader>
              <CardTitle>Todas as Transações</CardTitle>
              <CardDescription>
                Histórico completo de transações com filtros
              </CardDescription>
            </CardHeader>
            <CardContent>
              <TransactionList />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="orcamentos">
          <Card className="rounded-3xl">
            <CardHeader>
              <CardTitle>Orçamentos</CardTitle>
              <CardDescription>
                Gerencie seus orçamentos por categoria
              </CardDescription>
            </CardHeader>
            <CardContent>
              <BudgetOverview />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="metas">
          <Card className="rounded-3xl">
            <CardHeader>
              <CardTitle>Metas Financeiras</CardTitle>
              <CardDescription>
                Acompanhe o progresso das suas metas financeiras
              </CardDescription>
            </CardHeader>
            <CardContent>
              <GoalsList />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="alertas">
          <Card>
            <CardHeader>
              <CardTitle>Configuração de Alertas</CardTitle>
              <CardDescription>
                Configure seus alertas e notificações
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid gap-2">
                  <div className="flex items-center justify-between">
                    <label className="text-sm font-medium">
                      Alerta de limite de orçamento
                    </label>
                    <input type="checkbox" className="toggle" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <label className="text-sm font-medium">
                      Alerta de categoria (90% do limite)
                    </label>
                    <input type="checkbox" className="toggle" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <label className="text-sm font-medium">
                      Alerta de recorrência
                    </label>
                    <input type="checkbox" className="toggle" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <label className="text-sm font-medium">
                      Alerta de parcelas
                    </label>
                    <input type="checkbox" className="toggle" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <label className="text-sm font-medium">
                      Sugestões automáticas
                    </label>
                    <input type="checkbox" className="toggle" defaultChecked />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <AddBudgetDialog
        open={isAddBudgetOpen}
        onOpenChange={setIsAddBudgetOpen}
      />
      <AddCategoryDialog
        open={isAddCategoryOpen}
        onOpenChange={setIsAddCategoryOpen}
      />
      <AddTransactionDialog
        open={isAddTransactionOpen}
        onOpenChange={setIsAddTransactionOpen}
      />
    </div>
  );
}
