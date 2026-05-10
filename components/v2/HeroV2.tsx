"use client";

// Reference: /public/ryoma.lp.hero.reference.png
// Animation sources: my-portfolio-website (GSAP mask reveal, parallax)
//                    enterprise-dx-platform-lp (FadeUp, scroll triggers)
// Three.js: interactive particle field (mouse repulsion + wave)

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { FiGithub, FiLinkedin, FiMail, FiTwitter } from "react-icons/fi";
import dynamic from "next/dynamic";

// SSR無効（Three.jsはブラウザのみ）
const ParticleField = dynamic(
  () => import("./ParticleField").then((m) => m.ParticleField),
  { ssr: false }
);

// Cloudinaryにアップ後にこのURLを差し替える
const PHOTO_URL = "/hero-photo.png";

const SOCIALS = [
  { icon: FiGithub,   href: "https://github.com/ryoma-creator",                       label: "GitHub"   },
  { icon: FiLinkedin, href: "https://www.linkedin.com/in/ryoma-taguchi-b32024283",    label: "LinkedIn" },
  { icon: FiTwitter,  href: "https://x.com",                                           label: "X"        },
  { icon: FiMail,     href: "mailto:ryoma.t.engineer@gmail.com",                       label: "Email"    },
];

export function HeroV2() {
  const labelRef    = useRef<HTMLParagraphElement>(null);
  const line1Ref    = useRef<HTMLDivElement>(null);
  const line2Ref    = useRef<HTMLDivElement>(null);
  const subRef      = useRef<HTMLParagraphElement>(null);
  const ctaRef      = useRef<HTMLDivElement>(null);
  const socialRef   = useRef<HTMLDivElement>(null);
  const photoRef    = useRef<HTMLDivElement>(null);

  // GSAP staggered entrance — mask reveal (MaskEntryAnimation pattern)
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set([labelRef.current, line1Ref.current, line2Ref.current,
                subRef.current, ctaRef.current, socialRef.current], {
        opacity: 0,
      });
      gsap.set(photoRef.current, { opacity: 0, x: 30 });

      const tl = gsap.timeline({ delay: 0.2, defaults: { ease: "power3.out" } });

      tl
        // label — clip-path wipe from left (MaskEntryAnimation)
        .fromTo(labelRef.current,
          { clipPath: "inset(0 100% 0 0)", opacity: 1 },
          { clipPath: "inset(0 0% 0 0)", duration: 0.7 }
        )
        // headline line 1
        .to(line1Ref.current, { opacity: 1, y: 0, duration: 0.65 }, "-=0.3")
        .fromTo(line1Ref.current,
          { y: 28 }, { y: 0, duration: 0.65 }, "<"
        )
        // headline line 2
        .to(line2Ref.current, { opacity: 1, duration: 0.6 }, "-=0.4")
        .fromTo(line2Ref.current,
          { y: 28 }, { y: 0, duration: 0.6 }, "<"
        )
        // sub
        .to(subRef.current,  { opacity: 1, y: 0, duration: 0.5 }, "-=0.2")
        .fromTo(subRef.current, { y: 16 }, { y: 0, duration: 0.5 }, "<")
        // CTA
        .to(ctaRef.current,  { opacity: 1, y: 0, duration: 0.5 }, "-=0.2")
        .fromTo(ctaRef.current, { y: 12 }, { y: 0, duration: 0.5 }, "<")
        // social
        .to(socialRef.current, { opacity: 1, duration: 0.4 }, "-=0.1")
        // photo
        .to(photoRef.current,  { opacity: 1, x: 0, duration: 0.9, ease: "power2.out" }, 0.15);
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#070b14]">
      {/* ── Three.js particle field ── */}
      <ParticleField />

      {/* ── ambient glow ── */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-[65%] h-full bg-gradient-to-l from-blue-950/45 via-blue-950/10 to-transparent" />
        <div className="absolute bottom-0 left-0 w-[420px] h-[280px] bg-blue-900/12 blur-3xl rounded-full" />
        <div className="absolute top-1/3 right-1/3 w-[180px] h-[180px] bg-indigo-800/15 blur-3xl rounded-full" />
      </div>

      {/* ── Photo — right half, full bleed ── */}
      <div ref={photoRef} className="absolute inset-y-0 right-0 w-[58%]">
        {PHOTO_URL ? (
          /* mix-blend-mode: multiply で白背景を消してダーク背景に溶け込ませる */
          <div className="h-full w-full bg-[#070b14]">
            <img
              src={PHOTO_URL}
              alt="Ryoma"
              className="h-full w-full object-contain object-[center_top]"
              style={{ mixBlendMode: "multiply", filter: "contrast(1.1) brightness(0.95)" }}
            />
          </div>
        ) : (
          /* placeholder — remove once photo is on Cloudinary */
          <div className="h-full w-full flex items-center justify-center">
            <div className="relative w-64 h-80">
              {/* silhouette glow */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-900/30 via-zinc-800/20 to-transparent blur-2xl scale-110" />
              <div className="relative h-full w-full rounded-3xl border border-zinc-700/30 bg-gradient-to-br from-zinc-800/40 to-zinc-900/20 backdrop-blur-sm flex items-end justify-center pb-6">
                <span className="text-zinc-600 text-xs tracking-widest uppercase">Photo coming</span>
              </div>
            </div>
          </div>
        )}

        {/* left-edge fade */}
        <div className="absolute inset-y-0 left-0 w-[45%] bg-gradient-to-r from-[#070b14] to-transparent" />
        {/* bottom fade */}
        <div className="absolute inset-x-0 bottom-0 h-52 bg-gradient-to-t from-[#070b14] to-transparent" />

      </div>

      {/* IBM badge — outside photoRef so always visible */}
      <motion.div
        className="absolute bottom-14 right-8 z-20 flex items-center gap-3 rounded-2xl border border-zinc-700/50 bg-zinc-950/90 backdrop-blur-lg px-4 py-3 shadow-2xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 1.0, ease: "easeOut" }}
        whileHover={{ scale: 1.04, transition: { duration: 0.2 } }}
      >
        <div className="flex-shrink-0 rounded-md px-2.5 py-1.5 bg-[#1F70C1]">
          <span className="text-white font-black text-sm tracking-[0.15em]">IBM</span>
        </div>
        <div className="leading-snug">
          <p className="text-[11px] text-zinc-400">IBM Technical Validation</p>
          <p className="text-white text-sm font-semibold">All 6 Stages Cleared</p>
          <p className="text-[11px] text-blue-400">✓ Full English Interview</p>
        </div>
      </motion.div>

      {/* ── Left content ── */}
      <div className="relative z-10 flex flex-col justify-center min-h-screen px-8 sm:px-14 lg:px-20 max-w-[52%]">

        <p
          ref={labelRef}
          className="text-xs font-semibold text-blue-400 uppercase tracking-[0.3em] mb-6"
          style={{ opacity: 0 }}
        >
          Software Engineer
        </p>

        <div className="mb-6 overflow-hidden">
          <div ref={line1Ref} style={{ opacity: 0 }}>
            <h1 className="text-6xl sm:text-7xl font-black tracking-tight text-white leading-[1.05]">
              Build Fast.
            </h1>
          </div>
          <div ref={line2Ref} style={{ opacity: 0 }}>
            <h1 className="text-6xl sm:text-7xl font-black tracking-tight text-white leading-[1.05]">
              Ship <span className="text-blue-500">Real.</span>
            </h1>
          </div>
        </div>

        <p
          ref={subRef}
          className="text-sm text-zinc-400 mb-8 leading-relaxed"
          style={{ opacity: 0 }}
        >
          React / Next.js / TypeScript / AI&nbsp;&nbsp;·&nbsp;&nbsp;JP-EN Bilingual
        </p>

        <div ref={ctaRef} className="flex flex-wrap gap-3 mb-10" style={{ opacity: 0 }}>
          <a
            href="#works"
            className="inline-flex items-center gap-2 bg-blue-600 text-white text-sm font-semibold px-6 py-3 rounded-full hover:bg-blue-500 transition-colors"
          >
            View My Works →
          </a>
          <a
            href="/resume_ryoma_en.pdf"
            download
            className="inline-flex items-center gap-2 border border-zinc-600 text-zinc-300 text-sm font-semibold px-6 py-3 rounded-full hover:border-zinc-400 hover:text-white transition-colors"
          >
            Download CV ↓
          </a>
        </div>

        <div ref={socialRef} className="flex items-center gap-3" style={{ opacity: 0 }}>
          {SOCIALS.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              title={label}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="w-9 h-9 flex items-center justify-center rounded-full border border-zinc-700 text-zinc-400 hover:border-blue-500 hover:text-blue-400 transition-all duration-300"
            >
              <Icon size={15} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
