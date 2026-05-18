"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { AnimatedWords, FadeUp } from "@/components/AnimatedWords";

const CATEGORIES: { key: string; label: string }[] = [
  { key: "in-development", label: "In Development" },
  { key: "lp-demo",        label: "LP & Client Work" },
  { key: "ai-assisted",    label: "AI-Assisted" },
  { key: "hand-coded",     label: "Hand-Coded" },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-12 sm:py-16 lg:py-20">
      {/* Header */}
      <div className="mb-14">
        <FadeUp><span className="label block mb-3">Real apps. Shipped. Live.</span></FadeUp>
        <AnimatedWords
          as="h2"
          text="Projects"
          className="heading-serif"
          style={{ fontSize: "clamp(36px, 5vw, 62px)" }}
        />
      </div>

      {CATEGORIES.map(({ key, label }) => {
        const filtered = projects.filter((p) => p.category === key);
        if (!filtered.length) return null;
        const isActive = key === "in-development";

        return (
          <div key={key} className="mb-12">
            <motion.div
              className="flex items-center gap-3 mb-6"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              {isActive ? (
                <span className="inline-flex items-center gap-1.5 label">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#d9a441] animate-pulse" />
                  {label}
                </span>
              ) : (
                <span className="label">{label}</span>
              )}
              <div className="flex-1 h-px" style={{ background: "rgba(255,255,255,0.07)" }} />
              <span className="text-[11px] text-[#a6a09a]">{filtered.length} projects</span>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {filtered.map((project, i) => (
                <ProjectCard key={project.id} project={project} index={i} />
              ))}
            </div>
          </div>
        );
      })}
    </section>
  );
}
