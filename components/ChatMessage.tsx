import type { ChatMessage } from "@/types";

interface Props {
  message: ChatMessage;
}

// 1件のチャットメッセージを表示するバブルコンポーネント
export function ChatBubble({ message }: Props) {
  const isUser = message.role === "user";

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"} mb-3`}>
      {/* アシスタントのアバター */}
      {!isUser && (
        <div className="flex-shrink-0 w-7 h-7 rounded-full bg-zinc-700 flex items-center justify-center text-xs mr-2 mt-1">
          AI
        </div>
      )}

      <div
        className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed whitespace-pre-wrap ${
          isUser
            ? "bg-zinc-600 text-white rounded-br-sm"
            : "bg-zinc-800 text-zinc-100 rounded-bl-sm"
        }`}
      >
        {message.content}
      </div>
    </div>
  );
}
