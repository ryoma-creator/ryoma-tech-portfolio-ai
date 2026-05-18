"use client";

import { motion } from "framer-motion";
import { AnimatedWords, FadeUp } from "@/components/AnimatedWords";

const IBM_STAGES = [
  { step: "01", label: "Document Screening" },
  { step: "02", label: "Coding Test" },
  { step: "03", label: "Language Test (English)" },
  { step: "04", label: "HR Interview" },
  { step: "05", label: "Technical Interview" },
  { step: "06", label: "Behavioral Interview — Final Round" },
];

export function AchievementsSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-20">
      <div className="mb-10">
        <FadeUp><span className="label block mb-3">Proof of Level</span></FadeUp>
        <AnimatedWords
          as="h2"
          text="Achievements"
          className="heading-serif"
          style={{ fontSize: "clamp(32px, 4vw, 52px)" }}
        />
      </div>

      <div className="flex flex-col gap-5">
        {/* IBM Philippines */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="card-glass overflow-hidden p-5 sm:p-8"
        >
          <div className="flex flex-wrap items-start justify-between gap-4 mb-7">
            <div>
              <p className="label mb-2">IBM Philippines · May – Sep 2025</p>
              <h3
                className="heading-serif mt-1"
                style={{ fontSize: "clamp(22px, 2.5vw, 30px)" }}
              >
                Application Developer — Front End
              </h3>
              <p style={{ color: "var(--muted)", fontSize: "13px", marginTop: "6px" }}>
                All 6 selection stages cleared entirely in English
              </p>
            </div>
            <div
              className="flex-shrink-0 text-center rounded-xl px-5 py-3"
              style={{
                border: "1px solid var(--border-gold)",
                background: "rgba(217,164,65,0.06)",
              }}
            >
              <span className="block text-3xl font-black text-[#f1c56b] leading-none">6/6</span>
              <span className="block text-[10px] font-semibold tracking-widest text-[#a6a09a] uppercase mt-1">
                Stages
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {IBM_STAGES.map((s, i) => (
              <div
                key={s.step}
                className={`flex items-center gap-3 rounded-xl px-4 py-2.5 ${
                  i === IBM_STAGES.length - 1 ? "sm:col-span-2" : ""
                }`}
                style={{
                  background: i === IBM_STAGES.length - 1
                    ? "rgba(217,164,65,0.07)"
                    : "rgba(255,255,255,0.03)",
                  border: i === IBM_STAGES.length - 1
                    ? "1px solid rgba(217,164,65,0.22)"
                    : "1px solid rgba(255,255,255,0.05)",
                }}
              >
                <span className="text-[10px] font-bold text-[#d9a441] tabular-nums opacity-70">{s.step}</span>
                <span className="text-sm text-[#d4cfc8]">{s.label}</span>
                <span className="ml-auto text-[#d9a441] text-sm">✓</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* The Odin Project */}
        <motion.a
          href="https://www.theodinproject.com"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="card-glass group"
          style={{
            padding: "32px 36px",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1rem",
            transition: "border-color 0.3s",
          }}
        >
          <div>
            <p className="label mb-2">The Odin Project · theodinproject.com ↗</p>
            <h3
              className="heading-serif mt-1"
              style={{ fontSize: "clamp(22px, 2.5vw, 30px)" }}
            >
              Full Curriculum — Completed
            </h3>
            <p style={{ color: "var(--muted)", fontSize: "13px", marginTop: "6px" }}>
              JavaScript · React · Node.js · Databases · Full Stack path
            </p>
          </div>
          <div
            className="flex-shrink-0 text-center rounded-xl px-5 py-3"
            style={{
              border: "1px solid var(--border-gold)",
              background: "rgba(217,164,65,0.06)",
            }}
          >
            <span className="block text-3xl font-black text-[#f1c56b] leading-none">100%</span>
            <span className="block text-[10px] font-semibold tracking-widest text-[#a6a09a] uppercase mt-1">
              Complete
            </span>
          </div>
        </motion.a>
      </div>
    </section>
  );
}
