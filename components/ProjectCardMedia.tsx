"use client";

import Image from "next/image";
import type { Project } from "@/types";

// カード上部のメディア（iframe 埋め込み → ネイティブ動画 → 画像 → プレースホルダー）
export function ProjectCardMedia({ project }: { project: Project }) {
  if (project.videoEmbedUrl) {
    return (
      <div className="relative aspect-video w-full bg-black">
        <iframe
          src={project.videoEmbedUrl}
          title={`${project.title} demo video`}
          className="absolute inset-0 h-full w-full border-0"
          allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
          allowFullScreen
          loading="lazy"
        />
      </div>
    );
  }

  if (project.videoUrl) {
    return (
      <div className="relative aspect-video w-full bg-black">
        <video
          controls
          playsInline
          preload="metadata"
          poster={project.imageUrl}
          className="h-full w-full object-cover"
        >
          <source src={project.videoUrl} type="video/mp4" />
        </video>
      </div>
    );
  }

  if (project.imageUrl) {
    return (
      <div className="relative aspect-video w-full overflow-hidden">
        <Image
          src={project.imageUrl}
          alt={project.title}
          fill
          className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-zinc-900/80" />
      </div>
    );
  }

  return (
    <div className="flex aspect-video w-full items-center justify-center bg-gradient-to-br from-zinc-800 to-zinc-900">
      <span className="text-4xl opacity-40">
        {project.category === "ai-assisted" ? "🤖" : "💻"}
      </span>
    </div>
  );
}
