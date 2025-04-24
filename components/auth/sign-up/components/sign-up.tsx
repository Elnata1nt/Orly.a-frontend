import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function SignUpForm() {
  return (
    <div className="flex min-h-svh">
      <div className="flex w-full items-center justify-center p-6 lg:w-6/6">
        <div className="mx-auto max-w-sm">
          <div className="flex flex-col items-center gap-2 text-center">
            <h1 className="text-2xl text-indigo-500 font-bold">
              Cadastre sua conta
            </h1>
            <p className="text-balance mb-8 text-sm text-muted-foreground">
              Insira seus dados abaixo para criar sua conta
            </p>
          </div>
          <form className="space-y-6">
            <div className="space-y-2">
              <Input
                className="border  placeholder:text-gray-400"
                placeholder="Nome Completo"
                type="text"
              />
            </div>

            <div className="space-y-2">
              <Input
                className="border  placeholder:text-gray-400"
                placeholder="m@example.com"
                type="email"
              />
            </div>

            <div className="flex gap-4">
              <div className="w-1/2">
                <Input
                  className="border placeholder:text-gray-400"
                  placeholder="UF"
                  type="text"
                />
              </div>
              <div className="w-1/2">
                <Input
                  className="border placeholder:text-gray-400"
                  placeholder="Município"
                  type="text"
                />
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-1/2">
              <Input
                  className="border placeholder:text-gray-400"
                  placeholder="Município"
                  type="date"
                />
              </div>
              <div className="w-1/2">
                <Input
                  className="border placeholder:text-gray-400"
                  placeholder="(99) 99999-9999"
                  type="tel"
                  pattern="\(\d{2}\) \d{5}-\d{4}"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Input
                className="border  placeholder:text-gray-400"
                placeholder="Sua Senha"
                type="password"
              />
            </div>
            <div className="space-y-2">
              <Input
                className="border  placeholder:text-gray-400"
                placeholder="Confirmar Senha"
                type="password"
              />
            </div>

            <Button className="w-full text-white rounded-md bg-gradient-to-r from-indigo-500 to-indigo-700 hover:bg-gray-100">
              Sign Up
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
  );
}
