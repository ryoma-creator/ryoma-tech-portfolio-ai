"use client";

import { motion } from "framer-motion";

const VIDEO_SRC =
  "https://res.cloudinary.com/da3abynbu/video/upload/q_auto/f_auto/v1775221576/portfolio-video_r2vz1d.mov";

// サイト紹介動画（グリッドで左右均等・デスクトップでアンバランス解消）
export function IntroVideoSection() {
  return (
    <section
      aria-labelledby="about-site-heading"
      className="w-full py-12 sm:py-16 border-t border-zinc-800/60"
    >
      <div className="grid w-full grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-x-10 xl:gap-x-12">
        {/* 動画カラム：セル内で中央寄せ（左右に余白が偏らない） */}
        <motion.div
          className="flex min-w-0 justify-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <video
            src={VIDEO_SRC}
            playsInline
            controls
            className="mx-auto h-auto w-full max-w-[min(100%,480px)] max-h-[min(480px,78svh)] rounded-2xl border border-zinc-800 bg-black object-contain shadow-2xl lg:w-auto lg:max-w-full lg:max-h-[min(440px,52vh)]"
          />
        </motion.div>

        {/* テキストカラム：モバイルは中央、lg+ は左（グリッド右列として自然に埋まる） */}
        <motion.div
          className="flex min-w-0 flex-col justify-center gap-5 text-center lg:min-h-[min(440px,52vh)] lg:text-left"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.08 }}
        >
          <h2
            id="about-site-heading"
            className="text-2xl font-bold tracking-tight text-white sm:text-3xl"
          >
            About This Site
          </h2>
          <div className="space-y-4 text-base leading-relaxed text-zinc-300 sm:text-lg">
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
