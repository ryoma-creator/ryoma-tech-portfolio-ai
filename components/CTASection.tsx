"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { AnimatedLines, FadeUp } from "@/components/AnimatedWords";

export function CTASection() {
  return (
    <section className="relative z-10 px-4 sm:px-6 py-16 sm:py-24 lg:py-32">
      <div className="max-w-[1180px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="card-glass text-center"
          style={{
            padding: "clamp(40px, 7vw, 80px) clamp(20px, 5vw, 60px)",
            boxShadow: "0 0 60px rgba(217,164,65,0.08), 0 20px 80px rgba(0,0,0,0.4)",
          }}
        >
          {/* Gold glow blob */}
          <div
            aria-hidden
            className="absolute inset-0 pointer-events-none rounded-3xl overflow-hidden"
            style={{
              background: "radial-gradient(circle at 50% 0%, rgba(217,164,65,0.1), transparent 60%)",
            }}
          />

          <FadeUp><span className="label block mb-6">Ready to Work Together?</span></FadeUp>

          <AnimatedLines
            as="h2"
            lines={["Let's build something", "amazing together."]}
            className="heading-serif mb-6"
            style={{ fontSize: "clamp(40px, 5vw, 68px)" }}
          />

          <FadeUp delay={0.2}>
            <p className="text-[#a6a09a] text-sm sm:text-base mb-6 sm:mb-10 max-w-xs sm:max-w-md mx-auto" style={{ lineHeight: 1.65 }}>
              Have a project in mind? I&apos;d love to hear about it.
              Let&apos;s talk about how I can help.
            </p>
          </FadeUp>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="mailto:ryoma.t.engineer@gmail.com"
              className="btn-gold inline-flex items-center gap-2"
            >
              <Mail size={15} strokeWidth={2.2} />
              Get in Touch
            </a>
            <a
              href="#projects"
              className="btn-ghost inline-flex items-center gap-2"
            >
              View Projects <ArrowRight size={14} strokeWidth={2} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
