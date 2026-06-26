// チャットメッセージの型
export type MessageRole = "user" | "assistant";

export interface ChatMessage {
  id: string;
  role: MessageRole;
  content: string;
  timestamp: number;
}

// レート制限の型（LocalStorageに保存）
export interface ChatUsage {
  count: number;
  date: string; // "YYYY-MM-DD" 形式
}

// 使い方ガイドの型（初心者向けステップ解説）
export interface ProjectGuideStep {
  /** ステップの見出し */
  title: string;
  /** ステップの説明 */
  description: string;
}

export interface ProjectGuide {
  /** ガイド冒頭の一言（任意） */
  intro?: string;
  /** 番号付きステップ */
  steps: ProjectGuideStep[];
}

// プロジェクトの型
export type ProjectCategory = "ai-assisted" | "hand-coded" | "lp-demo" | "in-development";

export interface Project {
  id: string;
  title: string;
  description: string;
  descriptionJa?: string;
  category: ProjectCategory;
  tags: string[];
  /** Cloudinary Video Player 等の iframe（カードでは最優先） */
  videoEmbedUrl?: string;
  /** ネイティブ video 要素（embed が無いとき） */
  videoUrl?: string;
  /** サムネイル（静止画）または video の poster */
  imageUrl?: string;
  liveUrl?: string;
  githubUrl?: string;
  /** 完成年月 "YYYY-MM" 形式 */
  builtAt?: string;
  /** true のとき videoUrl を自動再生・ループ・ミュートで流す */
  autoplay?: boolean;
  /** true のとき縦型（スマホ録画）として表示 */
  portrait?: boolean;
  /** 初心者向けの使い方ガイド（あるとモーダルに表示） */
  guide?: ProjectGuide;
}

// APIリクエスト・レスポンスの型
export interface ChatApiRequest {
  messages: Pick<ChatMessage, "role" | "content">[];
}

export interface ChatApiResponse {
  content: string;
}

export interface ChatApiError {
  error: string;
}
