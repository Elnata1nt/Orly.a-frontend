"use client";

import { Header } from "@/components/landpage/header";
import { Hero } from "@/components/landpage/hero";
import { LogoSection } from "@/components/landpage/logo-section";
import { Features } from "@/components/landpage/features";
import { HowItWorks } from "@/components/landpage/how-it-works";
import { Testimonials } from "@/components/landpage/testimonials";
import { Pricing } from "@/components/landpage/pricing";
import { FAQ } from "@/components/landpage/faq";
import { Footer } from "@/components/landpage/footer";
import { ModeToggle } from "@/components/effects/mode-toggle";

export default function LandingPage() {
  return (
    <>
      <div className="flex min-h-[100dvh] flex-col">
        <Header />
        <main className="flex-1">
          <Hero />
          <LogoSection />
          <Features />
          <HowItWorks />
          <Testimonials />
          <Pricing />
          <FAQ />

          {/* Botões flutuantes de tema */}
          <ModeToggle />
        </main>
        <Footer />
      </div>
    </>
  );
}
