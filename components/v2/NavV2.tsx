"use client";

import { motion } from "framer-motion";

export function NavV2() {
  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800/50"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <span className="text-white font-bold text-lg">
        Ryoma<span className="text-blue-500">.</span>
      </span>

      <div className="hidden md:flex items-center gap-8 text-sm text-zinc-400">
        <a href="#works" className="hover:text-white transition-colors">Works</a>
        <a href="#stack" className="hover:text-white transition-colors">Stack</a>
        <a href="#about" className="hover:text-white transition-colors">About</a>
        <a href="#contact" className="hover:text-white transition-colors">Contact</a>
      </div>

      <div className="flex items-center gap-3">
        <a
          href="/resume_ryoma_en.pdf"
          download
          className="hidden sm:inline-flex items-center gap-1.5 text-xs text-zinc-300 border border-zinc-700 px-3 py-1.5 rounded-full hover:border-zinc-500 hover:text-white transition-colors"
        >
          Download CV ↓
        </a>
        <a
          href="#contact"
          className="inline-flex items-center gap-1.5 text-xs font-semibold bg-blue-600 text-white px-4 py-1.5 rounded-full hover:bg-blue-500 transition-colors"
        >
          Get in touch →
        </a>
      </div>
    </motion.nav>
  );
}
