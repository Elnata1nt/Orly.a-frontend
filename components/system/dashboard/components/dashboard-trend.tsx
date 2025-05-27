"use client"

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"

// Dados de exemplo
const data = [
  { name: "01/05", receitas: 5000, despesas: 1200, saldo: 3800 },
  { name: "05/05", receitas: 5000, despesas: 2400, saldo: 2600 },
  { name: "10/05", receitas: 6200, despesas: 3100, saldo: 3100 },
  { name: "15/05", receitas: 6200, despesas: 3800, saldo: 2400 },
  { name: "20/05", receitas: 6200, despesas: 4200, saldo: 2000 },
  { name: "25/05", receitas: 6200, despesas: 4800, saldo: 1400 },
  { name: "30/05", receitas: 6200, despesas: 5500, saldo: 700 },
]

export default function BudgetTrend() {
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
      minimumFractionDigits: 0,
    }).format(value)
  }

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 border rounded shadow-sm">
          <p className="font-medium">{label}</p>
          <p className="text-sm text-green-600">Receitas: {formatCurrency(payload[0].value)}</p>
          <p className="text-sm text-red-600">Despesas: {formatCurrency(payload[1].value)}</p>
          <p className="text-sm text-purple-600">Saldo: {formatCurrency(payload[2].value)}</p>
        </div>
      )
    }
    return null
  }

  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis tickFormatter={formatCurrency} />
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          <Line type="monotone" dataKey="receitas" stroke="#22c55e" activeDot={{ r: 8 }} strokeWidth={2} />
          <Line type="monotone" dataKey="despesas" stroke="#ef4444" strokeWidth={2} />
          <Line type="monotone" dataKey="saldo" stroke="#8b5cf6" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
