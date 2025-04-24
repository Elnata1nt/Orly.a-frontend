"use client"

import { useState, useEffect } from "react"
import { AlertCircle, CheckCircle, X } from "lucide-react"
import { cn } from "@/lib/utils"

type NotificationType = "success" | "error"

// Adicione esta interface no início do arquivo, logo após as importações
interface NotificationItem {
  type: NotificationType
  title: string
  message: string
  id: string
  isVisible: boolean
  position?: "top-right" | "top-left" | "bottom-right" | "bottom-left"
}

interface NotificationProps {
  type: NotificationType
  title: string
  message: string
  isVisible: boolean
  onClose: () => void
  position?: "top-right" | "top-left" | "bottom-right" | "bottom-left"
  duration?: number
}

export function Notification({
  type,
  title,
  message,
  isVisible,
  onClose,
  position = "top-right",
  duration = 5000,
}: NotificationProps) {
  useEffect(() => {
    if (isVisible && duration > 0) {
      const timer = setTimeout(() => {
        onClose()
      }, duration)
      return () => clearTimeout(timer)
    }
  }, [isVisible, duration, onClose])

  if (!isVisible) return null

  const positionClasses = {
    "top-right": "top-4 right-4",
    "top-left": "top-4 left-4",
    "bottom-right": "bottom-4 right-4",
    "bottom-left": "bottom-4 left-4",
  }

  return (
    <div
      className={cn(
        "fixed z-50 max-w-md shadow-lg rounded-lg overflow-hidden transition-all duration-300 transform",
        positionClasses[position],
        isVisible ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0 pointer-events-none",
      )}
    >
      <div
        className={cn(
          "p-4 flex items-start gap-3",
          type === "success" ? "bg-indigo-50 border-l-4 border-indigo-500" : "bg-red-50 border-l-4 border-red-500",
        )}
      >
        <div className="flex-shrink-0">
          {type === "success" ? (
            <CheckCircle className="h-5 w-5 text-indigo-500" />
          ) : (
            <AlertCircle className="h-5 w-5 text-red-500" />
          )}
        </div>
        <div className="flex-1">
          <h3 className={cn("font-medium", type === "success" ? "text-indigo-800" : "text-red-800")}>{title}</h3>
          <p className={cn("text-sm mt-1", type === "success" ? "text-indigo-700" : "text-red-700")}>{message}</p>
        </div>
        <button
          onClick={onClose}
          className={cn(
            "flex-shrink-0 ml-4 p-1 rounded-full hover:bg-opacity-10",
            type === "success" ? "hover:bg-indigo-200 text-indigo-500" : "hover:bg-red-200 text-red-500",
          )}
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  )
}

// Substitua a definição do estado de notificações por esta versão tipada
export function useNotification() {
  const [notifications, setNotifications] = useState<NotificationItem[]>([])

  const showNotification = (
    type: NotificationType,
    title: string,
    message: string,
    position?: "top-right" | "top-left" | "bottom-right" | "bottom-left",
  ) => {
    const id = Math.random().toString(36).substring(2, 9)
    setNotifications((prev) => [...prev, { type, title, message, id, isVisible: true, position }])
    return id
  }

  const closeNotification = (id: string) => {
    setNotifications((prev) =>
      prev.map((notification) => (notification.id === id ? { ...notification, isVisible: false } : notification)),
    )

    // Remove notification from array after animation completes
    setTimeout(() => {
      setNotifications((prev) => prev.filter((notification) => notification.id !== id))
    }, 300)
  }

  return {
    notifications,
    showNotification,
    closeNotification,
  }
}

export type { NotificationItem }
