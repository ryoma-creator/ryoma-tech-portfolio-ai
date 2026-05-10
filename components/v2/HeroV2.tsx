"use client";

import { motion } from "framer-motion";

export function HeroV2() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-16 px-4 overflow-hidden">
      {/* background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 right-1/4 w-[600px] h-[400px] bg-blue-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[300px] bg-purple-600/8 rounded-full blur-3xl" />
      </div>

      <div className="w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left: text */}
        <div className="flex flex-col gap-6">
          <motion.span
            className="inline-flex w-fit items-center gap-2 bg-zinc-800/80 border border-zinc-700/50 text-zinc-300 text-xs px-4 py-1.5 rounded-full"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            AI-NATIVE ENGINEER
          </motion.span>

          <motion.h1
            className="text-5xl sm:text-6xl font-bold tracking-tight text-white leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Build Fast.<br />
            <span className="text-blue-500">Ship Real.</span>
          </motion.h1>

          <motion.p
            className="text-zinc-400 text-base leading-relaxed max-w-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            I build AI-powered web applications that solve real problems.<br />
            <span className="text-zinc-300">React / Next.js / TypeScript / AI · JP-EN Bilingual</span>
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-3"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <a
              href="#works"
              className="inline-flex items-center gap-2 bg-blue-600 text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-blue-500 transition-colors"
            >
              View My Works →
            </a>
            <a
              href="/resume_ryoma_en.pdf"
              download
              className="inline-flex items-center gap-2 bg-zinc-800 text-zinc-300 text-sm font-semibold px-5 py-2.5 rounded-full border border-zinc-700 hover:bg-zinc-700 transition-colors"
            >
              Download CV ↓
            </a>
          </motion.div>

          {/* social links */}
          <motion.div
            className="flex items-center gap-4 text-zinc-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            {[
              { label: "GitHub", href: "https://github.com/ryoma-creator" },
              { label: "LinkedIn", href: "https://www.linkedin.com/in/ryoma-taguchi-b32024283" },
              { label: "Email", href: "mailto:ryoma.t.engineer@gmail.com" },
            ].map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="text-xs hover:text-zinc-300 transition-colors"
              >
                {label}
              </a>
            ))}
          </motion.div>
        </div>

        {/* Right: photo + IBM badge */}
        <motion.div
          className="flex flex-col gap-4 items-center md:items-end"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {/* photo */}
          <div className="relative w-72 h-80 rounded-2xl overflow-hidden border border-zinc-700/50 bg-zinc-900">
            <img
              src="https://res.cloudinary.com/da3abynbu/image/upload/v1/ryoma_profile"
              alt="Ryoma"
              className="w-full h-full object-cover object-top"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = "none";
              }}
            />
            {/* fallback gradient when no photo */}
            <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 via-zinc-900 to-blue-950 flex items-center justify-center">
              <span className="text-zinc-600 text-sm">Photo</span>
            </div>
          </div>

          {/* IBM badge */}
          <div className="w-72 rounded-xl border border-zinc-700/60 bg-zinc-900/80 backdrop-blur-sm p-4 flex items-center gap-4">
            <div className="flex-shrink-0 bg-[#1F70C1] rounded px-2 py-1">
              <span className="text-white font-bold text-sm tracking-widest">IBM</span>
            </div>
            <div>
              <p className="text-xs text-zinc-400">IBM Application Developer Interview</p>
              <p className="text-white font-bold text-base">6 / 6 rounds passed</p>
              <p className="text-xs text-blue-400">✓ Full English Interview</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
