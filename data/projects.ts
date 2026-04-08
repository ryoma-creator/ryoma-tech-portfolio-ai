import type { Project } from "@/types";

// ポートフォリオプロジェクトのデータ（実績ベース）
// imageUrl の placehold.co は仮サムネ。実スクショは Cloudinary 等に差し替え可
export const projects: Project[] = [
  // ── AI-Assisted Projects ─────────────────────────────────────────
  {
    id: "ai-intelligence-monitor",
    title: "AI Intelligence Monitor",
    description:
      "Real-time AI industry news dashboard. Pulls from 5 RSS feeds and HackerNews, runs each article through gpt-4o-mini for an English or Japanese summary, importance score (1–10), and trend tags — all surfaced in a filterable feed.",
    category: "ai-assisted",
    tags: ["Next.js", "OpenAI gpt-4o-mini", "TypeScript", "Tailwind CSS", "RSS"],
    videoUrl:
      "https://res.cloudinary.com/dnm2fyhwt/video/upload/f_mp4,vc_h264,q_auto/Screen_Recording_2026-04-08_at_6.26.33_PM_pvk91b.mp4",
    imageUrl:
      "https://res.cloudinary.com/dnm2fyhwt/video/upload/so_0,w_800,c_fill,q_auto,f_jpg/Screen_Recording_2026-04-08_at_6.26.33_PM_pvk91b.jpg",
    liveUrl: "https://ai-intelligence-monitor.vercel.app/",
    githubUrl: "https://github.com/ryoma-creator/ai-intelligence-monitor",
    builtAt: "2026-04",
  },
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
    builtAt: "2026-04",
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
    builtAt: "2026-04",
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
    builtAt: "2026-04",
  },
  {
    id: "portfolio-ai",
    title: "AI Chat Portfolio (This Site)",
    description:
      "This very portfolio — built with AI-assisted development. Features a rate-limited AI chat powered by OpenAI that knows Ryoma's full story.",
    category: "ai-assisted",
    tags: ["Next.js", "OpenAI API", "TypeScript", "Tailwind CSS", "Framer Motion"],
    videoUrl:
      "https://res.cloudinary.com/da3abynbu/video/upload/f_mp4,vc_h264,q_auto/ai-portfolio_q8u8yi.mp4",
    imageUrl:
      "https://res.cloudinary.com/da3abynbu/video/upload/so_0,w_800,c_fill,q_auto,f_jpg/ai-portfolio_q8u8yi.jpg",
    githubUrl: "https://github.com/ryoma-creator/ryoma-tech-portfolio-ai",
    builtAt: "2026-04",
  },
  {
    id: "support-ai-dashboard",
    title: "Support AI Dashboard",
    description:
      "Support ticket dashboard with a Next.js API route that calls OpenAI gpt-4o-mini to auto-triage tickets — classifying category, priority, sentiment, and generating a suggested customer reply.",
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
      "Personal portfolio with 5 major design iterations. Includes a server-side contact form with auto-reply email via API route. Built with Framer Motion animations and shadcn/ui components.",
    category: "hand-coded",
    tags: ["Next.js", "Node.js", "TypeScript", "Tailwind CSS", "Framer Motion", "shadcn/ui"],
    liveUrl: "https://my-portfolio-website-lake.vercel.app/",
    githubUrl: "https://github.com/ryoma-creator/portfolio-3",
    builtAt: "2025-02",
    imageUrl:
      "https://res.cloudinary.com/dnm2fyhwt/image/upload/v1733368949/portfoliowebsite_eiuwcq.png",
  },
  {
    id: "ecommerce",
    title: "E-Commerce Website",
    description:
      "Full-featured e-commerce platform with product listings, cart functionality, and smooth UI transitions.",
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
      "Real-time weather application. Search any city and get current conditions and forecasts via live API integration.",
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
      "CRUD application with drag & drop reordering. Clean UI with full task management — add, edit, complete, delete, and reorder by dragging.",
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
      "Self-built technical interview prep app covering JavaScript, React, Next.js, dev tools, and coding challenges — created to ace IBM's selection process.",
    category: "hand-coded",
    tags: ["React", "Next.js", "JavaScript", "TypeScript"],
    imageUrl: "https://placehold.co/800x450/18181b/737373/png?text=Tech+Vocabulary",
    githubUrl: "https://github.com/ryoma-creator/react-interview-ryoma-original",
    builtAt: "2025-02",
  },
];
