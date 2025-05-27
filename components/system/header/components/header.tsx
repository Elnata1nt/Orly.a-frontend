"use client"
import { usePathname } from "next/navigation"
import { Bell, Search, ChevronDown, HelpCircle, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

interface HeaderProps {
  open: boolean
  toggle: () => void
}

export default function Header({ open, toggle }: HeaderProps) {
  const pathname = usePathname()
  const pageName = pathname.split("/").pop() || "Dashboard"
  const formattedPageName = pageName.charAt(0).toUpperCase() + pageName.slice(1)

  return (
    <header className="fixed top-0 right-0 z-30 flex h-16 w-full border-b bg-background/95 backdrop-blur-sm px-4 md:px-6 md:w-[calc(100%-16rem)]">
      {/* Left side - Toggle button and Page title */}
      <div className="flex items-center gap-3">
        <Button variant="ghost" size="icon" className="md:hidden" onClick={toggle}>
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
        <h1 className="text-xl font-semibold">{formattedPageName}</h1>
      </div>

      {/* Right side - Search and actions */}
      <div className="flex items-center gap-4 ml-auto">
        <div className="relative hidden md:block">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="Buscar..." className="w-64 pl-8 rounded-md bg-background" />
        </div>

        {/* notificaçoes  */}
        {/* <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-indigo-500 text-[10px] font-medium text-white">
            3
          </span>
        </Button> */}

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="sm" className="gap-1">
              <HelpCircle className="h-4 w-4" />
              <span className="hidden md:inline">Ajuda</span>
              <ChevronDown className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>Documentação</DropdownMenuItem>
            <DropdownMenuItem>Tutoriais</DropdownMenuItem>
            <DropdownMenuItem>Suporte</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}
