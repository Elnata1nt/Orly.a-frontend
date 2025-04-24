"use client";

import type React from "react";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BarChart3,
  FileText,
  Wallet,
  PieChart,
  Target,
  Users,
  Menu,
  X,
  Settings,
  LogOut,
  MessageCircle,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

interface NavItemProps {
  icon: React.ElementType;
  label: string;
  href: string;
}

const NavItem = ({ icon: Icon, label, href }: NavItemProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={cn(
        "flex items-center gap-3 rounded-md px-3 py-2 text-sm",
        isActive
          ? "bg-indigo-500 text-primary-foreground font-medium"
          : isHovered
          ? "bg-indigo-100"
          : "text-muted-foreground"
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Icon className="h-4 w-4" />
      <span className={isActive ? "text-primary-foreground" : ""}>{label}</span>
    </Link>
  );
};

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

const Section = ({ title, children }: SectionProps) => {
  return (
    <div className="py-2">
      <h3 className="mb-2 px-3 text-xs font-semibold uppercase text-muted-foreground/70">
        {title}
      </h3>
      <div className="space-y-1">{children}</div>
    </div>
  );
};

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile Toggle Button */}
      <Button
        variant="ghost"
        size="icon"
        className="fixed left-4 top-4 z-50 md:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </Button>

      {/* Sidebar */}
      <div
        className={cn(
          "fixed inset-y-0 left-0 z-40 w-64 transform border-r bg-background/95 backdrop-blur-sm transition-transform duration-200 ease-in-out md:translate-x-0",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex h-full flex-col">
          {/* Header */}
          <div className="flex h-16 items-center border-b px-4">
            <div className="flex items-center gap-2">
              <span className="text-2xl text-indigo-400 font-bold">Orly.a</span>
            </div>
          </div>

          {/* Main Navigation */}
          <div className="flex-1 overflow-auto py-4 px-4">
            <div className="space-y-1 py-2">
              <NavItem icon={BarChart3} label="Dashboard" href="/Dashboard" />
              <NavItem icon={FileText} label="Analises" href="/Analysis" />
              <NavItem icon={PieChart} label="Orçamentos" href="/Budgets" />
              <NavItem icon={Wallet} label="Carteira" href="/Wallet" />
            </div>

            {/* Finances Section */}
            <Section title="Finanças">
              <NavItem
                icon={BarChart3}
                label="Investimentos"
                href="/Investments"
              />
              <NavItem icon={Target} label="Metas" href="/Goals" />
            </Section>

            {/* Team Section */}
            <Section title="Equipe">
              <div className="px-3 py-2 text-xs text-muted-foreground">
                Pessoas com permissão de acesso à plataforma.
              </div>
              <NavItem icon={Users} label="Gerenciar Equipe" href="/Member" />
            </Section>

            {/* Integrations Section */}
            <Section title="Integrações">
              <NavItem
                icon={MessageCircle}
                label="Integração"
                href="/Integrations"
              />
            </Section>
          </div>

          {/* User Profile */}
          <div className="border-t p-4">
            <div className="flex items-center gap-3">
              <Avatar className="h-9 w-9 border">
                <AvatarImage src="/placeholder.svg" alt="User" />
                <AvatarFallback>UN</AvatarFallback>
              </Avatar>
              <div className="overflow-hidden flex-1">
                <p className="truncate text-sm font-medium">Usuário Nome</p>
                <p className="truncate text-xs text-muted-foreground">
                  usuario@email.com
                </p>
              </div>
              <div className="flex gap-1">
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Settings className="h-4 w-4 text-muted-foreground" />
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <LogOut className="h-4 w-4 text-muted-foreground" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
