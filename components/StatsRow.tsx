"use client";

import { motion } from "framer-motion";
import { Rocket, Zap, Globe2, Layers, Clock } from "lucide-react";

const stats = [
  { icon: Rocket,  value: "20+",   label: "Projects Shipped",  sub: "Personal & client work" },
  { icon: Zap,     value: "AI",    label: "Native Workflow",   sub: "Claude Code · Cursor" },
  { icon: Globe2,  value: "JP/EN", label: "Bilingual",         sub: "Japanese & English" },
  { icon: Layers,  value: "Full",  label: "Modern Stack",      sub: "Next.js · TS · Supabase" },
  { icon: Clock,   value: "Fast",  label: "& Reliable",        sub: "From idea to live" },
];

export function StatsRow() {
  return (
    <section
      className="relative z-10 py-6 sm:py-8"
      style={{
        background: "rgba(5,5,5,0.6)",
        backdropFilter: "blur(8px)",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div
        className="max-w-[1180px] mx-auto px-4 sm:px-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6"
      >
        {stats.map(({ icon: Icon, value, label, sub }, i) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-3"
          >
            <div className="icon-chip flex-shrink-0">
              <Icon size={20} strokeWidth={1.8} className="icon-gold" />
            </div>
            <div>
              <p className="text-[#f5f1e8] text-sm font-bold leading-tight">
                {value}{" "}
                <span className="text-[#a6a09a] font-normal">{label}</span>
              </p>
              <p className="text-[10px] mt-0.5" style={{ color: "var(--muted)" }}>{sub}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
