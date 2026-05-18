"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";
import { ChatBubble } from "@/components/ChatMessage";
import { ChatInput } from "@/components/ChatInput";
import { useChatLimit } from "@/hooks/useChatLimit";
import type { ChatMessage, ChatApiResponse, ChatApiError } from "@/types";
import { useLanguage } from "@/contexts/LanguageContext";

const SplineChar = dynamic(() => import("@splinetool/react-spline"), {
  ssr: false,
  loading: () => null,
});

const CHAR_SCENE = "https://prod.spline.design/lfPG9Y4yrRKXIodi/scene.splinecode";

export function ChatSection() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { remaining, isLimited, increment } = useChatLimit();
  const { t } = useLanguage();
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

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
    <section id="chat" className="py-16 px-4">
      {/* ヘッダー */}
      <motion.div
        className="text-center mb-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">
          {t.askMeAnything}
        </h2>
        <p className="text-zinc-500 text-sm">
          {remaining === 1
            ? t.questionsLeft1
            : t.questionsLeftN.replace("{n}", String(remaining))}
        </p>
      </motion.div>

      {/* キャラクター + チャット 横並び */}
      <motion.div
        className="max-w-5xl mx-auto flex flex-col lg:flex-row items-stretch gap-0"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.1 }}
      >
        {/* ── 左: AIキャラクター ── */}
        <div className="hidden lg:flex flex-col items-center gap-3 lg:w-[42%]">
          <motion.div
            className="relative w-full"
            style={{ height: "440px", clipPath: "inset(0 0 120px 0 round 16px)" }}
            animate={
              isLoading
                ? {
                    boxShadow: [
                      "0 0 0px rgba(217,164,65,0)",
                      "0 0 32px rgba(217,164,65,0.5)",
                      "0 0 0px rgba(217,164,65,0)",
                    ],
                  }
                : { boxShadow: "0 0 0px rgba(217,164,65,0)" }
            }
            transition={{ duration: 1.4, repeat: isLoading ? Infinity : 0 }}
          >
            <SplineChar
              scene={CHAR_SCENE}
              style={{ width: "100%", height: "100%" }}
            />

            <AnimatePresence>
              {isLoading && (
                <motion.div
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 bg-black/60 px-3 py-2 rounded-full"
                >
                  {[0, 1, 2].map((i) => (
                    <motion.span
                      key={i}
                      className="w-1.5 h-1.5 rounded-full bg-[#d9a441]"
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 0.5, repeat: Infinity, delay: i * 0.15 }}
                    />
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          <p className="text-xs text-zinc-500 tracking-widest uppercase">
            Ryoma · AI
          </p>
        </div>

        {/* ── 右: 吹き出しチャット ── */}
        <div className="relative flex-1 flex flex-col">
          {/* 吹き出しの尻尾（デスクトップのみ） */}
          <div
            className="hidden lg:block absolute top-10 left-0 -translate-x-full"
            aria-hidden
          >
            <div
              style={{
                width: 0, height: 0,
                borderTop: "9px solid transparent",
                borderBottom: "9px solid transparent",
                borderRight: "15px solid rgba(63,63,70,0.9)",
              }}
            />
          </div>
          <div
            className="hidden lg:block absolute top-10 left-0"
            style={{ transform: "translateX(-12px)" }}
            aria-hidden
          >
            <div
              style={{
                width: 0, height: 0,
                borderTop: "8px solid transparent",
                borderBottom: "8px solid transparent",
                borderRight: "14px solid #18181b",
              }}
            />
          </div>

          {/* チャットボックス */}
          <div className="flex-1 flex flex-col bg-zinc-900/90 backdrop-blur-sm rounded-2xl border border-zinc-800 overflow-hidden shadow-2xl">
            <div ref={scrollRef} className="h-[360px] p-5 overflow-y-auto">
              <AnimatePresence initial={false}>
                {messages.length === 0 && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center text-zinc-600 text-sm mt-12"
                  >
                    {t.chatEmpty}
                  </motion.p>
                )}
                {messages.map((m) => (
                  <motion.div
                    key={m.id}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.25 }}
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
            </div>

            {/* 入力エリア */}
            <div className="border-t border-zinc-800 p-4">
              {isLimited ? (
                <p className="text-center text-sm text-zinc-400 py-2">
                  {t.limitReached}{" "}
                  <a
                    href="mailto:ryoma.t.engineer@gmail.com"
                    className="text-zinc-300 underline underline-offset-2 hover:text-white"
                  >
                    {t.contactDirectly}
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
        </div>
      </motion.div>
    </section>
  );
}
