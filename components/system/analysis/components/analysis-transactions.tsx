"use client"

import { useState } from "react"
import { CheckCircleIcon, ClockIcon, FilterIcon, SearchIcon, XCircleIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const transactions = [
  {
    id: "TR-7829",
    description: "Pagamento de Fornecedor",
    amount: -157912.77,
    date: "19/12/2023",
    category: "Despesa Operacional",
    status: "Concluído",
  },
  {
    id: "TR-7830",
    description: "Recebimento de Cliente",
    amount: 679412.27,
    date: "21/12/2023",
    category: "Receita de Vendas",
    status: "Concluído",
  },
  {
    id: "TR-7831",
    description: "Pagamento de Impostos",
    amount: -129112.77,
    date: "23/12/2023",
    category: "Impostos",
    status: "Pendente",
  },
  {
    id: "TR-7832",
    description: "Investimento em Equipamentos",
    amount: -237412.77,
    date: "24/12/2023",
    category: "Investimento",
    status: "Em Análise",
  },
  {
    id: "TR-7833",
    description: "Recebimento de Serviços",
    amount: 414912.77,
    date: "25/12/2023",
    category: "Receita de Serviços",
    status: "Concluído",
  },
]

export function AnalysisTransactions() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredTransactions = transactions.filter(
    (transaction) =>
      transaction.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      transaction.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      transaction.id.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <div className="relative flex-1">
          <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Buscar transações..."
            className="pl-8"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon">
              <FilterIcon className="h-4 w-4" />
              <span className="sr-only">Filtrar</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuCheckboxItem checked>Todas as Transações</DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem checked>Receitas</DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem checked>Despesas</DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem checked>Investimentos</DropdownMenuCheckboxItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Descrição</TableHead>
              <TableHead>Valor</TableHead>
              <TableHead>Data</TableHead>
              <TableHead>Categoria</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredTransactions.map((transaction) => (
              <TableRow key={transaction.id}>
                <TableCell className="font-medium">{transaction.id}</TableCell>
                <TableCell>{transaction.description}</TableCell>
                <TableCell className={transaction.amount > 0 ? "text-green-600" : "text-red-600"}>
                  {transaction.amount > 0 ? "+" : ""}
                  {transaction.amount.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </TableCell>
                <TableCell>{transaction.date}</TableCell>
                <TableCell>{transaction.category}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-1">
                    {transaction.status === "Concluído" && <CheckCircleIcon className="h-4 w-4 text-green-500" />}
                    {transaction.status === "Pendente" && <ClockIcon className="h-4 w-4 text-amber-500" />}
                    {transaction.status === "Em Análise" && <ClockIcon className="h-4 w-4 text-blue-500" />}
                    {transaction.status === "Cancelado" && <XCircleIcon className="h-4 w-4 text-red-500" />}
                    {transaction.status}
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
