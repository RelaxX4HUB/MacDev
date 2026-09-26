import React from "react";

export default function BackgroundField() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-black">
      {/* subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse at center, black 40%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black 40%, transparent 75%)",
        }}
      />
      {/* dot field */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
      {/* glow blobs */}
      <div className="absolute -top-40 left-1/4 w-[500px] h-[500px] rounded-full bg-white/10 blur-[150px]" />
      <div className="absolute top-1/2 -right-40 w-[600px] h-[600px] rounded-full bg-white/5 blur-[180px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-white/5 blur-[150px]" />
      {/* top sheen */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
    </div>
  );
}