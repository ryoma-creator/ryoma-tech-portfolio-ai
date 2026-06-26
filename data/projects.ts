import type { Project } from "@/types";

// ポートフォリオプロジェクトのデータ（実績ベース）
// imageUrl の placehold.co は仮サムネ。実スクショは Cloudinary 等に差し替え可
export const projects: Project[] = [
  // ── AI-Assisted Projects ─────────────────────────────────────────
  // ── In Development ────────────────────────────────────────────────
  {
    id: "true-crime-asia-database",
    title: "True Crime Asia — Content Management Database",
    description:
      "An internal content operations system built for a YouTube true crime channel I'm launching — covering real crimes across Asia. The database tracks every case from initial research through publication: inline-editable cells (like Notion), JP/EN language switching, personal interest ratings, and an appeal-score system backed by high-CPM market research (US, UK, AU). Built with Next.js 16 App Router + SQLite + Server Actions. No external API.",
    descriptionJa:
      "今後運営予定のYouTubeチャンネル「True Crime Asia」向けの社内コンテンツ管理システム。案件の調査から公開まで一元管理。Notionライクな全セルインライン編集、日英切替、興味度スコア、US/UK/AUの高単価市場向け訴求スコアを実装。Next.js 16 App Router + SQLite + Server Actionsで構成。外部API不要。",
    category: "in-development",
    tags: ["Next.js 16", "SQLite", "Server Actions", "TypeScript", "Tailwind CSS", "i18n", "Content Ops"],
    imageUrl: "/true-crime-asia-preview.png",
    liveUrl: "https://true-crime-asia-database.vercel.app",
    builtAt: "2026-05",
  },
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
    liveUrl: "https://startup-hunter-kappa.vercel.app",
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
    portrait: true,
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

  {
    id: "condition-tracker",
    title: "Condition Tracker",
    description:
      "A personal health tracker built for daily self-monitoring. Logs sleep timing, quality, fatigue, focus, exercise, meals, and supplements — then uses AI to detect patterns and dangerous trends from the past 30 days. Includes a Pro subscription tier via Stripe.",
    descriptionJa:
      "毎日のコンディション管理アプリ。就寝・起床時間、疲労度・集中度・運動・食事・サプリを記録し、過去30日のデータからAIが危険な傾向やパターンを検出。Stripeによるサブスクリプション（Pro機能）付き。",
    category: "ai-assisted",
    tags: ["Expo / React Native", "Supabase", "OpenAI gpt-4o-mini", "Stripe", "TypeScript"],
    imageUrl: "https://placehold.co/800x450/0f0f0f/6366f1/png?text=Condition+Tracker",
    liveUrl: "https://condition-tracker-nine.vercel.app",
    githubUrl: "https://github.com/ryoma-creator/condition-tracker",
    builtAt: "2026-04",
  },

  // ── LP & Client Work ────────────────────────────────────────────
  {
    id: "lumina-clinic-demo",
    title: "LUMINA — Beauty Clinic Marketing Command Center",
    description:
      "An industry AI demo: a marketing command center for beauty clinics. It maps the patient journey (acquisition → visit → closing → repeat), spotlights exactly where patients leak out, and lets AI plug those gaps — from ad planning and no-show defense to counseling analysis — across 100 clinics. Includes a captioned walkthrough video and a beginner's how-to guide.",
    descriptionJa:
      "業界特化AIデモ。美容クリニック向けマーケティング司令塔。集患→来院→成約→再来の患者導線を可視化し、患者が“漏れる”場所をAIが先回りで塞ぐ。集患プランニング・来院ディフェンス・カウンセリング解析など11機能を全国100院規模で統合。字幕付きウォークスルー動画と初心者向け使い方ガイド付き。",
    category: "lp-demo",
    tags: ["AI Demo", "Next.js", "Dashboard", "Marketing", "Healthcare", "TypeScript"],
    videoUrl: "/demos/lumina-clinic.mp4",
    imageUrl: "/demos/lumina-clinic.png",
    autoplay: true,
    liveUrl: "https://industry-ai-demos.vercel.app/demos/clinic/",
    builtAt: "2026-06",
    guide: {
      intro:
        "美容クリニックの売上は「集患→来院→成約→再来」の一本道。LUMINA は患者が“漏れる”場所をAIが見張り、先回りで塞ぐ運営司令塔です。操作はたった3ステップ。",
      steps: [
        {
          title: "① 朝、司令塔ダッシュボードを開く",
          description:
            "今日どこで患者が漏れているかが“赤い数字”で一目に。左サイドバーの「司令塔ダッシュボード」から開けます。探す必要はありません。",
        },
        {
          title: "② AIマーケ参謀に「どうする?」と聞く",
          description:
            "右上の「AIに相談」から質問するだけ。いま効く機能へワンクリックで案内されます。専門知識は要りません。",
        },
        {
          title: "③ 指示どおり、機能を動かす",
          description:
            "集患プランニング・来院ディフェンス・カウンセリング解析など、患者の流れに沿った11機能を使うだけ。特に本丸は「カウンセリング解析」。",
        },
        {
          title: "成果は数字で自動で返る",
          description:
            "改善はダッシュボードに自動反映。広告費は1円も増やさず、毎月¥861万の回収余地を狙えます。",
        },
      ],
    },
  },
  {
    id: "sns-ops-ai-demo",
    title: "SNS Ops AI — AI Command Center for Agencies",
    description:
      "An industry AI demo: an AI command center for social media management agencies. It runs daily SNS operations across multiple client accounts — generating real image/video creatives and post copy, logging time saved, and surfacing approvals — so people focus on decisions and sign-off. 100 AI tasks across 13 categories. Includes a captioned walkthrough video and a beginner's how-to guide.",
    descriptionJa:
      "業界特化AIデモ。SNS運用代理店向けAIコマンドセンター。担当6社のSNS運用を横断管理し、AIが画像・動画クリエイティブや投稿文などの“現物”まで自動生成。削減時間・承認待ちを可視化し、人は意思決定と承認に集中。全13カテゴリ・100業務。字幕付きウォークスルー動画と初心者向け使い方ガイド付き。",
    category: "lp-demo",
    tags: ["AI Demo", "Next.js", "Social Media", "Automation", "Dashboard", "TypeScript"],
    videoUrl: "/demos/sns-ops-ai.mp4",
    imageUrl: "/demos/sns-ops-ai.png",
    autoplay: true,
    liveUrl: "https://sns-ai-generator.vercel.app/",
    builtAt: "2026-06",
    guide: {
      intro:
        "SNS運用代理店のためのAIコマンドセンター。担当クライアント6社のSNS運用を横断管理し、AIが“現物”の投稿クリエイティブまで仕上げます。人は意思決定と承認に集中できます。",
      steps: [
        {
          title: "① ホームで全体の稼働を確認",
          description:
            "本日AIが処理した仕事・削減時間・あなたの承認待ち件数が一目で分かります。",
        },
        {
          title: "② 業務カテゴリを選ぶ",
          description:
            "左メニューから全13カテゴリ・100業務を選択。コンテンツ企画、投稿文ライティング、分析など、気になる領域から始められます。",
        },
        {
          title: "③ やりたい業務を開く",
          description:
            "Before / After で“何がどう変わるか”を確認し、クライアントとSNS媒体（X / Instagram など）を選びます。",
        },
        {
          title: "④「AIで実行する」を押すだけ",
          description:
            "数十分の手作業が数秒に。画像・動画・投稿文などの成果物がそのまま出力されます。",
        },
        {
          title: "⑤ 承認して完了",
          description:
            "人は最終チェックと承認だけ。承認待ちはダッシュボードでまとめて管理できます。",
        },
      ],
    },
  },
  {
    id: "beauty-salon-lp",
    title: "Beauty Salon LP — &.LUMI hair salon",
    description:
      "A premium beauty salon landing page for a fictional Omotesando salon. Designed to match the editorial aesthetic of high-end Aoyama and Korean-style salons — airy, soft luxury, quiet elegance. Built with Framer Motion entrance animations, GSAP hero text, Cormorant Garamond typography, and full Cloudinary image delivery. Every section from hero to footer was crafted for maximum luxury feel.",
    descriptionJa:
      "表参道の架空高級サロン「&.LUMI hair salon」向けに制作したLPデモ。青山・韓国系サロンのエアリー×ソフトラグジュアリーを意識したデザイン。Framer Motionアニメーション、GSAPヒーローテキスト、Cormorant Garamondタイポグラフィ、Cloudinary画像配信を使用。ヒーローからフッターまで全セクションを高級感優先で設計。",
    category: "lp-demo",
    tags: ["Next.js", "Framer Motion", "GSAP", "TypeScript", "Cloudinary", "Claude Code"],
    imageUrl:
      "https://res.cloudinary.com/da3abynbu/image/upload/w_800,h_450,c_fill,g_north,q_auto,f_jpg/v1778561116/beauty-salon-lp_psojqc.png",
    liveUrl: "https://beauty-salon-lp-chi.vercel.app",
    githubUrl: "https://github.com/ryoma-creator/beauty-salon-landingpage2",
    builtAt: "2026-05",
  },
  {
    id: "enterprise-dx-lp",
    title: "Enterprise DX Platform — Corporate LP",
    description:
      "A corporate DX consulting landing page shipped in under 2 hours using Claude Code and GPT. The differentiator: the AI was seeded with Ryoma's own hand-built animation library and component system — so the output isn't generic AI. It's his two years of frontend craft, running at AI speed. A live demo of what's possible for LP and corporate site clients.",
    descriptionJa:
      "Claude CodeとGPTを使い2時間以内に完成させた企業DXコンサルLPのデモ。重要なのは、AIにRyomaが自作したアニメーションライブラリとコンポーネントを読み込ませた点。出力は汎用的なAI生成ではなく、2年間かけて積み上げたフロントエンドのクラフトが土台。LP・コーポレートサイトの制作依頼デモとして制作。",
    category: "lp-demo",
    tags: ["Next.js", "Framer Motion", "GSAP", "TypeScript", "Tailwind CSS", "Claude Code"],
    imageUrl: "https://res.cloudinary.com/da3abynbu/image/upload/w_800,h_450,c_fill,g_north,q_auto,f_jpg/v1778379546/NextGrow-DX_full_lp_qixf8i.png",
    liveUrl: "https://enterprise-dx-platform-lp.vercel.app",
    builtAt: "2026-05",
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
    videoUrl:
      "https://res.cloudinary.com/dnm2fyhwt/video/upload/f_mp4,vc_h264,q_auto/Screen_Recording_2026-04-15_at_10.08.37_AM_zkownw.mp4",
    imageUrl:
      "https://res.cloudinary.com/dnm2fyhwt/video/upload/so_0,w_800,c_fill,q_auto,f_jpg/Screen_Recording_2026-04-15_at_10.08.37_AM_zkownw.jpg",
    autoplay: true,
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
