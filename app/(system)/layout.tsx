"use client"

import type React from "react"
import { Inter } from "next/font/google"
import Sidebar, { useSidebarState } from "@/components/system/sidebar/components/sidebar"
import Header from "@/components/system/header/components/header"


const inter = Inter({ subsets: ["latin"] })

export default function LayoutSistem({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const { open, toggle } = useSidebarState()

  return (
    <div className="flex min-h-screen bg-background">
      {/* Backdrop overlay for mobile */}
      {open && (
        <div
          className="fixed inset-0 z-30 bg-black/50 backdrop-blur-sm md:hidden"
          onClick={toggle}
          aria-hidden="true"
        />
      )}

      <Sidebar open={open} />

      <div className={`flex-1 flex flex-col md:ml-64 ${inter.className}`}>
        <Header open={open} toggle={toggle} />

        {/* Content container with proper spacing */}
        <div className="flex-1 flex flex-col py-20 overflow-auto">
          <main className="flex-1 container md:pt-6">{children}</main>
        </div>
      </div>
    </div>
  )
}
