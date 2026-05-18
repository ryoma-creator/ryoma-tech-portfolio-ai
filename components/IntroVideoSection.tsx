"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { AnimatedLines, FadeUp } from "@/components/AnimatedWords";

const VIDEO_SRC =
  "https://res.cloudinary.com/da3abynbu/video/upload/q_auto/f_auto/v1775221576/portfolio-video_r2vz1d.mov";

export function IntroVideoSection() {
  return (
    <section className="relative w-full py-14 sm:py-20 lg:py-28">
      {/* Subtle top separator */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", marginBottom: "3rem" }} />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 items-center">

        {/* ── Left: Video ── */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          {/* Glow behind video */}
          <div
            aria-hidden
            className="absolute -inset-4 rounded-3xl pointer-events-none"
            style={{ background: "radial-gradient(ellipse at 30% 50%, rgba(217,164,65,0.08), transparent 70%)" }}
          />

          <div
            style={{
              borderRadius: "20px",
              border: "1px solid rgba(255,255,255,0.07)",
              overflow: "hidden",
              boxShadow: "0 32px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(217,164,65,0.06)",
            }}
          >
            <video
              src={VIDEO_SRC}
              playsInline
              controls
              preload="metadata"
              className="w-full block aspect-video"
              style={{ objectFit: "cover", background: "#08080a", maxHeight: "400px" }}
            />
          </div>

          {/* Label below video */}
          <p className="label mt-4 text-center lg:text-left">Who Am I &amp; Why I Build</p>
        </motion.div>

        {/* ── Right: Text ── */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col gap-6"
        >
          <FadeUp><span className="label">About Me</span></FadeUp>

          <AnimatedLines
            as="h2"
            lines={["I solve problems", "and create value", "with code."]}
            className="heading-serif"
            style={{ fontSize: "clamp(36px, 4.5vw, 58px)", lineHeight: 1.1 }}
          />

          <FadeUp delay={0.1} style={{ color: "var(--muted)", lineHeight: 1.7, maxWidth: "420px" }} className="text-base">
            <p>
              I&apos;m a bilingual (JP/EN) frontend engineer who builds fast, deliberate products —
              from AI-assisted dashboards to cinematic landing pages. Two years of self-taught
              engineering, one IBM validation, zero shortcuts.
            </p>
          </FadeUp>

          <FadeUp delay={0.2} style={{ color: "var(--muted)", lineHeight: 1.7, maxWidth: "420px" }} className="text-base">
            <p>
              I pair modern stacks — Next.js, TypeScript, Supabase — with AI-native workflows
              to ship ideas that would normally take weeks, in days.
            </p>
          </FadeUp>

          <FadeUp delay={0.3}>
            <a
              href="#projects"
              className="btn-ghost inline-flex items-center gap-2 w-fit mt-2"
            >
              See My Work <ArrowRight size={14} strokeWidth={2} />
            </a>
          </FadeUp>
        </motion.div>
      </div>
    </section>
  );
}
