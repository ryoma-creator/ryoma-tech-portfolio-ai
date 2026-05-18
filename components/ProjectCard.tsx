"use client";

import { motion } from "framer-motion";
import { ProjectCardMedia } from "@/components/ProjectCardMedia";
import type { Project } from "@/types";

interface Props {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="card-orbit group relative overflow-hidden"
      style={{
        background: "linear-gradient(180deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))",
        border: "1px solid rgba(255,255,255,0.07)",
        borderRadius: "20px",
        transition: "border-color 0.3s, box-shadow 0.3s",
      }}
      whileHover={{
        borderColor: "rgba(217,164,65,0.18)",
        boxShadow: "0 0 28px rgba(217,164,65,0.1), 0 8px 32px rgba(0,0,0,0.3)",
      }}
    >
      {/* Media */}
      <ProjectCardMedia project={project} />

      {/* Content */}
      <div className="p-5">
        {/* Title + date */}
        <div className="mb-2 flex items-start justify-between gap-2">
          <h3
            style={{
              color: "#f5f1e8",
              fontSize: "15px",
              fontWeight: 600,
              lineHeight: 1.3,
            }}
          >
            {project.title}
          </h3>
          {project.builtAt && (
            <span
              className="shrink-0 text-[11px] tracking-wide"
              style={{ color: "var(--muted)", marginTop: "2px" }}
            >
              {new Date(project.builtAt + "-01").toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
              })}
            </span>
          )}
        </div>

        {/* Description */}
        <p
          className="mb-4 text-sm leading-relaxed"
          style={{ color: "#8a847e", lineHeight: 1.65 }}
        >
          {project.description}
        </p>

        {/* Tags */}
        <div className="mb-5 flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[11px] font-medium"
              style={{
                padding: "3px 10px",
                borderRadius: "999px",
                background: "rgba(217,164,65,0.07)",
                border: "1px solid rgba(217,164,65,0.18)",
                color: "#c9a356",
                letterSpacing: "0.02em",
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        {(project.liveUrl ?? project.githubUrl) && (
          <div className="flex gap-2">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  padding: "6px 16px",
                  borderRadius: "999px",
                  background: "linear-gradient(135deg, #f1c56b, #b98224)",
                  color: "#080808",
                  fontSize: "12px",
                  fontWeight: 600,
                  letterSpacing: "0.02em",
                  boxShadow: "0 0 16px rgba(217,164,65,0.2)",
                  transition: "box-shadow 0.2s",
                }}
              >
                Live ↗
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  padding: "6px 16px",
                  borderRadius: "999px",
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  color: "#a6a09a",
                  fontSize: "12px",
                  fontWeight: 600,
                  transition: "border-color 0.2s, color 0.2s",
                }}
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
