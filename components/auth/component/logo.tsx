import Image from "next/image";

export default function LogoCanto() {
    return (
        <div className="fixed p-4 ml-2 justify-center gap-2 md:justify-start">
        <a href="#" className="flex items-center gap-2 font-medium">
          <div className="flex h-6 w-6 items-center justify-center rounded-md bg-gradient-to-r from-indigo-500 to-indigo-700 text-primary-foreground">
            <Image
              src="/Logos/logo-icon-white.png"
              alt="Logo"
              width={18}
              height={18}
            />
          </div>
          <p className="font-bold text-indigo-600 text-xl">Orly.a</p>
        </a>
      </div>
    )
}