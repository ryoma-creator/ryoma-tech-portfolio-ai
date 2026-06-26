"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ProjectCardMedia } from "@/components/ProjectCardMedia";
import { ProjectGuide } from "@/components/ProjectGuide";
import type { Project } from "@/types";

interface Props {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: Props) {
  useEffect(() => {
    if (!project) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 z-50"
            style={{ background: "rgba(0,0,0,0.82)", backdropFilter: "blur(4px)" }}
          />

          {/* Modal */}
          <motion.div
            key="modal"
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 20 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-50 flex items-center justify-center p-2 pointer-events-none"
          >
            <div
              className="pointer-events-auto w-full max-w-5xl max-h-[96vh] overflow-y-auto rounded-2xl"
              style={{
                background: "#141414",
                border: "1px solid rgba(255,255,255,0.08)",
                boxShadow: "0 32px 80px rgba(0,0,0,0.7)",
              }}
            >
              {/* Media */}
              <div className="relative" style={{ aspectRatio: "16/9" }}>
                <ProjectCardMedia project={project} />
                <button
                  onClick={onClose}
                  className="absolute top-3 right-3 flex items-center justify-center rounded-full"
                  style={{
                    width: 36, height: 36,
                    background: "rgba(20,20,20,0.85)",
                    border: "1px solid rgba(255,255,255,0.15)",
                    color: "#f5f1e8",
                    fontSize: 18,
                    cursor: "pointer",
                  }}
                  aria-label="Close"
                >
                  ×
                </button>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between gap-3 mb-4">
                  <h2 style={{ color: "#f5f1e8", fontSize: 20, fontWeight: 700, lineHeight: 1.3 }}>
                    {project.title}
                  </h2>
                  {project.builtAt && (
                    <span className="shrink-0 text-xs" style={{ color: "#8a847e", marginTop: 4 }}>
                      {new Date(project.builtAt + "-01").toLocaleDateString("en-US", {
                        year: "numeric", month: "short",
                      })}
                    </span>
                  )}
                </div>

                <p className="mb-5 text-sm leading-relaxed" style={{ color: "#a09a94", lineHeight: 1.7 }}>
                  {project.description}
                </p>

                {/* Tags */}
                <div className="mb-6 flex flex-wrap gap-1.5">
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

                {/* 使い方ガイド（あるときだけ表示） */}
                {project.guide && <ProjectGuide guide={project.guide} />}

                {/* Links */}
                {(project.liveUrl ?? project.githubUrl) && (
                  <div className="flex gap-2">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          padding: "8px 20px",
                          borderRadius: "999px",
                          background: "linear-gradient(135deg, #f1c56b, #b98224)",
                          color: "#080808",
                          fontSize: "13px",
                          fontWeight: 700,
                          letterSpacing: "0.02em",
                          boxShadow: "0 0 16px rgba(217,164,65,0.25)",
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
                          padding: "8px 20px",
                          borderRadius: "999px",
                          background: "rgba(255,255,255,0.06)",
                          border: "1px solid rgba(255,255,255,0.12)",
                          color: "#a6a09a",
                          fontSize: "13px",
                          fontWeight: 600,
                        }}
                      >
                        GitHub
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
