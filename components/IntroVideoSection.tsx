"use client";

import { motion } from "framer-motion";

const VIDEO_SRC =
  "https://res.cloudinary.com/da3abynbu/video/upload/q_auto/f_auto/v1775221576/portfolio-video_r2vz1d.mov";

// サイト紹介動画（ヒーロー直下・左動画 / 右テキスト）
export function IntroVideoSection() {
  return (
    <section
      aria-labelledby="about-site-heading"
      className="py-12 sm:py-16 border-t border-zinc-800/60"
    >
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-12 lg:items-start">
        <motion.div
          className="w-full lg:w-[min(100%,420px)] lg:flex-shrink-0 flex justify-center lg:justify-start"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <video
            src={VIDEO_SRC}
            playsInline
            controls
            className="w-full max-w-md rounded-2xl border border-zinc-800 shadow-2xl bg-black aspect-[9/16] object-cover"
          />
        </motion.div>

        <motion.div
          className="flex-1 flex flex-col justify-center gap-5 text-left min-w-0"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.08 }}
        >
          <h2
            id="about-site-heading"
            className="text-2xl sm:text-3xl font-bold text-white tracking-tight"
          >
            About This Site
          </h2>
          <div className="space-y-4 text-zinc-300 text-base sm:text-lg leading-relaxed">
            <p>Have questions about me?</p>
            <p>Just ask the AI chat below.</p>
            <p>
              My background, skills, hobbies — anything.
              <br />
              It knows me well.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
