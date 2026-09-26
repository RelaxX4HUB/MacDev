import React from "react";
import { motion } from "framer-motion";

const lines = ["Loading Page", "Done"];

export default function BootSequence() {
  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-background flex items-center justify-center"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="font-mono text-xs text-primary space-y-1">
        {lines.map((l, i) => (
          <motion.p key={l} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.4 }}>
            {l}
          </motion.p>
        ))}
      </div>
    </motion.div>
  );
}