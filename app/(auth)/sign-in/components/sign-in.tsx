'use client';

import { SignInForm } from "@/components/auth/sign-in/components/sign-in";
import Image from "next/image";
import { motion } from "framer-motion";

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

      <motion.div
        className="relative hidden w-2/2 p-2 lg:block"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.div
          className="h-full w-full overflow-hidden rounded-[40px] bg-gradient-to-b from-indigo-400 via-indigo-600 to-black"
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        >
          <motion.div
            className="flex flex-col items-center justify-center h-full"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Image
              src="/Logos/logo-icon-white.png"
              alt="Image"
              width={100}
              height={100}
              className="h-20 w-20 object-cover border-white border rounded-xl"
            />
            <p className="text-white text-8xl font-black mt-4">Orly.a</p>
            <p className="text-white text-2xl font-thin mt-4">e-finance</p>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
