import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Sidebar from "@/components/system/sidebar/components/sidebar"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "orly.a - Plataforma Financeira",
  description: "Gerencie suas finanças com facilidade",
}

export default function LayoutSistem({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
          <div className="flex min-h-screen bg-background">
            <Sidebar />
            <main className="flex-1 p-4 md:ml-64">{children}</main>
          </div>
      </body>
    </html>
  )
}
