import SignUpForm from "@/components/auth/sign-up/components/sign-up";
import Image from "next/image";

export default function SignUp() {
  return (
    <div className="flex min-h-screen">
      {/* Left Section */}
      <div className="relative hidden w-1/2 p-2 lg:block">
        <div className="h-full w-2/3 overflow-hidden rounded-[40px] bg-gradient-to-b from-indigo-400 via-indigo-600 to-black">
          <div className="flex h-full flex-col items-center justify-center px-8 text-center text-white">
            <div className="mb-8">
              <h1 className="text-2xl font-semibold">
                Controle Financeiro Inteligente
              </h1>
            </div>
            <h2 className="mb-12 text-8xl font-black">Orly.a</h2>
            {/* <p className="mb-12 text-lg font-thin">
              finance
            </p> */}

            <div className="w-full max-w-sm">
              <div className="rounded-lg mb-2 bg-white/10 p-4 backdrop-blur-sm">
                <div className="flex items-center gap-4">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-black">
                    1
                  </span>
                  <span className="text-lg">Cadastre sua conta</span>
                </div>
              </div>
              <div className="rounded-lg mb-2 bg-white/5 p-4 backdrop-blur-sm">
                <div className="flex items-center gap-4">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-white">
                    2
                  </span>
                  <span className="text-lg">Verificação de 2 fatores</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full lg:w-1/3">
        <SignUpForm />
      </div>
    </div>
  );
}
