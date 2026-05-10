"use client";

import { motion } from "framer-motion";

export function HireMeV2() {
  return (
    <section id="contact" className="py-20 px-4">
      <motion.div
        className="max-w-5xl mx-auto rounded-2xl border border-zinc-700/50 bg-gradient-to-br from-zinc-900 via-zinc-900 to-blue-950/30 p-10 flex flex-col md:flex-row items-center justify-between gap-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center text-2xl flex-shrink-0">
            ✉
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white mb-1">Have a project in mind?</h3>
            <p className="text-zinc-400 text-sm">
              I'm open to freelance work and full-time opportunities.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          <a
            href="mailto:ryoma.t.engineer@gmail.com"
            className="inline-flex items-center gap-2 bg-blue-600 text-white text-sm font-semibold px-6 py-3 rounded-full hover:bg-blue-500 transition-colors"
          >
            Hire Me →
          </a>
          <a
            href="mailto:ryoma.t.engineer@gmail.com"
            className="inline-flex items-center gap-2 bg-zinc-800 text-zinc-300 text-sm font-semibold px-6 py-3 rounded-full border border-zinc-700 hover:bg-zinc-700 transition-colors"
          >
            Send Message ✉
          </a>
        </div>
      </motion.div>
    </section>
  );
}
