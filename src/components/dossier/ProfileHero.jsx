const db = globalThis.__B44_DB__ || { auth:{ isAuthenticated: async()=>false, me: async()=>null }, entities:new Proxy({}, { get:()=>({ filter:async()=>[], get:async()=>null, create:async()=>({}), update:async()=>({}), delete:async()=>({}) }) }), integrations:{ Core:{ UploadFile:async()=>({ file_url:'' }) } } };

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Info, Instagram, MessageCircle, Monitor } from "lucide-react";
import { Image } from "@/components/ui/image";
import MacWindow from "./MacWindow";

const socials = [
  { label: "Instagram", icon: Instagram, url: "https://www.instagram.com/_ikyx7?stkn=ZGo1Z2YxejZ4a21n" },
  { label: "Discord", icon: MessageCircle, copy: "setfenv_." },
  { label: "Mac Hub", icon: Monitor, url: "https://discord.gg/Evm2Dbrz4" },
];

export default function ProfileHero() {
  const [scanning, setScanning] = useState(false);

  return (
    <MacWindow className="w-full max-w-md mx-auto" delay={0.1}>
      <div className="px-8 py-12 flex flex-col items-center text-center">
        {/* avatar ring */}
        <div className="relative mb-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="absolute -inset-2 rounded-full bg-gradient-to-br from-white/30 via-white/5 to-transparent blur-xl"
          />
          <div
            className="relative w-32 h-32 rounded-full overflow-hidden border border-white/20 cursor-pointer"
            onMouseEnter={() => setScanning(true)}
            onMouseLeave={() => setScanning(false)}
            style={{ boxShadow: "0 0 0 4px rgba(0,0,0,0.4), 0 10px 40px rgba(255,255,255,0.08)" }}
          >
            <Image
              src="/profile.jpg"
              alt="Mac profile"
              className="w-full h-full object-cover"
            />
            {scanning && (
              <motion.div
                initial={{ top: "-10%" }}
                animate={{ top: "110%" }}
                transition={{ duration: 0.9, ease: "linear" }}
                className="absolute left-0 right-0 h-0.5 bg-white shadow-[0_0_12px_2px_rgba(255,255,255,0.8)]"
              />
            )}
          </div>
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-4xl font-heading font-extrabold text-foreground tracking-tight"
        >
          Mac
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-1 text-xs font-mono tracking-widest uppercase text-white/40"
        >
          Reverse Engineer
        </motion.p>

        <div className="mt-8 flex items-center gap-2 text-foreground">
          <Info className="w-4 h-4 text-white/50" />
          <span className="text-sm font-medium">Info</span>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-6 flex flex-wrap justify-center gap-2"
        >
          {socials.map(({ label, icon: Icon, url, copy }) => (
            <motion.button
              key={label}
              type="button"
              whileHover={{ y: -2 }}
              onClick={() => {
                if (copy) {
                  navigator.clipboard?.writeText(copy);
                } else if (url) {
                  window.open(url, "_blank", "noopener,noreferrer");
                }
              }}
              className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-white/[0.04] border border-white/15 text-sm text-muted-foreground hover:border-white/30 hover:text-foreground transition-colors cursor-pointer"
            >
              <Icon className="w-4 h-4" />
              {label}
            </motion.button>
          ))}
        </motion.div>
      </div>
    </MacWindow>
  );
}