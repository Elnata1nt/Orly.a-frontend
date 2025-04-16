import { SignInForm } from "@/components/auth/sign-in/components/sign-in";
import { GalleryVerticalEnd } from "lucide-react";

export default function SignIn() {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          <a href="#" className="flex items-center gap-2 font-medium">
            <div className="flex h-6 w-6 items-center justify-center rounded-md bg-gradient-to-r from-indigo-500 to-indigo-700 text-primary-foreground">
              <GalleryVerticalEnd className="size-4" />
            </div>
            Orly.a
          </a>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <SignInForm />
          </div>
        </div>
      </div>
      <div className="relative hidden bg-gradient-to-r from-indigo-500 to-indigo-700 lg:block">
        {/* <Image
          src="/Logos/Logo-Orly.png"
          alt="Image"
          width={300}
          height={300}
          className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        /> */}
      </div>
    </div>
  );
}
