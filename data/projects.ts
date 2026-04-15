import type { Project } from "@/types";

// ポートフォリオプロジェクトのデータ（実績ベース）
// imageUrl の placehold.co は仮サムネ。実スクショは Cloudinary 等に差し替え可
export const projects: Project[] = [
  // ── AI-Assisted Projects ─────────────────────────────────────────
  {
    id: "iot-fleet-monitor",
    title: "IoT Fleet Monitor",
    description:
      "A real-time IoT device monitoring dashboard built as a demo for a MVNO SIM company interview. Displays 6 simulated SIM-equipped devices with live signal strength and battery gauges. Receives device events via Webhook, updates status in real time through Supabase Realtime, and runs AI anomaly detection on demand.",
    descriptionJa:
      "MVNO SIM会社の面接用デモとして1日で構築したIoTデバイス監視ダッシュボード。SIM搭載デバイス6台の電波強度・バッテリーをリアルタイム表示。Webhookでイベント受信→Supabase Realtimeで即時更新→AIが異常検知・推奨アクションを生成。",
    category: "ai-assisted",
    tags: ["Next.js", "Supabase Realtime", "OpenAI gpt-4o-mini", "TypeScript", "Webhook", "IoT"],
    videoUrl:
      "https://res.cloudinary.com/dnm2fyhwt/video/upload/f_mp4,vc_h264,q_auto/Screen_Recording_2026-04-15_at_9.57.28_AM_pxb6vh.mp4",
    imageUrl:
      "https://res.cloudinary.com/dnm2fyhwt/video/upload/so_0,w_800,c_fill,q_auto,f_jpg/Screen_Recording_2026-04-15_at_9.57.28_AM_pxb6vh.jpg",
    autoplay: true,
    liveUrl: "https://iot-monitor-brown.vercel.app",
    githubUrl: "https://github.com/ryoma-creator/iot-monitor",
    builtAt: "2026-04",
  },
  {
    id: "ai-intelligence-monitor",
    title: "AI Intelligence Monitor",
    description:
      "A dashboard that automatically collects AI industry news and summarizes each article using AI. Pulls from 5 RSS feeds and Hacker News, then scores each article by importance and tags it with trends. Supports both English and Japanese.",
    descriptionJa:
      "AI業界のニュースを5つのRSSフィードとHacker Newsから自動収集し、GPTで要約・重要度スコアリング・トレンドタグ付けをするダッシュボード。日英切り替え対応。",
    category: "ai-assisted",
    tags: ["Next.js", "OpenAI gpt-4o-mini", "TypeScript", "Tailwind CSS", "RSS"],
    videoUrl:
      "https://res.cloudinary.com/dnm2fyhwt/video/upload/f_mp4,vc_h264,q_auto/Screen_Recording_2026-04-08_at_8.42.22_PM_vcgpsh.mp4",
    imageUrl:
      "https://res.cloudinary.com/dnm2fyhwt/video/upload/so_0,w_800,c_fill,q_auto,f_jpg/Screen_Recording_2026-04-08_at_8.42.22_PM_vcgpsh.jpg",
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
    descriptionJa:
      "チーム向け社内Q&Aツール。会社のPDFをアップロードして自然言語で質問すると、出典付きで回答。AIは自社データのみを参照するRAG構成。",
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
    descriptionJa:
      "コンテンツクリエイター向けのフック改善ツール。動画の冒頭の一文を貼り付けると、100点満点のスコア・レターグレード・具体的な改善ヒント3つを即座に表示。",
    category: "ai-assisted",
    tags: ["Next.js", "TypeScript", "Vitest", "Tailwind CSS"],
    imageUrl: "https://placehold.co/800x450/18181b/737373/png?text=Creator+Hook+Score",
    liveUrl: "https://creator-hook-score.vercel.app",
    githubUrl: "https://github.com/ryoma-creator/creator-hook-score",
    builtAt: "2026-04",
  },
  {
    id: "startup-hunter",
    title: "Startup Hunter — VC Job Matcher",
    description:
      "A job-hunting tool built because Ryoma doesn't trust generic job boards. Scrapes 450+ VC-backed startups from Global Brain and Y Combinator, finds live job pages, and uses AI to score each role against a personal profile — all within a $1 cost cap.",
    descriptionJa:
      "一般的な求人ボードを信用しないRyomaが自分のために作った求人ツール。Global BrainとY Combinatorから450社以上をスクレイピングし、AIで各求人を個人プロフィールとマッチング。コスト上限$1以内で動作。",
    category: "ai-assisted",
    tags: ["Next.js", "OpenAI gpt-4o-mini", "TypeScript", "Tailwind CSS", "Web Scraping"],
    imageUrl: "https://placehold.co/800x450/18181b/737373/png?text=Startup+Hunter",
    githubUrl: "https://github.com/ryoma-creator/startup-hunter",
    builtAt: "2026-04",
  },
  {
    id: "shopping-list",
    title: "Shopping List App — AI-Enhanced PWA",
    description:
      "A production-grade offline-first PWA. Point your camera at groceries and AI auto-detects items instantly. Syncs in real time across all devices, works without WiFi and auto-syncs when back online. Supports multiple users with auth and Cloudinary image matching.",
    descriptionJa:
      "本番品質のオフラインファーストPWA。カメラを向けるだけでAIが食材を自動検出。全デバイスでリアルタイム同期、WiFiなしでも動作してオンライン復帰時に自動同期。認証・マルチユーザー・Cloudinary画像マッチング対応。",
    category: "ai-assisted",
    tags: ["Next.js", "Claude API", "Supabase Realtime", "PWA", "Cloudinary", "TypeScript"],
    videoUrl:
      "https://res.cloudinary.com/dnm2fyhwt/video/upload/f_mp4,vc_h264,q_auto/Screen_Recording_2026-04-15_at_10.02.37_AM_loqoc7.mp4",
    imageUrl:
      "https://res.cloudinary.com/dnm2fyhwt/video/upload/so_0,w_800,c_fill,q_auto,f_jpg/Screen_Recording_2026-04-15_at_10.02.37_AM_loqoc7.jpg",
    autoplay: true,
    liveUrl: "https://shopping-list-claude-code.vercel.app",
    githubUrl: "https://github.com/ryoma-creator/shopping-list-claude-code",
    builtAt: "2026-04",
  },
  {
    id: "portfolio-ai",
    title: "AI Chat Portfolio (This Site)",
    description:
      "This portfolio site itself. Built with AI-assisted development, it includes a live chat feature where you can ask an AI about Ryoma's background, skills, and projects and get real answers.",
    descriptionJa:
      "このポートフォリオサイト自体。AI活用開発で構築。AIチャット機能でRyomaの経歴・スキル・プロジェクトについてリアルタイムで質問できる。",
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
    descriptionJa:
      "カスタマーサポートダッシュボード。AIが受信チケットを自動読み取りし、問題分類・緊急度評価・感情検知・返信ドラフトを即座に生成。",
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
    descriptionJa:
      "スキル向上とともに5回作り直したポートフォリオサイト。全体にスムーズなアニメーションを実装し、問い合わせフォームから自動返信メールを送信する機能付き。",
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
    builtAt: "2024-08",
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
    builtAt: "2024-08",
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
    builtAt: "2024-07",
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
    builtAt: "2024-06",
  },
];
