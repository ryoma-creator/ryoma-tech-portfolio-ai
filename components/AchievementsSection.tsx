"use client";

import { motion } from "framer-motion";

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
    <section className="py-12 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-xs font-semibold tracking-widest text-zinc-500 uppercase mb-2">
          Achievements
        </p>
        <h2 className="text-2xl font-bold text-white mb-8">
          Proof of Level
        </h2>
      </motion.div>

      <div className="flex flex-col gap-6">
        {/* IBM Philippines */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative rounded-2xl border border-zinc-700/60 bg-zinc-900/60 backdrop-blur-sm overflow-hidden"
        >
          {/* 上部グロー */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/60 to-transparent" />

          <div className="p-6 sm:p-8">
            <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-bold tracking-widest text-blue-400 uppercase">
                    IBM Philippines
                  </span>
                  <span className="text-xs text-zinc-500">· May – Sep 2025</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug">
                  Application Developer — Front End
                </h3>
                <p className="text-sm text-zinc-400 mt-1">
                  Cleared all 6 selection stages entirely in English
                </p>
              </div>

              {/* バッジ */}
              <div className="flex-shrink-0 flex flex-col items-center justify-center bg-gradient-to-br from-blue-600/20 to-blue-500/10 border border-blue-500/30 rounded-xl px-4 py-3 text-center">
                <span className="text-3xl font-black text-blue-400 leading-none">6/6</span>
                <span className="text-[10px] font-semibold tracking-widest text-blue-400/80 uppercase mt-1">
                  Stages Passed
                </span>
              </div>
            </div>

            {/* ステージリスト */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {IBM_STAGES.map((s, i) => (
                <div
                  key={s.step}
                  className={`flex items-center gap-3 rounded-lg px-3 py-2 ${
                    i === IBM_STAGES.length - 1
                      ? "bg-blue-500/10 border border-blue-500/30 col-span-1 sm:col-span-2"
                      : "bg-zinc-800/60"
                  }`}
                >
                  <span className="text-[10px] font-black text-zinc-500 tabular-nums w-5">{s.step}</span>
                  <span className={`text-sm font-medium ${i === IBM_STAGES.length - 1 ? "text-blue-300" : "text-zinc-300"}`}>
                    {s.label}
                  </span>
                  <span className="ml-auto text-green-400 text-sm">✓</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* The Odin Project */}
        <motion.a
          href="https://www.theodinproject.com"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="group relative rounded-2xl border border-zinc-700/60 bg-zinc-900/60 backdrop-blur-sm overflow-hidden hover:border-orange-500/40 transition-colors duration-300"
        >
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent" />

          <div className="p-6 sm:p-8 flex flex-wrap items-center gap-6">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-bold tracking-widest text-orange-400 uppercase">
                  The Odin Project
                </span>
                <span className="text-xs text-zinc-500">· theodinproject.com</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug">
                Full Curriculum — Completed
              </h3>
              <p className="text-sm text-zinc-400 mt-1">
                JavaScript · React · Node.js · Databases · Full Stack path
              </p>
            </div>

            <div className="flex-shrink-0 flex flex-col items-center justify-center bg-gradient-to-br from-orange-600/20 to-orange-500/10 border border-orange-500/30 rounded-xl px-4 py-3 text-center">
              <span className="text-2xl font-black text-orange-400 leading-none">100%</span>
              <span className="text-[10px] font-semibold tracking-widest text-orange-400/80 uppercase mt-1">
                Complete
              </span>
            </div>

            <span className="absolute right-6 bottom-6 text-zinc-600 group-hover:text-orange-400 transition-colors text-lg">↗</span>
          </div>
        </motion.a>
      </div>
    </section>
  );
}
