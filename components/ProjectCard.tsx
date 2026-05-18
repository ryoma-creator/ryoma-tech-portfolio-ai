"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ProjectCardMedia } from "@/components/ProjectCardMedia";
import { ProjectModal } from "@/components/ProjectModal";
import type { Project } from "@/types";

interface Props {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: Props) {
  const [modalOpen, setModalOpen] = useState(false);
  const [hovered, setHovered] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
        animate={{
          scale: hovered ? 1.07 : 1,
          zIndex: hovered ? 20 : 1,
          borderColor: hovered ? "rgba(217,164,65,0.3)" : "rgba(255,255,255,0.07)",
          boxShadow: hovered
            ? "0 0 40px rgba(217,164,65,0.15), 0 24px 60px rgba(0,0,0,0.5)"
            : "0 0 0px rgba(0,0,0,0)",
        }}
        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
        style={{
          background: "linear-gradient(180deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))",
          border: "1px solid rgba(255,255,255,0.07)",
          borderRadius: "20px",
          position: "relative",
        }}
      >
        {/* Media — clip only this part */}
        <div style={{ borderRadius: "20px 20px 0 0", overflow: "hidden" }}>
          <ProjectCardMedia project={project} />
        </div>

        {/* Title — always visible */}
        <div className="px-4 pt-3" style={{ paddingBottom: hovered ? 0 : 16 }}>
          <h3 style={{ color: "#f5f1e8", fontSize: "15px", fontWeight: 600, lineHeight: 1.3 }}>
            {project.title}
          </h3>
        </div>

        {/* Hover actions */}
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden px-4 pb-4 flex gap-2 pt-3"
            >
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  style={{
                    padding: "6px 16px",
                    borderRadius: "999px",
                    background: "linear-gradient(135deg, #f1c56b, #b98224)",
                    color: "#080808",
                    fontSize: "12px",
                    fontWeight: 700,
                    letterSpacing: "0.02em",
                    boxShadow: "0 0 16px rgba(217,164,65,0.25)",
                    whiteSpace: "nowrap",
                  }}
                >
                  Live ↗
                </a>
              )}
              <button
                onClick={() => setModalOpen(true)}
                style={{
                  padding: "6px 14px",
                  borderRadius: "999px",
                  background: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.14)",
                  color: "#f5f1e8",
                  fontSize: "12px",
                  fontWeight: 600,
                  letterSpacing: "0.02em",
                  cursor: "pointer",
                  whiteSpace: "nowrap",
                }}
              >
                ⓘ More Info
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      <ProjectModal project={modalOpen ? project : null} onClose={() => setModalOpen(false)} />
    </>
  );
}
