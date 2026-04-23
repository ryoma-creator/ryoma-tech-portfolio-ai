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
    <section className="py-16 px-4">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-10"
      >
        <p className="text-xs font-semibold tracking-widest text-zinc-500 uppercase mb-2">
          Achievements
        </p>
        <h2 className="text-2xl font-bold text-white">Proof of Level</h2>
      </motion.div>

      <div className="flex flex-col gap-5">
        {/* IBM Philippines */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="rounded-2xl border border-zinc-700 bg-zinc-900 overflow-hidden"
        >
          <div className="p-6 sm:p-8">
            {/* ヘッダー */}
            <div className="flex flex-wrap items-start justify-between gap-4 mb-7">
              <div>
                <p className="text-xs font-semibold tracking-widest text-zinc-400 uppercase mb-1">
                  IBM Philippines &nbsp;·&nbsp; May – Sep 2025
                </p>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  Application Developer — Front End
                </h3>
                <p className="text-sm text-zinc-400 mt-1.5">
                  All 6 selection stages cleared entirely in English
                </p>
              </div>
              <div className="flex-shrink-0 text-center border border-zinc-600 rounded-xl px-5 py-3">
                <span className="block text-3xl font-black text-white leading-none">6/6</span>
                <span className="block text-[10px] font-semibold tracking-widest text-zinc-400 uppercase mt-1">
                  Stages
                </span>
              </div>
            </div>

            {/* ステージリスト */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {IBM_STAGES.map((s, i) => (
                <div
                  key={s.step}
                  className={`flex items-center gap-3 rounded-lg px-4 py-2.5 ${
                    i === IBM_STAGES.length - 1
                      ? "sm:col-span-2 bg-zinc-800 border border-zinc-600"
                      : "bg-zinc-800/50"
                  }`}
                >
                  <span className="text-[10px] font-bold text-zinc-600 tabular-nums">{s.step}</span>
                  <span className="text-sm text-zinc-300">{s.label}</span>
                  <span className="ml-auto text-zinc-400 text-sm">✓</span>
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
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="group rounded-2xl border border-zinc-700 bg-zinc-900 overflow-hidden hover:border-zinc-500 transition-colors duration-300"
        >
          <div className="p-6 sm:p-8 flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-xs font-semibold tracking-widest text-zinc-400 uppercase mb-1">
                The Odin Project &nbsp;·&nbsp; theodinproject.com ↗
              </p>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Full Curriculum — Completed
              </h3>
              <p className="text-sm text-zinc-400 mt-1.5">
                JavaScript · React · Node.js · Databases · Full Stack path
              </p>
            </div>
            <div className="flex-shrink-0 text-center border border-zinc-600 rounded-xl px-5 py-3 group-hover:border-zinc-500 transition-colors">
              <span className="block text-3xl font-black text-white leading-none">100%</span>
              <span className="block text-[10px] font-semibold tracking-widest text-zinc-400 uppercase mt-1">
                Complete
              </span>
            </div>
          </div>
        </motion.a>
      </div>
    </section>
  );
}
