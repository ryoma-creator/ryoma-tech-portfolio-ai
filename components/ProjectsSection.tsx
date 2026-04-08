"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { useLanguage } from "@/contexts/LanguageContext";

// プロジェクト一覧セクション
export function ProjectsSection() {
  const { t } = useLanguage();
  const aiProjects = projects.filter((p) => p.category === "ai-assisted");
  const handCodedProjects = projects.filter((p) => p.category === "hand-coded");

  return (
    <section id="projects" className="py-20 px-4">
      {/* セクションヘッダー */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">{t.projects}</h2>
        <p className="text-zinc-500 text-sm">{t.projectsSubtitle}</p>
      </motion.div>

      {/* AIアシスト制作 */}
      {aiProjects.length > 0 && (
        <div className="mb-10">
          <motion.div
            className="flex items-center gap-3 mb-5"
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <span className="text-xs font-semibold text-zinc-400 uppercase tracking-widest">
              {t.aiAssisted}
            </span>
            <div className="flex-1 h-px bg-zinc-800" />
            <span className="text-xs text-zinc-600">{t.projectsCount.replace("{n}", String(aiProjects.length))}</span>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {aiProjects.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </div>
        </div>
      )}

      {/* 手動コーディング */}
      {handCodedProjects.length > 0 && (
        <div>
          <motion.div
            className="flex items-center gap-3 mb-5"
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <span className="text-xs font-semibold text-zinc-400 uppercase tracking-widest">
              {t.handCoded}
            </span>
            <div className="flex-1 h-px bg-zinc-800" />
            <span className="text-xs text-zinc-600">{t.projectsCount.replace("{n}", String(handCodedProjects.length))}</span>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {handCodedProjects.map((project, i) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={i + aiProjects.length}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
