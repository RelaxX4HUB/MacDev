import React from "react";
import { motion } from "framer-motion";

export default function MacWindow({ title, children, className = "", accent = "cyan", delay = 0 }) {
  const accentColor = accent === "red" ? "#FF3B30" : "#00F0FF";

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 30 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      className={`relative rounded-2xl border border-white/15 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.9)] overflow-hidden ${className}`}
      style={{
        background: "rgba(255, 255, 255, 0.06)",
        backdropFilter: "blur(40px)",
        WebkitBackdropFilter: "blur(40px)",
      }}
    >
      {/* sheen top */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none" />
      {/* inner glow */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.05]"
        style={{
          backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
          backgroundSize: "16px 16px",
        }}
      />
      <div className="relative flex items-center gap-2 px-4 py-3 border-b border-white/10">
        <span className="w-3 h-3 rounded-full bg-[#FF5F56] shadow-[0_0_8px_rgba(255,95,86,0.6)]" />
        <span className="w-3 h-3 rounded-full bg-[#FFBD2E] shadow-[0_0_8px_rgba(255,189,46,0.6)]" />
        <span className="w-3 h-3 rounded-full bg-[#27C93F] shadow-[0_0_8px_rgba(39,201,63,0.6)]" />
        {title && (
          <span
            className="ml-3 text-xs font-mono tracking-widest uppercase"
            style={{ color: accentColor, opacity: 0.8 }}
          >
            {title}
          </span>
        )}
      </div>
      <div className="relative">{children}</div>
    </motion.div>
  );
}