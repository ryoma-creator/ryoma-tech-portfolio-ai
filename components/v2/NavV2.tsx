"use client";

import { motion } from "framer-motion";

export function NavV2() {
  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 sm:px-12 py-5"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <span className="text-white font-bold text-lg">
        Ryoma<span className="text-blue-500">·</span>
      </span>

      <div className="hidden md:flex items-center gap-8 text-sm text-zinc-400">
        {["Works", "Stack", "About", "Contact"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="hover:text-white transition-colors"
          >
            {item}
          </a>
        ))}
      </div>

      <a
        href="#contact"
        className="inline-flex items-center gap-2 bg-zinc-800/80 backdrop-blur-sm border border-zinc-700/50 text-zinc-200 text-sm font-medium px-5 py-2 rounded-full hover:bg-zinc-700 transition-colors"
      >
        Let's Work Together →
      </a>
    </motion.nav>
  );
}
