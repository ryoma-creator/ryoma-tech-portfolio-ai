"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ChatBubble } from "@/components/ChatMessage";
import { ChatInput } from "@/components/ChatInput";
import { useChatLimit } from "@/hooks/useChatLimit";
import type { ChatMessage, ChatApiResponse, ChatApiError } from "@/types";

// チャットセクション（クライアントコンポーネント）
export function ChatSection() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { remaining, isLimited, increment } = useChatLimit();
  const bottomRef = useRef<HTMLDivElement>(null);

  // 新しいメッセージ追加時に自動スクロール
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  async function handleSend() {
    const text = input.trim();
    if (!text || isLoading || isLimited) return;

    const userMsg: ChatMessage = {
      id: crypto.randomUUID(),
      role: "user",
      content: text,
      timestamp: Date.now(),
    };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsLoading(true);
    increment();

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [...messages, userMsg].map((m) => ({
            role: m.role,
            content: m.content,
          })),
        }),
      });

      const data: ChatApiResponse | ChatApiError = await res.json();
      const content =
        "content" in data ? data.content : "Sorry, something went wrong.";

      setMessages((prev) => [
        ...prev,
        { id: crypto.randomUUID(), role: "assistant", content, timestamp: Date.now() },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          role: "assistant",
          content: "Network error. Please try again.",
          timestamp: Date.now(),
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <section id="chat" className="py-10 px-4">
      <motion.div
        className="max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {/* ヘッダー */}
        <div className="text-center mb-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">
            Ask Me Anything
          </h2>
          <p className="text-zinc-500 text-sm">
            {remaining} question{remaining !== 1 ? "s" : ""} left today
          </p>
        </div>

        {/* チャットボックス */}
        <div className="bg-zinc-900/80 backdrop-blur-sm rounded-2xl border border-zinc-800 overflow-hidden shadow-2xl">
          <ScrollArea className="h-80 p-5">
            <AnimatePresence initial={false}>
              {messages.length === 0 && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center text-zinc-600 text-sm mt-10"
                >
                  Curious about services, pricing, or my story? Ask away 👋
                </motion.p>
              )}
              {messages.map((m) => (
                <motion.div
                  key={m.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChatBubble message={m} />
                </motion.div>
              ))}
            </AnimatePresence>
            {isLoading && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex justify-start mb-3"
              >
                <div className="bg-zinc-800 rounded-2xl rounded-bl-sm px-4 py-3 flex gap-1 items-center">
                  {[0, 1, 2].map((i) => (
                    <motion.span
                      key={i}
                      className="w-1.5 h-1.5 bg-zinc-500 rounded-full"
                      animate={{ y: [0, -4, 0] }}
                      transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.15 }}
                    />
                  ))}
                </div>
              </motion.div>
            )}
            <div ref={bottomRef} />
          </ScrollArea>

          {/* 入力エリア */}
          <div className="border-t border-zinc-800 p-4">
            {isLimited ? (
              <p className="text-center text-sm text-zinc-400 py-2">
                You&apos;ve reached today&apos;s limit! Feel free to{" "}
                <a
                  href="mailto:ryoma.t.engineer@gmail.com"
                  className="text-zinc-300 underline underline-offset-2 hover:text-white"
                >
                  contact me directly
                </a>
                .
              </p>
            ) : (
              <ChatInput
                value={input}
                onChange={setInput}
                onSend={handleSend}
                isLoading={isLoading}
              />
            )}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
