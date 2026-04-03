"use client";

import { motion } from "framer-motion";

// ヒーローセクション（名前・CTA）
export function HeroSection() {
  return (
    <section className="relative flex flex-col items-center text-center md:items-start md:text-left pt-20 pb-12 sm:pb-16 px-4 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-1/3 w-[500px] h-[300px] bg-zinc-700/20 rounded-full blur-3xl" />
      </div>

      <div className="flex flex-col items-center md:items-start gap-5 max-w-2xl">
        <motion.span
          className="inline-flex items-center gap-2 bg-zinc-800/80 border border-zinc-700/50 text-zinc-300 text-xs px-4 py-1.5 rounded-full backdrop-blur-sm"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          Available for projects · Remote friendly
        </motion.span>

        <motion.h1
          className="text-5xl sm:text-6xl font-bold tracking-tight text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Hi, I&apos;m Ryoma
        </motion.h1>

        <motion.p
          className="text-xl text-zinc-300 font-medium"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          AI-Driven Developer
        </motion.p>

        <motion.p
          className="text-base text-zinc-400 max-w-sm mx-auto md:mx-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          I build MVPs fast with AI-driven dev.
        </motion.p>

        <motion.div
          className="flex flex-wrap justify-center md:justify-start gap-3 pt-2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <a
            href="#chat"
            className="inline-flex items-center gap-2 bg-white text-zinc-900 text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-zinc-100 transition-colors"
          >
            Ask AI
          </a>
          <a
            href="mailto:ryoma.t.engineer@gmail.com"
            className="inline-flex items-center gap-2 bg-zinc-800 text-zinc-300 text-sm font-semibold px-5 py-2.5 rounded-full border border-zinc-700 hover:bg-zinc-700 transition-colors"
          >
            Contact Me
          </a>
          <a
            href="https://www.linkedin.com/in/ryoma-taguchi-b32024283"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-zinc-800 text-zinc-300 text-sm font-semibold px-5 py-2.5 rounded-full border border-zinc-700 hover:bg-zinc-700 transition-colors"
          >
            LinkedIn
          </a>
        </motion.div>
      </div>
    </section>
  );
}
