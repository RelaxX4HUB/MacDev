import React, { useState } from "react";
import { motion } from "framer-motion";
import { UserRound } from "lucide-react";

const items = [{ id: "identity", icon: UserRound, label: "About" }];

export default function DockNav() {
  const [hoverId, setHoverId] = useState(null);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-50">
      <div
        className="flex items-end gap-2 px-4 py-3 rounded-2xl border border-white/15 shadow-[0_10px_40px_rgba(0,0,0,0.6)]"
        style={{ background: "rgba(255,255,255,0.06)", backdropFilter: "blur(30px)", WebkitBackdropFilter: "blur(30px)" }}
      >
        {items.map(({ id, icon: Icon, label }) => (
          <motion.button
            key={id}
            onClick={() => scrollTo(id)}
            onMouseEnter={() => setHoverId(id)}
            onMouseLeave={() => setHoverId(null)}
            animate={{ scale: hoverId === id ? 1.35 : 1, y: hoverId === id ? -8 : 0 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            className="relative w-11 h-11 rounded-xl flex items-center justify-center bg-white/[0.04] border border-white/15"
          >
            <Icon className="w-5 h-5 text-white" />
            {hoverId === id && (
              <span className="absolute -top-8 text-[10px] font-mono text-foreground whitespace-nowrap bg-black/80 px-2 py-1 rounded border border-white/10">
                {label}
              </span>
            )}
          </motion.button>
        ))}
      </div>
    </div>
  );
}