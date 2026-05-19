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
    <div className="flex gap-2 items-stretch">
      <Textarea
        ref={textareaRef}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder={t.chatPlaceholder}
        className="resize-none bg-zinc-800 border-zinc-700 text-zinc-100 placeholder:text-zinc-500 min-h-[44px] max-h-[120px]"
        rows={1}
        disabled={isLoading}
      />
      <Button
        onClick={onSend}
        disabled={isLoading || !value.trim()}
        className="bg-[#d9a441] text-zinc-900 hover:bg-[#f1c56b] shrink-0 font-semibold disabled:opacity-40 self-stretch h-auto"
      >
        {isLoading ? "..." : t.send}
      </Button>
    </div>
  );
}
