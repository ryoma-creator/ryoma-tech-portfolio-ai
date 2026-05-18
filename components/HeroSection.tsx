"use client";

import Image from "next/image";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { VisitorCounter } from "@/components/VisitorCounter";
import { ArrowRight, Download } from "lucide-react";
import { useCallback, useRef } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

// Base offset 0.55s — stairs finish clearing at ~0.85s, animations start just before
const BASE = 0.55;
function fu(delay: number) {
  return {
    initial: { opacity: 0, y: 24, filter: "blur(6px)" },
    animate: { opacity: 1, y: 0, filter: "blur(0px)" },
    transition: { duration: 0.8, delay: BASE + delay, ease: "easeOut" as const },
  };
}

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const { t } = useLanguage();

  const springCfg = { stiffness: 40, damping: 22 };
  const ringX  = useSpring(useTransform(mouseX, [-1, 1], [-18, 18]), springCfg);
  const ringY  = useSpring(useTransform(mouseY, [-1, 1], [-12, 12]), springCfg);
  const imgX   = useSpring(useTransform(mouseX, [-1, 1], [ 12, -12]), springCfg);
  const imgY   = useSpring(useTransform(mouseY, [-1, 1], [  8,  -8]), springCfg);
  const glowX  = useSpring(useTransform(mouseX, [-1, 1], [-24, 24]), { stiffness: 25, damping: 14 });
  const glowY  = useSpring(useTransform(mouseY, [-1, 1], [-16, 16]), { stiffness: 25, damping: 14 });

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      const r = sectionRef.current?.getBoundingClientRect();
      if (!r) return;
      mouseX.set(((e.clientX - r.left) / r.width) * 2 - 1);
      mouseY.set(((e.clientY - r.top) / r.height) * 2 - 1);
    },
    [mouseX, mouseY]
  );

  const handleMouseLeave = useCallback(() => {
    mouseX.set(0);
    mouseY.set(0);
  }, [mouseX, mouseY]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden"
      style={{
        background: "radial-gradient(circle at 70% 10%, rgba(217,164,65,0.12), transparent 32%), radial-gradient(circle at 20% 60%, rgba(255,255,255,0.03), transparent 28%), #050505",
        paddingTop: "clamp(100px, 14vw, 160px)",
        paddingBottom: "clamp(60px, 8vw, 100px)",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Moving dust particles */}
      <div aria-hidden className="hero-dust absolute inset-0 pointer-events-none" style={{ zIndex: 2 }} />

      {/* Static ambient glow top-right — z-2 above Spline */}
      <div
        aria-hidden
        className="absolute top-0 right-0 w-[600px] h-[600px] pointer-events-none"
        style={{ zIndex: 2, background: "radial-gradient(circle at 80% 20%, rgba(217,164,65,0.12), transparent 55%)" }}
      />

      <div className="max-w-[1180px] mx-auto px-4 sm:px-6 flex flex-col lg:flex-row items-center gap-10 lg:gap-0 relative z-10">

        {/* ── Left ── */}
        <div className="flex-1 flex flex-col gap-7">

          <motion.div {...fu(0)} className="flex items-center gap-3 flex-wrap">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#d9a441] animate-pulse" />
              <VisitorCounter />
            </div>
            <span className="label">AI-Native Frontend Engineer</span>
          </motion.div>

          <motion.h1
            {...fu(0.12)}
            className="heading-serif"
            style={{ fontSize: "clamp(52px, 7vw, 88px)" }}
          >
            I build fast,<br />
            cinematic &<br />
            <em style={{ color: "var(--gold-soft)", fontStyle: "italic" }}>AI-driven</em>{" "}
            products.
          </motion.h1>

          <motion.p
            {...fu(0.24)}
            style={{ color: "var(--muted)", lineHeight: 1.65, maxWidth: "440px" }}
            className="text-base whitespace-pre-line"
          >
            {t.heroBody}
          </motion.p>

          <motion.div {...fu(0.36)} className="flex flex-wrap gap-3">
            <a href="#projects" className="btn-gold inline-flex items-center gap-2">
              {t.viewWork} <ArrowRight size={15} strokeWidth={2.2} />
            </a>
            <a
              href="/resume.ryoma.taguchi.pdf"
              download
              className="btn-ghost inline-flex items-center gap-2"
            >
              {t.downloadCv} <Download size={14} strokeWidth={2} />
            </a>
          </motion.div>

          <motion.div {...fu(0.48)} className="flex items-center gap-5 pt-2">
            {[
              { href: "https://github.com/ryoma-creator", label: "GitHub", svg: <GHIcon /> },
              { href: "https://www.linkedin.com/in/ryoma-taguchi-b32024283", label: "LinkedIn", svg: <LIIcon /> },
              { href: "mailto:ryoma.t.engineer@gmail.com", label: "Email", svg: <MailIcon /> },
            ].map(({ href, label, svg }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-[#a6a09a] hover:text-[#f1c56b] transition-colors duration-200"
              >
                {svg}
              </a>
            ))}
          </motion.div>

          <motion.div
            {...fu(0.6)}
            className="inline-flex items-center gap-3 w-fit"
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid var(--border-gold)",
              borderRadius: "12px",
              padding: "10px 16px",
              boxShadow: "0 0 24px rgba(217,164,65,0.08)",
            }}
          >
            <span className="text-[#d9a441] font-bold text-sm tracking-widest">IBM</span>
            <div>
              <p className="text-[#f5f1e8] text-xs font-semibold leading-none">Technical Validation</p>
              <p className="text-[#a6a09a] text-[10px] mt-0.5">All 6 Stages Cleared · Full English</p>
            </div>
            <CheckCircle />
          </motion.div>
        </div>

        {/* ── Right: Living Hero ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.4, delay: 0.7 }}
          className="relative flex-shrink-0 flex items-center justify-center"
          style={{ width: "clamp(300px, 40vw, 480px)", height: "clamp(380px, 50vw, 580px)" }}
        >
          {/* Pulsing gold glow — breathes slowly */}
          <motion.div
            aria-hidden
            className="absolute pointer-events-none"
            style={{
              width: "360px",
              height: "360px",
              top: "8%",
              right: "-4%",
              background: "radial-gradient(circle, rgba(217,164,65,0.3), transparent 70%)",
              filter: "blur(72px)",
              x: glowX,
              y: glowY,
            }}
            animate={{ opacity: [0.45, 0.9, 0.45], scale: [1, 1.12, 1] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Slow rotating ring with gold arc */}
          <motion.div
            aria-hidden
            className="absolute pointer-events-none"
            style={{
              width: "clamp(310px, 42vw, 500px)",
              height: "clamp(310px, 42vw, 500px)",
              borderRadius: "999px",
              border: "1px solid rgba(255,255,255,0.05)",
              x: ringX,
              y: ringY,
            }}
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          >
            {/* Partial gold arc */}
            <div
              style={{
                position: "absolute",
                inset: "-1px",
                borderRadius: "inherit",
                borderTop: "1.5px solid rgba(217,164,65,0.55)",
                borderRight: "1.5px solid rgba(217,164,65,0.08)",
                borderBottom: "1.5px solid transparent",
                borderLeft: "1.5px solid transparent",
              }}
            />
          </motion.div>

          {/* Inner accent ring (counter-rotate, slower) */}
          <motion.div
            aria-hidden
            className="absolute pointer-events-none"
            style={{
              width: "clamp(260px, 36vw, 430px)",
              height: "clamp(260px, 36vw, 430px)",
              borderRadius: "999px",
              border: "1px solid rgba(217,164,65,0.07)",
              x: ringX,
              y: ringY,
            }}
            animate={{ rotate: -360 }}
            transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
          />

          {/* Portrait — mouse parallax wrapper */}
          <motion.div
            className="relative"
            style={{
              width: "clamp(220px, 30vw, 360px)",
              height: "clamp(280px, 40vw, 470px)",
              x: imgX,
            }}
          >
            {/* vertical parallax + float — nested to avoid y conflict */}
            <motion.div
              style={{ y: imgY }}
              className="relative w-full h-full"
            >
              <motion.div
                className="relative w-full h-full"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              >
                {/* Light sweep overlay */}
                <div className="portrait-sweep absolute inset-0 z-10 rounded-2xl overflow-hidden pointer-events-none" />

                {/* White-bg photo: multiply blend removes white background */}
                <Image
                  src="/hero-photo-new.png"
                  alt="Ryoma"
                  fill
                  priority
                  className="object-cover object-top"
                  style={{
                    borderRadius: "20px",
                    mixBlendMode: "multiply",
                    filter: "contrast(1.08) brightness(1.05)",
                  }}
                />

                {/* Edge vignette — smooth fade into dark bg */}
                <div
                  aria-hidden
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: "radial-gradient(ellipse at 50% 40%, transparent 42%, rgba(5,5,5,0.55) 68%, #050505 90%)",
                    borderRadius: "20px",
                  }}
                />
                {/* Bottom fade */}
                <div
                  aria-hidden
                  className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none"
                  style={{
                    background: "linear-gradient(to top, #050505 15%, transparent)",
                    borderRadius: "0 0 20px 20px",
                  }}
                />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Signature + location */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.8 }}
            className="absolute flex flex-col items-end gap-1 pointer-events-none z-20"
            style={{ bottom: "2%", right: "2%" }}
          >
            <div className="relative" style={{ width: "210px", height: "80px" }}>
              <Image
                src="/ryoma.sign.png"
                alt="Ryoma signature"
                fill
                className="object-contain object-right"
                style={{ opacity: 0.88, filter: "brightness(1.2) sepia(0.25) saturate(1.6)" }}
              />
            </div>
            <p className="text-[#a6a09a] text-[10px] tracking-[0.25em] uppercase">Tokyo, Japan</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

/* ── Inline SVG icons ── */
function GHIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/>
    </svg>
  );
}
function LIIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 23.2 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );
}
function MailIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="2" y="4" width="20" height="16" rx="2"/>
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
    </svg>
  );
}
function CheckCircle() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#d9a441" strokeWidth="2">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
      <polyline points="22 4 12 14.01 9 11.01"/>
    </svg>
  );
}
