import type { Project } from "@/types";

// ポートフォリオプロジェクトのデータ（実績ベース）
// imageUrl の placehold.co は仮サムネ。実スクショは Cloudinary 等に差し替え可
export const projects: Project[] = [
  // ── AI-Assisted Projects ─────────────────────────────────────────
  {
    id: "ai-intelligence-monitor",
    title: "AI Intelligence Monitor",
    description:
      "A dashboard that automatically collects AI industry news and summarizes each article using AI. Pulls from 5 RSS feeds and Hacker News, then scores each article by importance and tags it with trends. Supports both English and Japanese.",
    category: "ai-assisted",
    tags: ["Next.js", "OpenAI gpt-4o-mini", "TypeScript", "Tailwind CSS", "RSS"],
    videoUrl:
      "https://res.cloudinary.com/dnm2fyhwt/video/upload/f_mp4,vc_h264,q_auto/Screen_Recording_2026-04-08_at_6.26.33_PM_pvk91b.mp4",
    imageUrl:
      "https://res.cloudinary.com/dnm2fyhwt/video/upload/so_0,w_800,c_fill,q_auto,f_jpg/Screen_Recording_2026-04-08_at_6.26.33_PM_pvk91b.jpg",
    autoplay: true,
    liveUrl: "https://ai-intelligence-monitor.vercel.app/",
    githubUrl: "https://github.com/ryoma-creator/ai-intelligence-monitor",
    builtAt: "2026-04",
  },
  {
    id: "ai-helpdesk",
    title: "AI Internal Helpdesk SaaS",
    description:
      "An internal Q&A tool for teams. Upload your company's PDF documents, ask questions in plain language, and get answers with source citations — powered by AI that only uses your own data.",
    category: "ai-assisted",
    tags: ["Next.js", "Supabase pgvector", "OpenAI GPT-4", "TypeScript", "RAG"],
    imageUrl:
      "https://placehold.co/800x450/18181b/737373/png?text=AI+Internal+Helpdesk",
    liveUrl: "https://ai-internal-helpdesk-saas.vercel.app",
    githubUrl: "https://github.com/ryoma-creator/ai-internal-helpdesk-saas",
    builtAt: "2026-04",
  },
  {
    id: "creator-hook-score",
    title: "Creator Hook Score",
    description:
      "A tool for content creators to improve their video hooks. Paste your opening line and get an instant score out of 100, a letter grade, and 3 specific tips to make it more engaging.",
    category: "ai-assisted",
    tags: ["Next.js", "TypeScript", "Vitest", "Tailwind CSS"],
    imageUrl: "https://placehold.co/800x450/18181b/737373/png?text=Creator+Hook+Score",
    liveUrl: "https://creator-hook-score.vercel.app",
    githubUrl: "https://github.com/ryoma-creator/creator-hook-score",
    builtAt: "2026-04",
  },
  {
    id: "shopping-list",
    title: "Shopping List App",
    description:
      "A shopping list app that syncs instantly across all your devices. Add or check off items on your phone, and the changes appear on your laptop in real time — no refresh needed.",
    category: "ai-assisted",
    tags: ["Next.js", "Supabase Realtime", "TypeScript", "Tailwind CSS"],
    imageUrl: "https://placehold.co/800x450/18181b/737373/png?text=Shopping+List",
    liveUrl: "https://shopping-list-claude-code.vercel.app",
    githubUrl: "https://github.com/ryoma-creator/shopping-list-claude-code",
    builtAt: "2026-04",
  },
  {
    id: "portfolio-ai",
    title: "AI Chat Portfolio (This Site)",
    description:
      "This portfolio site itself. Built with AI-assisted development, it includes a live chat feature where you can ask an AI about Ryoma's background, skills, and projects and get real answers.",
    category: "ai-assisted",
    tags: ["Next.js", "OpenAI API", "TypeScript", "Tailwind CSS", "Framer Motion"],
    videoUrl:
      "https://res.cloudinary.com/da3abynbu/video/upload/f_mp4,vc_h264,q_auto/ai-portfolio_q8u8yi.mp4",
    imageUrl:
      "https://res.cloudinary.com/da3abynbu/video/upload/so_0,w_800,c_fill,q_auto,f_jpg/ai-portfolio_q8u8yi.jpg",
    autoplay: true,
    githubUrl: "https://github.com/ryoma-creator/ryoma-tech-portfolio-ai",
    builtAt: "2026-04",
  },
  {
    id: "support-ai-dashboard",
    title: "Support AI Dashboard",
    description:
      "A customer support dashboard where AI automatically reads incoming tickets and suggests how to handle them. It classifies the issue, rates the urgency, detects the customer's mood, and drafts a reply — all instantly.",
    category: "ai-assisted",
    tags: ["Next.js", "Node.js", "OpenAI gpt-4o-mini", "TypeScript", "Tailwind CSS", "shadcn/ui"],
    videoEmbedUrl:
      "https://player.cloudinary.com/embed/?cloud_name=dnm2fyhwt&public_id=Screen_Recording_2026-04-04_at_12.30.03_PM_r0fvh8&loop=true&autoplay=true&muted=true",
    imageUrl:
      "https://res.cloudinary.com/dnm2fyhwt/video/upload/so_0,w_800,c_fill,q_auto,f_jpg/Screen_Recording_2026-04-04_at_12.30.03_PM_r0fvh8.jpg",
    liveUrl: "https://support-ai-dashboard.vercel.app/",
    builtAt: "2026-04",
  },

  // ── Hand-Coded Projects ──────────────────────────────────────────
  {
    id: "portfolio-v1",
    title: "Portfolio Website v1",
    description:
      "A personal portfolio site rebuilt 5 times as design skills grew. Features smooth animations throughout, and a contact form that automatically sends a reply email to anyone who reaches out.",
    category: "hand-coded",
    tags: ["Next.js", "Node.js", "TypeScript", "Tailwind CSS", "Framer Motion", "shadcn/ui"],
    videoUrl:
      "https://res.cloudinary.com/dnm2fyhwt/video/upload/f_mp4,vc_h264,q_auto/Screen_Recording_2026-04-08_at_7.05.19_PM_iqiekz.mp4",
    imageUrl:
      "https://res.cloudinary.com/dnm2fyhwt/video/upload/so_0,w_800,c_fill,q_auto,f_jpg/Screen_Recording_2026-04-08_at_7.05.19_PM_iqiekz.jpg",
    autoplay: true,
    liveUrl: "https://my-portfolio-website-lake.vercel.app/",
    githubUrl: "https://github.com/ryoma-creator/portfolio-3",
    builtAt: "2025-02",
  },
  {
    id: "ecommerce",
    title: "E-Commerce Website",
    description:
      "A fully functional online store built from scratch. Browse products, add them to your cart, and experience smooth page transitions — all the core features you'd expect from a real e-commerce site.",
    category: "hand-coded",
    tags: ["React", "Tailwind CSS", "Framer Motion", "JavaScript", "API"],
    imageUrl: "https://placehold.co/800x450/18181b/737373/png?text=E-Commerce",
    liveUrl: "https://ecommerce-p66q.vercel.app/",
    githubUrl: "https://github.com/ryoma-creator/ecommerce",
    builtAt: "2025-02",
  },
  {
    id: "weather-app",
    title: "Weather App",
    description:
      "Search any city in the world and instantly see the current weather and forecast. Pulls live data from a weather API — simple, fast, and works anywhere.",
    category: "hand-coded",
    tags: ["React", "Tailwind CSS", "JavaScript", "Weather API"],
    imageUrl: "https://placehold.co/800x450/18181b/737373/png?text=Weather+App",
    liveUrl: "https://weather-app-eight-amber-29.vercel.app",
    githubUrl: "https://github.com/ryoma-creator/weather-app",
    builtAt: "2025-02",
  },
  {
    id: "todo-app",
    title: "Todo List App",
    description:
      "A clean task manager where you can add, edit, complete, and delete tasks. You can also reorder them by dragging — built to practice core app development fundamentals.",
    category: "hand-coded",
    tags: ["React", "JavaScript", "CSS", "Drag & Drop"],
    imageUrl: "https://placehold.co/800x450/18181b/737373/png?text=Todo+App",
    liveUrl: "https://todo-app-kappa-ochre.vercel.app/",
    githubUrl: "https://github.com/ryoma-creator/to-do-app-claude-code",
    builtAt: "2025-02",
  },
  {
    id: "tech-vocab",
    title: "Tech Vocabulary App",
    description:
      "A study app Ryoma built for himself to prepare for technical interviews. Covers JavaScript, React, and coding concepts — originally created to pass IBM's developer selection process.",
    category: "hand-coded",
    tags: ["React", "Next.js", "JavaScript", "TypeScript"],
    imageUrl: "https://placehold.co/800x450/18181b/737373/png?text=Tech+Vocabulary",
    githubUrl: "https://github.com/ryoma-creator/react-interview-ryoma-original",
    builtAt: "2025-02",
  },
];
