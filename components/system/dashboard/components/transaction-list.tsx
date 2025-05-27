"use client";

import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  ArrowUpDown,
  Download,
  Filter,
  MoreHorizontal,
  Paperclip,
  Search,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const getBadgeStyle = (status: string) => {
    switch (status) {
      case "concluído":
        return "text-green-600 border-green-600";
      case "cancelado":
        return "text-red-600 border-red-600";
      case "pendente":
        return "text-yellow-600 border-yellow-600";
      default:
        return "";
    }
  };

// Dados de exemplo
const transactions = [
  {
    id: "1",
    description: "Salário",
    date: "2025-05-01",
    amount: 5000,
    type: "receita",
    category: "Salário",
    status: "concluído",
    recurrent: true,
    installment: null,
    attachment: false,
    notes: "Salário mensal",
  },
  {
    id: "2",
    description: "Aluguel",
    date: "2025-05-05",
    amount: -1200,
    type: "despesa",
    category: "Moradia",
    status: "pendente",
    recurrent: true,
    installment: null,
    attachment: true,
    notes: "Aluguel mensal",
  },
  {
    id: "3",
    description: "Supermercado",
    date: "2025-05-07",
    amount: -350,
    type: "despesa",
    category: "Alimentação",
    status: "concluído",
    recurrent: false,
    installment: null,
    attachment: true,
    notes: "Compras da semana",
  },
  {
    id: "4",
    description: "Celular",
    date: "2025-05-10",
    amount: -250,
    type: "despesa",
    category: "Eletrônicos",
    status: "concluído",
    recurrent: false,
    installment: { current: 3, total: 10 },
    attachment: true,
    notes: "Parcela do celular",
  },
  {
    id: "5",
    description: "Freelance",
    date: "2025-05-15",
    amount: 1200,
    type: "receita",
    category: "Freelance",
    status: "concluído",
    recurrent: false,
    installment: null,
    attachment: false,
    notes: "Projeto de design",
  },
  {
    id: "6",
    description: "Academia",
    date: "2025-05-15",
    amount: -100,
    type: "despesa",
    category: "Saúde",
    status: "concluído",
    recurrent: true,
    installment: null,
    attachment: false,
    notes: "Mensalidade da academia",
  },
  {
    id: "7",
    description: "Jantar fora",
    date: "2025-05-18",
    amount: -120,
    type: "despesa",
    category: "Lazer",
    status: "concluído",
    recurrent: false,
    installment: null,
    attachment: true,
    notes: "Jantar com amigos",
  },
  {
    id: "8",
    description: "Uber",
    date: "2025-05-20",
    amount: -30,
    type: "despesa",
    category: "Transporte",
    status: "concluído",
    recurrent: false,
    installment: null,
    attachment: false,
    notes: "Corrida para o trabalho",
  },
];

export default function TransactionList({ limit }: { limit?: number }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [typeFilter, setTypeFilter] = useState("todos");
  const [categoryFilter, setCategoryFilter] = useState("todas");
  const [selectedTransaction, setSelectedTransaction] = useState<any>(null);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

  const filteredTransactions = transactions
    .filter(
      (transaction) =>
        transaction.description
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        transaction.category.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter((transaction) =>
      typeFilter === "todos" ? true : transaction.type === typeFilter
    )
    .filter((transaction) =>
      categoryFilter === "todas"
        ? true
        : transaction.category === categoryFilter
    )
    .slice(0, limit || transactions.length);

  const handleViewDetails = (transaction: any) => {
    setSelectedTransaction(transaction);
    setIsDetailsOpen(true);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("pt-BR").format(date);
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(amount);
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div className="relative w-full sm:w-auto">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Buscar transações..."
            className="pl-8 w-full sm:w-[300px]"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex gap-2 w-full sm:w-auto">
          <Select value={typeFilter} onValueChange={setTypeFilter}>
            <SelectTrigger className="w-full sm:w-[150px]">
              <SelectValue placeholder="Tipo" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="todos">Todos</SelectItem>
              <SelectItem value="receita">Receitas</SelectItem>
              <SelectItem value="despesa">Despesas</SelectItem>
            </SelectContent>
          </Select>
          <Select value={categoryFilter} onValueChange={setCategoryFilter}>
            <SelectTrigger className="w-full sm:w-[150px]">
              <SelectValue placeholder="Categoria" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="todas">Todas</SelectItem>
              <SelectItem value="Salário">Salário</SelectItem>
              <SelectItem value="Freelance">Freelance</SelectItem>
              <SelectItem value="Moradia">Moradia</SelectItem>
              <SelectItem value="Alimentação">Alimentação</SelectItem>
              <SelectItem value="Transporte">Transporte</SelectItem>
              <SelectItem value="Lazer">Lazer</SelectItem>
              <SelectItem value="Saúde">Saúde</SelectItem>
              <SelectItem value="Eletrônicos">Eletrônicos</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" size="icon">
            <Filter className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon">
            <Download className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[200px]">
                <div className="flex items-center gap-1">
                  Descrição
                  <ArrowUpDown className="h-3 w-3" />
                </div>
              </TableHead>
              <TableHead>
                <div className="flex items-center gap-1">
                  Data
                  <ArrowUpDown className="h-3 w-3" />
                </div>
              </TableHead>
              <TableHead>Categoria</TableHead>
              <TableHead className="text-right">
                <div className="flex items-center justify-end gap-1">
                  Valor
                  <ArrowUpDown className="h-3 w-3" />
                </div>
              </TableHead>
              <TableHead className="text-right">Status</TableHead>
              <TableHead className="text-right">Ações</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredTransactions.length === 0 ? (
              <TableRow>
                <TableCell
                  colSpan={6}
                  className="text-center py-6 text-muted-foreground"
                >
                  Nenhuma transação encontrada
                </TableCell>
              </TableRow>
            ) : (
              filteredTransactions.map((transaction) => (
                <TableRow key={transaction.id}>
                  <TableCell className="font-medium">
                    <div className="flex items-center gap-2">
                      {transaction.description}
                      {transaction.recurrent && (
                        <Badge variant="outline" className="text-xs">
                          Recorrente
                        </Badge>
                      )}
                      {transaction.installment && (
                        <Badge variant="outline" className="text-xs">
                          {transaction.installment.current}/
                          {transaction.installment.total}
                        </Badge>
                      )}
                      {transaction.attachment && (
                        <Paperclip className="h-3 w-3 text-muted-foreground" />
                      )}
                    </div>
                  </TableCell>
                  <TableCell>{formatDate(transaction.date)}</TableCell>
                  <TableCell>
                    <Badge variant="secondary">{transaction.category}</Badge>
                  </TableCell>
                  <TableCell
                    className={`text-right ${
                      transaction.amount > 0 ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {formatCurrency(transaction.amount)}
                  </TableCell>
                  <TableCell className="text-right">
                    <Badge
                      variant="outline"
                      className={getBadgeStyle(transaction.status)}
                    >
                      {transaction.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem
                          onClick={() => handleViewDetails(transaction)}
                        >
                          Ver detalhes
                        </DropdownMenuItem>
                        <DropdownMenuItem>Editar</DropdownMenuItem>
                        <DropdownMenuItem>Excluir</DropdownMenuItem>
                        {transaction.status === "pendente" && (
                          <DropdownMenuItem>Marcar como pago</DropdownMenuItem>
                        )}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>

      <Dialog open={isDetailsOpen} onOpenChange={setIsDetailsOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Detalhes da Transação</DialogTitle>
          </DialogHeader>
          {selectedTransaction && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">Descrição</p>
                  <p className="font-medium">
                    {selectedTransaction.description}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Data</p>
                  <p className="font-medium">
                    {formatDate(selectedTransaction.date)}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Valor</p>
                  <p
                    className={`font-medium ${
                      selectedTransaction.amount > 0
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {formatCurrency(selectedTransaction.amount)}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Categoria</p>
                  <p className="font-medium">{selectedTransaction.category}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Tipo</p>
                  <p className="font-medium capitalize">
                    {selectedTransaction.type}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Status</p>
                  <Badge
                    variant={
                      selectedTransaction.status === "concluído"
                        ? "default"
                        : "outline"
                    }
                  >
                    {selectedTransaction.status}
                  </Badge>
                </div>
              </div>

              {selectedTransaction.recurrent && (
                <div>
                  <p className="text-sm text-muted-foreground">Recorrência</p>
                  <p className="font-medium">Mensal</p>
                </div>
              )}

              {selectedTransaction.installment && (
                <div>
                  <p className="text-sm text-muted-foreground">Parcelas</p>
                  <p className="font-medium">
                    {selectedTransaction.installment.current} de{" "}
                    {selectedTransaction.installment.total}
                  </p>
                </div>
              )}

              <div>
                <p className="text-sm text-muted-foreground">Observações</p>
                <p>{selectedTransaction.notes}</p>
              </div>

              {selectedTransaction.attachment && (
                <div>
                  <p className="text-sm text-muted-foreground">Anexos</p>
                  <div className="flex items-center gap-2 mt-1">
                    <Paperclip className="h-4 w-4" />
                    <span className="text-sm text-blue-600 underline cursor-pointer">
                      Comprovante.pdf
                    </span>
                  </div>
                </div>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
