"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import ApiService from "@/service/apiService"
import { useRouter } from "next/navigation"
import { Notification, type NotificationItem, useNotification } from "@/components/ui/notification"

interface RegisterResponse {
  user: {
    name: string
    email: string
    phone: string
    birthDate: string
    roles: string[]
  }
  message?: string
}

export default function SignUpForm() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [birthdate, setBirthdate] = useState("")
  const [phone, setPhone] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  const { notifications, showNotification, closeNotification } = useNotification()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Validação básica
    if (password !== confirmPassword) {
      showNotification("error", "Erro de validação", "As senhas não coincidem.", "top-right")
      return
    }
    setIsLoading(true)

    try {
      const formattedDate = new Date(birthdate).toISOString()

      const payload = {
        name,
        email,
        password,
        phone,
        birthDate: formattedDate,
        roles: ["user"],
      }

      // Usando o ApiService com a rota correta /create/user
      const response = await ApiService.post<typeof payload, RegisterResponse>("/create/user", payload, false)

      // Exibe mensagem de sucesso
      showNotification(
        "success",
        "Cadastro realizado com sucesso!",
        "Você será redirecionado para a página de login.",
        "top-right",
      )

      // Pequeno delay para mostrar a notificação antes de redirecionar
      setTimeout(() => {
        router.push("/sign-in")
      }, 2000)
    } catch (error: any) {
      console.error("API error:", error)
      console.error("Error details:", {
        message: error.message,
        status: error.status,
        response: error.response,
      })

      // Exibe notificação de erro com a mensagem real do erro
      showNotification(
        "error",
        "Erro no cadastro",
        `Erro ao criar conta: ${error.message || "Verifique seus dados e tente novamente."}`,
        "top-right",
      )
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      {notifications.map((notification: NotificationItem) => (
        <Notification
          key={notification.id}
          type={notification.type}
          title={notification.title}
          message={notification.message}
          isVisible={notification.isVisible}
          onClose={() => closeNotification(notification.id)}
          position={notification.position}
        />
      ))}

      <div className="flex min-h-svh">
        <div className="flex w-full items-center justify-center p-6 lg:w-6/6">
          <div className="mx-auto max-w-sm">
            <div className="flex flex-col items-center gap-2 text-center">
              <h1 className="text-2xl text-indigo-500 font-bold">Cadastre sua conta</h1>
              <p className="text-balance mb-8 text-sm text-muted-foreground">
                Insira seus dados abaixo para criar sua conta
              </p>
            </div>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <Input
                  className="border placeholder:text-gray-400"
                  placeholder="Nome Completo"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <Input
                  className="border placeholder:text-gray-400"
                  placeholder="m@example.com"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="flex gap-4">
                <div className="w-1/2">
                  <Input
                    className="border placeholder:text-gray-400"
                    placeholder="Data de Nascimento"
                    type="date"
                    value={birthdate}
                    onChange={(e) => setBirthdate(e.target.value)}
                    required
                  />
                </div>
                <div className="w-1/2">
                  <Input
                    className="border placeholder:text-gray-400"
                    placeholder="(99) 99999-9999"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Input
                  className="border placeholder:text-gray-400"
                  placeholder="Sua Senha"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Input
                  className="border placeholder:text-gray-400"
                  placeholder="Confirmar Senha"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full text-white rounded-md bg-gradient-to-r from-indigo-500 to-indigo-700 hover:bg-gray-100"
                disabled={isLoading}
              >
                {isLoading ? "Cadastrando..." : "Cadastrar"}
              </Button>

              <p className="text-center text-sm">
                Já tem uma conta?{" "}
                <a href="/sign-in" className="text-indigo-400 hover:underline">
                  Entrar
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
