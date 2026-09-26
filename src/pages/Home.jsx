import React, { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import BackgroundField from "@/components/dossier/BackgroundField";
import BootSequence from "@/components/dossier/BootSequence";
import ProfileHero from "@/components/dossier/ProfileHero";
import DockNav from "@/components/dossier/DockNav";
import TerminalFooter from "@/components/dossier/TerminalFooter";

export default function Home() {
  const [booting, setBooting] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setBooting(false), 1200);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="relative min-h-screen text-foreground overflow-x-hidden">
      <BackgroundField />
      <AnimatePresence>{booting && <BootSequence />}</AnimatePresence>

      {!booting && (
        <>
          <main className="relative z-10 max-w-5xl mx-auto px-4 md:px-6 pt-16 md:pt-24 space-y-16 md:space-y-24">
            <section id="identity" className="scroll-mt-10">
              <ProfileHero />
            </section>
          </main>
          <TerminalFooter />
          <DockNav />
        </>
      )}
    </div>
  );
}