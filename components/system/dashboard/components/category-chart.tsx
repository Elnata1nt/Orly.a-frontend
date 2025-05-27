"use client"
import { Legend, PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts"

// Dados de exemplo
const data = [
  { name: "Moradia", value: 1200, color: "#8884d8" },
  { name: "Alimentação", value: 650, color: "#82ca9d" },
  { name: "Transporte", value: 380, color: "#ffc658" },
  { name: "Lazer", value: 490, color: "#ff8042" },
  { name: "Saúde", value: 150, color: "#0088fe" },
  { name: "Educação", value: 200, color: "#00C49F" },
]

export default function CategoryChart() {
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(value)
  }

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-2 border rounded shadow-sm">
          <p className="font-medium">{payload[0].name}</p>
          <p className="text-sm">{formatCurrency(payload[0].value)}</p>
        </div>
      )
    }
    return null
  }

  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie data={data} cx="50%" cy="50%" labelLine={false} outerRadius={80} fill="#8884d8" dataKey="value">
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip content={<CustomTooltip />} />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}
