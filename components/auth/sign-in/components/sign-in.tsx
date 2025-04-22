import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function SignInForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"form">) {
  return (
    <form className={cn("flex flex-col gap-6", className)} {...props}>
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
            className="border  placeholder:text-gray-400"
            placeholder="m@example.com"
            type="email"
          />
        </div>

        <div className="grid gap-2">
          <a href="#"className="ml-auto text-sm underline-offset-4 text-indigo-500 hover:underline">
            Esqueceu sua senha?
          </a>
          <div className="space-y-2">
            <Input
              className="border placeholder:text-gray-400"
              placeholder="Digite sua Senha"
              type="password"
            />
          </div>
        </div>

        <Button
          type="submit"
          className="rounded-md  bg-gradient-to-r from-indigo-500 to-indigo-700"
        >
          Entrar
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
  );
}
