import React, { useEffect, useState } from "react";

export default function TerminalFooter() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const t = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(t);
  }, []);

  return (
    <footer className="relative z-10 mt-24 pb-32 px-6">
      <div
        className="max-w-3xl mx-auto rounded-xl border border-white/15 px-5 py-4 font-mono text-[11px] text-muted-foreground"
        style={{ background: "rgba(255,255,255,0.05)", backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)" }}
      >
        <p className="text-white mb-1">root@Mac:~$ status --check</p>
        <p>HELLO WORLD</p>
        <p>LOCAL_TIME :: {time.toLocaleTimeString()}</p>
        <p className="truncate">CLIENT :: {navigator.userAgent}</p>
        <p className="mt-2 text-white/30">© {time.getFullYear()} Developer Mac Hub</p>
      </div>
    </footer>
  );
}