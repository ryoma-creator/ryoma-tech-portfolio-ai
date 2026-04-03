"use client";

import { useState, useCallback } from "react";
import type { ChatUsage } from "@/types";

// LocalStorageのキーと1日の上限
const STORAGE_KEY = "chat_usage";
const DAILY_LIMIT = 10;

// 今日の日付を "YYYY-MM-DD" 形式で返す
function getTodayString(): string {
  return new Date().toISOString().split("T")[0];
}

// LocalStorageから使用状況を読み込む（SSR安全）
function loadUsage(): ChatUsage {
  if (typeof window === "undefined") {
    return { count: 0, date: getTodayString() };
  }
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return { count: 0, date: getTodayString() };
    const parsed: ChatUsage = JSON.parse(stored);
    // 日付が変わっていたらリセット
    if (parsed.date !== getTodayString()) {
      return { count: 0, date: getTodayString() };
    }
    return parsed;
  } catch {
    return { count: 0, date: getTodayString() };
  }
}

export function useChatLimit() {
  // lazyイニシャライザでSSR安全にLocalStorageを読む
  const [usage, setUsage] = useState<ChatUsage>(loadUsage);

  const remaining = Math.max(0, DAILY_LIMIT - usage.count);
  const isLimited = remaining === 0;

  // 質問回数をインクリメントしてLocalStorageに保存
  const increment = useCallback(() => {
    setUsage((prev) => {
      const today = getTodayString();
      const base = prev.date === today ? prev : { count: 0, date: today };
      const next: ChatUsage = { count: base.count + 1, date: today };
      if (typeof window !== "undefined") {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      }
      return next;
    });
  }, []);

  return { remaining, isLimited, increment, limit: DAILY_LIMIT };
}
