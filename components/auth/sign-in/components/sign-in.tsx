"use client";

import type React from "react";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import ApiService from "@/service/apiService";
import { useRouter } from "next/navigation";
import {
  Notification,
  NotificationItem,
  useNotification,
} from "@/components/ui/notification";

interface LoginResponse {
  token: string;
  user: any;
  message?: string;
}

export function SignInForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"form">) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { notifications, showNotification, closeNotification } =
    useNotification();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Usando o ApiService real com a estrutura correta
      const response = await ApiService.post<
        { email: string; password: string },
        LoginResponse
      >("/auth/login", {
        email,
        password,
      });

      // // O token já é salvo automaticamente pelo ApiService
      // showNotification(
      //   "success",
      //   "Login realizado com sucesso!",
      //   "Você será redirecionado para o Dashboard.",
      //   "bottom-right",
      // )

      // Pequeno delay para mostrar a notificação antes de redirecionar
      setTimeout(() => {
        router.push("/Dashboard");
      }, 2000);
    } catch (error: any) {
      // Exibe notificação de erro com a mensagem real do erro
      showNotification(
        "error",
        "Erro de autenticação",
        "Erro ao fazer login. Verifique suas credenciais.",
        "top-right"
      );
    } finally {
      setIsLoading(false);
    }
  };

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

      <form
        className={cn("flex flex-col gap-6", className)}
        {...props}
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col items-center gap-2 text-center">
          <h1 className="text-2xl text-indigo-500 font-bold">
            Faça login na sua conta
          </h1>
          <p className="text-balance text-sm text-muted-foreground">
            Insira seu e-mail abaixo para fazer login na sua conta
          </p>
        </div>

        <div className="grid gap-6">
          <div className="space-y-2">
            <Input
              className="border placeholder:text-gray-400"
              placeholder="m@example.com"
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>

          <div className="grid gap-2">
            <div className="space-y-2">
              <Input
                className="border placeholder:text-gray-400"
                placeholder="Digite sua Senha"
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
            <a
              href="#"
              className="ml-auto text-sm underline-offset-4 text-indigo-500 hover:underline"
            >
              Esqueceu sua senha?
            </a>
          </div>

          <Button
            type="submit"
            className="rounded-md bg-gradient-to-r text-white from-indigo-500 to-indigo-700"
            disabled={isLoading}
          >
            {isLoading ? "Carregando..." : "Entrar"}
          </Button>
        </div>
        <div className="text-center text-sm">
          Não tem uma conta?{" "}
          <a
            href="/sign-up"
            className="underline text-indigo-500 underline-offset-4"
          >
            Cadastre-se
          </a>
        </div>
      </form>
    </>
  );
}
