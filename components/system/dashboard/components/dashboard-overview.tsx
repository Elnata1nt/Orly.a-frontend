"use client";

import { Progress } from "@/components/ui/progress";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, AlertTriangle } from "lucide-react";

// Dados de exemplo
const budgets = [
  {
    id: "1",
    category: "Moradia",
    allocated: 1500,
    spent: 1200,
    remaining: 300,
    percentage: 80,
    status: "normal",
  },
  {
    id: "2",
    category: "Alimentação",
    allocated: 800,
    spent: 650,
    remaining: 150,
    percentage: 81,
    status: "normal",
  },
  {
    id: "3",
    category: "Transporte",
    allocated: 400,
    spent: 380,
    remaining: 20,
    percentage: 95,
    status: "warning",
  },
  {
    id: "4",
    category: "Lazer",
    allocated: 500,
    spent: 490,
    remaining: 10,
    percentage: 98,
    status: "warning",
  },
  {
    id: "5",
    category: "Saúde",
    allocated: 300,
    spent: 150,
    remaining: 150,
    percentage: 50,
    status: "normal",
  },
  {
    id: "6",
    category: "Educação",
    allocated: 200,
    spent: 200,
    remaining: 0,
    percentage: 100,
    status: "exceeded",
  },
];

export default function DashboardOverview() {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(amount);
  };

  const getProgressColor = (status: string) => {
    switch (status) {
      case "normal":
        return "bg-green-600";
      case "warning":
        return "bg-amber-500";
      case "exceeded":
        return "bg-red-600";
      default:
        return "bg-green-600";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium">Orçamentos por Categoria</h3>
        <Button size="sm">
          <Plus className="h-4 w-4 mr-2" />
          Adicionar Orçamento
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {budgets.map((budget) => (
          <Card key={budget.id}>
            <CardContent className="p-4">
              <div className="flex justify-between items-center mb-2">
                <h4 className="font-medium">{budget.category}</h4>
                {budget.status === "warning" || budget.status === "exceeded" ? (
                  <AlertTriangle className="h-4 w-4 text-amber-500" />
                ) : null}
              </div>
              <div className="space-y-2">
                <Progress
                  value={budget.percentage}
                  className={`h-2 ${getProgressColor(budget.status)}`}
                />

                <div className="flex justify-between text-sm">
                  <span>Gasto: {formatCurrency(budget.spent)}</span>
                  <span>de {formatCurrency(budget.allocated)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Restante:</span>
                  <span
                    className={
                      budget.status === "exceeded"
                        ? "text-red-600 font-medium"
                        : "text-green-600 font-medium"
                    }
                  >
                    {formatCurrency(budget.remaining)}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
