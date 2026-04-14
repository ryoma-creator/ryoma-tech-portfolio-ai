"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { ProjectCardMedia } from "@/components/ProjectCardMedia";
import type { Project } from "@/types";
import { useLanguage } from "@/contexts/LanguageContext";

interface Props {
  project: Project;
  index: number;
}

// プロジェクトカード（メディアは ProjectCardMedia）
export function ProjectCard({ project, index }: Props) {
  const { t, locale } = useLanguage();
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 transition-all duration-300 hover:border-zinc-600"
    >
      <ProjectCardMedia project={project} />

      <div className="p-5">
        <div className="mb-2 flex items-center justify-between gap-2">
          <h3 className="text-base font-semibold text-zinc-100">{project.title}</h3>
          {project.builtAt && (
            <span className="shrink-0 text-xs text-zinc-500">
              {new Date(project.builtAt + "-01").toLocaleDateString("en-US", { year: "numeric", month: "short" })}
            </span>
          )}
        </div>
        <p className="mb-3 text-sm leading-relaxed text-zinc-400">
          {locale === 'ja' && project.descriptionJa ? project.descriptionJa : project.description}
        </p>

        <div className="mb-4 flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="border-0 bg-zinc-800 text-xs text-zinc-400 hover:bg-zinc-700"
            >
              {tag}
            </Badge>
          ))}
        </div>

        {(project.liveUrl ?? project.githubUrl) && (
          <div className="flex gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-zinc-700 px-3 py-1.5 text-xs text-zinc-200 transition-colors hover:bg-zinc-600"
              >
                {t.live}
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-zinc-700 px-3 py-1.5 text-xs text-zinc-400 transition-colors hover:border-zinc-500 hover:text-zinc-200"
              >
                GitHub
              </a>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
}
