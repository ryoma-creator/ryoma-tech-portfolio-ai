"use client";

import { motion } from "framer-motion";

export function FooterV2() {
  return (
    <footer className="border-t border-zinc-800 py-12 px-4">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* CV Download */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <p className="text-xs font-semibold text-zinc-500 uppercase tracking-widest mb-4">Resume</p>
          <p className="text-zinc-400 text-sm mb-4">Download my resume in English or Japanese.</p>
          <div className="flex flex-col gap-2">
            <a
              href="/resume_ryoma_en.pdf"
              download
              className="inline-flex items-center justify-between gap-2 border border-zinc-700 text-zinc-300 text-sm px-4 py-2.5 rounded-lg hover:border-zinc-500 hover:text-white transition-colors"
            >
              <span>Resume (EN)</span>
              <span>↓</span>
            </a>
            <a
              href="/resume_ryoma_ja.pdf"
              download
              className="inline-flex items-center justify-between gap-2 border border-zinc-700 text-zinc-300 text-sm px-4 py-2.5 rounded-lg hover:border-zinc-500 hover:text-white transition-colors"
            >
              <span>履歴書 (JP)</span>
              <span>↓</span>
            </a>
          </div>
        </motion.div>

        {/* About */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <p className="text-xs font-semibold text-zinc-500 uppercase tracking-widest mb-4">About Me</p>
          <p className="text-zinc-300 text-sm font-medium mb-4 leading-relaxed">
            I'm a developer who loves turning ideas into products people actually use.
          </p>
          <ul className="flex flex-col gap-2 text-sm text-zinc-400">
            <li>📍 Based in the Philippines (GMT+8)</li>
            <li>🌐 Bilingual: Japanese (Native) / English (Fluent)</li>
            <li>
              📋 Background: Law School → Accenture PH →{" "}
              <span className="text-blue-400">IBM Interview (6/6 rounds passed)</span>
            </li>
            <li>⚡ Always learning. Always building.</li>
          </ul>
        </motion.div>
      </div>

      <div className="max-w-5xl mx-auto mt-10 pt-6 border-t border-zinc-800/50 flex items-center justify-between text-xs text-zinc-600">
        <span>© 2024 Ryoma. All rights reserved.</span>
        <a href="#" className="hover:text-zinc-400 transition-colors">↑ Back to top</a>
      </div>
    </footer>
  );
}
