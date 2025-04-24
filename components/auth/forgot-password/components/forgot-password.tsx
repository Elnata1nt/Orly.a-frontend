"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Loader2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"

import ApiService from "@/service/apiService"
import { Toast } from "@/components/ui/toast"


const formSchema = z.object({
  email: z.string().email({ message: "Por favor, insira um email válido." }),
})

type FormValues = z.infer<typeof formSchema>

export function ForgotPasswordForm() {
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  })

  async function onSubmit(data: FormValues) {
    setIsLoading(true)

    try {
      // Usando o apiService para fazer a chamada à API
      await ApiService.post("/auth/forgot-password", { email: data.email })

      setIsSuccess(true)
      Toast({
        title: "Email enviado",
      })
    } catch (error) {
      Toast({
        title: "Erro",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex h-screen w-full">
      <div className="flex w-full items-center justify-center p-8">
        <div className="w-full max-w-md">
          {isSuccess ? (
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-2">Email enviado</h2>
              <p className="text-gray-600 mb-6">
                Enviamos instruções de recuperação de senha para o seu email. Verifique sua caixa de entrada e siga as
                instruções para redefinir sua senha.
              </p>
              <Button variant="outline" className="w-full" onClick={() => setIsSuccess(false)}>
                Tentar novamente
              </Button>
            </div>
          ) : (
            <div>
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold mb-2">Esqueceu sua senha?</h2>
                <p className="text-gray-600">Digite seu email abaixo para receber um link de recuperação de senha.</p>
              </div>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input placeholder="m@example.com" className=" rounded-md" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-indigo-500 to-indigo-700 rounded-md"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      "Enviar link de recuperação"
                    )}
                  </Button>
                </form>
              </Form>

              <div className="text-center mt-6">
                <p className="text-sm text-gray-600">
                  Lembrou sua senha?{" "}
                  <a href="/sign-in" className="text-indigo-600 hover:underline font-medium">
                    Voltar para o login
                  </a>
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
