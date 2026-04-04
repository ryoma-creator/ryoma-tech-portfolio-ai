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

// プロジェクトの型
export type ProjectCategory = "ai-assisted" | "hand-coded";

export interface Project {
  id: string;
  title: string;
  description: string;
  category: ProjectCategory;
  tags: string[];
  /** ネイティブ video 用（Cloudinary 直リンク等）。最優先で表示 */
  videoUrl?: string;
  /** iframe 埋め込み（videoUrl が無いとき）。動画が表示されない環境向け */
  videoEmbedUrl?: string;
  /** サムネイル（静止画）または video の poster */
  imageUrl?: string;
  liveUrl?: string;
  githubUrl?: string;
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
