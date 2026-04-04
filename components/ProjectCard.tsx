"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import type { Project } from "@/types";

interface Props {
  project: Project;
  index: number;
}

// プロジェクトカード（アニメーション・画像対応）
export function ProjectCard({ project, index }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden hover:border-zinc-600 transition-all duration-300"
    >
      {/* 動画埋め込み（Cloudinary 等）→ 画像 → プレースホルダー */}
      {project.videoEmbedUrl ? (
        <div className="relative aspect-video w-full bg-black">
          <iframe
            src={project.videoEmbedUrl}
            title={`${project.title} demo video`}
            className="absolute inset-0 h-full w-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      ) : project.imageUrl ? (
        <div className="relative h-36 w-full overflow-hidden">
          <Image
            src={project.imageUrl}
            alt={project.title}
            fill
            className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-zinc-900/80" />
        </div>
      ) : (
        <div className="flex h-24 w-full items-center justify-center bg-gradient-to-br from-zinc-800 to-zinc-900">
          <span className="text-3xl opacity-40">
            {project.category === "ai-assisted" ? "🤖" : "💻"}
          </span>
        </div>
      )}

      <div className="p-5">
        <h3 className="text-base font-semibold text-zinc-100 mb-2">{project.title}</h3>
        <p className="text-sm text-zinc-400 leading-relaxed mb-3">{project.description}</p>

        {/* タグ */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tags.map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="bg-zinc-800 text-zinc-400 hover:bg-zinc-700 text-xs border-0"
            >
              {tag}
            </Badge>
          ))}
        </div>

        {/* リンク */}
        {(project.liveUrl ?? project.githubUrl) && (
          <div className="flex gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs bg-zinc-700 hover:bg-zinc-600 text-zinc-200 px-3 py-1.5 rounded-full transition-colors"
              >
                Live ↗
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs border border-zinc-700 hover:border-zinc-500 text-zinc-400 hover:text-zinc-200 px-3 py-1.5 rounded-full transition-colors"
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
