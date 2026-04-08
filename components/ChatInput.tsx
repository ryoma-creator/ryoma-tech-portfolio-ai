"use client";

import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useLanguage } from "@/contexts/LanguageContext";

interface Props {
  value: string;
  onChange: (value: string) => void;
  onSend: () => void;
  isLoading: boolean;
}

// チャット入力エリア（テキストエリア＋送信ボタン）
export function ChatInput({ value, onChange, onSend, isLoading }: Props) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const { t } = useLanguage();

  // Enterキーで送信（Shift+Enterは改行）
  function handleKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      onSend();
    }
  }

  return (
    <div className="flex gap-2 items-end">
      <Textarea
        ref={textareaRef}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder={t.chatPlaceholder}
        className="resize-none bg-zinc-800 border-zinc-700 text-zinc-100 placeholder:text-zinc-500 min-h-[60px] max-h-[120px]"
        rows={2}
        disabled={isLoading}
      />
      <Button
        onClick={onSend}
        disabled={isLoading || !value.trim()}
        className="bg-zinc-100 text-zinc-900 hover:bg-white shrink-0"
      >
        {isLoading ? "..." : t.send}
      </Button>
    </div>
  );
}
