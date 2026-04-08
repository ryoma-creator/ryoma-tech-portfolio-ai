"use client";

import { useState, useRef, useEffect } from "react";
import { Globe } from "lucide-react";
import { locales } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";
import { useLanguage } from "@/contexts/LanguageContext";

// 右上固定の言語切り替えドロップダウン
export function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // ドロップダウン外クリックで閉じる
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div ref={ref} className="fixed top-4 right-4 z-50">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-1.5 rounded-full border border-zinc-700/60 bg-zinc-900/80 px-3 py-1.5 text-xs text-zinc-400 backdrop-blur-sm transition-colors hover:border-zinc-600 hover:text-zinc-200"
        aria-label="Change language"
      >
        <Globe className="h-3.5 w-3.5" />
        <span>{locale.toUpperCase()}</span>
      </button>

      {open && (
        <div className="absolute right-0 mt-1.5 w-36 overflow-hidden rounded-xl border border-zinc-700/60 bg-zinc-900/95 shadow-xl backdrop-blur-sm">
          {(Object.entries(locales) as [Locale, string][]).map(([code, label]) => (
            <button
              key={code}
              onClick={() => { setLocale(code); setOpen(false); }}
              className={`w-full px-4 py-2 text-left text-xs transition-colors hover:bg-zinc-800 ${
                locale === code ? "text-zinc-100" : "text-zinc-400"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
