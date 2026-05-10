"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";

export function ProjectsV2() {
  const lpProjects = projects.filter((p) => p.category === "lp-demo");
  const aiProjects = projects.filter((p) => p.category === "ai-assisted");
  const handProjects = projects.filter((p) => p.category === "hand-coded");

  const sections = [
    { label: "LP & Client Work", projects: lpProjects },
    { label: "AI-Assisted", projects: aiProjects },
    { label: "Hand-Coded", projects: handProjects },
  ].filter((s) => s.projects.length > 0);

  let globalIndex = 0;

  return (
    <section id="works" className="py-20 px-4 max-w-5xl mx-auto">
      <motion.div
        className="mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-xs font-semibold text-blue-500 uppercase tracking-widest mb-2">Works</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-white">Selected Projects</h2>
      </motion.div>

      {sections.map(({ label, projects: sectionProjects }) => (
        <div key={label} className="mb-12">
          <motion.div
            className="flex items-center gap-3 mb-5"
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <span className="text-xs font-semibold text-zinc-400 uppercase tracking-widest">
              {label}
            </span>
            <div className="flex-1 h-px bg-zinc-800" />
            <span className="text-xs text-zinc-600">{sectionProjects.length} projects</span>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {sectionProjects.map((project) => {
              const card = <ProjectCard key={project.id} project={project} index={globalIndex} />;
              globalIndex++;
              return card;
            })}
          </div>
        </div>
      ))}
    </section>
  );
}
