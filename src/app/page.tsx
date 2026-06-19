import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { Process } from "@/components/process";
import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { SiteFooter } from "@/components/site-footer";

// Self-referencing canonical for the homepage (title/description inherit from
// the root layout). Prevents duplicate-content ambiguity from query params or
// trailing-slash variants.
export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="relative z-10 flex-1">
        <Hero />
        <Services />
        <Process />
        <About />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
