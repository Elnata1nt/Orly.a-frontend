'use client';

import { ForgotPasswordForm } from "@/components/auth/forgot-password/components/forgot-password";
import { CircleAlert } from "lucide-react";
import { motion } from "framer-motion";

export default function SignUp() {
  return (
    <div className="flex min-h-screen">
      {/* Left Section */}
      <motion.div
        className="relative hidden w-1/2 p-2 lg:block"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.div
          className="h-full w-2/3 overflow-hidden rounded-[40px] bg-gradient-to-b from-indigo-400 via-indigo-600 to-black"
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        >
          <motion.div
            className="flex h-full flex-col items-center justify-center px-8 text-center text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="mb-8">
              <h1 className="text-2xl font-semibold">
                Controle Financeiro Inteligente
              </h1>
            </div>
            <h2 className="mb-12 text-8xl font-black">Orly.a</h2>
            <div className="w-full max-w-sm">
              <div className="rounded-lg mb-2 bg-white/10 p-4 backdrop-blur-sm">
                <div className="flex items-center gap-4">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-indigo-700">
                    <CircleAlert />
                  </span>
                  <span className="text-lg">Recuperação de Senha</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Right Section */}
      <motion.div
        className="w-full lg:w-1/3 flex items-center justify-center"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
          className="w-full max-w-md"
        >
          <ForgotPasswordForm />
        </motion.div>
      </motion.div>
    </div>
  );
}
