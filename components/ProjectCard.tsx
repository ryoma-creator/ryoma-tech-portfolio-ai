"use client";

import { useState } from "react";
import { motion } from "framer-motion";
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
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
        whileHover={{ scale: 1.4 }}
        style={{
          position: "relative",
          zIndex: hovered ? 20 : 1,
          background: "linear-gradient(180deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))",
          border: hovered ? "1px solid rgba(217,164,65,0.3)" : "1px solid rgba(255,255,255,0.07)",
          borderRadius: "20px",
          boxShadow: hovered ? "0 0 40px rgba(217,164,65,0.15), 0 24px 60px rgba(0,0,0,0.5)" : "none",
          transition: "border-color 0.2s, box-shadow 0.2s",
        }}
        transition={{ duration: 0.22, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Media */}
        <div style={{ borderRadius: "20px 20px 0 0", overflow: "hidden" }}>
          <ProjectCardMedia project={project} />
        </div>

        {/* Title — fixed, never changes height */}
        <div className="px-4 py-3">
          <h3 style={{ color: "#f5f1e8", fontSize: "15px", fontWeight: 600, lineHeight: 1.3 }}>
            {project.title}
          </h3>
        </div>

        {/* Hover overlay — absolute, zero layout impact */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: "20px",
            background: "linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 55%)",
            opacity: hovered ? 1 : 0,
            transition: "opacity 0.18s ease",
            pointerEvents: hovered ? "auto" : "none",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            padding: "16px",
          }}
        >
          <div style={{ display: "flex", gap: 8 }}>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                style={{
                  padding: "7px 18px",
                  borderRadius: "999px",
                  background: "linear-gradient(135deg, #f1c56b, #b98224)",
                  color: "#080808",
                  fontSize: "12px",
                  fontWeight: 700,
                  letterSpacing: "0.02em",
                  boxShadow: "0 0 16px rgba(217,164,65,0.3)",
                  whiteSpace: "nowrap",
                  textDecoration: "none",
                }}
              >
                Live ↗
              </a>
            )}
            <button
              onClick={() => setModalOpen(true)}
              style={{
                padding: "7px 16px",
                borderRadius: "999px",
                background: "rgba(255,255,255,0.15)",
                border: "1px solid rgba(255,255,255,0.25)",
                color: "#f5f1e8",
                fontSize: "12px",
                fontWeight: 600,
                letterSpacing: "0.02em",
                cursor: "pointer",
                whiteSpace: "nowrap",
                backdropFilter: "blur(4px)",
              }}
            >
              ⓘ More Info
            </button>
          </div>
        </div>
      </motion.div>

      <ProjectModal project={modalOpen ? project : null} onClose={() => setModalOpen(false)} />
    </>
  );
}
