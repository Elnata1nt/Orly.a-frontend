import LogoCanto from "@/components/auth/component/logo";
import { SignInForm } from "@/components/auth/sign-in/components/sign-in";
import Image from "next/image";

export default function SignIn() {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <SignInForm />
          </div>
        </div>
      </div>
      <div className="relative hidden w-2/2 p-2 lg:block">
        <div className="h-full w-full overflow-hidden rounded-[40px] bg-gradient-to-b from-indigo-400 via-indigo-600 to-black">
          <div className="flex flex-col items-center justify-center h-full">
            <Image
              src="/Logos/logo-icon-white.png"
              alt="Image"
              width={100}
              height={100}
              className="h-20 w-20 object-cover border-white border rounded-xl "
            />
            <p className="text-white text-8xl font-black mt-4">Orly.a</p>
            <p className="text-white text-2xl font-thin mt-4">e-finance</p>
          </div>
        </div>
      </div>
    </div>
  );
}
