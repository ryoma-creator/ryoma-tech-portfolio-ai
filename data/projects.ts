import type { Project } from "@/types";

// ポートフォリオプロジェクトのデータ（実績ベース）
// imageUrl の placehold.co は仮サムネ。実スクショは Cloudinary 等に差し替え可
export const projects: Project[] = [
  // ── AI-Assisted Projects ─────────────────────────────────────────
  {
    id: "ai-helpdesk",
    title: "AI Internal Helpdesk SaaS",
    description:
      "RAG-powered helpdesk. Upload PDFs, ask questions in plain English, get answers with source citations — grounded in your own data.",
    category: "ai-assisted",
    tags: ["Next.js", "Supabase pgvector", "OpenAI GPT-4", "TypeScript", "RAG"],
    imageUrl:
      "https://placehold.co/800x450/18181b/737373/png?text=AI+Internal+Helpdesk",
    liveUrl: "https://ai-internal-helpdesk-saas.vercel.app",
    githubUrl: "https://github.com/ryoma-creator/ai-internal-helpdesk-saas",
  },
  {
    id: "creator-hook-score",
    title: "Creator Hook Score",
    description:
      "TikTok hook analyzer. Score your hook 0–100 across 8 criteria, get a grade (A–D), and receive 3 prioritized improvement tips instantly.",
    category: "ai-assisted",
    tags: ["Next.js", "TypeScript", "Vitest", "Tailwind CSS"],
    imageUrl: "https://placehold.co/800x450/18181b/737373/png?text=Creator+Hook+Score",
    liveUrl: "https://creator-hook-score.vercel.app",
    githubUrl: "https://github.com/ryoma-creator/creator-hook-score",
  },
  {
    id: "shopping-list",
    title: "Shopping List App",
    description:
      "Realtime synced shopping list with live updates across all devices simultaneously, powered by Supabase Realtime subscriptions.",
    category: "ai-assisted",
    tags: ["Next.js", "Supabase Realtime", "TypeScript", "Tailwind CSS"],
    imageUrl: "https://placehold.co/800x450/18181b/737373/png?text=Shopping+List",
    liveUrl: "https://shopping-list-claude-code.vercel.app",
    githubUrl: "https://github.com/ryoma-creator/shopping-list-claude-code",
  },
  {
    id: "portfolio-ai",
    title: "AI Chat Portfolio (This Site)",
    description:
      "This very portfolio — built with AI-assisted development. Features a rate-limited AI chat powered by OpenAI that knows Ryoma's full story.",
    category: "ai-assisted",
    tags: ["Next.js", "OpenAI API", "TypeScript", "Tailwind CSS", "Framer Motion"],
    imageUrl: "https://placehold.co/800x450/18181b/737373/png?text=AI+Chat+Portfolio",
    githubUrl: "https://github.com/ryoma-creator/ryoma-tech-portfolio-ai",
  },
  {
    id: "support-ai-dashboard",
    title: "Support AI Dashboard",
    description:
      "Internal-style support dashboard with AI-assisted workflows. Screen recording demo (Cloudinary).",
    category: "ai-assisted",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "AI"],
    videoUrl:
      "https://res.cloudinary.com/dnm2fyhwt/video/upload/q_auto,f_mp4/Screen_Recording_2026-04-04_at_12.30.03_PM_r0fvh8.mp4",
    imageUrl:
      "https://res.cloudinary.com/dnm2fyhwt/video/upload/so_0,w_800,c_fill,q_auto,f_jpg/Screen_Recording_2026-04-04_at_12.30.03_PM_r0fvh8.jpg",
  },

  // ── Hand-Coded Projects ──────────────────────────────────────────
  {
    id: "portfolio-v1",
    title: "Portfolio Website v1",
    description:
      "Previous personal portfolio. 5 major design iterations in one year. Built with Framer Motion animations and a focus on UI/UX craft.",
    category: "hand-coded",
    tags: ["Next.js", "Framer Motion", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://my-portfolio-website-lake.vercel.app/",
    githubUrl: "https://github.com/ryoma-creator/portfolio-3",
    imageUrl:
      "https://res.cloudinary.com/dnm2fyhwt/image/upload/v1733368949/portfoliowebsite_eiuwcq.png",
  },
  {
    id: "interactive-storytelling",
    title: "Interactive Storytelling Portfolio",
    description:
      "Advanced scroll-based storytelling experience with complex animations. Built to push the limits of what's possible on the web with GSAP and Framer Motion.",
    category: "hand-coded",
    tags: ["Next.js", "GSAP", "Framer Motion", "Tailwind CSS", "React"],
    imageUrl:
      "https://placehold.co/800x450/18181b/737373/png?text=Interactive+Story",
  },
  {
    id: "ecommerce",
    title: "E-Commerce Website",
    description:
      "Full-featured e-commerce platform with product listings, cart functionality, and smooth UI transitions.",
    category: "hand-coded",
    tags: ["React", "Tailwind CSS", "Framer Motion", "JavaScript", "API"],
    imageUrl: "https://placehold.co/800x450/18181b/737373/png?text=E-Commerce",
  },
  {
    id: "weather-app",
    title: "Weather App",
    description:
      "Real-time weather application. Search any city and get current conditions and forecasts via live API integration.",
    category: "hand-coded",
    tags: ["React", "Tailwind CSS", "JavaScript", "Weather API"],
    imageUrl: "https://placehold.co/800x450/18181b/737373/png?text=Weather+App",
  },
  {
    id: "todo-app",
    title: "Todo List App",
    description:
      "CRUD application with drag & drop reordering. Clean UI with full task management — add, edit, complete, delete, and reorder by dragging.",
    category: "hand-coded",
    tags: ["React", "JavaScript", "CSS", "Drag & Drop"],
    imageUrl: "https://placehold.co/800x450/18181b/737373/png?text=Todo+App",
    githubUrl: "https://github.com/ryoma-creator/to-do-app-claude-code",
  },
  {
    id: "tech-vocab",
    title: "Tech Vocabulary App",
    description:
      "Self-built technical interview prep app covering JavaScript, React, Next.js, dev tools, and coding challenges — created to ace IBM's selection process.",
    category: "hand-coded",
    tags: ["React", "Next.js", "JavaScript", "TypeScript"],
    imageUrl: "https://placehold.co/800x450/18181b/737373/png?text=Tech+Vocabulary",
    githubUrl: "https://github.com/ryoma-creator/react-interview-ryoma-original",
  },
];
