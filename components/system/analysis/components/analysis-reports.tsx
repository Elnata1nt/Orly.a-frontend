"use client"

import { useState } from "react"
import {
  CalendarIcon,
  ChevronDownIcon,
  DownloadIcon,
  FileTextIcon,
  FilterIcon,
  PlusIcon,
  SearchIcon,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"

const reports = [
  {
    id: "REL-001",
    name: "Balanço Patrimonial",
    startDate: "01/01/2023",
    endDate: "31/01/2023",
    type: "Mensal",
    createdAt: "05/02/2023",
  },
  {
    id: "REL-002",
    name: "DRE",
    startDate: "01/01/2023",
    endDate: "31/03/2023",
    type: "Trimestral",
    createdAt: "10/04/2023",
  },
  {
    id: "REL-003",
    name: "Fluxo de Caixa",
    startDate: "01/01/2023",
    endDate: "30/06/2023",
    type: "Semestral",
    createdAt: "15/07/2023",
  },
  {
    id: "REL-004",
    name: "Análise de Indicadores",
    startDate: "01/01/2023",
    endDate: "31/12/2023",
    type: "Anual",
    createdAt: "20/01/2024",
  },
  {
    id: "REL-005",
    name: "Relatório de Auditoria",
    startDate: "01/01/2023",
    endDate: "31/12/2023",
    type: "Anual",
    createdAt: "15/02/2024",
  },
]

export function AnalysisReports() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredReports = reports.filter(
    (report) =>
      report.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      report.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
      report.id.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="space-y-4">
      <Card className="rounded-3xl">
        <CardHeader>
          <CardTitle>Gerar Novo Relatório</CardTitle>
          <CardDescription>Selecione o tipo de relatório e o período desejado</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Tipo de Relatório</label>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="w-full justify-between">
                    Balanço Patrimonial <ChevronDownIcon className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-[200px]">
                  <DropdownMenuItem>Balanço Patrimonial</DropdownMenuItem>
                  <DropdownMenuItem>DRE</DropdownMenuItem>
                  <DropdownMenuItem>Fluxo de Caixa</DropdownMenuItem>
                  <DropdownMenuItem>DMPL</DropdownMenuItem>
                  <DropdownMenuItem>Análise de Indicadores</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Período</label>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="w-full justify-between">
                    Mensal <ChevronDownIcon className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-[200px]">
                  <DropdownMenuItem>Mensal</DropdownMenuItem>
                  <DropdownMenuItem>Trimestral</DropdownMenuItem>
                  <DropdownMenuItem>Semestral</DropdownMenuItem>
                  <DropdownMenuItem>Anual</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Data Inicial</label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" className="w-full justify-start text-left">
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    01/01/2023
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar />
                </PopoverContent>
              </Popover>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Data Final</label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" className="w-full justify-start text-left">
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    31/12/2023
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar />
                </PopoverContent>
              </Popover>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button className="bg-indigo-600 hover:bg-indigo-700">
            <PlusIcon className="mr-2 h-4 w-4" />
            Gerar Relatório
          </Button>
        </CardFooter>
      </Card>

      <div className="flex items-center gap-2">
        <div className="relative flex-1">
          <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Buscar relatórios..."
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
            <DropdownMenuItem>Todos os Relatórios</DropdownMenuItem>
            <DropdownMenuItem>Mensais</DropdownMenuItem>
            <DropdownMenuItem>Trimestrais</DropdownMenuItem>
            <DropdownMenuItem>Semestrais</DropdownMenuItem>
            <DropdownMenuItem>Anuais</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="rounded-2xl border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Nome</TableHead>
              <TableHead>Período</TableHead>
              <TableHead>Tipo</TableHead>
              <TableHead>Data de Criação</TableHead>
              <TableHead className="text-right">Ações</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredReports.map((report) => (
              <TableRow key={report.id}>
                <TableCell className="font-medium">{report.id}</TableCell>
                <TableCell>{report.name}</TableCell>
                <TableCell>
                  {report.startDate} a {report.endDate}
                </TableCell>
                <TableCell>{report.type}</TableCell>
                <TableCell>{report.createdAt}</TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="icon">
                    <FileTextIcon className="h-4 w-4" />
                    <span className="sr-only">Visualizar</span>
                  </Button>
                  <Button variant="ghost" size="icon">
                    <DownloadIcon className="h-4 w-4" />
                    <span className="sr-only">Download</span>
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
