"use client"

import { Progress } from "@/components/ui/progress"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Plus, Calendar, Edit } from "lucide-react"

// Dados de exemplo
const goals = [
  {
    id: "1",
    name: "MacBook Pro",
    target: 12000,
    saved: 5000,
    percentage: 42,
    dueDate: "2025-10-15",
    status: "in-progress",
  },
  {
    id: "2",
    name: "Carro Novo",
    target: 60000,
    saved: 25000,
    percentage: 42,
    dueDate: "2025-09-25",
    status: "in-progress",
  },
  {
    id: "3",
    name: "Casa Nova",
    target: 150000,
    saved: 5000,
    percentage: 3,
    dueDate: "2027-04-20",
    status: "in-progress",
  },
  {
    id: "4",
    name: "Férias",
    target: 3500,
    saved: 2500,
    percentage: 71,
    dueDate: null,
    remainingDays: 18,
    status: "in-progress",
  },
]

export default function GoalsList() {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(amount)
  }

  const formatDate = (dateString: string | null) => {
    if (!dateString) return null
    const date = new Date(dateString)
    return new Intl.DateTimeFormat("pt-BR").format(date)
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium">Metas Financeiras</h3>
        <Button className="bg-indigo-500 hover:bg-indigo-600" size="sm">
          <Plus className="h-4 w-4 mr-2" />
          Nova Meta
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {goals.map((goal) => (
          <Card key={goal.id} className="overflow-hidden">
            <div className="h-2 bg-green-600" style={{ width: `${goal.percentage}%` }}></div>
            <CardContent className="p-4">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h4 className="font-medium text-lg">{goal.name}</h4>
                  {goal.dueDate ? (
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="h-3 w-3 mr-1" />
                      <span>Data limite: {formatDate(goal.dueDate)}</span>
                    </div>
                  ) : (
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="h-3 w-3 mr-1" />
                      <span>Faltam {goal.remainingDays} dias</span>
                    </div>
                  )}
                </div>
                <Button variant="ghost" size="icon">
                  <Edit className="h-4 w-4" />
                </Button>
              </div>

              <div className="space-y-2">
                <Progress value={goal.percentage} className="h-2" />
                <div className="flex justify-between text-sm">
                  <span>{goal.percentage}%</span>
                  <span>
                    {formatCurrency(goal.saved)} de {formatCurrency(goal.target)}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Falta para completar:</span>
                  <span className="font-medium">{formatCurrency(goal.target - goal.saved)}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
